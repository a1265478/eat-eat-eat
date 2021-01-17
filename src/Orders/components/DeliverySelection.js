import React from 'react'
import { setOrderWay } from '../../redux/user/userActions'
import { useSelector, useDispatch } from "react-redux";
import CustomDatetimePicker from './CustomDateTimePicker';
function DeliverySelection() {
    const dispatch = useDispatch()
    const style = {
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
        datatimePick: {
            width: '100%',
            border: '1px solid #000000',
            borderRadius: '25px',
            padding: '5px'
        },
        datetime: {
            textAlign: 'center',
            margin: '5px',
            fontSize: '20px'
        }

    }

    function changeAddress(e) {
        dispatch(setOrderWay({ type: '外送', value: e.target.value }))
    }

    function formatWeekDay(day) {
        switch (day) {
            case 1:
                return '一'
            case 2:
                return '二'
            case 3:
                return '三'
            case 4:
                return '四'
            case 5:
                return '五'
            case 6:
                return '六'
            case 7:
                return '日'
            default:
                break;
        }
    }

    const now = new Date()
    const tomorrow = [
        `${now.getMonth() + 1}-${now.getDate()}(${formatWeekDay(now.getDay())})`,
        `${now.getMonth() + 1}-${now.getDate() + 1}(${formatWeekDay(now.getDay() + 1)})`,
        `${now.getMonth() + 1}-${now.getDate() + 2}(${formatWeekDay(now.getDay() + 2)})`
    ]

    return (
        <div>
            <div style={style.moblieInput}>
                <input id='address' type='text' style={style.mobileNumber} onChange={changeAddress} />
                <a style={style.modifyButton} onClick={changeAddress}>確認地址</a>
            </div>
            <h3>希望送達時間</h3>
            <CustomDatetimePicker />
        </div>
    )
}

export default DeliverySelection
