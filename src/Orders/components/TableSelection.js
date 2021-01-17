import React, { useState } from 'react'
import { setOrderWay } from '../../redux/user/userActions'
import { useSelector, useDispatch } from "react-redux";
import CustomDatetimePicker from './CustomDateTimePicker';

function TableSelection() {
    const style = {
        customPicker: {
            width: '100%',
            padding: '15px',
            fontSize: '20px',
            borderRadius: '25px'
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
        tableInput: {
            borderRadius: '50px',
            width: '100px',
            padding: '5px',
            margin: '5px'
        },
        tableContainer: {
            background: '#CAEEF8',
            display: 'inline-block',
            padding: '5px',
            margin: '5px',
            borderRadius: '25px'
        }
    }
    const dispatch = useDispatch()
    const [tableNum, setTableNum] = useState('')
    const handleTableNum = (e) => {
        setTableNum(e.target.value)
        dispatch(setOrderWay({
            type: '內用',
            value: tableNum
        }))
    }
    const handleNoTableNum = () => {
        setTableNum('')
        dispatch(setOrderWay({
            type: '內用',
            value: tableNum
        }))

    }

    return (
        <div>
            <div style={style.tableContainer}>
                <label>桌號</label>
                <input style={style.tableInput} type='number' value={tableNum} onChange={handleTableNum} />
            </div>
            <button style={tableNum === '' ? style.noTableButtonSelected : style.noTableButton} onClick={handleNoTableNum}>無桌號</button>
            <h3>取餐時間</h3>
            <CustomDatetimePicker />
        </div>
    )
}

export default TableSelection
