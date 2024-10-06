
# Projeto: Sistema de Serviços para Gestão de Exames

## Objetivo

Esta solução é composta por três serviços que juntos formam um sistema para gestão de exames. Cada um dos serviços tem seu papel específico dentro da solução:

1. **exam-packing-service**: Serviço responsável por empacotamento e processamento de dados relacionados aos exames.
2. **enrollment-service**: Serviço de cadastro e gerenciamento de exames.
3. **exam-service**: Serviço principal para manipulação e consulta de exames, incluindo funcionalidades avançadas de gerenciamento.

## Stack Tecnológico

- **Node.js/NestJS**: Utilizado como framework principal para os serviços (enrollment-service e exam-service).
- **JavaScript**: Utilizado para a lógica do exam-packing-service.
- **Docker**: Utilizado para containerização e gerenciamento dos serviços.
- **PostgreSQL**: Banco de dados utilizado para persistência de dados.
- **Redis**: Utilizado para caching.
- **TypeScript**: Linguagem principal para os serviços NestJS.
- **Swagger**: Utilizado para documentação dos serviços NestJS.

## Pré-requisitos

- Docker e Docker Compose instalados
- Node.js (opcional para desenvolvimento local)

## Passos para Executar a Solução

1. **Clone o Repositório**: (Se ainda não estiver clonado)
   ```bash
   git clone https://github.com/renancerqueira/code-test-design.git
   cd code-test-design
   ```

2. **Configuração do Docker**:
   Certifique-se de que você possui o Docker Compose configurado. No diretório raiz, há um arquivo `docker-compose.yml`, que já está configurado para iniciar todos os serviços e bancos de dados necessários.

3. **Subir os Contêineres com Docker**:
   Na raiz do projeto, execute o seguinte comando para iniciar todos os serviços:
   ```bash
   docker-compose up --build
   ```
   Este comando irá baixar as dependências necessárias, construir as imagens Docker e iniciar os serviços.

4. **Acessar os Serviços**:

   Os serviços **enrollment-service** e **exam-service** possuem documentação Swagger e estas podem ser acessadas via navegador através das URLs abaixo, quando executados localmente:
   
   - **enrollment-service**: http://localhost:3000/api
   
   - **exam-service**: http://localhost:3001/api
