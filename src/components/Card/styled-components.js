import styled from "styled-components";
import { Card } from "semantic-ui-react";

const StyledCard = styled(Card)`
  height: auto;
  margin: 1%;
  padding: 15px;
  width: 100%;
  .ui.card,
  .ui.cards > .card {
    width: ${(props) => props.width && props.width};
  }
`;
const StyledImage = styled.img`
  height: 25vh;
  object-fit: contain;
  padding:10px
`;

export { StyledCard, StyledImage };
