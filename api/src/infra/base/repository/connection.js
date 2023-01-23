import mongoose from 'mongoose';





mongoose.set('strictQuery', true)
const connect = () => {
  mongoose.connect(process.env.DB_CONSTR, {useNewUrlParser: true});
  const connection = mongoose.connection;

  connection.on("error", () => {
    console.error("Erro ao conectar com o mongoDB!");
  })
  connection.on("open", () => {
    console.log("MongoDB conectado com sucesso!");
  })
}

connect();

export default connect;