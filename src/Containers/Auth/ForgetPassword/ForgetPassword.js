import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const ForgetPassword = () => {
    const classes = useStyles();

    function onsubmit () {

    }


    return (
        <Container component="main" maxWidth="xs">

            <div className={classes.paper}>

                <Typography component="h5" variant="h5">
                    Forget Password
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="standard"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Enter Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />

                    <Button
                        type="reset"
                        fullWidth
                        onKeyPress={onsubmit}
                        variant="contained"
                        color="inherit"
                        className={classes.submit}
                    >
                       Submit
                    </Button>

                </form>
            </div>

        </Container>
    );
}


export default ForgetPassword
