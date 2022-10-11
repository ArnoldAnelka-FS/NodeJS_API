

const express = require("express");
const activitiesRouter = express.Router();
const {activitiesService, activitiesServiceById} = require('../services/activitiesService')

activitiesRouter.get('/', (req,res,next) => {
    activitiesService()
    .then(result => {
        res.status(200).json(result.data);
    })
    .catch(err => {
        res.status(500).json({
            error: {
                message: error.message,
            },
        });
    });
});

activitiesRouter.get('/:key', (req, res, next) => {
    activitiesServiceById(req.params.key)
    .then(result => {
        res.status(200).json(result.data);
    })
    .catch(err=> {
        res.status(200).json({
            error: {
                message: err.message,
            },
        });
    });
});

module.exports = activitiesRouter;