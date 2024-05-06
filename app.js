import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => res.json("welcome to my API"));

app.listen(Config.port, () => {
    console.log(`Servidor corriendo en el puerto ${Config.port}`);
  });