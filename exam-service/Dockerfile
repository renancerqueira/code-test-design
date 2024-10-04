# Etapa 1: Usar uma imagem oficial do Node.js (alpine é uma versão leve)
FROM node:18-alpine AS builder

# Definir o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copiar o arquivo package.json e o package-lock.json (se existir)
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar o código da aplicação
COPY . .

# Build da aplicação NestJS para produção
RUN npm run build

# Etapa 2: Criar a imagem final para produção, usando a aplicação já compilada
FROM node:18-alpine

# Definir o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copiar as dependências instaladas da fase de build
COPY --from=builder /usr/src/app/node_modules ./node_modules

# Copiar os arquivos compilados da fase de build
COPY --from=builder /usr/src/app/dist ./dist

# Expor a porta em que a aplicação irá rodar
EXPOSE 3001

# Comando para iniciar a aplicação NestJS em produção
CMD ["node", "dist/main"]
