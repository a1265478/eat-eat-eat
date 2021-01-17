import { React, useState, useEffect } from 'react'
import OrderTable from './OrderTable'
import { useSelector, useDispatch } from "react-redux";
import { changeIsNeedInvoice, setUserID, setPhone } from '../../redux/user/userActions'
function OrderInfo() {
    const dispatch = useDispatch();

    const style = {
        container: {
            width: '100%',
            maxWidth: '768px',
            margin: '0 auto',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'block'
        },
        title: {
            textAlign: 'center'
        },
        list: {
            padding: '10px 0',
            borderBottom: '1px solid #f3f3f3'
        },
        formTitle: {
            display: 'block',
            textAlign: 'left',
            margin: '5px auto',
            fontSize: '14px'
        },
        formList: {
            padding: '5px 0'
        },
        formInput: {
            width: '90%',
            padding: '10px 0',
            margin: '5px auto',
            lineHeight: '20px',
            background: '#F3F3F3',
            WebkitBorderRadius: '5px',
            border: 'none'
        },
        moblieInput: {
            justifyContent: 'space-between',
            marginBottom: '10px',
            display: 'flex',
            alignItems: 'center',
            width: '90%'
        },
        mobileNumber: {
            width: '90%',
            padding: '10px',
            lineHeight: '20px',
            background: '#F3F3F3',
            borderRadius: '5px 0 0 5px'
        },
        modifyButton: {
            padding: '10px',
            color: '#FFFFFF',
            lineHeight: '20px',
            whiteSpace: 'nowrap',
            background: '#047BFE',
            borderRadius: '0 5px 5px 0'
        },
        textArea: {
            display: 'block',
            width: '90%',
            minHeight: '90px',
            background: '#F3F3F3',
            WebkitBorderRadius: '5px'
        },
        checkbox: {
            display: 'flex',
            flexFlow: 'nowrap',
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: '10px 0'
        },
        checkboxLabel: {
            display: 'flex',
            alignItems: 'center',
            height: '20px'
        }
    }
    const userStore = useSelector(state => state.userStore)

    const [comment, setComment] = useState('')


    function InfoTable() {
        return (
            <div>
                <ul style={{ listStyle: 'none' }}>
                    <li style={style.list}>取餐方式： {userStore.orderWay.type}</li>
                    {userStore.orderWay.type === '外送' && <li style={style.list}>外送地址： {userStore.orderWay.value}</li>}
                    <li style={style.list}>取餐時間： {userStore.takeTime}</li>
                    <li style={style.list}>店家地址： 新北市板橋區</li>
                    <li style={style.list}>店家電話： 12345678</li>
                </ul>
            </div>
        )
    }

    function handleIsNeedInvoice() {
        dispatch(changeIsNeedInvoice())
    }


    function SecondTitle() {
        return (
            <h3 style={style.title}>請填寫訂購資訊</h3>
        )
    }

    return (
        <div style={style.container}>
            <InfoTable />
            <OrderTable display={'block'} />
            <SecondTitle />
            {/* <OrderInfoForm /> */}
            <div style={{ marginBottom: '100px' }}>
                <ul style={{ listStyle: 'none' }}>
                    <li>
                        <label style={style.formTitle}><span style={{ color: '#CB5A4B' }}>*</span>訂購人</label>
                        <div>
                            <input style={style.formInput} type='text' placeholder='請輸入訂購人姓名' value={userStore.userID} onChange={(e) => dispatch(setUserID(e.target.value))} />
                        </div>
                    </li>
                    <li>
                        <label style={style.formTitle}><span style={{ color: '#CB5A4B' }}>*</span>手機號碼</label>
                        <div>
                            <input style={style.formInput} type='tel' placeholder='請輸入訂購人手機號碼' value={userStore.phone} onChange={(e) => dispatch(setPhone(e.target.value))} />
                        </div>
                    </li>
                    <li>
                        <label style={style.formTitle}>備註(最多 200 個字元)</label>
                        <textarea style={style.textArea} value={comment} onChange={(e) => setComment(e.target.value)} />
                    </li>
                    <li>
                        <div style={style.checkbox}>
                            <input type='checkbox' id='invoice1' checked={userStore.needInvoice} onChange={handleIsNeedInvoice} />
                            <label htmlFor='invoice1' style={style.checkboxLabel}>
                                <p>索取收據</p>
                            </label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default OrderInfo
