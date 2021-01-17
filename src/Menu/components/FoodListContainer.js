import { React } from 'react'
import { useSelector } from "react-redux";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FoodCard from './FoodCard';

function FoodListContainer() {
    // const dispatch = useDispatch()
    const filterFoodsStore = useSelector(state => state.filterStore)
    function FoodCardList(props) {
        return (
            <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                <FoodCard food={props.food} />
            </Grid>
        )
    }

    return (
        <div style={{ margin: '10px 10px 100px 10px' }}>
            <Typography style={{ fontSize: '30px', textAlign: 'center', fontWeight: 'bold', margin: '8px' }}>{filterFoodsStore.currentFilter === 'ALL' ? '全部產品' : filterFoodsStore.currentFilter}</Typography>
            <Grid container spacing={4}>
                {filterFoodsStore.foodsList.map((food) => (
                    <FoodCardList key={food.FoodID} food={food} />

                ))}
            </Grid>

        </div >
    )
}

export default FoodListContainer
