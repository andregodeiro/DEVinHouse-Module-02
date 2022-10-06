const { response } = require("express");
const express = require("express");
const { request } = require("http");
const app = express();
const { v4: uuidv4 } = require("uuid"); // Set ID

app.use(express.json());

//Pizzas
const pizzas = [
  { id: "", pizzaName: "", description: "", price: "", ingredients: "" },
];

const orders = [
  {
    clientName: "",
    cpf: "",
    address: "",
    phone: "",
    payment: "",
    observation: "",
    order: "",
  },
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
    pizzaName,
    description,
    price,
    ingredients,
  };
  pizzas.push(newPizza);

  res.status(201, "O objeto da pizaz criada").json(newPizza);
});

app.post("/solicitations", (req, res) => {
  const {
    id,
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
    clientName,
    cpf,
    address,
    phone,
    payment,
    observation,
    orderDescription,
  };

  orders.push(newOrder);

  res.status(202, "O objeto do pedido criado").json(newOrder);
});

app.get("/solicitations", (req, res) => {
  res.send(orders);
  res.status(200);
});

app.get("/solicitations/:id", (req, res) => {
  const filteredOrder = orders.find((order) => order.id === req.params.id);

  if (!filteredOrder) {
    return res.status(404).json({ error: "Pedido não encontrado!" });
  }
  return res.json(filteredOrder);
});

//Port
app.listen(3333, () => {
  console.log("Server online!");
});
