import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClinicalRecord } from './entities/clinical-record.entity';
import { PatientDatum } from '../patient-data/entities/patient-datum.entity';
import { CreateClinicalRecordDto } from './dto/create-clinical-record.dto';
import { UpdateClinicalRecordDto } from './dto/update-clinical-record.dto';

@Injectable()
export class ClinicalRecordService {
  constructor(
    @InjectRepository(ClinicalRecord)
    private readonly clinicalRecordRepository: Repository<ClinicalRecord>,
    @InjectRepository(PatientDatum)
    private readonly patientDatumRepository: Repository<PatientDatum>,
  ) {}

  async create(createClinicalRecordDto: CreateClinicalRecordDto) {
    const clinicalRecord: ClinicalRecord = await this.clinicalRecordRepository.create(createClinicalRecordDto);

    if (createClinicalRecordDto.patientDatum){
      const newPatient = this.patientDatumRepository.create(createClinicalRecordDto.patientDatum)
      const patient: PatientDatum = await this.patientDatumRepository.save(newPatient)
      clinicalRecord.PatientDatum = patient
    }

    return await this.clinicalRecordRepository.save(clinicalRecord);
  }

  async findAll(){
    return await this.clinicalRecordRepository.find({ relations: ['PatientDatum'] });
  }

  async findOne(id: number) {
      return await this.clinicalRecordRepository.findOne({where: {id}, relations: ['PatientDatum']})
  }
  
  async getForUser(id: number) {
    return await this.clinicalRecordRepository.find({where: {PatientDatum: {
      matriculationNumber:id
    }}, relations: ['PatientDatum']})
}

  async update(id: number, updateClinicalRecordDto: UpdateClinicalRecordDto){
    await this.clinicalRecordRepository.update(id, updateClinicalRecordDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.clinicalRecordRepository.delete(id);
  }
}
