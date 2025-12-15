import { IDoctorSchedule } from "./schedule.interface";

export interface IDoctor {
    id?: string;
    name: string;
    email: string;
    password: string;
    contactNumber: string;
    address?: string;
    registrationNumber: string;
    experience?: number;
    gender: "MALE" | "FEMALE";
    appointmentFee: number;
    qualification: string;
    currentWorkPlace: string;
    designation: string;
    profilePhoto?:string | undefined;
    specialties?: string[]
    isDeleted?: boolean;
    avgRating?: number;
    createdAt?: string;
    updatedAt?: string;
    doctorSpecialties?:{
        specialitiesId: string;
        specialities:{
            id: string;
            title: string;
        }
    }[];
    doctorSchedules?: IDoctorSchedule[]
}