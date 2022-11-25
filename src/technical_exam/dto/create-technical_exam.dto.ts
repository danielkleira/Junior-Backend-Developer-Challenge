import { ApiProperty } from '@nestjs/swagger';

export class CreateTechnicalExamDto {
  @ApiProperty({
    example: 'Prova de Tecnología',
    description: 'O nomde da prova que será salva no banco de dados',
  })
  name: string;
}

export class AnswerAlternativeDto {
  @ApiProperty({
    example: '68f231db-4f30-4584-aae7-eed4247ef00b',
    description: 'O id da aplicação',
  })
  application: string;

  @ApiProperty({
    example: '68f231db-4f30-4584-aae7-eed4247ef00b',
    description: 'O id da alternativa',
  })
  alternative: string;
}
