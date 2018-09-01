import {MigrationInterface, QueryRunner} from "typeorm";

export class Initialize1535764766377 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "todo" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "isComplete" boolean NOT NULL, CONSTRAINT "PK_d429b7114371f6a35c5cb4776a7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "todo"`);
    }

}
