import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from '../auth/auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

const userEntityCreate: User = new User({
  first_name: 'Logan',
  email: 'logan@gmail.com',
  givern_name: 'Wolverine',
  password: '1234',
});

describe('UsersController', () => {
  let Usercontroller: UsersController;
  let Userservice: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: {
            createUser: jest.fn().mockResolvedValue(userEntityCreate),
            login: jest.fn(),
          },
        },
        { provide: AuthService, useValue: {} },
      ],
    }).compile();

    Usercontroller = module.get<UsersController>(UsersController);
    Userservice = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(Usercontroller).toBeDefined();
    expect(Userservice).toBeDefined();
  });

  describe('createUser', () => {
    it('should return a created user', async () => {
      const body: CreateUserDto = {
        first_name: 'Logan',
        givern_name: 'Wolverine',
        email: 'logan@email.com',
        password: '1234',
      };
      const result = await Usercontroller.createUser(body);
      expect(result).toEqual(userEntityCreate);
    });
  });
});
