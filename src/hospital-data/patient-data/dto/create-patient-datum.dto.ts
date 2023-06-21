export class CreatePatientDatumDto {
    readonly firstName: string;
    readonly surName: string;
    readonly middleName: string;
    readonly dateOfBirth: Date;
    readonly homeAddress: string;
    readonly dateOfResgistration: Date;
    readonly matriculationNumber: number;
}
