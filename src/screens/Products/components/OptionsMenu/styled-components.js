import styled from "styled-components";
import { Menu } from "semantic-ui-react";
import { DEVICES_MAX_WIDTH } from "../../../../constants";

const StyledOptionsMenu = styled(Menu)`
  @media ${DEVICES_MAX_WIDTH.tablet} {
    h3 {
      justify-content: center;
    }
  }
`;
const StyledMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  @media ${DEVICES_MAX_WIDTH.tablet} {
    display: grid;
    justify-content: center;
    width: 100%;
    padding: 0 20px;

   
        flex-direction: row-reverse;
    
  }
`;
export { StyledOptionsMenu, StyledMenu };
