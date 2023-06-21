import { PatientDatum } from "src/hospital-data/patient-data/entities/patient-datum.entity";

export class CreateClinicalRecordDto {
    readonly ClinicDate?: Date;
    readonly natureOfAilment?: string;
    readonly medicinePrescribed?: string;
    readonly proceedureUndertaken?: string;
    readonly dateOfNextAppointment: Date;
    readonly patientDatum: PatientDatum
}
