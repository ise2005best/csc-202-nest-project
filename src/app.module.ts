import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HospitalDataModule } from './hospital-data/hospital-data.module';
import { ClinicalRecordModule } from './hospital-data/clinical-record/clinical-record.module';
import { PatientDataModule } from './hospital-data/patient-data/patient-data.module';




@Module({
  imports: [TypeOrmModule.forRoot({
    type: "postgres",
    host: "localhost",
    port: 5434,
    username: "postgres",
    password: "postgres",
    database: "hospital-data",
    entities: [
      "dist/**/*.entity{.ts,.js}"
    ],
    synchronize: true
  }), HospitalDataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
