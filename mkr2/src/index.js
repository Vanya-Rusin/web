const express = require("express");

const app = express();


let Photos = [{
            id: 1,
            author: "Ivan",
            title: "Winter",
            description: "Season",
            url: "https://d34ip4tojxno3w.cloudfront.net/app/uploads/Lakeland-in-the-winter-with-snow-Finland-400x267.jpg",
            hashtags: "#season, #winter",
            published: new Date(2018, 5, 10),
            likes: 559
        },
        {
            id: 2,
            author: "Ivan",
            title: "Dog",
            description: "Dog",
            url: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/03/pit-bull-featured.jpg",
            hashtags: "#dog, #animal",
            published: new Date(2020, 2, 11),
            likes: 1212
        }
    ]
    


if (process.env.NODE_ENV == "test") module.exports = app;
else
    app.listen(3000, () => {
        console.log("http://localhost:3000");
    })