import React from 'react'
import FoodCard from './FoodCard';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';



function FoodListView(props) {

    function FoodCardList(props) {
        return (
            <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                <FoodCard key={props.index} food={props.food} index={props.index} />
            </Grid>
        )
    }

    return (
        <div style={{ margin: '10px 10px 100px 10px' }}>
            <Typography style={{ fontSize: '30px', textAlign: 'center', fontWeight: 'bold', margin: '8px' }}>{props.title}</Typography>
            <Grid container spacing={4}>
                {props.FoodList.map((food) => (
                    <FoodCardList key={food.ID} index={food.ID} food={food} />
                ))}
            </Grid>

        </div >
    )
}

export default FoodListView
