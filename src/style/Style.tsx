import styled from "styled-components";

export const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

export const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CoinsList = styled.ul``;

export const Coin = styled.li`
  display: flex;
  align-items: center;
  padding: 20px;
  margin-bottom: 10px;
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  border-radius: 15px;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

export const Loader = styled.span`
  text-align: center;
  display: block;
`;

export const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;
