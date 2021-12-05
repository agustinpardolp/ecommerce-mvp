import styled from "styled-components";

const StyledCardContainer = styled.div`
  margin-top: 2rem;
  padding: 10px;
  width: 100%;
  h4 {
    margin-top: 10px;
  }
  span {
      display: flex;
      justify-content: center;
  }
`;
const StyledInfoContainer = styled.div`
  h3 {
    margin-top: 10px;
  }
  span {
    color: var(--emerald);
  }
`;
const StyledNoResults= styled.span`
    height:100vh;
`;
export { StyledCardContainer, StyledInfoContainer, StyledNoResults };
