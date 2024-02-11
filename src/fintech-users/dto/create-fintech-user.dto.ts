import { ApiProperty } from '@nestjs/swagger';
import {  IsNotEmpty, IsOptional } from 'class-validator';
import { ERoles } from 'src/common/enum';

export class CreateFintechUserDto {
  @ApiProperty({
    type: String,
    example: 'Attzaz'
  })
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ type: String, example: 'Khan' })
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({
    type: String,
    example: 'attzazg@gmail.com'
  })
  @IsNotEmpty()
  email: string;

  @ApiProperty({ type: String, example: '1236456a' })
  @IsNotEmpty()
  password: string;
  
  @ApiProperty({
    example: 'CUSTOMER',
    default: ERoles.CUSTOMER,
    description: 'Please set role of either CUSTOMER or MERCHENT',
    enum: ERoles,
  })
  @IsNotEmpty()
  role: string;

}

export class UpdateFintechUserDto {
  @ApiProperty({
    type: String,
    required: false,
    example: 'Attzaz'
  })
  @IsOptional()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ type: String, example: 'Khan', required: false })
  @IsNotEmpty()
  @IsOptional()
  lastName: string;


}

export class SignInUserDto {
  
    @ApiProperty({
      type: String,
      example: 'attzazg@gmail.com'
    })
    @IsNotEmpty()
    email: string;
  
  }
