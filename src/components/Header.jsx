import { Link, Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getUserInfo } from '../lib/api/auth';
import {useEffect} from 'react';


const Header = ({user, setUser}) => {
  const navigate = useNavigate();

  useEffect(()=>{
    getUserInfo().then((res)=>{
      if(res) {
        setUser({
          userId: res.id,
          nickname: res.nickname,
          avatar: res.avatar,
        });
      } else {
        setUser(null);
        navigate("/login");
        localStorage.clear();
      }
    });
  }, []);

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
    localStorage.clear();
  }

  return (
    <div>    <StHeader>
    <StContents>
      <StLink to="/">
        My
        <StHeading>
          <StStrong>Spending</StStrong>
        </StHeading>
      </StLink>
      <div>
      <button onClick={handleLogout}>로그아웃</button>
      <Link to="/profile">
      <button  to="profile" style={{marginLeft:"5px"}}>프로필
      </button>
      </Link>
      <div>
      {user && (
        <>
        <div src={user.avatar} alt="User Avatar"/>
        <div>{user.nickname}</div>
        </>
      )}
      </div>
      </div>
    </StContents>
    
  </StHeader>
  <Outlet/>
  </div>
  );
};

const StHeader = styled.header`
  height: 118px;
  width: 800px;
  margin: 0 auto;
  background-color: var(--color-base-background);
  position: sticky;
  top: 0;
  z-index: 10;
`;

const StContents = styled.div`
  max-width: var(--width-max);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const StStrong = styled.strong`
  font-weight: 600;
`;

const StLink = styled(Link)`
  color: var(--color-white);
  height: 100%;
  display: flex;
  align-items: center;
  white-space: break-spaces;
  font-size: 22px;
  text-decoration-line: none;
`;

const StHeading = styled.h1`
  font-size: inherit;
  font-weight: 3;
  `;

export default Header;