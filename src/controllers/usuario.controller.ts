import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { usuarioSchema } from "../validators/usuario.validator"; // cria esse Zod também

const prisma = new PrismaClient();

export const getUsuarios = async (req: Request, res: Response) => {
  try {
    const usuarios = await prisma.usuario.findMany();
    res.json(usuarios);
  } catch {
    res.status(500).json({ error: "Erro ao listar usuários" });
  }
};

export const getUsuario = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const usuario = await prisma.usuario.findUnique({
      where: { id: Number(id) },
    });
    if (!usuario) return res.status(404).json({ error: "Usuário não encontrado" });
    res.json(usuario);
  } catch {
    res.status(500).json({ error: "Erro ao buscar usuário" });
  }
};

export const createUsuario = async (req: Request, res: Response) => {
  try {
    const parsed = usuarioSchema.parse(req.body);
    const usuario = await prisma.usuario.create({ data: parsed });
    res.status(201).json(usuario);
  } catch (error: any) {
    if (error.errors) return res.status(400).json({ errors: error.errors });
    res.status(500).json({ error: "Erro ao criar usuário" });
  }
};

export const updateUsuario = async (req: Request, res: Response) => {
  try {
    const parsed = usuarioSchema.parse(req.body);
    const { id } = req.params;
    const usuario = await prisma.usuario.update({
      where: { id: Number(id) },
      data: parsed,
    });
    res.json(usuario);
  } catch (error: any) {
    if (error.errors) return res.status(400).json({ errors: error.errors });
    res.status(500).json({ error: "Erro ao atualizar usuário" });
  }
};

export const deleteUsuario = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.usuario.delete({ where: { id: Number(id) } });
    res.json({ message: "Usuário deletado com sucesso" });
  } catch {
    res.status(500).json({ error: "Erro ao deletar usuário" });
  }
};
