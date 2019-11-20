import React from 'react';
import Button from '@material-ui/core/Button';
import getStyle from './style'
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";

const StandardButton = React.forwardRef((props,ref) => {

    const useStyles = makeStyles(theme => ({
          button: getStyle(props.backgroundcolor||{}),
        }));
    const classes = useStyles();
    return(
        <Button  {...props} ref={ref} variant="contained" classes={{root:classes.button}} >
           {props.children}
      </Button>
)})
;
StandardButton.propTypes = {
  backgroundcolor: PropTypes.string.isRequired,
};
export default StandardButton

