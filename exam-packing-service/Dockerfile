# Use a imagem oficial do Node.js como base
FROM node:18

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie o restante do código da aplicação para o diretório de trabalho
COPY . .

# Exponha a porta que o serviço vai usar
EXPOSE 3123

# Comando para iniciar a aplicação
CMD ["node", "./exam-packing-service.js"]
