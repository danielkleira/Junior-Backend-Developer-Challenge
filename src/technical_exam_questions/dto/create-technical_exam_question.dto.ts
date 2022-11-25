import { ApiProperty } from '@nestjs/swagger';

export class CreateTechnicalExamQuestionDto {
  @ApiProperty({
    example: 'Questão 1)',
    description: 'O título questão',
  })
  title: string;

  @ApiProperty({
    example: 'Qual a linguagem utilizada no NestJS',
    description: 'A pergunta que será feita',
  })
  text: string;
  @ApiProperty({
    example: '68f231db-4f30-4584-aae7-eed4247ef00b',
    description: 'O id da prova à qual pertence a questão',
  })
  exam: string;
}
