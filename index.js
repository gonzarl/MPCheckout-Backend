const express = require("express");
const app = express();
const cors = require("cors");
const mercadopago = require("mercadopago");
require("dotenv").config()

mercadopago.configure({
    access_token: process.env.MERCADO_PAGO_ACCESS_TOKEN,
});

app.use(express.json());
app.use(cors());
app.get("/", function (req, res) {
    res.send("Server is running :)");
});

app.post("/create_preference", cors(), (req, res) => {

    let preference = {
        items: [
            {
                title: req.body.description,
                unit_price: Number(req.body.price),
                quantity: Number(req.body.quantity),
            }
        ],
        //a que paginas redirigir si hay exito o falla
        back_urls: {
            "success": "https://guido-pits.vercel.app/",
            "failure": "https://guido-pits.vercel.app/",
            "pending": ""
        },
        auto_return: "approved",
    };

    mercadopago.preferences.create(preference)
        .then(function (response) {
            res.json({
                id: response.body.id
            });
        }).catch(function (error) {
            console.log(error);
        });
});

// app.listen(8080, () => {
//     console.log("The server is now running on Port 8080");
// });

module.exports = app;