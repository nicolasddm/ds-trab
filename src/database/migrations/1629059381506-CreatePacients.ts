import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePacients1629059381506 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'pacients',
            columns: [
              {
                name: 'id',
                type: 'uuid',
                isPrimary: true,
                generationStrategy: 'uuid',
                default: 'uuid_generate_v4()',
              },
              {
                name: 'cpf',
                type: 'varchar',
                isUnique: true,
              },
              {
                name: 'nome',
                type: 'varchar',
              },
              {
                name: 'idade',
                type: 'varchar',
              },
              {
                name: 'setor',
                type: 'varchar',
              },
              {
                name: 'unidade',
                type: 'varchar',
              },
              {
                name: 'codigoCid',
                type: 'varchar',
              },
              {
                name: 'origem',
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
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('pacients');
      }
}
