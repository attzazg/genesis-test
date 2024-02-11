import { Test, TestingModule } from '@nestjs/testing';
import { FintechUsersService } from './fintech-users.service';

describe('FintechUsersService', () => {
  let service: FintechUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FintechUsersService],
    }).compile();

    service = module.get<FintechUsersService>(FintechUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
