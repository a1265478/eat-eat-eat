import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


function Publish() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const buttonStyle = {
        'background': '#FFFFFF',
        'margin': '5px',
        'borderRadius': '25px',
        'border': 'none',
        'fontSize': '16px'
    };

    const confirmButtobStyle = {
        background: '#047BFE',
        color: '#FFFFFF',
        padding: '5px 20px 5px 20px',
        borderRadius: '25px',
        border: 'none',
        fontSize: '16px',

    }

    const content = "這是公告"


    return (
        <div>
            <Button variant="outlined" style={buttonStyle} onClick={handleClickOpen}>
                公告
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"公告"}</DialogTitle>
                <DialogContent style={{ width: '500px' }}>
                    <DialogContentText id="alert-dialog-description">
                        {content}
                    </DialogContentText>
                </DialogContent>
                <DialogActions style={{
                    justifyContent: 'center'
                }}>
                    <Button onClick={handleClose} color="primary" autoFocus style={confirmButtobStyle}>
                        確定
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    )
}

export default Publish
