import { Test, TestingModule } from '@nestjs/testing';
import { SupporterService } from './supporter.service';

describe('SupporterService', () => {
  let service: SupporterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SupporterService],
    }).compile();

    service = module.get<SupporterService>(SupporterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
