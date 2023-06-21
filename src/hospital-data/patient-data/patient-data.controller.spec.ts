import { Test, TestingModule } from '@nestjs/testing';
import { PatientDataController } from './patient-data.controller';
import { PatientDataService } from './patient-data.service';

describe('PatientDataController', () => {
  let controller: PatientDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PatientDataController],
      providers: [PatientDataService],
    }).compile();

    controller = module.get<PatientDataController>(PatientDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
