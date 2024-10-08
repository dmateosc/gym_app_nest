import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from '../infrastructure/rest/user.controller';
import { UserService } from '../application/user.service';
import { PrismaModule } from '@app/prisma';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
