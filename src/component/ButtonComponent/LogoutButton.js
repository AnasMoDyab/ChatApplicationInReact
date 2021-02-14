import {Button, withStyles} from "@material-ui/core";

const LogoutButton = withStyles({
    root: {
        background: 'linear-gradient(45deg, #3AACCA 30%,#3ACAC9 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '10px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },



})(Button);

export default LogoutButton;