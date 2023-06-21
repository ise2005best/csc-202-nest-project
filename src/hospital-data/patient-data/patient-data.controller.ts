import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PatientDataService } from './patient-data.service';
import { CreatePatientDatumDto } from './dto/create-patient-datum.dto';
import { UpdatePatientDatumDto } from './dto/update-patient-datum.dto';

@Controller('patient-data')
export class PatientDataController {
  constructor(private readonly patientDataService: PatientDataService) {}

  @Post()
  create(@Body() createPatientDatumDto: CreatePatientDatumDto) {
    return this.patientDataService.create(createPatientDatumDto);
  }

  @Get()
  findAll() {
    return this.patientDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patientDataService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePatientDatumDto: UpdatePatientDatumDto) {
    return this.patientDataService.update(+id, updatePatientDatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patientDataService.remove(+id);
  }
}
