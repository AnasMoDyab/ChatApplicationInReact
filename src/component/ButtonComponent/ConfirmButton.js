import {Button, withStyles} from "@material-ui/core";

const ConfirmedButton = withStyles({
    root: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 20px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },

})(Button);

export default ConfirmedButton;