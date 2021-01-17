import { Typography } from '@material-ui/core'
import React from 'react'
import OrderAgainCard from './OrderAgainCard'
import Grid from '@material-ui/core/Grid';


function OrderAgainListView() {
    const orderList = [
        {
            orderID: 1,
            orderTime: '2020/12/19 11:22:33',
            orderItems: '1 X 漢堡 \n 1 X 奶茶'
        },
        {
            orderID: 1,
            orderTime: '2020/12/19 18:55:32',
            orderItems: '1 X 三明治 \n 1 X 綠茶'
        }
    ]

    return (
        <div style={{ margin: '10px' }}>
            <Typography style={{ fontSize: '30px', textAlign: 'center', fontWeight: 'bold', margin: '8px' }}>再點一次</Typography>
            <Grid container spacing={4}>
                {orderList.map((order, index) => (
                    <OrderAgainCard key={index} order={order} />
                ))}
            </Grid>
        </div>
    )
}

export default OrderAgainListView
