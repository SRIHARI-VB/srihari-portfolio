import React from "react";
import styled from "styled-components";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const SwitchButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: ${({ theme }) => theme.primary};
  border: none;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.primaryLight};
  }
`;

const ThemeSwitcher = ({ toggleTheme, theme }) => {
  console.log(toggleTheme);
  return (
    <SwitchButton onClick={toggleTheme}>
      {theme==="dark" ? <DarkModeIcon /> : <LightModeIcon />}
    </SwitchButton>
  );
};

export default ThemeSwitcher;
