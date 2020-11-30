## Como executar

### Instale os pacotes

`npm install`

### Configure o .env

Crie um arquivo .env na pasta raiz de acordo com o .env.example, substituindo os valores pela sua config local.

### Rode as migrations

Para criar as tabelas necessárias, execute o seguinte comando:
`npx sequelize-cli db:migrate`

### Tudo pronto

`npm start`
