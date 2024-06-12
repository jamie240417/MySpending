import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Header = () => {
  return (
    <div>    <StHeader>
    <StContents>
      <StLink to="/">
        My
        <StHeading>
          <StStrong>Spending</StStrong>
        </StHeading>
      </StLink>
      <button>프로필</button>
    </StContents>
  </StHeader></div>
  );
};

const StHeader = styled.header`
  height: 118px;
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