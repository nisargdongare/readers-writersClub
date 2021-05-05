import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import IconSearch from '@material-ui/icons/Search';
import logo from './images/logo.svg';
import readerImage from './images/rw.png';
import { Modal } from '@material-ui/core';
import { useState } from 'react';

const App = () => {
  const [searchPopup, setSearchPopup] = useState(false);
  const [addPopup, setAddPopup] = useState(false);
  return (
 <div>
      <Container>
        <div style={{ marginLeft: '10%' }}>
          <img style={{ margin: '5%', height: '100px' }} src={logo} alt="Logo" />
        </div>
        <div style={{ marginRight: '20%', alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>
          <Button style={{ fontSize: '20px', marginRight: '50px' }}>Home</Button>
          <Button style={{ fontSize: '20px', marginRight: '50px' }} onClick = {()=>setAddPopup(true)} >Add new Device</Button>
          <Button variant="contained" onClick = {()=>setSearchPopup(true)} startIcon={<IconSearch />} style={{ borderRadius: '2rem', fontSize: '20px', backgroundColor: '#bfa060', color: 'white', borderWidth: '5px' }}>Search </Button>
        </div>
      </Container>
      <Container>
        <LeftBox>
          <text style={{fontSize:'60px', fontWeight: 'bold', color:'#bfa060', marginBottom:'5%'}} >Readers & Writers Club </text>
          <text style={{fontSize:'30px', fontWeight: 'bold',marginBottom:'2%'}} >Todays Reader is tomorrow's Writer</text>
          <text style={{fontSize:'25px',marginBottom:'5%', justifySelf:'center'}} >Reading and writing are among the most critical skill cultivated in schools. 
          However, there isn’t enough emphasis on analysing the information they read and transferring the same processed information through thoughtful writing. 
          This course intends to introduce children to the concept of critical thinking while providing them strategies to help them think, read, take notes and 
          write critically. </text>
          <Button variant="contained" onClick={()=>window.open("https://readersandwritersclub.in/")} style={{ borderRadius: '2rem', fontSize: '20px', backgroundColor: '#bfa060', color: 'white', borderWidth: '5px' }}>Learn More</Button>
        </LeftBox>
        <RightBox>
          <img style={{ margin: '1%', width:'80%'}} src={readerImage} alt="Logo" />
        </RightBox>
      </Container>
      <Modal open={searchPopup} onClose={()=>setSearchPopup(false)}>
        <PopupContainer>
          <text>Search Popup</text>
          <Button onClick = {()=>setSearchPopup(false)} >Exit</Button>
        </PopupContainer>
      </Modal>
      <Modal open={addPopup} onClose={()=>setAddPopup(false)}>
        <PopupContainer>
          <text> Add popup</text>
          <Button onClick = {()=>setAddPopup(false)} >Exit</Button>
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
  margin-left:10%;
  margin-right:10%;
  height: 70%;
  background-color: white;
  border-radius: 2rem;
 `;

export default App;
