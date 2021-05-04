
import mongo from 'mongodb';

const {MongoClient} = mongo;

//config
const username = encodeURIComponent("***");
const password = encodeURIComponent("***");
const clusterUrl = "***";
const authMechanism = "DEFAULT";
const uri = `mongodb+srv://${username}:${password}@${clusterUrl}/Ecommerce?retryWrites=true&w=majority?authMechanism=${authMechanism}`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dbName = "Ecommerce";
const clienteCol = "Cliente";
const produtoCol = "Produto";

export const getClientes = async () => {
  try {
    await client.connect();
    console.log("Connected successfully to server");
    const findResult = await client.db(dbName).collection(clienteCol).find({}).toArray();
    console.log(findResult);
  } finally {
    await client.close();
  }
}

export const getProdutos = async () => {
  try {
    await client.connect();
    console.log("Connected successfully to server");
    const findResult = await client.db(dbName).collection(produtoCol).find({}).toArray();
    console.log(findResult);
  } finally {
    await client.close();
  }
}

export const insertCliente = async (data) => {
  try {
    await client.connect();
    console.log("Connected successfully to server");
    let person = {
     nome: "Guilherme",
     email: "gui@mongo.com",
     admin: false,
    };
    await client.db(dbName).collection(clienteCol).insertOne(data);
  } finally {
    await client.close();
  }
}

export const insertProduto = async (data) => {
  try {
    await client.connect();
    await client.db(dbName).collection(produtoCol).insertOne(data);

  } finally {
    await client.close();
  }
}

export const getProdutosByName = async (nome) => {
  try {
    await client.connect();
    await client.db(dbName).collection(produtoCol).find({"nome":{$regex : /nome/} });
    
  }  finally {
    await client.close();
  }
}

