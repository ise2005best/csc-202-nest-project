import { ClinicalRecord } from "src/hospital-data/clinical-record/entities/clinical-record.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class PatientDatum {
    @PrimaryGeneratedColumn() 
    id: number;

    @Column() 
    firstName: string;

    @Column()
    middleName: string;

    @Column()
    surName: string;

    @Column() 
    dateOfBirth: Date; 

    @Column() 
    homeAddress: string;
    @Column()
    dateOfRegistration: Date;
    
    @Column()
    matriculationNumber: number;

    @OneToMany(() => ClinicalRecord, ClinicalRecord => ClinicalRecord.PatientDatum)
    clinicalRecords: ClinicalRecord[];
}
