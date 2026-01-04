export enum BloodGroup {
  A_POSITIVE = 'A_POSITIVE',
  A_NEGATIVE = 'A_NEGATIVE',
  B_POSITIVE = 'B_POSITIVE',
  B_NEGATIVE = 'B_NEGATIVE',
  O_POSITIVE = 'O_POSITIVE',
  O_NEGATIVE = 'O_NEGATIVE',
  AB_POSITIVE = 'AB_POSITIVE',
  AB_NEGATIVE = 'AB_NEGATIVE',
}

export enum MaritalStatus {
  UNMARRIED = 'UNMARRIED',
  MARRIED = 'MARRIED',
  DIVORCED = 'DIVORCED',
  WIDOWED = 'WIDOWED',
  SEPARATED = 'SEPARATED',
}

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

export interface MedicalProfile {
  id?: string;
  gender: Gender;
  dateOfBirth: Date;
  bloodGroup: BloodGroup;
  hasAllergies: boolean;
  hasDiabetes: boolean;
  height: number;
  width: number; // Assuming this is weight
  smokingStatus: boolean;
  dietaryPreferences?: string;
  pregnancyStatus: boolean;
  mentalHealthHistory?: string;
  immunizationStatus?: string;
  hasPastSurgeries: boolean;
  recentAnxiety: boolean;
  recentDepression: boolean;
  maritalStatus: MaritalStatus;
}