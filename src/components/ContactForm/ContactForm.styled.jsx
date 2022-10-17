import styled from 'styled-components';

export const Form = styled.form`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-end;
  border-bottom: 1px solid rgb(88, 73, 209);
  border-radius: 18px;
`;

export const Label = styled.label`
  font-weight: 600;
`;

export const Input = styled.input`
  padding: 4px;
  display: inline-block;
  margin-left: 16px;
  border-radius: 6px;
  border: none;
  outline: none;
  filter: drop-shadow(1px 2px 1px rgb(88, 73, 209));
  &:hover,
  :focus {
    transform: scale(1.1);
    transition: transform linear 250ms;
    border: 1px solid rgb(88, 73, 209);
  }
`;

export const BtnAdd = styled.button`
  width: 120px;
  align-self: center;
  color: #fff;
  border: none;
  border-radius: 8px;
  filter: drop-shadow(1px 2px 1px black);
  padding: 8px;
  box-shadow: rgba(7, 195, 67, 0.45) 0px -23px 25px 0px inset,
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
