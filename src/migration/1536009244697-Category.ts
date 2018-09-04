import {MigrationInterface, QueryRunner} from "typeorm";

export class Category1536009244697 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "todo_categories_category" ("todoId" integer NOT NULL, "categoryId" integer NOT NULL, CONSTRAINT "PK_5131c830636d855568d3a70c352" PRIMARY KEY ("todoId", "categoryId"))`);
        await queryRunner.query(`ALTER TABLE "todo_categories_category" ADD CONSTRAINT "FK_4347fec6e6cc3be4ce39d9d9f36" FOREIGN KEY ("todoId") REFERENCES "todo"("id") ON DELETE CASCADE`);
        await queryRunner.query(`ALTER TABLE "todo_categories_category" ADD CONSTRAINT "FK_80456ff2d7fd676c1ac2d107f31" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "todo_categories_category" DROP CONSTRAINT "FK_80456ff2d7fd676c1ac2d107f31"`);
        await queryRunner.query(`ALTER TABLE "todo_categories_category" DROP CONSTRAINT "FK_4347fec6e6cc3be4ce39d9d9f36"`);
        await queryRunner.query(`DROP TABLE "todo_categories_category"`);
        await queryRunner.query(`DROP TABLE "category"`);
    }

}
