# IG.News 

### What I learned from this project: 

API consumption strategies 

- Client-side: All processing is done client-side and not good for indexing with search engines

- Server-side Rendering (SSR): Dynamic and static data processing is performed by the server. Good for indexing, but the new house it visits it makes a request to the server.

- Static Site Generation (SSG): Static Data processed by the server. period-controlled update

---

Estrategias para consumo de API

- Client-side: todo o processamento é feito pelo lado do cliente e não é bom para indexação com motores de busca

- Server-side Rendering (SSR): Dados dinamicos e estáticos o processamento é realizado pelo servidor. Bom para indexação, porém a casa nova visita ele realiza uma requisição ao servidor.

- Static Site Generation (SSG): Dados Estáticos processados pelo servidor. atualização controlada por periodos

### Technologies used 

- [NextJS](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [ReactJS](https://reactjs.org/)
- [Sass](https://sass-lang.com/)

### Payment platform

- [STRIPE](https://www.stripe.com/br)


### Create new project
- Creating a new project with nextjs 
  ```bash
  yarn create next-app <nome do projeto>
  ```
- Installing typescript in nextjs
  ```bash
  yarn add typescript @types/react @types/node -D
  ```
- Installing SASS 
  ```bash
  yarn add sass
  ```

- Installing Stripe ( Payment Platform API )
  ```bash
  yarn add stripe
  ```