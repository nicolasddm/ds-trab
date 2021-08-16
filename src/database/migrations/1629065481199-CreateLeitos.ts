import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateLeitos1629065481199 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'leitos',
            columns: [
              {
                name: 'id',
                type: 'uuid',
                isPrimary: true,
                generationStrategy: 'uuid',
                default: 'uuid_generate_v4()',
              },
              {
                name: 'pacient_id',
                type: 'uuid',
                isNullable: true,
              },
              {
                name: 'unidade',
                type: 'varchar',
              },
              {
                name: 'andar',
                type: 'varchar',
              },
              {
                name: 'setor',
                type: 'varchar',
              },
              {
                name: 'ala',
                type: 'varchar',
              },
              {
                name: 'covid_19',
                type: 'varchar',
              },
              {
                name: 'tipo_estadia',
                type: 'varchar',
              },
              {
                name: 'tipo_leito',
                type: 'varchar',
              },
              {
                name: 'created_at',
                type: 'timestamp',
                default: 'now()',
              },
              {
                name: 'updated_at',
                type: 'timestamp',
                default: 'now()',
              },
            ],
          }),
        );

        await queryRunner.createForeignKey(
          'leitos',
          new TableForeignKey({
            name: 'PacienteLeito',
            columnNames: ['pacient_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'pacients',
            onDelete: 'SET NULL',
          }),
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('leitos', 'PacienteLeito');

        await queryRunner.dropTable('leitos');
      }

}
