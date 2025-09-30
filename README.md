# Sistema Produtos

API para gerenciar produtos (CRUD) usando **Node.js, TypeScript, Express, Prisma e SQLite**.  

## Como rodar

1. Clone o projeto:  
```bash
git clone https://github.com/Mariocbneto/sistema-produtos.git
cd sistema-produtos
npm install
npx prisma db push
npm run dev
http://localhost:3000

```
Endpoints
Método	                URL	                                 Descrição	              Body (JSON) Exemplo
POST	              /produtos	                        Criar produto	              { "nome": "Produto A", "preco": 10.5, "estoque": 20 }
GET	                  /produtos	                        Listar todos	–
GET	                  /produtos/:id	                    Buscar por ID	–
PUT	                  /produtos/:id	                    Atualizar produto	          { "nome": "Produto A Atualizado", "preco": 12.0, "estoque": 25 }
DELETE	              /produtos/:id	                    Deletar produto	–


Dependências principais:

express
typescript
tsx
prisma
zod
dotenv
