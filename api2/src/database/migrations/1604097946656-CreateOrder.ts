import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';
import { Table } from 'typeorm/schema-builder/table/Table';

export default class CreateOrder1604097946656 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'pedidos',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'id_usuario',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'status',
            type: 'varchar',
            isNullable: true,
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      'pedidos',
      new TableForeignKey({
        name: 'OrderProvider',
        columnNames: ['id_usuario'],
        referencedColumnNames: ['id'],
        referencedTableName: 'usuarios',
        onDelete: 'SET NULL',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('pedidos', 'OrderProvider');
    await queryRunner.dropTable('pedidos');
  }
}
