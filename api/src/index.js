
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connect from './infra/base/repository/connection.js';

const servidor = express();
servidor.use(cors());
servidor.use(express.json());

const PORT = 3000;

servidor.listen(PORT, () => console.log('API iniciada com sucesso na porta ' + PORT));
