import styled from 'styled-components';

export const Item = styled.li`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px;
  border-bottom: 1px solid rgb(88, 73, 209);
`;

export const Contact = styled.p`
  font-size: 14px;
  font-weight: 500;
  filter: drop-shadow(2px 1px 1px white);
`;

export const BtnDelete = styled.button`
  align-items: flex-end;
  width: 60px;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 4px;
  filter: drop-shadow(1px 2px 1px black);
  box-shadow: rgba(255, 0, 0, 0.45) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  &:hover,
  :focus {
    transform: scale(1.1);
    transition: transform linear 250ms;
  }
`;
