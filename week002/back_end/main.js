const { response } = require("express");
const express = require("express");
const { request } = require("http");
const app = express();
const { v4: uuidv4 } = require("uuid"); // Set ID

app.use(express.json());

//Pizzas
const pizzas = [];

const orders = [];

const beverages = [
  { name: "Coca-Cola", type: "Refrigerante", price: "4.99" },
  { name: "Coca-Cola Zero", type: "Refrigerante", price: "4.99" },
  { name: "Sprite", type: "Refrigerante", price: "4.99" },
  { name: "Cajuína São Geraldo", type: "Refrigerante", price: "4.99" },
  { name: "Suco de Laranja", type: "Suco", price: "3.99" },
  { name: "Suco de Limão", type: "Suco", price: "3.99" },
  { name: "Suco de Maracujá", type: "Suco", price: "3.99" },
  { name: "Água Mineral", type: "Água", price: "2.99" },
  { name: "Água Mineral com Gás", type: "Água", price: "3.49" },
];

//Requests
app.get("/", (req, res) => {
  res.send("<h1>Pizzaria Divina Pizza</h1>");
});

app.get("/pizzas", (req, res) => {
  res.send(pizzas);
  res.status(200);
});

app.post("/pizzas", (req, res) => {
  const { id, pizzaName, description, price, ingredients } = req.body;

  const newPizza = {
    id: uuidv4(),
    pizzaName: req.body.pizzaName,
    description: req.body.description,
    price: req.body.price,
    ingredients: [req.body.ingredients],
  };
  pizzas.push(newPizza);

  res.status(201, "O objeto da pizaz criada").json(newPizza);
});

app.post("/solicitations", (req, res) => {
  const {
    id,
    status,
    clientName,
    cpf,
    address,
    phone,
    payment,
    observation,
    orderDescription,
  } = req.body;

  const newOrder = {
    id: uuidv4(),
    status: req.body.status,
    clientName: req.body.clientName,
    cpf: req.body.cpf,
    address: req.body.address,
    phone: req.body.phone,
    payment: req.body.payment,
    observation: req.body.observation,
    orderDescription: req.body.orderDescription,
  };

  orders.push(newOrder);

  res.status(202, "O objeto do pedido criado").json(newOrder);
});

app.get("/solicitations", (req, res) => {
  if (orders.length < 1) {
    return res.status(205).json({ message: "Não há pedidos cadastrados" });
  }
  return res.send(orders);
  res.status(200);
});

app.get("/solicitations/:id", (req, res) => {
  const filteredOrder = orders.find((order) => order.id === req.params.id);

  if (!filteredOrder) {
    return res.status(404).json({ error: "Pedido não encontrado!" });
  }
  return res.json(filteredOrder);
});

app.post("/solicitations/done", (req, res) => {});

//Port
app.listen(3333, () => {
  console.log("Server online!");
});
