const app = require("express")();

app.get("/", (req, res) => {
    res.status(200).send("Funciona");
});

app.listen(3000, () => {
    console.log("Running on PORT: 3000");
});
