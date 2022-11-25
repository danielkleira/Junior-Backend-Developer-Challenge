import { ApiProperty } from '@nestjs/swagger';

export class CreateTechnicalExamQuestionsAlternativeDto {
  @ApiProperty({
    example: 'A Linguagem Javascript',
    description: 'O texto da alternativa',
  })
  text: string;

  @ApiProperty({
    example: 'true',
    description: 'Se essa é a alternativa correta, podendo ser true ou false',
  })
  isCorrect: boolean;

  @ApiProperty({
    example: '68f231db-4f30-4584-aae7-eed4247ef00b',
    description: 'O id da questão que esta sendo resondida',
  })
  question: string;
}
