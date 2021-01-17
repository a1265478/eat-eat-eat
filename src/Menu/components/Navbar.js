import { React, useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { filterByCategory } from "../../redux/filter/filterActions";
import MenuIcon from '@material-ui/icons/Menu';
import GridList from '@material-ui/core/GridList';
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Publish from './Publish';
import { setIsAtOrderAgain } from '../../redux/user/userActions'


function Navbar() {
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'nowrap',
            justifyContent: 'space-between',
            overflow: 'hidden',
            backgroundColor: '#F3F3F3',
        },
        gridList: {
            flexWrap: 'nowrap',
            transform: 'translateZ(0)',
            whiteSpace: 'nowrap',
            padding: '10px'
        },
        TopBarButton: {
            background: '#FFFFFF',
            margin: '5px',
            borderRadius: '25px',
            border: 'none',
            fontSize: '15px',
            width: '100%',
            padding: '0px 10px',
            outline: 'none',
            boxShadow: 'none'
        },
        TopBarSelected: {
            background: '#007BFF',
            color: '#FFFFFF',
            margin: '5px',
            borderRadius: '25px',
            border: 'none',
            fontSize: '15px',
            width: '100%',
            padding: '0px 10px',
            outline: 'none',
            boxShadow: 'none'
        },
        itemCount: {
            display: 'block',
            position: 'absolute',
            right: '-9px',
            top: '0px',
            fontSize: '14px',
            textAlign: 'center',
            background: '#CB5A4B',
            padding: '0px 5px 0px 5px',
            margin: '0 auto',
            borderRadius: '50%',
            color: '#FFFFFF'
        },
        menuIcon: {
            margin: '5px',
            borderRadius: '25px',
            border: 'none',
            fontSize: '15px',
            width: '100%',
            padding: '0px 10px'
        }

    }));

    const categories = useSelector(state => state.categoriesStore.categories)
    const filterFoods = useSelector(state => state.filterStore)
    const allFoods = useSelector(state => state.foodsStore.foodsList)
    const dispatch = useDispatch();

    const [selectedCategory, setSelectedCategory] = useState(filterFoods.currentFilter)

    const classes = useStyles();

    const changeSelectedHandler = (e) => {
        setSelectedCategory(e.target.innerText)
        dispatch(filterByCategory(allFoods, e.target.innerText))
        dispatch(setIsAtOrderAgain(e.target.innerText === '再點一次'))
    }
    function ListButton(props) {
        return (
            <button
                className={props.category.CategoryName === selectedCategory ? classes.TopBarSelected : classes.TopBarButton}
                onClick={changeSelectedHandler}>
                {props.category.CategoryName}
            </button>
        )
    }

    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cellHeight={30}>
                {/* <Button className={classes.menuIcon}>
                    <MenuIcon fontSize='large' />
                </Button> */}

                <Publish />
                <button
                    className={selectedCategory === '再點一次' ? classes.TopBarSelected : classes.TopBarButton}
                    onClick={changeSelectedHandler}>
                    再點一次
                </button>
                {categories.map((category) => (
                    <ListButton key={category.CategoryID} category={category} />
                ))}
            </GridList>

        </div>

    )
}

export default Navbar
