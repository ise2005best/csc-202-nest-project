import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClinicalRecordService } from './clinical-record.service';
import { CreateClinicalRecordDto } from './dto/create-clinical-record.dto';
import { UpdateClinicalRecordDto } from './dto/update-clinical-record.dto';

@Controller('clinical-record')
export class ClinicalRecordController {
  constructor(private readonly clinicalRecordService: ClinicalRecordService) {}
  @Post()
  create(@Body() createClinicalRecordDto: CreateClinicalRecordDto) {
    console.log(createClinicalRecordDto)
    return this.clinicalRecordService.create(createClinicalRecordDto);
  }
  @Get()
  findAll() {
    return this.clinicalRecordService.findAll();
  }

  @Get(':id')
  findUserData(@Param('id') id: string) {
    return this.clinicalRecordService.getForUser(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateClinicalRecordDto: UpdateClinicalRecordDto) {
    return this.clinicalRecordService.update(+id, updateClinicalRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.clinicalRecordService.remove(+id);
  }
}
