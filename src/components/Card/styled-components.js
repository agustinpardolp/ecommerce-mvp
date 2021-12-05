import styled from "styled-components";
import { Card } from "semantic-ui-react";

const StyledCard = styled(Card)`
  background: ${(props) => `url(/images/${props.img}) no-repeat center`};
  background-size: ${(props) =>
    props.backgroundSize ? props.backgroundSize : "contain"};
  height: auto;
  margin: 1%;
  padding: 15px;
  position: relative;
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
