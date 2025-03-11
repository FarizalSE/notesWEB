import { Sequelize } from "sequelize";

// Nyambungin db ke BE
const db = new Sequelize("notes", "root", "", {
  host: "34.66.49.235",
  dialect: "mysql",
});

export default db;
