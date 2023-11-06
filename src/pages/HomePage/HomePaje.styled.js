import { styled } from 'styled-components';

export const ButtonHome = styled.button`
  border: 3px solid #3a7999;
  border-radius: 20px;
  background-color: #fffcfc;
  cursor: pointer;

  transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  &:hover {
    border: 3px dotted #3a7999;
    color: #3a7999;
    background: rgba(0, 0, 0, 0);
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.3);
  }
`;

export const HomeText = styled.h1`
  text-align: center;
  padding-bottom: 10px;
  color: #3a7999;
`;

export const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 38px 48px;
  height: 50%;
  border-radius: 32px 32px 0 0;
  background-color: #f9f9f9;
`;
