import { React, useState } from 'react'
import OrderWay from './components/OrderWay'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import OrderInfo from './components/OrderInfo';
import { Link } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux'
import { setPayway } from '../redux/user/userActions'
import axios from 'axios'
import '../const'
import { DEFAULT_API_URI } from '../const';
function Orders() {
    const dispatch = useDispatch();
    const userStore = useSelector(state => state.userStore)
    const shoppingCarStore = useSelector(state => state.shoppingCarStore)
    const [step, setStep] = useState(1);
    const [open, setOpen] = useState(false)
    const [confirmOpen, setConfirmOpen] = useState(false)
    const style = {
        topbar: {
            width: '100%',
            justifyContent: 'center',
            background: '#f3f3f3',
            alignItems: 'center',
            display: 'block',
            lineHeight: '50px'
        },
        bottomBar: {
            width: '100%',
            justifyContent: 'center',
            background: '#f3f3f3',
            alignItems: 'center',
            display: 'block',
            padding: '10px',
            position: 'fixed',
            bottom: 0,
            marginTop: '10px'
        },
        bottomLeftBtn: {
            background: '#979797',
            color: '#FFFFFF',
            padding: '5px 20px 5px 20px',
            borderRadius: '25px',
            border: 'none',
            fontSize: '16px',
            marginRight: '35px',
            textDecoration: 'none',
            WebkitBorderRadius: '25px'
        },
        bottomRightBtn: {
            minWidth: '100px',
            margin: '0 3px',
            lineHeight: '20px',
            background: '#047BFE',
            color: '#ffffff',
            outline: 'none',
            boxShadow: 'none',
            WebkitBorderRadius: '25px',
            border: '2px solid #047BFE',
            cursor: 'pointer',
            padding: '5px'
        },
        title: {
            textAlign: 'center'
        },
        container: {
            margin: '0 auto',
            width: '100%',
            maxWidth: '768px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        confirmButton: {
            margin: '0 3px',
            lineHeight: '20px',
            background: '#047BFE',
            color: '#ffffff',
            outline: 'none',
            boxShadow: 'none',
            WebkitBorderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            padding: '8px 15px',
            textAlign: 'center',
            textDecoration: 'none'
        },
    }

    function TopBar(props) {
        return (
            <div style={style.topbar}>
                <div style={style.container}>
                    <div style={{ alignItems: 'center', display: 'flex', flexWrap: 'wrap' }}>
                        <div style={{ borderBottom: '3px solid #047BFE', lineHeight: '50px' }}>
                            <span style={{ color: step === 1 ? '#047BFE' : '#999999' }}>Step1.</span>
                            <span style={{ color: step === 1 ? '#000000' : '#999999' }}>取餐方式</span>
                        </div>
                        <ArrowRightAltIcon fontSize='large' />
                        <div>
                            <span style={{ color: step === 1 ? '#999999' : '#047BFE' }}>Step2.</span>
                            <span style={{ color: step === 1 ? '#999999' : '#000000' }}>訂購資訊</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    const goToStep = (index) => {
        setStep(index)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }

    const handleConfirmClose = () => {
        setConfirmOpen(false)
    }

    const handleConfirmOpen = (payway) => {
        dispatch(setPayway(payway))
        setConfirmOpen(true)
    }

    const paymentHandler = () => {
        if (userStore.payway === 'CASH') {
            console.log('cash')
            // window.location.href = window.location.origin + '/details'
        } else {
            if (shoppingCarStore.totalPrice <= 0) {
                alert('請選擇商品')
                return
            }
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            const order = {
                "totalCount": parseInt(shoppingCarStore.totalPrice),
                "name": 'XXX早餐店',
                "products": [
                    {
                        "name": "XXX早餐店",
                        "quantity": 1,
                        "price": parseInt(shoppingCarStore.totalPrice)
                    }
                ]
            }

            const cors = 'https://cors-anywhere.herokuapp.com/';
            axios.post(`${cors}${DEFAULT_API_URI}/payment/linepay`, JSON.stringify(order), config)
                .then((res) => {
                    if (res.data.info.paymentUrl !== undefined) {
                        window.location.href = res.data.info.paymentUrl.web
                    } else {
                        alert('Please try again.')
                    }
                })
                .catch(err => {
                    console.log(err)
                    alert('Please try again.')
                })
        }
    }


    function PayWayDialog(params) {
        return (
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <p>請選擇付款方式</p>
                </DialogContent>
                <DialogActions style={{
                    justifyContent: 'center'
                }}>
                    <Button style={{ borderRadius: '25px', border: '1px #000000 solid' }} onClick={() => handleConfirmOpen('CASH')}>現場付款</Button>
                    <Button style={{ borderRadius: '25px', border: '1px #000000 solid' }} onClick={() => handleConfirmOpen('LINE PAY')}>Line Pay</Button>
                </DialogActions>
            </Dialog>
        )
    }

    function ConfirmOrder() {
        return (
            <Dialog
                open={confirmOpen}
                onClose={handleConfirmClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <div>
                        <h1 style={{ textAlign: 'center' }}>您即將送出訂單</h1>
                        <p>付款金額:${shoppingCarStore.totalPrice}</p>
                        <p>付款方式:{userStore.payway}</p>
                        <p>取餐時間:{userStore.takeTime === '' ? '---' : userStore.takeTime}</p>
                        <p>（取餐時間為預估時間，會根據現場狀況而有提前或延遲變動）</p>
                    </div>


                </DialogContent>
                <DialogActions style={{
                    justifyContent: 'center'
                }}>
                    <Button style={{ borderRadius: '5px', border: 'none', background: '#E8E8E8', color: '#000000' }} onClick={handleConfirmClose}>取消</Button>
                    {/* <Button style={{ borderRadius: '5px', border: 'none', background: '#DF463F', color: '#FFFFFF' }} onClick={paymentHandler}>確定</Button> */}
                    <Link to="/details" style={style.confirmButton} onClick={paymentHandler}>確定</Link>
                </DialogActions>
            </Dialog>
        )
    }

    function Step1BottomBar(props) {
        return (
            <div style={style.bottomBar}>
                <div style={style.container}>
                    <Link to="/" style={style.bottomLeftBtn}>繼續選購</Link>
                    <button style={style.bottomRightBtn} onClick={() => goToStep(2)}>下一步</button>
                </div>
            </div>
        )
    }

    function Step2BottomBar(props) {
        return (
            <div style={style.bottomBar}>
                <div style={style.container}>
                    <button style={style.bottomLeftBtn} onClick={() => goToStep(1)}>上一步</button>
                    <button style={style.bottomRightBtn} onClick={handleOpen}>前往結帳</button>
                </div>
            </div>
        )
    }

    function Title() {
        return (
            <h3 style={style.title}>早餐店</h3>
        )
    }
    return (
        <div>
            <TopBar />
            <Title />
            <div style={{ marginBottom: '60px' }}>
                {step === 1 ? <OrderWay /> : <OrderInfo />}
            </div>

            {step === 1 ? <Step1BottomBar /> : <Step2BottomBar />}
            <PayWayDialog />
            <ConfirmOrder />
        </div>
    )
}

export default Orders
