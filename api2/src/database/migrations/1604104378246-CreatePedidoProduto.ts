import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';
import { Table } from 'typeorm/schema-builder/table/Table';

export default class CreatePedidoProduto1604104378246
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'pedido_produto',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'id_pedido',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'id_produto',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'quantidade',
            type: 'number',
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
      'pedido_produto',
      new TableForeignKey({
        name: 'OrderProvider',
        columnNames: ['id_pedido'],
        referencedColumnNames: ['id'],
        referencedTableName: 'pedidos',
        onDelete: 'SET NULL',
      })
    );
    await queryRunner.createForeignKey(
      'pedido_produto',
      new TableForeignKey({
        name: 'ProductProvider',
        columnNames: ['id_produto'],
        referencedColumnNames: ['id'],
        referencedTableName: 'produtos',
        onDelete: 'SET NULL',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('pedido_produto', 'OrderProvider');
    await queryRunner.dropForeignKey('pedido_produto', 'ProductProvider');
    await queryRunner.dropTable('pedido_produto');
  }
}
