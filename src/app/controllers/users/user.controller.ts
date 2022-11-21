import { Controller, Post, Get, Patch, Delete } from '@nestjs/common';
import { get } from 'http';

@Controller('/users')
export class UserController {
  @Post('')
  public create(): any {
    return { data: 'create!!!' };
  }
  @Get()
  public getAll(): any {
    return { data: 'get All!!!' };
  }
  @Get(':id')
  public getOne(): any {
    return { data: 'get One!!!' };
  }
  @Patch(':id')
  public update(): any {
    return { data: 'update!!!' };
  }
  @Delete(':id')
  public delete(): any {
    return { data: 'delete!!!' };
  }
}
