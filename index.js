import express from 'express';
import path from 'path';
import mainRoutes from './routes/main.js';

const app = express();
const _dirname = path.resolve();

app.set('view engine', 'pug');
app.set('views', path.join(_dirname, 'views'));

app.use(express.static(path.join(_dirname, 'public')));

//Middleware para registrar visitas
app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] Ruta visitada: ${req.url}`);
    next();
});

app.use('/', mainRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
