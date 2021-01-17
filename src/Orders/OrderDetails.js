import React from 'react'
import OrderTable from './components/OrderTable'
import { useSelector } from "react-redux";
import moment from 'moment'
import './OrderDetails.css'

function OrderDetails() {
    console.log(useSelector(state => state))
    const userStore = useSelector(state => state.userStore)
    return (
        <div>
            <div>
                <h1>早餐店</h1>
            </div>
            <div className='titleBar'>
                <div className='container'>
                    <a>訂單編號0000001</a>
                </div>
            </div>
            <div className='detail'>
                <div className='container flex-center'>
                    <div className='pickNumberContainer'>
                        {`${userStore.orderWay.type} 取餐編號 01`}
                    </div>
                    <div>
                        <h3>XXX早餐店</h3>
                        <div>
                            <h5>{`下單時間:${moment().format('yyyy-MM-DD HH:mm:ss')}`}</h5>
                            <h5>{`取餐時間:${userStore.takeTime}`}</h5>
                        </div>
                    </div>
                </div>
                <div className='alert'>/ 請告知店家取餐編號取餐 /</div>
            </div>
            <div className='detail'>
                <div className='title'>訂單狀態</div>
                <div className='orderStatus'>
                    <div className='status'>已下單</div
                    ><div className='status activeStatus'>已接單</div>
                </div>

            </div>
            <div className='detail'>
                <div className='title'>付款狀態 {userStore.payway}</div>
            </div>
            <div className='detail'>
                <div className='title'>訂購明細</div>
                <OrderTable />
            </div>
            <div className='detail'>
                <div className='container'>
                    <div className='title'>
                        店家資訊
                </div>
                    <p><b>店家名稱:</b><span>XXX早餐店</span></p>
                    <p><b>店家地址:</b><span>新北市板橋區</span></p>
                </div>
            </div>
            <div className='detail'>
                <div className='container'>
                    <div className='title'>
                        訂購資訊
                </div>
                    <p><b>訂購人電話:</b><span>{`${userStore.phone}`}</span></p>
                </div>
            </div>
        </div>
    )
}

export default OrderDetails
