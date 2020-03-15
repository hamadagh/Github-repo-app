import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';




function Comments(data) {

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
                id="outlined-secondary"
                label="Search Comments"
                variant="outlined"
                color="secondary"

                onChange={handleChange}

            />
            {

                comments.map((comments, index) =>
                    <Paper children={<Typography>{comments.bodyText}</Typography>} />
                )




            }

        </div>


    );
}

export default Comments;
