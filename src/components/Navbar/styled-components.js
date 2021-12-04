import styled from "styled-components";
import { Header } from "semantic-ui-react";

const StyledNavbar = styled(Header)`
  background: var(--ming);
  color: var(--seashell);
  padding: 1rem;
  h4{
      margin-top: 1rem;
  }
`;

export { StyledNavbar };
