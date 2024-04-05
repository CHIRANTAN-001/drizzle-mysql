import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2";
import * as schema from './schema'
// if (!process.env.DB_URL) {
//     throw new Error("DB credentials error");
// }

const connection = mysql.createPool({
    host: 'drizzletest-hecker-faaa.a.aivencloud.com',
    password: 'AVNS_XZIiuN8EkkIImFg9IRJ',
    user: 'avnadmin',
    port: 21205,
    database: 'defaultdb',
    // ssl: 'required'
})

export const db = drizzle(connection)
