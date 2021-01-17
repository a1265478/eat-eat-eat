import { React, useState, useEffect } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from "react-redux";
import { filterBySearch } from '../../redux/filter/filterActions'

function SearchBar() {
    const allFoods = useSelector(state => state.foodsStore.foodsList);
    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch();
    const useStyles = makeStyles((theme) => ({
        search: {
            margin: 'auto',
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginLeft: 0,
            borderBottom: '2px black solid'
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            width: '100vw',
        },
    }));

    const classes = useStyles();
    const inputChangeHandler = (e) => {
        setInputValue(e.target.value)
    }

    useEffect(() => {
        dispatch(filterBySearch(allFoods, inputValue))

    }, [inputValue, dispatch])

    return (

        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder="搜尋全部商品"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                value={inputValue}
                onChange={inputChangeHandler}
            />
        </div>



    )
}

export default SearchBar
