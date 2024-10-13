import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName: "Tarea"
})
export class Todo extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    title!: string;

    @Column({
        type: DataType.TEXT,
        allowNull: true
    })
    description?: string;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    completed!: boolean;
}
