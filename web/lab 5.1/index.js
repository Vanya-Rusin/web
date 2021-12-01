const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let Azs = [{
    id: 0,
    address: "Shevchenka 147",
    firmOwner: "OKKO",
    benzA80: 1000,
    benzA92: 2000,
    benzA95: 3000,
    priceOne: 26.66,
    priceTwo: 30.60,
    priseThree: 31.39
},
{
    id: 1,
    address: "Peremohi 7",
    firmOwner: "WOG",
    benzA80: 1500,
    benzA92: 3000,
    benzA95: 7000,
    priceOne: 27.77,
    priceTwo: 30.65,
    priseThree: 31.45
},
{
    id: 2,
    address: "Koryatovicha 55",
    firmOwner: "Ukrnafta",
    benzA80: 2000,
    benzA92: 3000,
    benzA95: 5000,
    priceOne: 28.88,
    priceTwo: 30.70,
    priseThree: 32
},
];

app.get("/asz", (req, res) => {
    res.send(Azs);
});

app.get("/azs/query", (req, res) => {
    let queryAzs = Azs;
    if (req.query.benzA92)
        queriedAzs = queriedAzs.filter((azs) => 
            azs.benzA92.includes(req.query.benzA92)
        );
    if (req.query.firmOwner)
        queriedAzs = queriedAzs.filter((azs) => 
            azs.firmOwner.includes(req.query.firmOwner)
        );
    res.send(queriedAzs);
});

app.get("/azs/:id", (req, res) => {
    let azs = Azs.find((azs) => azs.id === parseInt(req.params.id));
    if (azs !== null) res.status(200).send(book);
    else res.status(404).send("Not Found");
});

app.delete("/azs/:id", (req, res) => {
    let index = Azs.findIndex((azs) => azs.id === parseInt(req.params.id));
    if (index >= 0) {
        let deletedAzs = Azs[index];
        Azs.splice(index, 1);
        res.send(deletedAzs);
    } else res.status(404).send("Not Found");
});

app.post("/asz", (req, res) => {
    let newAzs = {
        id: Number(Date.now()),
        ...req.body,
    };
    Azs.push(newAzs);
    res.send(newAzs);
});

app.all("/", (req, res) => {
    res.send("Test");
});

app.listen(3000, () => {
    console.log("http://localhost:3000");
});