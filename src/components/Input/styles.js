import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  margin-bottom: .8rem;
  border-radius: ${({ theme }) => theme.BORDERS.RADIUS};

  > input {
    height: 5.6rem;
    width: 100%;
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    padding: 1.2rem;
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    };
  };

  > svg {
    margin-left: 1.6rem;
  };
`;