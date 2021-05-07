import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import IconSearch from '@material-ui/icons/Search';
import IconSave from '@material-ui/icons/Save';
import IconEdit from '@material-ui/icons/Edit';
import IconDelete from '@material-ui/icons/Delete';
import logo from './images/logo.svg';
import readerImage from './images/rw.png';
import { Modal } from '@material-ui/core';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';

const App = () => {
  const [searchPopup, setSearchPopup] = useState(false);
  const [studentState, setStudentState] = useState(0);
  const [studentId, setStudentId] = useState("0");
  const [deviceId, setDeviceId] = useState("B298WrD");
  const [message, setMessage] = useState("");
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
          <text style={{ fontSize: '60px', fontWeight: 'bold', color: '#bfa060' }} >Readers & Writers </text>
          <text style={{ fontSize: '60px', fontWeight: 'bold', color: '#bfa060', marginBottom: '5%' }} >Club </text>
          <text style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '2%' }} >Todays Reader is tomorrow's Writer</text>
          <text style={{ fontSize: '25px', marginBottom: '5%', justifySelf: 'center' }} >Reading and writing are among the most critical skill cultivated in schools.
          However, there isn’t enough emphasis on analysing the information they read and transferring the same processed information through thoughtful writing.
          This course intends to introduce children to the concept of critical thinking while providing them strategies to help them think, read, take notes and
          write critically. </text>
          <Button variant="contained" autoCapitalize="none" onClick={() => window.open("https://readersandwritersclub.in/")} style={{ textTransform: 'none', borderRadius: '2rem', fontSize: '20px', backgroundColor: '#bfa060', color: 'white', borderWidth: '5px', }}>Learn More</Button>
        </LeftBox>
        <RightBox>
          <img style={{ margin: '1%', width: '80%' }} src={readerImage} alt="Logo" />
        </RightBox>
      </Container>
      <Modal open={searchPopup} onClose={() =>{setSearchPopup(false); setStudentState(0); setMessage("");}}>
        <PopupContainer>
          <text style={{ marginBottom: '2%', fontSize: '2.5rem', padding: '10px', color: '#bfa060', fontWeight: 'bolder' }}>Student-Device Dashboard</text>
          <text style={{ fontSize: '1.5rem', padding: '10px', color: 'green', fontWeight: 'bolder' }}>{message}</text>
          {studentState===0?<TextField id="outlined-basic" onChange = {(txt)=>{setStudentId(txt.target.value)}} label="Enter Student Id ...." variant="outlined" />:[]}
          {studentState===0?<Button variant="contained" onClick={() => {setStudentState(1); setMessage("Student Id is new. Kindly Enter Device Id to create one."); }} startIcon={<IconSearch />} style={{ borderRadius: '5rem', width: ' 20%', marginTop: '1%', fontSize: '20px', backgroundColor: '#bfa060', color: 'white', textTransform: 'none' }}>Search</Button>:[]}
          {studentState===0?<Button variant="contained" onClick={() => {setStudentState(2); setMessage("Student Id already Exists."); }} startIcon={<IconSearch />} style={{ borderRadius: '5rem', width: ' 20%', marginTop: '1%', fontSize: '20px', backgroundColor: '#bfa060', color: 'white', textTransform: 'none' }}>Search</Button>:[]}
          {studentState!==0?<div style = {{flexDirection: 'row'}}>
          <text style={{ marginTop: '2%', fontSize: '1.5rem', padding: '10px', color: 'black', fontWeight: 'bolder' }}>Student Id :</text>
          <text style={{ fontSize: '1.5rem', padding: '10px', color: 'grey', fontWeight: 'bolder' }}>{studentId}</text>
          </div>:[]}
          {studentState!==0?<div style = {{flexDirection: 'row'}}>
          <text style={{ marginTop: '2%', fontSize: '1.5rem', padding: '10px', color: 'black', fontWeight: 'bolder' }}>Student Name :</text>
          <text style={{ fontSize: '1.5rem', padding: '10px', color: 'grey', fontWeight: 'bolder' }}>Jija Nisarg Dongare</text>
          </div>:[]}
          {studentState===2?<div style = {{flexDirection: 'row'}}>
          <text style={{ marginTop: '2%', fontSize: '1.5rem', padding: '10px', color: 'black', fontWeight: 'bolder' }}>Student already Registered with Device :</text>
          <text style={{ fontSize: '1.5rem', padding: '10px', color: 'red', fontWeight: 'bolder' }}>{deviceId}</text>
          </div>:[]}
          {studentState===2?<div style = {{position:'relative', paddingLeft: '70%'}}>
          <Button variant="contained" onClick={() =>{setSearchPopup(false); setStudentState(0);setMessage("");}} startIcon={<IconDelete />} style={{marginLeft:'1rem', fontSize: '20px', backgroundColor: 'red', color: 'black', textTransform: 'none' }}>Delete Setting</Button>
          <Button variant="contained" onClick={() => {setStudentState(1); setMessage("Kindly Enter New Device Id :") }} startIcon={<IconEdit />} style={{marginLeft:'1rem', fontSize: '20px', backgroundColor: 'grey', color: 'black', textTransform: 'none' }}>Change Device</Button>
          </div>:[]}
          {studentState===1?<TextField id="outlined-basic" onChange = {(txt)=>{setDeviceId(txt.target.value)}} label="Enter Device Id ...." variant="outlined" style={{ marginTop: '1%' }} />:[]}
          {studentState===1?<Button variant="contained" onClick={() =>{setSearchPopup(false); setStudentState(0); setMessage("");}} startIcon={<IconSave />} style={{ borderRadius: '5rem', width: ' 20%', marginTop: '1%', fontSize: '20px', backgroundColor: 'green', color: 'white', textTransform: 'none' }}>Save New Settings</Button>:[]}
        </PopupContainer>
      </Modal>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items:center;
  background-color: transparent;
   `;

const LeftBox = styled.div`
  flex-direction: column;
  margin : 5%;
  display: flex;
  justify-content: center;
  align-items:center;
  background-color: transparent;
  width: 40%
`;

const RightBox = styled.div`
  margin : 1%;
  margin-top: 3%;
  margin-left: 5%;
  display: flex;
  align-items:center;
  background-color: transparent;
  width: 60%
 `;

const PopupContainer = styled.div`
  margin : 5%;
  height: 60%;
  background-color: white;
  border-radius: 2rem;
  padding: 3%;
  display: flex;
  flex-direction: column;
 `;

const SearchBox = styled.div`
 background-color: #bfa060;
 border-radius: 1rem;
 padding: 0.6%;
 flex-direction: row;
 justify-content: center;
 align-items: center;
 `;


export default App;
