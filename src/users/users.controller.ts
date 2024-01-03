import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { User as UserModel } from '@prisma/client';
import { UsersService } from './users.service';
import { UsersDto } from './UsersDto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('all')
  async getAllUsers(): Promise<UserModel[]> {
    return await this.usersService.getAllUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<UserModel> {
    return await this.usersService.getUser(id);
  }

  @Post('create')
  async createUser(@Body() userData: UsersDto): Promise<UserModel> {
    return this.usersService.createUser(userData);
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() userData: UsersDto) {
    return this.usersService.updateUser(id, userData);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(id);
  }
}
