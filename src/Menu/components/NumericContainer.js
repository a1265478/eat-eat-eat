import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, updateTotalPrice } from '../../redux/shoppingCar/shoppingCarActions'

function NumericContainer(props) {
    const dispatch = useDispatch()
    const shoppingCarStore = useSelector(state => state.shoppingCarStore)

    const handleIncrement = (shopItem) => {
        // setQuantity(quantity + 1)
        dispatch(updateQuantity(shopItem.shopID, 1))
        // dispatch(updateTotalPrice(shopItem.Price))
    }

    const handleDecrement = (shopItem) => {
        // setQuantity(quantity - 1)
        dispatch(updateQuantity(shopItem.shopID, -1))
        // dispatch(updateTotalPrice(-shopItem.Price))
    }

    useEffect(() => {
        console.log('dispath')
        return () => {

        }
    }, [])
    console.log(props.quantity)

    return (
        <Box justifyContent='center' style={{ display: 'flex', alignItems: 'center', marginTop: '15px' }}>
            <RemoveIcon onClick={() => handleDecrement(props.shopItem)} style={{ background: '#E5E6E5', borderRadius: '50%', width: '30px', height: '30px' }
            } />
            <p>{shoppingCarStore.shopList.find(shopItem => shopItem.shopID === props.shopID).quantity}</p>
            {/* <input
                name='itemCount'
                value={shoppingCarStore.shopList.find(shopItem => shopItem.shopID === props.shopID).quantity}
                onChange={changeCount}
                style={{
                    WebkitBorderRadius: '99em',
                    height: '30px', width: '80px',
                    margin: '0px 5px 0px 5px',
                    fontSize: '20px',
                    textAlign: 'center',
                    WebkitAppearance: 'none',
                    outline: 'none',
                }}
            /> */}
            <AddIcon onClick={() => handleIncrement(props.shopItem)} style={{ background: '#E5E6E5', borderRadius: '50%', width: '30px', height: '30px' }} />
        </Box >
    )
}

export default NumericContainer
