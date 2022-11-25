import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'Logan',
    description: 'O nome será salvo no banco de dados',
  })
  first_name: string;

  @ApiProperty({
    example: 'Wolverine',
    description: 'O nome que deseja utilizar será salvo no banco de dados',
  })
  givern_name: string;

  @ApiProperty({
    example: 'logan@email.com',
    description: 'O email será salvo no banco de dados',
  })
  email: string;

  @ApiProperty({
    example: '1234',
    description: 'A senha será salva no banco de dados',
  })
  password: string;
}

export class FindUserDto {
  @ApiProperty({
    example: 'xavier@email.com',
    description: 'O email será salvo no banco de dados',
  })
  email: string;
}
