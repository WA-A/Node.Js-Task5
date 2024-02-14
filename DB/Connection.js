import Sequelize from 'sequelize';

const sequelize = new Sequelize ('testing', 'root', '', {
    host: 'localhost',
    dialect:'mysql'      /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

  const ConnectDB =  async()=>{  // connect with db
    try {
        return await sequelize.sync();
    }
    catch(error){
          console.log(`error db : ${error.message}`);
    }
  }

  export default  {ConnectDB,sequelize};