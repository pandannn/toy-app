//import express
const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

//create new express intance
const app = express();
const port = 5001;

//postgres config
const pgConfig = {
  user: "pandan",
  host: "localhost",
  database: "postgres_tests",
  password: "Krongsiri1",
  port: 5432,
};

//create new Pool
const pool = new Pool(pgConfig);

//middleware
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(
  cors({
    origin: "*",
  })
);

//API: Get all product
app.get("/api/products", (req, res) => {
  pool.query("SELECT * FROM product", (err, result) => {
    if (err) throw err;
    res.status(200).json(result.rows);
  });
});
//API: Get all orders
app.get("/api/orders", (req, res) => {
  pool.query('SELECT * FROM "order"', (err, result) => {
    if (err) throw err;
    res.status(200).json(result.rows);
  });
});

//handle post request
app.post("/api/submit", (req, res) => {
  pool.query(
    'INSERT INTO "order"(p_name, price , total) VALUES($1, $2, $3) RETURNING oid',
    [req.body.names, req.body.price, req.body.total],
    (err, result) => {
      if (err) throw err;
      res.status(200).json({
        message: "success",
        id: result.rows[0].id,
      });
    }
  );
});

app.listen(port, () => {
  console.log(`server is hosting at post: ${port}`);
  console.log("Listening ...");
});
