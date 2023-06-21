import { PartialType } from '@nestjs/mapped-types';
import { CreatePatientDatumDto } from './create-patient-datum.dto';

export class UpdatePatientDatumDto extends PartialType(CreatePatientDatumDto) {}
