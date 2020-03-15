import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',

    },
    paper: {
        width: '85%',
        height: '100%',
        textAlign: 'center',
        marginBottom: '13px',
        marginTop: '13px',
        marginRight: 'auto',
        marginLeft: 'auto',
        color: 'white',
        backgroundColor: '#5c6bc0',
        minHeight: '56px',
        paddingTop: '13px',
        paddingBottom: '13px',

    },

}));

function Comments(data) {
    const classes = useStyles();
    const [searchString, setSearchString] = useState('');
    const [comments, setComments] = useState([]);


    const handleChange = (e) => {
        setSearchString(e.target.value);
    };

    useEffect(() => {
        if (data.data.nodes.length > 0) {
            const results = data.data.nodes.filter(comment =>
                comment.bodyText.toLowerCase().includes(searchString)
            );
            setComments(results);
        }

    }, [searchString]);


    return (

        <div className="Comments">
            <h3>Comments</h3>
            <TextField

                label="Search Comments"
                variant="outlined"
                color="secondary"

                onChange={handleChange}

            />
            {

                comments.map((comments, index) =>
                    <Paper elevation={3} children={<Typography>{comments.bodyText}</Typography>} key={index} className={classes.paper} />
                )




            }

        </div>


    );
}

export default Comments;
