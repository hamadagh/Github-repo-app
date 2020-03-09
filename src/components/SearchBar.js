import React from 'react';
import { TextField, InputAdornment, makeStyles } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles({
    input: {
        width: '100%',

    }
});


const SearchBar = () => {
    const classes = useStyles();


    return (

        <div>
            <TextField
                id="outlined"
                className={classes.input}
                label="Username / Repo name"
                placeholder="Make sure to put ' / ' in between"
                margin="normal"
                variant="outlined"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position='end'>
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
        </div>


    );
};

export default SearchBar;