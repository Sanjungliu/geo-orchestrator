const express = require("express");
const Controller = require("./controller/controller");
const app = express();
const port = 4000;
const auth = require("./middleware/authentication");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/views"));

app.get("/login", Controller.getLogin);
app.post("/login", Controller.postLogin);
app.get("/register", Controller.getRegister);
app.post("/register", Controller.postRegister);

app.use(auth);
app.get("/", Controller.getKatalog);

app.listen(port, () => console.log(`orchestrator listen at port ${port}`));
