import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Header() {
  // const style = { color: "red", textTransform: "uppercase" };
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast Pizza Company</h1>
    </header>
  );
}

function Menu() {

  const pizzas = pizzaData;

  return (
    <main className="menu">
      <h2>Menu</h2>
      {pizzas.length > 0 && <ul className="pizzas">
      {pizzaData.map((pizza) => <Pizza key={pizza.name} pizzaObject={pizza} />)}
      </ul>}
    </main>
  );
}


function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.pizzaObject.photoName} alt={props.name} />
      <div>
        <h3>{props.pizzaObject.name}</h3>
        <p>{props.pizzaObject.ingredients}</p>
        <span>{props.pizzaObject.price+3}</span>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();

  const openHour = 12;
  const closeHour = 22;
  const open = hour >= openHour && hour <= closeHour;

  //   if (hour >= openHour && hour <= closeHour) {
  //     alert("We're currently open");
  //   } else {
  //     alert("We're currently open");
  //     return <p>Sorry we're closed</p>;
  //   }

  return <footer className="footer">{open ? (
    <div className="order">
      <p>We will open until {closeHour}:00. Please come visit us!</p>
      <button className="btn">Order</button>
    </div>
  ) : (<p>We are closed now until {openHour}:00</p>)}</footer>;
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
