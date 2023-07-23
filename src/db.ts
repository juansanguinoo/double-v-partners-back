import { DataSource } from "typeorm";
import { User } from "./domain/models/user.model";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "mysqldb",
  port: 3306,
  username: "root",
  password: "password",
  database: "doublevdb",
  entities: [User],
  synchronize: true,
  logging: false,
});
