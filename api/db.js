import mysql from "mysql";

export const db = mysql.createConnection ({
    host: "localhost",
    user: "root",
    password: "33496859_Lu",
    database: "crud",
});