import styled from "styled-components";

export const SwitchWrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0px auto;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

export const Slider = styled.span<{ round: boolean }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #cccccc;
  transition: .3s;
  border-radius: ${props => props.round ? "34px" : "0"};

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }

  ${Switch} input:checked + & {
    background-color: #234567;
  }

  ${Switch} input:focus + & {
    box-shadow: 0 0 1px #564311;
  }

  ${Switch} input:checked + &:before {
    transform: translateX(26px);
  }
`;
