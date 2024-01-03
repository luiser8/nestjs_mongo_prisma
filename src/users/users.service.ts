import { HttpException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { UsersDto } from './UsersDto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getAllUsers(): Promise<User[]> {
    try {
      return await this.prisma.user.findMany();
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }

  async getUser(id: string): Promise<User> {
    try {
      return await this.prisma.user.findUnique({
        where: { id },
      });
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }

  async createUser(userData: UsersDto): Promise<User> {
    try {
      const result = await this.prisma.user.create({
        data: userData,
      });
      return result;
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }

  async updateUser(id: string, userData: UsersDto): Promise<User> {
    try {
      const result = await this.prisma.user.update({
        where: { id },
        data: userData,
      });
      return result;
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }

  async deleteUser(id: string): Promise<User> {
    try {
      const result = await this.prisma.user.delete({
        where: { id },
      });
      return result;
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }
}
