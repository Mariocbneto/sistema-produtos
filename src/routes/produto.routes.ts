import { Router } from "express";
import {
  createProduto,
  getProdutos,
  getProduto,
  updateProduto,
  deleteProduto,
} from "../controllers/produto.controller";

const router = Router();

router.post("/", createProduto);
router.get("/", getProdutos);
router.get("/:id", getProduto);
router.put("/:id", updateProduto);
router.delete("/:id", deleteProduto);

export default router;
