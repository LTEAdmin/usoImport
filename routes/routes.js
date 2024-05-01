import express from "express";
const ruta = express.Router();

//const rutas=express.Router(); así se escribe en forma tardicional con node y poder traspasar las rutas a otro archivo

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("*", (req, res) => {
  res.status(404).send("Not Found - Esta pagina no existe, por favor revisa la direccion ingresada");
});

// module.export default rutas;