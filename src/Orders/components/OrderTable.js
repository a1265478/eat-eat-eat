import { React, useState } from 'react'
import { useSelector } from "react-redux";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'

function OrderTable(props) {
    const style = {
        container: {
            width: '100%',
            maxWidth: '768px',
            margin: '0 auto',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'block'
        },
        tableContainer: {
            width: '100%',
            maxWidth: '768px',
            margin: '0 auto',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'block'
        },
        totalBar: {
            display: 'block',
            padding: '10px 0',
            textAlign: 'center',
            background: '#CAEEF8',
            width: '100%',
            margin: '10px auto'
        }
    }

    const shoppingCarStore = useSelector(state => state.shoppingCarStore)
    function TotalBar(params) {
        return (
            <div style={style.totalBar}>
                總計 {shoppingCarStore.totalCount} 項 / 共 <span style={{ color: '#CB5A4B', fontWeight: 'bold' }}>{shoppingCarStore.totalPrice}</span>
            </div>
        )
    }

    function formatAddOns(addOns) {
        let addOnStr = '';
        addOns.map(selection => {
            selection.selectionList.map(selected => {
                addOnStr += `${selected.selectionName} ${selected.selectionPrice === 0 ? '' : '+$' + selected.selectionPrice}/`
            })
        })

        return addOnStr === '' ? '' : `(${addOnStr.slice(0, -1)})`;
    }

    return (
        <div style={style.container}>
            <div style={style.tableContainer}>
                <Grid item xs={12}>
                    <TableContainer component={Paper} style={{ display: `${props.display}` }}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>商品名稱</TableCell>
                                    <TableCell align="right">數量</TableCell>
                                    <TableCell align="right">金額</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {shoppingCarStore.shopList.map((item) => (
                                    <TableRow key={item.shopID}>
                                        <TableCell component="th" scope="row">
                                            {`${item.item.FoodName} ${formatAddOns(item.item.AddOns)}`}
                                        </TableCell>
                                        <TableCell align="right">{item.quantity}</TableCell>
                                        <TableCell align="right">{item.item.Price * item.quantity}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </div>
            <TotalBar />
        </div>
    )
}

export default OrderTable
