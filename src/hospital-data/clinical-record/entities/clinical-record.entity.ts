import { PatientDatum } from "src/hospital-data/patient-data/entities/patient-datum.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class ClinicalRecord {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    clinicDate: Date;

    @Column()
    natureOfAilment: string;

    @Column()
    medicinePrescribed: string;

    @Column()
    proceedureUndertaken: string;

    @Column()
    dateOfNextAppointment: Date;

    @ManyToOne(() => PatientDatum, (patient) => patient.clinicalRecords)
    PatientDatum: PatientDatum;
}
