import React from "react";
import PropTypes from "prop-types";
import { Grid } from "semantic-ui-react";

const CardGrid = ({ children }) =>
  <Grid centered relaxed columns={4} className='card-grid'>
    {children}
  </Grid>

export default CardGrid;

CardGrid.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({})),
};
