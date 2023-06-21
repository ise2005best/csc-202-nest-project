import { Test, TestingModule } from '@nestjs/testing';
import { PatientDataService } from './patient-data.service';

describe('PatientDataService', () => {
  let service: PatientDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientDataService],
    }).compile();

    service = module.get<PatientDataService>(PatientDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
