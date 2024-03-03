import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 700px;
  width: 100%;
  max-width: 1000px;
  background-color: #E69A8DFF;
  margin: 30px auto;
  box-model: border-box;
`;

export const NavContainer = styled.ul`
    padding-left: 0;
    width: 100%;
    max-width: 1000px;
    height: auto;
    display: flex;
    justify-content: space-between;
    background-color: #5F4B8BFF;
    color: #E69A8DFF;
    margin: 0 auto;
`;

export const Navigation = styled.li<{ active: boolean }>`
  flex-grow: 1;
  list-style: none;
  cursor: pointer;
  font-size: 18px;
  padding: 20px;
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 4px;
    background-color: black;
    transform: scaleX(0);
    transition: transform 0.3s ease;
    transform-origin: bottom left;
  }

  ${({ active }) =>
    active &&
    css`
      background-color: #E69A8DFF;
      color: #5F4B8BFF;
      &::after {
        transform: scaleX(1); // Scales to full width when active
      }
    `};

//   &:hover::after {
//     transform: scaleX(1);
//   }
`;

export const NavContent = styled.div`
    margin: 20px auto;
`;