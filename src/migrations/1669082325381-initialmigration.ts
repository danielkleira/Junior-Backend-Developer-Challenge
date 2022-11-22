import { MigrationInterface, QueryRunner } from "typeorm";

export class initialmigration1669082325381 implements MigrationInterface {
    name = 'initialmigration1669082325381'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL, "first_name" character varying(128) NOT NULL, "givern_name" character varying(128) NOT NULL, "email" character varying(128) NOT NULL, "password" character varying(128) NOT NULL, "is_active" boolean NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "technical_exam_question" ("id" uuid NOT NULL, "title" character varying(128) NOT NULL, "text" character varying(128) NOT NULL, "is_active" boolean NOT NULL, "created_at" TIMESTAMP NOT NULL, "updated_at" TIMESTAMP NOT NULL, CONSTRAINT "PK_05703b3db06a4c0105860bf36a2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "technical_exam" ("id" uuid NOT NULL, "name" character varying(128) NOT NULL, "is_active" boolean NOT NULL, "created_at" TIMESTAMP NOT NULL, "updated_at" TIMESTAMP NOT NULL, "technicalExamQuestionsId" uuid NOT NULL, CONSTRAINT "PK_f3806086299596e6bcc721bcc48" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "application" ("id" uuid NOT NULL, "score" integer NOT NULL, "is_active" boolean NOT NULL, "created_at" TIMESTAMP NOT NULL, "updated_at" TIMESTAMP NOT NULL, "user_id" uuid, "exam_id" uuid, CONSTRAINT "REL_87b6e9025d62af8f222feb0dd0" UNIQUE ("exam_id"), CONSTRAINT "PK_569e0c3e863ebdf5f2408ee1670" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "technical_exam_submission" ("id" uuid NOT NULL, "started_at" TIMESTAMP NOT NULL, "finish_at" TIMESTAMP NOT NULL, "is_active" boolean NOT NULL, "created_at" TIMESTAMP NOT NULL, "updated_at" TIMESTAMP NOT NULL, "application_id" uuid, CONSTRAINT "PK_c7100a5be13fd5f2cc203cdc511" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "technical_exam_submission_question_alternative" ("id" uuid NOT NULL, "is_active" boolean NOT NULL, "created_at" TIMESTAMP NOT NULL, "updated_at" TIMESTAMP NOT NULL, "technicalExamSubmission_id" uuid, "technicalExamQuestion_id" uuid, "technicalExamQuestionAlternative_id" uuid, CONSTRAINT "PK_9e4ae423f4a38c954522f592978" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "technical_exam_questions_alternative" ("id" uuid NOT NULL, "text" character varying(128) NOT NULL, "is_correct" character varying(128) NOT NULL, "is_active" boolean NOT NULL, "created_at" TIMESTAMP NOT NULL, "updated_at" TIMESTAMP NOT NULL, "question_id" uuid, CONSTRAINT "PK_8a9b2f576166249752b2c3cc0e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "technical_exam" ADD CONSTRAINT "FK_d64ff99ccc584354807e15b91b0" FOREIGN KEY ("technicalExamQuestionsId") REFERENCES "technical_exam_question"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "application" ADD CONSTRAINT "FK_42f0935cc814e694ed0e61fdece" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "application" ADD CONSTRAINT "FK_87b6e9025d62af8f222feb0dd08" FOREIGN KEY ("exam_id") REFERENCES "technical_exam"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "technical_exam_submission" ADD CONSTRAINT "FK_d87829bc814cc5d91292099b5c8" FOREIGN KEY ("application_id") REFERENCES "application"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "technical_exam_submission_question_alternative" ADD CONSTRAINT "FK_2ee0f1edd6daf5e4b5be995c7d1" FOREIGN KEY ("technicalExamSubmission_id") REFERENCES "technical_exam_submission"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "technical_exam_submission_question_alternative" ADD CONSTRAINT "FK_2a4ab50cc19ff71c0a36e39acbf" FOREIGN KEY ("technicalExamQuestion_id") REFERENCES "technical_exam_question"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "technical_exam_submission_question_alternative" ADD CONSTRAINT "FK_d6b1b2134fb12a52c6086e7f097" FOREIGN KEY ("technicalExamQuestionAlternative_id") REFERENCES "technical_exam_questions_alternative"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "technical_exam_questions_alternative" ADD CONSTRAINT "FK_409a3ea9b0d7a878151a9ee37f9" FOREIGN KEY ("question_id") REFERENCES "technical_exam_question"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "technical_exam_questions_alternative" DROP CONSTRAINT "FK_409a3ea9b0d7a878151a9ee37f9"`);
        await queryRunner.query(`ALTER TABLE "technical_exam_submission_question_alternative" DROP CONSTRAINT "FK_d6b1b2134fb12a52c6086e7f097"`);
        await queryRunner.query(`ALTER TABLE "technical_exam_submission_question_alternative" DROP CONSTRAINT "FK_2a4ab50cc19ff71c0a36e39acbf"`);
        await queryRunner.query(`ALTER TABLE "technical_exam_submission_question_alternative" DROP CONSTRAINT "FK_2ee0f1edd6daf5e4b5be995c7d1"`);
        await queryRunner.query(`ALTER TABLE "technical_exam_submission" DROP CONSTRAINT "FK_d87829bc814cc5d91292099b5c8"`);
        await queryRunner.query(`ALTER TABLE "application" DROP CONSTRAINT "FK_87b6e9025d62af8f222feb0dd08"`);
        await queryRunner.query(`ALTER TABLE "application" DROP CONSTRAINT "FK_42f0935cc814e694ed0e61fdece"`);
        await queryRunner.query(`ALTER TABLE "technical_exam" DROP CONSTRAINT "FK_d64ff99ccc584354807e15b91b0"`);
        await queryRunner.query(`DROP TABLE "technical_exam_questions_alternative"`);
        await queryRunner.query(`DROP TABLE "technical_exam_submission_question_alternative"`);
        await queryRunner.query(`DROP TABLE "technical_exam_submission"`);
        await queryRunner.query(`DROP TABLE "application"`);
        await queryRunner.query(`DROP TABLE "technical_exam"`);
        await queryRunner.query(`DROP TABLE "technical_exam_question"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
