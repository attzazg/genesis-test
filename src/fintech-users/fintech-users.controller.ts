import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { FintechUsersService } from './fintech-users.service';
import { CreateFintechUserDto, SignInUserDto, UpdateFintechUserDto } from './dto/create-fintech-user.dto';

@Controller('fintech-users')
export class FintechUsersController {
  constructor(private readonly fintechUsersService: FintechUsersService) {}

  @Post('/signup')
  create(@Body() payload: CreateFintechUserDto) {
    return this.fintechUsersService.create(payload);
  }

  @Get()
  findAll() {
    return this.fintechUsersService.findAll();
  }

  @Get('/get-user')
  findOne(@Query('email') email: string) {
    return this.fintechUsersService.findByEmail(email);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() payload: UpdateFintechUserDto) {
    return this.fintechUsersService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fintechUsersService.remove(id);
  }
}
