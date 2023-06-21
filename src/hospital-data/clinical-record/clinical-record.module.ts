import { Module } from '@nestjs/common';
import { ClinicalRecordService } from './clinical-record.service';
import { ClinicalRecordController } from './clinical-record.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClinicalRecord } from './entities/clinical-record.entity';
import { PatientDatum } from '../patient-data/entities/patient-datum.entity';
@Module({
  imports:[TypeOrmModule.forFeature([ClinicalRecord, PatientDatum])],
  controllers: [ClinicalRecordController],
  providers: [ClinicalRecordService]
})
export class ClinicalRecordModule {}
