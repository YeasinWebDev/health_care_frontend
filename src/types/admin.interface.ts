export interface IAdmin {
  id: string;
  name: string;
  email: string;
  password: string;
  contactNumber: string;
  address: string;
  profilePhoto?: string;
  status?: string;
  admin?: any;
  createdAt?: string;
  updatedAt?: string;
}
