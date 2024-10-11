import { open } from "sqlite";
import sqlite3 from 'sqlite3';

async function callingDb() {
   const db = await open({
      filename: './db/database.db',
      driver: sqlite3.Database,
   });
   return db;
}

export const insert = async (name, email, phone, pass) => {
   console.log(name, email, phone, pass);

   try {
      const conn = await callingDb();
      console.log(conn);

      // Use parameterized query to handle values properly
      const sql = `INSERT INTO userdata (Name, Email, Phone, Pass) VALUES (?, ?, ?, ?)`;
      await conn.run(sql, [name, email, phone, pass]);

      console.log('Insert successful');
      await conn.close();
   } catch (error) {
      console.error('Error inserting data:', error);
   }
};









// import { open } from "sqlite";
// import sqlite3 from 'sqlite3'
// // import server from './main.js'
// async function callingDb(){
//    const db = await open({
//       filename:'./db/database.db',
//       driver:sqlite3.Database,
//    })


// return db;

// }



// export const insert =  async(name, email, phone, pass)=>{

//    console.log(name, email, phone, pass);
   
//    callingDb().then(async (conn) =>{
//     console.log(conn);
    
//     let res = await conn.run(`INSERT INTO userdata('id', 'Name','Email','Phone','Pass') VALUES(${name},${email},${phone},${pass})`);
//    conn.close()
//    })
// }



