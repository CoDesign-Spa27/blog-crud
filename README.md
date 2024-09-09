
## Run Locally

Clone the project

```bash
  git clone https://github.com/CoDesign-Spa27/blog-crud.git
```

Go to the project directory for (Backend)

```bash
  cd backend
```

Install dependencies

```bash
  npm install
```
in backend/config/db.js

Uncomment this code 

```bash
 // const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: './database.sqlite', 
// });
```
comment this code 

```bash
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  logging: false,  
  dialectOptions: {
    ssl: {
      require: true,  
      rejectUnauthorized: false, 
    },
  },
});
```

Start the server

```bash
node server.js
```

Go to the project directory for (Frontend)

```bash
  cd frontend
```

Install dependencies

```bash
  npm install
```

Replace baseURL with "http://localhost:5000/api" (frontend/lib/axios.js)

```bash
const axiosInstance = axios.create({
    baseURL:'https://blog-crud-6ub9.onrender.com/api',
    timeout: 5000
})
```
Run the server "http://localhost:3000"
```bash
npm run dev
```