import { Table, Model, Column } from "sequelize-typescript";

@Table({
  tableName: "customers",
})
export default class CustomerModel extends Model {
  @Column({ primaryKey: true })
  declare id: string;

  @Column({ allowNull: false })
  declare full_name: string;

  @Column({ allowNull: false })
  declare email: string;

  @Column({ allowNull: false })
  declare document_number: string;

  @Column({ allowNull: false })
  declare phone: string;
}
