const express = require("express");
const activitiesRouter = require("../router/activitiesRouter");


const app = express();
app.get("/", (req, res,next) => {
    res.status(200).send("Service is up");
});

// Router Middleware
app.use('/activity', activitiesRouter);


app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404 ;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error:{
            message: error.message,
            status: error.status,
            methond: req.method,
        },
    });
});

module.exports = app;