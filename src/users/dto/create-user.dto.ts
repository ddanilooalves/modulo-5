import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsPositive, IsString, Length } from "class-validator";

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do usuário',
    example: 'Danilo Alves'
  })
  name: string;

  @IsString()
  @IsEmail()
  @ApiProperty({
    description: 'E-mail do usuário',
    example: 'daniloalves0512@gmail.com'
  })
  email: string;

  @IsString()
  @ApiProperty({
    description: 'Senha do usuário',
    example: 'danilo2012'
  })
  password: string;

  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'Número do CPF do usuário',
    example: 12131561420,
  })
  CPF: number;

  @IsBoolean()
  @ApiProperty({
    description: 'Usuário administrador',
    example: true || false
  })
  isAdmin?: boolean;
}
