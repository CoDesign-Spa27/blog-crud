const { Sequelize } = require('sequelize');
const dotenv = require('dotenv')
dotenv.config()

// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: './database.sqlite', 
// });
 


// using postgres because sqllite cannot be deployed
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

 
 

module.exports = sequelize;
