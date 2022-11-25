import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.first_name = createUserDto.first_name;
    user.password = bcrypt.hashSync(createUserDto.password, 10);
    user.email = createUserDto.email;
    user.givern_name = createUserDto.givern_name;
    const userToCreate = this.userRepository.create(user);
    return this.userRepository.save(userToCreate);
  }

  async findOne(email: string): Promise<User | undefined> {
    return this.userRepository.findOneBy({ email: email });
  }
}
