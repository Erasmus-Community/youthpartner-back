import { Controller, Get, Param, Put, Delete, ParseIntPipe, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getUser(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.userService.getUser(id);
  }

  // TODO:
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async updateUser(): Promise<User>{
    return this.userService.updateUser();
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number): Promise<User>{
    return this.userService.deleteUser(id);
  }
}
