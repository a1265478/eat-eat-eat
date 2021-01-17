import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import GroupIcon from '@material-ui/icons/Group';
import { Typography, Box } from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';

function FindGroup() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const buttonStyle = {
        background: '#007BFF',
        color: '#FFFFFF',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        border: '2px #007BFF solid',
        position: 'fixed',
        right: 10,
        bottom: 150,

    };

    const confirmButtobStyle = {
        background: '#047BFE',
        color: '#FFFFFF',
        padding: '0px 30px 0px 30px',
        borderRadius: '25px',
        border: 'none',
        fontSize: '18px',

    }

    const cancelButtobStyle = {
        background: '#979797',
        color: '#FFFFFF',
        padding: '0px 30px 0px 30px',
        borderRadius: '25px',
        border: 'none',
        fontSize: '18px',

    }



    const content = "您即將開啟「一起點」團訂功能，將餐點連結分享給好友們吧！"


    return (
        <div>
            <Button variant="outlined" style={buttonStyle} onClick={handleClickOpen}>
                <Box>
                    <GroupIcon fontSize="large" />
                    <Typography style={{ marginTop: '-13px' }}>揪團</Typography>
                </Box>

            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth={true}
                maxWidth={'sm'}
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" >
                        <Box textAlign='center'>
                            <WarningIcon fontSize='large' style={{ color: '#F5C242', width: '60px', height: '60px' }} />
                        </Box>
                        <Typography align='center' style={{ fontWeight: 'bold', color: '#000000' }}>{content}</Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions style={{
                    justifyContent: 'center',
                    marginBottom: '10px'
                }}>
                    <Button onClick={handleClose} color="primary" autoFocus style={cancelButtobStyle}>
                        返回
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus style={confirmButtobStyle}>
                        確定
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    )
}

export default FindGroup
