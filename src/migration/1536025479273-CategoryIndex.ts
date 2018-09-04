import {MigrationInterface, QueryRunner} from "typeorm";

export class CategoryIndex1536025479273 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE INDEX "IDX_1536025479273" ON "todo_categories_category"("categoryId") `);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP INDEX "IDX_1536025479273"`);
    }

}
