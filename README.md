## Instalaciones necesarias ##########
- En este proyecto no usaremos prettier
* Desinstalamos prettier, eslint-config-prettier, eslint-plugin-prettier"
  * npm remove prettier eslint-config-prettier eslint-plugin-prettier
- Instalamos graphql: https://docs.nestjs.com/graphql/quick-start
## creamos un modulo: nest g mo helloWorld
## creamos un resolve: nest g r helloWorld --no-spec
    * los resolve van en los providers y son como los controllers
## Ver el endpoint de graphql: http://localhost:3000/graphql
## instalamos apolo server 
 -  npm install apollo-server-core
## Para ejecutar el proyecto
npm run start:dev
##### Ejemplos de query ########
Ingresar a la url: http://localhost:3000/graphql
## Ejecutar query hola mundo

{
  hello
}
## query con argumentos graphql
{
 randomZeroTo(to: 1)
}
## query Customer: Mostrar el ObjectType client
{
  findCustomer {
    documentNumber,
    names,
    lastName
  }
}
  