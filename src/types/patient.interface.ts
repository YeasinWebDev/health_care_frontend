export interface IPatient {
  id: string;
  name: string;
  email: string;
  password: string;
  contactNumber: string;
  address: string;
  profilePhoto?: string;
  status?: string;
  patient?: any;
  createdAt?: string;
  updatedAt?: string;
}
