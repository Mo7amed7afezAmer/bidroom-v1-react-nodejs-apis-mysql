const express = require("express");
const cors= require("cors");

const app = express();
const port = 3535;

const userRouter = require("./route/userRouter");
const loginRouter = require("./route/loginRouter");

app.use(cors());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// routes
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

// routes => [users, product]
app.use("/login", loginRouter);
app.use("/users", userRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });

  return;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});