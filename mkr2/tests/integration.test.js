const supertest = require("supertest");
const app = require("../src");

const maxLikesPhoto = {
    id: 1,
    author: "Ivan",
    title: "Winter",
    description: "Season",
    url: "https://d34ip4tojxno3w.cloudfront.net/app/uploads/Lakeland-in-the-winter-with-snow-Finland-400x267.jpg",
    hashtags: "#season, #winter",
    published: new Date(2018, 5, 10),
    likes: 559
};

describe("Integration test Photo API", () => {

    it("should get photo with max likes of author", async() => {
        const response = await supertest(app).get("/photo/Ivan");
        const data = JSON.parse(response.text);
        data.published = new Date(data.published);

        expect(response.status).toBe(200);
        expect(data).toMatchObject(maxLikesPhoto);
    });

});