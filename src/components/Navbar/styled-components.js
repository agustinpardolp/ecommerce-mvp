import styled from "styled-components";
import { Header } from "semantic-ui-react";

const StyledNavbar = styled(Header)`
  h4, h2{
      margin-top: 1rem;
      color: var(--seashell)
  }
`;

const StyledTitle = styled.div`
  align-items: center;
  display: flex;
  span {
    color: var(--seashell);
  }
  svg {
    font-size: 24px;
  }
`;
const TranslateContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
  width: 100%;
  ul {
    list-style: none;
    &:hover {
      cursor: pointer;
    }
  }
`;
const StyledNavbarContainer = styled.div`
  background: var(--ming);
  color: var(--seashell);
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;
export { StyledNavbar, StyledTitle, TranslateContainer, StyledNavbarContainer };
