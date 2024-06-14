
import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { styled } from 'styled-components';
import { login } from '../lib/api/auth';


export default function Login({ setUser }) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async () => {
    try{
    const { userId, nickname, avator } = await login ({
      id : id, 
      password : password,
    });
    alert (`로그인 되었습니다.`)
    setUser({ userId, nickname, avator});
    navigate('/');
  } catch (error) {
    console.error('로그인 실패:', error);
  }
  };


  return (
      <Container>

        <h2 style={{fontSize:"24px"}}>로그인하기</h2>
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
      <Button onClick={handleLogin}>로그인</Button>
      <StJoinFooter>
      <StFooterText>
              회원이 아니신가요?
            </StFooterText>
            <StJoinButton to="/signup">회원가입하기</StJoinButton>
            </StJoinFooter>

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
