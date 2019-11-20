import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles} from '@material-ui/core/styles';




const StandardTextField = (props) =>{
        const useStyles = makeStyles({
            textroot: {
                width:'100%',
                margin:'auto',
            },
            input:{
                 backgroundColor:'white',
                fontWeight:"normal",
                fontFamily:'Open Sans',
                fontSize:14,
            },
            root: {
                borderRadius:40,

                '& label.Mui-focused': {

                },
                '& .MuiInput-underline:after': {

                },
                '& .MuiOutlinedInput-root': {

                    '& input':{
                        borderRadius:4,
                        paddingTop:12,
                        paddingBottom:12,
                        paddingLeft:12,
                        backgroundColor:'white'
                    },
                    '& fieldset': {
                        borderRadius:4,

                    },
                    '&:hover fieldset': {

                    },
                    '&.Mui-focused fieldset': {

                    },
                },
            },

        });


        const classes = useStyles();
        return(
            <div style={{width:'100%'}}>
                <TextField
                    {...props}
                    variant={'outlined'}
                    InputProps={{classes:{root:classes.input}}}
                    classes={{root:classes.root}}
                    className={classes.textroot}
                />
            </div>

    )}


export default StandardTextField
