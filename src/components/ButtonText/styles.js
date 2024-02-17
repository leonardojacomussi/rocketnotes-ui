import styled from "styled-components";

export const Container = styled.button`
  width: fit-content;
  height: fit-content;
  background: none;
  color: ${({ theme, isActive }) => isActive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};

  border: none;
  font-size: 1.6rem;
  font-weight: 400;
`;