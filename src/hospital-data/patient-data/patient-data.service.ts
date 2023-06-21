import { Injectable, createParamDecorator } from '@nestjs/common';
import { CreatePatientDatumDto } from './dto/create-patient-datum.dto';
import { UpdatePatientDatumDto } from './dto/update-patient-datum.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PatientDatum } from './entities/patient-datum.entity';

@Injectable()
export class PatientDataService {
  constructor(
    //inject user repository for use here in UsersService as if it is part of the class
    @InjectRepository(PatientDatum)
    private PatientBiodatumRepository: Repository<PatientDatum>
  ) { }
  async create(CreatePatientBiodatumDto: CreatePatientDatumDto) {
    const newPatientBiodatum: PatientDatum = this.PatientBiodatumRepository.create(CreatePatientBiodatumDto)
    return this.PatientBiodatumRepository.save(newPatientBiodatum);
    //return 'This action adds a new user';
  }
  async findAll() {
    //return `This action returns all users`;
    return await this.PatientBiodatumRepository.find();
  } async findOne(id: number) {
    //return `This action returns a #${id} user`;
    return await this.PatientBiodatumRepository.findOne({
      where: {
        // same as id:id
      }
    });
  }
  async update(id: number, updatePatientBiodatumDto: UpdatePatientDatumDto) {
    //return `This action updates a #${id} user`;
    return await this.PatientBiodatumRepository.update(id, updatePatientBiodatumDto);
  }
  async remove(id: number) {
    //return `This action removes a #${id} user`;
    return await this.PatientBiodatumRepository.delete(id);
  }
}