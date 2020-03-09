import React, { useState } from 'react';
import { TextField, InputAdornment, makeStyles } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles({
    input: {
        width: '100%',
    },

});


const SearchBar = () => {
    const classes = useStyles();
    const [inputValue, setInputValue] = useState();
    const handleChange = (e) => {
        setInputValue(`${e.target.value}`)
    }
    const searchClick = (e) => {
        e.preventDefault();

        console.log("submitted")
        console.log(inputValue)
    }
    return (

        <div>
            <TextField

                id="outlined"
                className={classes.input}
                label="Username / Repo name"
                placeholder="Make sure to put ' / ' in between"
                margin="normal"
                variant="outlined"
                onChange={handleChange}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position='end'>
                            <SearchIcon data-testid="search-icon" onClick={searchClick} />
                        </InputAdornment>
                    ),
                    "data-testid": "text-field",
                }}
            />

        </div>


    );
};

export default SearchBar;