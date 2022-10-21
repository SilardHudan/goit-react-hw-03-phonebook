import styled from 'styled-components';

const MainContainer = styled.div`
  width: 750px;
  padding: 0 25px;
  margin: 0 auto;
`;

const Container = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default Container;
