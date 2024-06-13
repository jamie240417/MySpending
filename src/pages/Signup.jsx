
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { register } from '../lib/api/auth';


export const Signup = () => {
const[id, setId] = useState("");
const[password, setPassword] = useState("");
const[nickname, setNickname] = useState("");
const navigate = useNavigate();

const handleRegister = async() => {
  //유효성검사코드

  //API 호출
  const response = await register({
    id: id,
    password: password,
    nickname: nickname,
  });
  if(response) {
    alert("회원가입이 완료 되었습니다");
    navigate("/login");
  }
};

  return (
      <Container>

        <h2 style={{fontSize:"24px"}}>회원가입하기</h2>
        <p>서비스 이용을 위해 로그인해주세요</p>
      <StInput 
       placeholder='아이디'
       value={id}
       type="text"
      onChange={(e) => setId(e.target.value)}
      ></StInput>
      <StInput 
      placeholder='비밀번호'
      value={password}
      type='password'
      onChange={(e) => setPassword(e.target.value)}
      ></StInput>
      <StInput 
      placeholder='닉네임'
      value={nickname}
      type='text'
      onChange={(e) => setNickname(e.target.value)}
      ></StInput>
      <Button onClick={handleRegister}>가입하기</Button>
      <StJoinFooter>
      <StFooterText>
              기존 계정이 있으신가요?
            </StFooterText>
            <StJoinButton to="/login">로그인하기</StJoinButton>
            </StJoinFooter>

            </Container>
  );
};
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
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
const StFooterText = styled.div`
  font-size: 14px;
`;

const StJoinFooter = styled.div`
  width: 406px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;

const StJoinButton = styled(Link)`
  background: none;
  border: none;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
`;


const StInput = styled.input`
  padding: 0 24px;
  font-size: 15px;
  height: 48px;
  width: 360px;
  border-radius: 8px;
  border: 1px solid #ffffff;
`;
