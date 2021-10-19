//import express
const express = require("express");
const { Pool } = require("pg");

//create new express intance
const app = express();
const port = 3001;

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

//end-point-1
app.get("/", (req, res) => {
  res.send("<h1>Welcome</h1>");
});

//end point-2
app.get("/api/products", (req, res) => {
  pool.query("SELECT * FROM product", (err, result) => {
    if (err) throw err;
    res.status(200).json(result.rows);
  });
});

app.listen(port, () => {
  console.log(`server is hosting at post: ${port}`);
  console.log("Listening ...");
});
