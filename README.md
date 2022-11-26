# Applicant Tracking System

## ✨ Projeto

Applicant Tracking System é uma aplicação baseada em uma API de provas. Um usuário pode se cadastrar, fazer login e listar suas informações. Com um token o usuário pode criar e listar provas, questões e alternativas, além de vincular essa provas a um usuário, gerando uma aplicação. Com isso o usuário pode responder às questões de uma prova e somar pontos em sua aplicação e checar seu score final ou parcial a qualquer momento. Por fim o usuário pode finalizar sua aplicação, tendo seus dados de resposta salvos em seu banco de dados e não permitindo novas respostas a sua aplicação.

<br>
<br>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias/bibliotecas:

<table border="0">
 <tr>
<td> NestJs</td>
<td> Typescript</td>
<td> Jest</td>
<td> Bcrypt</td>
 </tr>
  <tr>
<td> Pg</td>
<td> Passport</td>
<td> Eslin</td>
<td> Prettier</td>
 </tr>
  <tr>
<td> TypeOrm</td>
<td> PostgreSQL</td>
<td> Swagger</td>
<td> Insomnia</td>
 </tr>
 
</table>

<br>
<br>

## 👨🏻‍💻 Executando o projeto

Rode um dos comandos abaixo:

```cl
yarn
```

ou

```cl
npm install
```

Após isso, existem dois caminho

### 💿 1º Opção (yarn || npm)

No seu arquivo .env, defina o host como localhost, crie um banco de dados em seu ambiente local e passe o nome as configurações nas variáveis.
Após isso rode:

```cl
yarn migration:generate --name=nomeMigration
```

e

```cl
yarn migration:run
```

ou

```cl
npm run migration:generate --name=nomeMigration
```

e

```cl
npm run migration:run
```

agora é só rodar o servidor:

```cl
npm run start:dev
```

```cl
yarn start:dev
```

### 🐳 2º Opção (Docker + Docker compose)

No seu arquivo .env, defina o host com o mesmo nome do container do db no arquivo docker-compose.yml
Após isso rode:

```cl
docker compose up
```

<br>
<br>

## 🧪 Opções de testagem:

Foram desenvolvidos testes unitários para a criação de usuários e provas.
Para rodar estes testes utilize:

```cl
yarn test
```

ou

```cl
npm run test
```

<br>
<br>

## 📜 Documentação:

Com o servidor roando, acesse a URL abaixo e tenha acesso à documentação gerada pelo Swagger.

`http://localhost:3000/api/`

## Caso prefira, pode baixar meu workspace do insominia para testar os endpoints:

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=GamaInsomnia&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fdanielkleira%2FinsomniaGigalink%2Fmain%2FInsomnia_gama%3Ftoken%3DGHSAT0AAAAAAB3MDVJ4INURAJIUQGYQOJGSY4AA5HQ)

<br>
<br>

## 📅 Organização

Para a organização das tasks do projeto foi utilizado um quadro no Trello
[Quadro](https://trello.com/b/a5i4ZTMG/gama-academy)

<br>
<br>

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE.md) para mais detalhes.
