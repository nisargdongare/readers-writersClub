import { useState } from 'react';
import styled from 'styled-components';
import { Modal, TextField, Button } from '@material-ui/core';
import { Search as IconSearch, Save as IconSave, Edit as IconEdit, Delete as IconDelete } from '@material-ui/icons';
import logo from './images/logo.svg';
import readerImage from './images/rw3.svg';
import axios from 'axios';

const App = () => {
  const [searchPopup, setSearchPopup] = useState(false);
  const [studentState, setStudentState] = useState(0);
  const [studentId, setStudentId] = useState("");
  const [deviceId, setDeviceId] = useState("B298WrD");
  const [message, setMessage] = useState("");
  const url = "http://localhost:3000/api/device/";

  const getDeviceSearch = async () => {
    if (studentId === "") { alert("Kindly enter valid \"student\" Id to search"); return; }
    let resp;
    await axios.get(url + studentId)
      .then(response => {
        console.log(response.data);
        resp = response.data;
      }).catch((error) => {
        alert(error);
      });
    // ???????? till yet

    let student = resp[0].studentId;
    if (student !== undefined) { console.log(student) }
    else { console.log("it failed") }
    // setStudentState(2); setMessage("Student Id is new. Kindly Enter Device Id to create one.");
  }
  return (
    <div>
      <Container>
        <div style={{ marginLeft: '10%' }}>
          <img style={{ margin: '5%', height: '100px' }} src={logo} alt="Logo" />
        </div>
        <div style={{ marginRight: '20%', alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>
          <Button style={{ fontSize: '20px', marginRight: '50px' }}>Home</Button>
          <Button variant="contained" onClick={() => setSearchPopup(true)} startIcon={<IconSearch />} style={{ borderRadius: '2rem', fontSize: '20px', backgroundColor: '#bfa060', color: 'white', borderWidth: '5px', textTransform: 'none' }}>Student-Device DashBoard</Button>
        </div>
      </Container>
      <Container>
        <LeftBox>
          <TextTitle>Readers & Writers </TextTitle>
          <TextTitle style={{ marginBottom: '5%' }} >Club </TextTitle>
          <text style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '2%' }} >Todays Reader is tomorrow's Writer</text>
          <text style={{ fontSize: '25px', marginBottom: '5%', justifySelf: 'center' }} >Reading and writing are among the most critical skill cultivated in schools.
          However, there isn’t enough emphasis on analysing the information they read and transferring the same processed information through thoughtful writing.
          This course intends to introduce children to the concept of critical thinking while providing them strategies to help them think, read, take notes and
          write critically. </text>
          <Button variant="contained" autoCapitalize="none" onClick={() => window.open("https://readersandwritersclub.in/")} style={{ textTransform: 'none', borderRadius: '2rem', fontSize: '20px', backgroundColor: '#bfa060', color: 'white', borderWidth: '5px', }}>Learn More</Button>
        </LeftBox>
        <RightBox>  <img style={{ margin: '1%', width: '80%' }} src={readerImage} alt="Logo" /> </RightBox>
      </Container>
      <Modal open={searchPopup} onClose={() => { setSearchPopup(false); setStudentState(0); setMessage(""); }}>
        <PopupContainer>
          <TextKey style={{ color: '#bfa060', fontSize: '2.5rem' }}>Student-Device Dashboard</TextKey>
          <TextValue style={{ color: 'green' }}>{message}</TextValue>
          {studentState === 0 ? <TextField id="outlined-basic" onChange={(txt) => { setStudentId(txt.target.value) }} label="Enter Student Id ...." variant="outlined" /> : []}
          {studentState === 0 ? <Button variant="contained" onClick={getDeviceSearch} startIcon={<IconSearch />} style={{ borderRadius: '5rem', width: ' 20%', marginTop: '1%', fontSize: '20px', backgroundColor: '#bfa060', color: 'white', textTransform: 'none' }}>Search</Button> : []}
          {studentState !== 0 ? <div>
            <TextKey>Student Id :</TextKey>
            <TextValue>{studentId}</TextValue>
          </div> : []}
          {studentState !== 0 ? <div>
            <TextKey>Student Name :</TextKey>
            <TextValue>Jija Nisarg Dongare</TextValue>
          </div> : []}
          {studentState === 2 ? <div>
            <TextKey>Student already Registered with Device :</TextKey>
            <TextValue style={{ color: 'red' }}>{deviceId}</TextValue>
          </div> : []}
          {studentState === 2 ? <div style={{ position: 'relative', paddingLeft: '60%' }}>
            <Button variant="contained" onClick={() => { setSearchPopup(false); setStudentState(0); setMessage(""); }} startIcon={<IconDelete />} style={{ marginLeft: '1rem', fontSize: '20px', backgroundColor: 'red', color: 'black', textTransform: 'none' }}>Delete Setting</Button>
            <Button variant="contained" onClick={() => { setStudentState(1); setMessage("Kindly Enter New Device Id :") }} startIcon={<IconEdit />} style={{ marginLeft: '1rem', fontSize: '20px', backgroundColor: 'grey', color: 'black', textTransform: 'none' }}>Change Device</Button>
            <Button variant="contained" onClick={() => { setSearchPopup(false); setStudentState(0); setMessage("") }} style={{ marginLeft: '1rem', fontSize: '20px', backgroundColor: 'green', color: 'black', textTransform: 'none' }}>Close</Button>
          </div> : []}
          {studentState === 1 ? <TextField id="outlined-basic" onChange={(txt) => { setDeviceId(txt.target.value) }} label="Enter Device Id ...." variant="outlined" style={{ marginTop: '1%' }} /> : []}
          {studentState === 1 ? <Button variant="contained" onClick={() => { setSearchPopup(false); setStudentState(0); setMessage(""); }} startIcon={<IconSave />} style={{ borderRadius: '5rem', width: ' 20%', marginTop: '1%', fontSize: '20px', backgroundColor: 'green', color: 'white', textTransform: 'none' }}>Save New Settings</Button> : []}
        </PopupContainer>
      </Modal>
    </div>
  );
}

const Container = styled.div`display: flex; flex-direction: row; justify-content: space-between; align-items:center; background-color: transparent`;
const LeftBox = styled.div`flex-direction: column; margin : 5%; display: flex; justify-content: center; align-items:center; background-color: transparent; width: 40%`;
const RightBox = styled.div`margin : 1%; margin-top: 3%; margin-left: 5%; display: flex; align-items:center; background-color: transparent; width: 60%`;
const PopupContainer = styled.div`margin : 5%; height: 60%; background-color: white; border-radius: 2rem; padding: 3%; display: flex; flex-direction: column`;
const TextTitle = styled.text`font-size: 60px; font-weight: bold; color: #bfa060 `;
const TextKey = styled.text`margin-top: 2%; font-size: 1.5rem; padding: 10px; color: black; font-weight: bolder`;
const TextValue = styled.text`font-size: 1.5rem; padding: 10px; color: grey; font-weight: bolder;`;

export default App;
