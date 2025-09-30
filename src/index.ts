import express from "express";
import dotenv from "dotenv";
import produtoRoutes from "./routes/produto.routes";

dotenv.config();
const app = express();

app.use(express.json());

// Rota teste
app.get("/", (req, res) => {
  res.json({ message: "API funcionando!" });
});

// Rotas de produto
app.use("/produtos", produtoRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
