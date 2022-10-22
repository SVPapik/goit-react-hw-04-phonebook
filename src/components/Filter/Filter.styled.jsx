import styled from 'styled-components';

export const FilterWrapper = styled.div`
  padding: 16px;
  text-align: center;
  font-weight: 600;
  border: 1px solid rgb(88, 73, 209);
  border-radius: 30px;
`;

export const FilterInput = styled.input`
  padding: 4px;
  margin-top: 8px;
  display: inline-block;
  border-radius: 6px;
  border: none;
  outline: none;
  background-color: #f3e6fc;
  filter: drop-shadow(1px 2px 1px rgb(88, 73, 209));
  &:hover,
  :focus {
    transform: scale(1.1);
    transition: transform linear 250ms;
    border: 1px solid rgb(88, 73, 209);
  }
`;
