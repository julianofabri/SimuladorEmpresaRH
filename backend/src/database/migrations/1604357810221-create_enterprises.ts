import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createEnterprises1604357810221 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'enterprises',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'uf',
                    type: 'varchar'
                },
                {
                    name: 'fantasy_name',
                    type: 'varchar'
                },
                {
                    name: 'cnpj',
                    type: 'varchar'
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('enterprises');
    }

}
