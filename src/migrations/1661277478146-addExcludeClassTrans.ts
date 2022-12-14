import { MigrationInterface, QueryRunner } from "typeorm";

export class addExcludeClassTrans1661277478146 implements MigrationInterface {
    name = 'addExcludeClassTrans1661277478146'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "id" DROP DEFAULT`);
    }

}
