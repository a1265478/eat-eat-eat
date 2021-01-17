import { React, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { Typography } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShoppingCarContainer from './ShoppingCarContainer';
import { useSelector } from "react-redux";


function ShoppingCar() {
    console.log('shopping car')
    const shoppingCarStore = useSelector(state => state.shoppingCarStore)
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const buttonStyle = {
        background: '#474747',
        color: '#FFFFFF',
        borderRadius: '50%',
        border: 'none',
        width: '60px',
        height: '60px',
        position: 'fixed',
        right: 10,
        bottom: 75,
    };

    const itemCount = {
        display: 'block',
        position: 'absolute',
        right: '5px',
        top: '0px',
        fontSize: '14px',
        textAlign: 'center',
        background: '#CB5A4B',
        padding: '0px 5px 0px 5px',
        margin: '0 auto',
        borderRadius: '50%'
    }

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

    const totalBarStyle = {
        background: '#CAEEF8',
        padding: '5px',
        borderRadius: '5px',
        marginTop: '20px'
    }




    const chooseItemTotalCount = (
        <span style={{ color: '#047BFD', fontWeight: 'bold' }}>{shoppingCarStore.totalCount}</span>
    )

    const moneyTotalCount = (
        <span style={{ color: '#CB5A4B', fontWeight: 'bold' }}>${shoppingCarStore.totalPrice}</span>
    )

    const totalCount = 0


    return (
        <div>
            <Button variant="outlined" style={buttonStyle} onClick={handleClickOpen}>
                <ShoppingCartIcon fontSize="large" />
                <div style={itemCount}>{shoppingCarStore.totalCount}</div>
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
                    <Typography variant='h6' align='center'>訂購明細</Typography>
                    <Typography align='center' style={{ marginBottom: '10px' }}>目前選購 {chooseItemTotalCount} 項商品</Typography>
                    <ShoppingCarContainer />
                    <Typography align='center' style={totalBarStyle}>總計 {shoppingCarStore.totalCount} 項/共<span style={{ color: '#CB5A4B', fontWeight: 'bold' }}>${shoppingCarStore.totalPrice}</span></Typography>
                </DialogContent>
                <DialogActions style={{
                    justifyContent: 'center',
                    marginBottom: '10px',
                }}>
                    <Button onClick={handleClose} color="primary" autoFocus style={cancelButtobStyle}>
                        回目錄
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus style={confirmButtobStyle}>
                        確認訂單
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    )
}

export default ShoppingCar
