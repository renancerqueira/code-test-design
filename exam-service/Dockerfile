FROM node:18-alpine

WORKDIR /usr/src/app

# Copie apenas os arquivos package.json e package-lock.json para a instalação de dependências
COPY package*.json ./

# Execute a instalação de dependências
RUN npm install

# Copie o restante dos arquivos
COPY . .

# Execute o build
RUN npm run build && ls -l dist

# Exponha a porta 3000
EXPOSE 3000

# Comando para rodar a aplicação em produção
CMD ["npm", "run", "start:prod"]
