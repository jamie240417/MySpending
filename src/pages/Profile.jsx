
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import {updateProfile} from '../lib/api/auth'


export default function Profile({user, setUser}) {
  const [nickname, setNickname] = useState('');
  const [avatar, setAvatar] = useState('');
  const navigate = useNavigate();

  const handleChange = async () => {
    console.log(nickname);
    console.log(avatar);

    const formData = new FormData();
    formData.append("nickname", nickname);
    formData.append("avatar", avatar);
    const response = await updateProfile(formData);
    if (response.success){
      setUser({...User, nickname: response.nickname, avatar:response.avatar,});
      navigate("/");
    }
  };


  return (
      <Container>

        <h2 style={{fontSize:"24px"}}>프로필 수정</h2>
        
      <StInput 
      placeholder='닉네임'
       value={nickname}
       type="text"
      onChange={(e) => setNickname(e.target.value)}
      ></StInput>
      <StInput  
      type="file" 
      accept='image/*'
      nChange={(e) => setAvatar(e.target.files[0])}
      ></StInput>
      <Button onClick={handleChange}>프로필 업데이트</Button>
            </Container>
  )
}
const Button = styled.button`
  height: 48px;
  width:  408px;
  border-radius: 8px;
  background-color: #246d68;
  font-size: 16px;
  color: #fff;
  border: none;
  cursor: pointer;
`;
const Container = styled.div`
  background-color: #ffffff;
  max-width: 800px;
  height: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;


const StInput = styled.input`
  padding: 0 24px;
  font-size: 15px;
  height: 48px;
  width: 360px;
  border-radius: 8px;

  border: 1px solid #d1d1d1;
`;
