const axios = require('axios');
require("dotenv").config();

const activitiesService = async () => {
    console.log("Mocked Activities");
    return Promise.resolve({
        data:[
            
        ]
    })
};

const activitiesServiceById = async(key) => {
    console.log("Mocked Activities by Id");
    return await axios.get(`${process.env.activityURL}${key}`)
};

module.exports = { activitiesService, activitiesServiceById };