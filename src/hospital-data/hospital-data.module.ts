import { Module } from '@nestjs/common';
import { ClinicalRecordModule } from './clinical-record/clinical-record.module';
import { PatientDataModule } from './patient-data/patient-data.module';

@Module({
    imports: [ClinicalRecordModule, PatientDataModule],
})
export class HospitalDataModule {}
