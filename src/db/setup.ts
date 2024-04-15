import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2";
import * as schema from './schema'
// if (!process.env.DB_URL) {
//     throw new Error("DB credentials error");
// }

const connection = mysql.createPool({
    host: '',
    password: '',
    user: '',
    port: ,
    database: '',
    // ssl: 'required'
})

export const db = drizzle(connection)
