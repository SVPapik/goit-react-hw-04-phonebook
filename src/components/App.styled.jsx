import styled from 'styled-components';

export const Container = styled.div`
  width: 280px;
  margin: 16px auto;
  padding: 16px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: rgba(88, 73, 209, 0.45) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

export const Title = styled.h1`
  margin: 8px 0;
  text-align: center;
  color: rgb(88, 73, 209);
  filter: drop-shadow(1px 2px 1px white);
`;

export const TitleSecondary = styled.h2`
  margin: 8px 0;
  text-align: center;
  color: rgb(88, 73, 209);
  filter: drop-shadow(1px 1px 1px white);
`;
