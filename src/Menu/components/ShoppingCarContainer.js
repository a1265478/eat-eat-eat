import React from 'react'
import { useSelector } from "react-redux";
import Grid from '@material-ui/core/Grid';
import ShoppingCarItem from './ShoppingCarItem';

function ShoppingCarContainer() {
    console.log('shopping car container')
    const shoppingCarStore = useSelector(state => state.shoppingCarStore)
    console.log(shoppingCarStore)
    function ShoppingCarItemsList(props) {
        return (
            <Grid item xs={12} >
                <ShoppingCarItem shopItem={props.shopItem} />
            </Grid>
        )
    }

    return (
        <div>
            {
                shoppingCarStore.shopList.map((shopItem, index) => {
                    return <ShoppingCarItemsList key={index} shopItem={shopItem} />
                })
            }
        </div>
    )
}

export default ShoppingCarContainer
