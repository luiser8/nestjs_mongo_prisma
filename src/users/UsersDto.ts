import { ApiProperty } from '@nestjs/swagger';

export class UsersDto {
  @ApiProperty({
    example: 'email',
    description: 'Email by user',
  })
  email: string;
  @ApiProperty({
    example: 'name',
    description: 'Name by user',
  })
  name: string;
  @ApiProperty({
    example: 'birthYear',
    description: 'BirthYear by user',
  })
  birthYear: number;
}
