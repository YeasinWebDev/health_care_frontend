import { BloodGroup, Gender, MaritalStatus } from "@/types/medical-profile";
import z from "zod";

export const formSchema = z.object({
  gender: z.enum(Object.values(Gender) as [Gender, ...Gender[]]),
  dateOfBirth: z.date(),
  bloodGroup: z.enum(Object.values(BloodGroup) as [BloodGroup, ...BloodGroup[]]),
  maritalStatus: z.enum(Object.values(MaritalStatus) as [MaritalStatus, ...MaritalStatus[]]),

  hasAllergies: z.boolean(),
  hasDiabetes: z.boolean(),
  smokingStatus: z.boolean(),
  hasPastSurgeries: z.boolean(),
  pregnancyStatus: z.boolean(),

  recentAnxiety: z.boolean(),
  recentDepression: z.boolean(),

  height: z.number().min(0.1).max(300),
  width: z.number().min(0.1).max(500),

  dietaryPreferences: z.string(),
  mentalHealthHistory: z.string(),
  immunizationStatus: z.string(),
});