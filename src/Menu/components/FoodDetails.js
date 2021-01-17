import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { Typography } from '@material-ui/core';
import Numeric from './Numeric';

function FoodDetails() {

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

    const plusButtonStyle = {
        background: '#FFFFFF',
        color: '#000000',
        borderRadius: '25px',
        fontSize: '14px',
        margin: '5px'
    }

    const numControlButtonStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
        background: '#E5E6E5',
        padding: '0px',
        margin: '5px',
        borderRadius: '50px',
        border: 'none'
    }

    const inputStyle = {
        borderRadius: '50px',
    }

    const currentNum = 0


    return (
        <div>
            {/* <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >

                <DialogContent style={{ width: '75%' }}>
                    <DialogContentText id="alert-dialog-description">
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography style={{ color: 'black', fontWeight: 'bold' }} >國王厚牛美式漢堡</Typography>

                            </Grid>
                        </Grid>
                        <Typography style={{ color: 'black', fontWeight: 'bold' }}>$10000</Typography>
                        <hr></hr>
                        <Typography>非烤物</Typography>
                        <Typography style={{ color: 'black', fontWeight: 'bold', margin: '30px 0px 0px 0px' }} >加料區</Typography>
                        <Button variant='outlined' style={plusButtonStyle}>加起司+$10</Button>
                        <Button variant='outlined' style={plusButtonStyle}>加蛋+$10</Button>
                        <Numeric />

                    </DialogContentText>
                </DialogContent>
                <DialogActions style={{
                    justifyContent: 'center'
                }}>
                    <Button onClick={handleClose} color="primary" autoFocus style={cancelButtobStyle}>
                        回目錄
                </Button>
                    <Button onClick={handleClose} color="primary" autoFocus style={confirmButtobStyle}>
                        選好了
                </Button>
                </DialogActions>
            </Dialog> */}
        </div >
    )
}

export default FoodDetails
