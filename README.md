# Curso-AirCnC
Projeto semana Omnistack 9.0, utilizando React, NodeJS e React Native - [Rocketseat](https://rocketseat.com.br/)

Índice :clipboard: 
=============================

- [Back-end](#back-end)
- [Front-end](#front-end)
- [Mobile](#mobile)

----------------------------------

# Back-end

- [Pré requisitos](#pré-requisitos)
- [Libs](#libs)
- [MongoDB](#mongodb)
- [Requisições](#requisições)


### Pré requisitos

- Git [Git](https://git-scm.com)
- Node.js [Node.js v10.16](https://nodejs.org/)
- Yarn [Yarn v1.13](https://yarnpkg.com/)
- Google Chrome Browser [Google](https://www.google.pt/intl/pt-PT/chrome/?brand=CHBD&gclid=CjwKCAiAxMLvBRBNEiwAKhr-nMvKg5nZhwHd__xLE-Mume31jYijN5WLG991vsf4owDGK4VNHWtrEhoCNRgQAvD_BwE&gclsrc=aw.ds)

### Libs

Para instalação das libs você deve executar os comandos no terminal dentro do projeto.

* Express
>	* yarn add express ou npm install express;

* Nodemon
>	* yarn add nodemon ou npm install nodemon;

* Mongoose
>	* yarn add mongoose ou npm install mongoose;

* Cors
>	* yarn add cors ou npm install cors;

* Multer
>	* yarn add multer ou npm install multer;

### MongoDB

* Crie uma conta no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas), dentro da sua conta click em "Clusters" e "Build a Cluster", única área recomendada para edição é o 
"Cluster Name" onde você pode editar o nome, click em "Create Cluster", aguarde a criação. 

* Após criado, ir em "Database Access", crie um novo usuário em "+ ADD NEW USER", digite o usuário e senha **(será utilizado na 
api)**, e selecione a opção "Read and write to any database".

* Volte para o "Clusters", click em "CONNECT", selecione "Connect Your Application", em "DRIVER" por "Node.js", em "VERSION" 
selecione a sua versão (você pode verificar a sua digitando "node -v" no terminal) (minha versão é 3.0 or later), click em 
copy da url, e colocar no arquivo server.js como string, altere "username" e "password" para o mesmo usuário criado em 
"Database Access", altere a parte "test" dessa mesma URL para o nome da sua base de dados (foi utilizado a "semana").

* [MongoDB Compass](https://www.mongodb.com/products/compass) é indicado para verificar as informações contidas do banco de bados.

### Requisições

* As requisições foram feitas para http://localhost:3333 via [Insomnia](https://insomnia.rest/download/), o endereço pode ser 
alterado em server.js. Importate: o backend deve estar sendo executado pelo comando "yarn dev" via terminal na 
mesma pasta dos arquivos.

* As rotas das requições estão presentes no arquivo routes.js, verifique os dados necessários de cada requisição nos arquivos
dos controllers.
