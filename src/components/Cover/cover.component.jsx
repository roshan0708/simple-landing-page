import React from 'react';
import "./cover.styles.css";
import CustomButton from "../Custom-Button/custom-button.component";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SearchBar from "../Search-bar/search-bar.component";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const Cover = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Grid container>
                        <Grid item xs={6}>
                            <CustomButton blue>Products</CustomButton>
                        </Grid>
                        <Grid item xs={6}>
                            <CustomButton>Suppliers</CustomButton>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container>
                        <Grid item xs={6}>
                            <SearchBar />
                        </Grid>
                        <Grid item xs={6}>
                            <CustomButton mini><AddIcon style={{ fill: "white" }} id="add-icon" /> Create Sourcing Request</CustomButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cover
