const axios = require('axios');
require("dotenv").config();

const activitiesService = async() => {
    console.log("Real Activities");
    return await axios.get(`${process.env.activityURL}`);
};

const activitiesServiceById = async(key) => {
    console.log("Real Activities by Id");
    return await axios.get(`${process.env.activityURL}${key}`)
};

module.exports = {activitiesService, activitiesServiceById};