import mysql from 'mysql';
import { Config } from '../config/index.js';


let db = mysql.createConnection({
    host: Config.host,
    user: Config.user,
    password: Config.password,
    database: Config.database,
  });

db.connect((err) => {
    try {        
    if (err) { throw err; }
        else { console.log('Conectado a la base de datos MySQL!');

        
         }
    } catch (error) {
        console.log("Error al conectar a la base de datos", error.message);
    }
});

export default db;