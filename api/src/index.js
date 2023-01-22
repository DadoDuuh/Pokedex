
import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import pokemonController from './controller/pokemonController.js'


const servidor = express();
servidor.use(cors());
servidor.use(express.json());

servidor.use(pokemonController);

const PORT = process.env.PORT || 3000;

servidor.listen(PORT, () => console.log('API iniciada com sucesso na porta ' + PORT));
