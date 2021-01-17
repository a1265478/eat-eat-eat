import { React, useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import CustomDateTimePicker from './CustomDateTimePicker';
import OrderTable from './OrderTable'
import { setOrderWay } from '../../redux/user/userActions'
import TableSelection from './TableSelection'
import TakeTimeSelection from './TakeTimeSelection'
import DeliverySelection from './DeliverySelection'
function OrderWay() {

    const style = {
        container: {
            width: '100%',
            maxWidth: '768px',
            margin: '0 auto',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'block'
        },

        showDetail: {
            display: 'block',
            width: '90%',
            padding: '8px 10px',
            margin: '10px auto',
            color: '#047BFE',
            background: '#ffffff',
            border: '2px solid #047BFE',
            WebkitBorderRadius: '5px',
            outline: 'none',
            boxShadow: 'none',
            lineHeight: '30px',
            fontSize: '20px'
        },
        totalBar: {
            display: 'block',
            padding: '10px 0',
            textAlign: 'center',
            background: '#fff2e2',
            width: '90%',
            margin: '10px auto'
        },
        deliveryThreshold: {
            display: 'block',
            textAlign: 'center',
            width: '90%',
            margin: '10px auto'
        },
        orderWayButton: {
            minWidth: '100px',
            margin: '0 3px',
            lineHeight: '20px',
            background: '#ffffff',
            outline: 'none',
            boxShadow: 'none',
            WebkitBorderRadius: '25px',
            border: '2px solid #e5e6e5',
            cursor: 'pointer',
            padding: '5px',
            fontSize: '15px'
        },
        orderWaySeletedButton: {
            minWidth: '100px',
            margin: '0 3px',
            lineHeight: '20px',
            background: '#ffffff',
            outline: 'none',
            boxShadow: 'none',
            WebkitBorderRadius: '25px',
            border: '2px solid #047BFE',
            cursor: 'pointer',
            padding: '5px',
            fontSize: '15px'
        },
        orderWayCmp: {
            display: 'block',
            padding: '10px 0',
            textAlign: 'center',
            width: '90%',
            margin: '10px auto 10px auto'
        },
        moblieInput: {
            justifyContent: 'space-between',
            marginBottom: '10px',
            display: 'flex',
            alignItems: 'center',
        },
        mobileNumber: {
            width: '90%',
            padding: '10px',
            lineHeight: '20px',
            background: '#F3F3F3',
            textAlign: 'left',
            border: 'none'
        },
        modifyButton: {
            padding: '10px',
            color: '#FFFFFF',
            lineHeight: '20px',
            whiteSpace: 'nowrap',
            background: '#047BFE',
            borderRadius: '0 5px 5px 0',
            cursor: 'pointer'
        },
        noTableButton: {
            minWidth: '100px',
            margin: '0 3px',
            lineHeight: '20px',
            background: '#ffffff',
            outline: 'none',
            boxShadow: 'none',
            WebkitBorderRadius: '25px',
            border: '2px solid #F3F3F3',
            cursor: 'pointer',
            padding: '5px',
            fontSize: '15px'
        },
        noTableButtonSelected: {
            minWidth: '100px',
            margin: '0 3px',
            lineHeight: '20px',
            background: '#ffffff',
            outline: 'none',
            boxShadow: 'none',
            WebkitBorderRadius: '25px',
            border: '2px solid #047BFE',
            cursor: 'pointer',
            padding: '5px',
            fontSize: '15px'
        },
    }

    const shoppingCarStore = useSelector(state => state.shoppingCarStore)
    const userStore = useSelector(state => state.userStore)
    const dispatch = useDispatch();
    const [tableDisplay, setTableDisplay] = useState('none')
    const setTableIsHidden = () => {
        setTableDisplay(tableDisplay === 'none' ? 'block' : 'none')
    }

    const [deliveryThreshold, setDeliveryThreshold] = useState('none');
    const setDeliveryThresholdIsHidden = () => {
        setDeliveryThreshold(deliveryThreshold === 'none' ? 'block' : 'none')
    }

    const [selectionCmp, setSelectionCmp] = useState();
    const [selectionBtn, setSelectionBtn] = useState();

    const changeSelection = (btnText) => {
        switch (btnText) {
            case '內用':
                setSelectionBtn('內用')
                setSelectionCmp(<TableSelection />)
                dispatch(setOrderWay({ type: '內用', value: '' }))
                return;
            case '外帶':
                setSelectionBtn('外帶')
                setSelectionCmp(<TakeTimeSelection />)
                dispatch(setOrderWay({ type: '外帶', value: '' }))
                return;
            case '外送':
                setSelectionBtn('外送')
                setSelectionCmp(<DeliverySelection />)
                dispatch(setOrderWay({ type: '外送', value: '' }))
                return;
            default:
        }
    }

    return (
        <div style={style.container}>

            <button style={style.showDetail} onClick={setTableIsHidden}><span>+</span>商品明細</button>
            <OrderTable display={tableDisplay} />
            <h3 style={{ textAlign: 'center' }}>取餐方式</h3>
            <div>
                <button style={style.showDetail} onClick={setDeliveryThresholdIsHidden}><span>+</span>查看外送門檻</button>
            </div>
            <div style={style.deliveryThreshold} style={{ display: `${deliveryThreshold}` }}>
                <p style={{ color: '#979797', fontSize: '14px', width: '90%', display: 'block', margin: '0 auto' }}>
                    1.外送距離3公里內，並且消費滿100元，外送免運費。
                </p>
            </div>
            <div style={{ display: 'flex', margin: '20px auto', justifyContent: 'center' }}>
                <button style={selectionBtn === '內用' ? style.orderWaySeletedButton : style.orderWayButton} onClick={() => changeSelection('內用')}>內用</button>
                <button style={selectionBtn === '外帶' ? style.orderWaySeletedButton : style.orderWayButton} onClick={() => changeSelection('外帶')}>外帶</button>
                <button style={selectionBtn === '外送' ? style.orderWaySeletedButton : style.orderWayButton} onClick={() => changeSelection('外送')}>外送</button>
            </div>
            <div style={style.orderWayCmp}>
                {selectionCmp}
            </div>
        </div>
    )
}

export default OrderWay
