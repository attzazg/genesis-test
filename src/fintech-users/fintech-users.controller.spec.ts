import { Test, TestingModule } from '@nestjs/testing';
import { FintechUsersController } from './fintech-users.controller';
import { FintechUsersService } from './fintech-users.service';

describe('FintechUsersController', () => {
  let controller: FintechUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FintechUsersController],
      providers: [FintechUsersService],
    }).compile();

    controller = module.get<FintechUsersController>(FintechUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
