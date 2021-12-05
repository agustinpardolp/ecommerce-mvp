import styled from "styled-components";
import { Header } from "semantic-ui-react";

const StyledNavbar = styled(Header)`
  h4,
  h2 {
    margin-top: 1rem;
    color: var(--seashell);
  }
`;

const StyledTranslations = styled.div`
  align-items: center;
  display: flex;
  i {
    cursor: pointer;
  }
`;
const StyledNavbarContainer = styled.div`
  background: var(--ming);
  color: var(--seashell);
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;
export { StyledNavbar, StyledTranslations, StyledNavbarContainer };
