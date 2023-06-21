import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientDatum } from './entities/patient-datum.entity';
import { PatientDataService } from './patient-data.service';
import { PatientDataController } from './patient-data.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PatientDatum])],
  controllers: [PatientDataController],
  providers: [PatientDataService]
})
export class PatientDataModule {}
