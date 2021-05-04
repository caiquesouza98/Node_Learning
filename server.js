import express from "express";
import cors from "cors";
import {insertCliente, insertProduto, getClientes} from './db.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.send("Hello world");
});

app.post("/login", (req, res) => {
  
  var data = req.body;
  console.log(data);
  insertCliente(data);

  res.status(200);
  res.contentType('applicaition/json');
  res.json({'message': 'funcionou'});
});

app.post("/user", (req, res) => {

  var data = req.body;
  console.log(data);
  getClientes();
  
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
