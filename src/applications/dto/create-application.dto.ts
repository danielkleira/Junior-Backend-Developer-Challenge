import { ApiProperty } from '@nestjs/swagger';

export class CreateApplicationDto {
  @ApiProperty({
    example: '68f231db-4f30-4584-aae7-eed4247ef00b',
    description: 'O id do usuário que fará a aplicação',
  })
  user: string;

  @ApiProperty({
    example: '68f231db-4f30-4584-aae7-eed4247ef00b',
    description: 'O id da prova sobre a qual será a aplicação',
  })
  exam: string;
}

export class FinishApplicationDto {
  @ApiProperty({
    example: '68f231db-4f30-4584-aae7-eed4247ef00b',
    description: 'O id do usuário que está finalizando a aplicação',
  })
  user: string;

  @ApiProperty({
    example: '68f231db-4f30-4584-aae7-eed4247ef00b',
    description: 'O id da submissão para finalizar a aplicação',
  })
  submission: string;
}
