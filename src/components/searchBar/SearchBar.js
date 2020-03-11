import React, { useState } from 'react';
import { TextField, InputAdornment, makeStyles } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';




const useStyles = makeStyles({
    input: {
        width: '100%',
    },

});


const SearchBar = ({ handleSearchTerm }) => {
    const classes = useStyles();

    const [inputValue, setInputValue] = useState();
    const [open, setOpen] = React.useState(false);


    const openErrorMessage = () => {
        setOpen(true);
    };
    const closeErrorMessage = () => {
        setOpen(false);
    };




    const handleChange = (e) => {
        setInputValue(`${e.target.value}`)
    }
    const searchClick = (e) => {
        e.preventDefault();
        let re = /(?:.+)(?:\/)(?:.+)/;
        if (re.test(inputValue)) {
            handleSearchTerm(inputValue.split("/"));
        }
        else {
            openErrorMessage();
        }



    }
    return (

        <div>
            <TextField

                id="outlined"
                className={classes.input}
                type="search"
                label="Username / Repo name"
                placeholder="Make sure to put ' / ' in between"
                margin="normal"
                variant="outlined"
                onChange={handleChange}
                pattern="/.*(?:\/.*)/g"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position='end'>
                            <SearchIcon data-testid="search-icon" onClick={searchClick} />
                            <Snackbar open={open} autoHideDuration={6000} onClose={closeErrorMessage}>
                                <Alert onClose={closeErrorMessage} variant="filled" severity="error">
                                    Make sure to have a '/' in between eg(nuwave/lighthouse)
                                </Alert>
                            </Snackbar>
                        </InputAdornment>
                    ),
                    "data-testid": "text-field",
                }}
            />

        </div>


    );
};

export default SearchBar;