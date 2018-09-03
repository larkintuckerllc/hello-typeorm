import {MigrationInterface, QueryRunner} from "typeorm";

export class Author1535984973609 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "author" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_5a0e79799d372fe56f2f3fa6871" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "todo" ADD "authorId" integer`);
        await queryRunner.query(`ALTER TABLE "todo" ADD CONSTRAINT "FK_c56120106977cc14f975726af07" FOREIGN KEY ("authorId") REFERENCES "author"("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "todo" DROP CONSTRAINT "FK_c56120106977cc14f975726af07"`);
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "authorId"`);
        await queryRunner.query(`DROP TABLE "author"`);
    }

}
