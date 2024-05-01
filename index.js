import express from 'express';
// const rutas= require('./routes/routes.js'); tradiconal con node
const app = express();
const port = process.env.PORT || 3000;

//rutas.use('/', rutas); tradicional con node
//rutas.get('/', rutas); solo busca la ruta raiz, es decir get solo trae una ruta especifica, en cambio use (middleware) trae todas las rutas)
//rutas.get('/colores/:color', rutas); ruta con paso de parametro
//       app.get('/colores/:color', (req, res) => {
//         const color = req.params.color;
//         res.send(`El color es ${color}`);
// });

app.listen(port, () => console.log(`Server running on port http://localhost:${port}`));