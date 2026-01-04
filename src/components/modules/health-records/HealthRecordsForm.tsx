// components/medical-profile-form.tsx
"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import { Checkbox } from "../../ui/checkbox";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../../ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select";
import { Calendar } from "../../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { cn } from "@/lib/utils";
import { BloodGroup, MaritalStatus, Gender, MedicalProfile } from "@/types/medical-profile";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { updateMyPatientData } from "@/services/admin/patientMangement";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const formSchema = z.object({
  gender: z.enum(Object.values(Gender) as [Gender, ...Gender[]]),
  dateOfBirth: z.date(),
  bloodGroup: z.enum(Object.values(BloodGroup) as [BloodGroup, ...BloodGroup[]]),
  maritalStatus: z.enum(Object.values(MaritalStatus) as [MaritalStatus, ...MaritalStatus[]]),

  hasAllergies: z.boolean().default(false),
  hasDiabetes: z.boolean().default(false),
  smokingStatus: z.boolean().default(false),
  hasPastSurgeries: z.boolean().default(false),
  pregnancyStatus: z.boolean().default(false),

  recentAnxiety: z.boolean().default(false),
  recentDepression: z.boolean().default(false),

  height: z.number().min(0.1).max(300),
  width: z.number().min(0.1).max(500),

  dietaryPreferences: z.string().default(""),
  mentalHealthHistory: z.string().default(""),
  immunizationStatus: z.string().default(""),
});

interface MedicalProfileFormProps {
  isOpen?: boolean;
  onClose?: () => void;
  initialData?: MedicalProfile | null;
  //   onSubmit: (data: MedicalProfile) => void;
  isSubmitting?: boolean;
}

export function MedicalProfileForm({ initialData, isSubmitting = false, isOpen, onClose }: MedicalProfileFormProps) {
  const [isFemale, setIsFemale] = useState(false);
  const router = useRouter();

  const form = useForm<Partial<z.infer<typeof formSchema>>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gender: initialData?.gender ?? Gender.MALE,
      dateOfBirth: initialData?.dateOfBirth ? new Date(initialData.dateOfBirth) : new Date("1990-01-01"),
      bloodGroup: initialData?.bloodGroup ?? BloodGroup.O_POSITIVE,
      maritalStatus: initialData?.maritalStatus ?? MaritalStatus.UNMARRIED,
      hasAllergies: initialData?.hasAllergies ?? false,
      hasDiabetes: initialData?.hasDiabetes ?? false,
      smokingStatus: initialData?.smokingStatus ?? false,
      hasPastSurgeries: initialData?.hasPastSurgeries ?? false,
      pregnancyStatus: initialData?.pregnancyStatus ?? false,
      recentAnxiety: initialData?.recentAnxiety ?? false,
      recentDepression: initialData?.recentDepression ?? false,
      height: initialData?.height ?? 170,
      width: initialData?.width ?? 70,
      dietaryPreferences: initialData?.dietaryPreferences ?? "",
      mentalHealthHistory: initialData?.mentalHealthHistory ?? "",
      immunizationStatus: initialData?.immunizationStatus ?? "",
    },
  });

  const genderValue = form.watch("gender");

  useEffect(() => {
    setIsFemale(genderValue === Gender.FEMALE);
  }, [genderValue]);

  async function handleSubmit(values: z.infer<typeof formSchema>) {
    const data: MedicalProfile = {
      ...values,
      dateOfBirth: new Date(values.dateOfBirth),
    };
    // onSubmit(data);
    let res = await updateMyPatientData({patientHealthData:data});
    if(initialData){
      toast.success("Profile updated successfully!");
    }else{
      toast.success("Profile created successfully!");
    }
    onClose?.();
    router.refresh();
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="!max-w-[40rem]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6 h-[90vh] overflow-y-auto">
            <div>
              <h3 className="text-lg font-semibold">Personal Information</h3>
              <p className="text-sm text-muted-foreground">Please provide your personal information.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Gender */}
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gender</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl className="w-full">
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value={Gender.MALE}>Male</SelectItem>
                        <SelectItem value={Gender.FEMALE}>Female</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Date of Birth */}
              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date of Birth</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl className="w-full">
                          <Button variant="outline" className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}>
                            {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Blood Group */}
              <FormField
                control={form.control}
                name="bloodGroup"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Blood Group</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl className="w-full">
                        <SelectTrigger>
                          <SelectValue placeholder="Select blood group" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Object.values(BloodGroup).map((group) => (
                          <SelectItem key={group} value={group}>
                            {group.replace("_", " ")}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Marital Status */}
              <FormField
                control={form.control}
                name="maritalStatus"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Marital Status</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl className="w-full">
                        <SelectTrigger>
                          <SelectValue placeholder="Select marital status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Object.values(MaritalStatus).map((status) => (
                          <SelectItem key={status} value={status}>
                            {status.charAt(0) + status.slice(1).toLowerCase()}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Height */}
              <FormField
                control={form.control}
                name="height"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Height (cm)</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.1" {...field} onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Weight */}
              <FormField
                control={form.control}
                name="width"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Weight (kg)</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.1" {...field} onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Health Conditions Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Health Conditions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="hasAllergies"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-0 space-y-0 rounded-md border p-3">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Has Allergies</FormLabel>
                        {/* <FormDescription>Check if you have any allergies</FormDescription> */}
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="hasDiabetes"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-0 space-y-0 rounded-md border p-3">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Has Diabetes</FormLabel>
                        {/* <FormDescription>Check if you have diabetes</FormDescription> */}
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="smokingStatus"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-0 space-y-0 rounded-md border p-3">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Smoking Status</FormLabel>
                        {/* <FormDescription>Check if you smoke</FormDescription> */}
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="hasPastSurgeries"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-0 space-y-0 rounded-md border p-3">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Past Surgeries</FormLabel>
                        {/* <FormDescription>Check if you've had past surgeries</FormDescription> */}
                      </div>
                    </FormItem>
                  )}
                />

                {isFemale && (
                  <FormField
                    control={form.control}
                    name="pregnancyStatus"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-0 space-y-0 rounded-md border p-3">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Pregnancy Status</FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                )}
              </div>
            </div>

            {/* Mental Health Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Mental Health</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="recentAnxiety"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-0 space-y-0 rounded-md border p-3">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Recent Anxiety</FormLabel>
                        <FormDescription>Experienced anxiety recently</FormDescription>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="recentDepression"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-0 space-y-0 rounded-md border p-3">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Recent Depression</FormLabel>
                        <FormDescription>Experienced depression recently</FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
              </div>

              {/* Mental Health History */}
              <FormField
                control={form.control}
                name="mentalHealthHistory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mental Health History</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe any mental health history..." className="min-h-[100px] resize-none" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Additional Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Additional Information</h3>

              <FormField
                control={form.control}
                name="dietaryPreferences"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dietary Preferences</FormLabel>
                    <FormControl>
                      <Textarea placeholder="e.g., Vegetarian, Vegan, Gluten-free..." className="min-h-[80px] resize-none" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="immunizationStatus"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Immunization Status</FormLabel>
                    <FormControl>
                      <Textarea placeholder="List your immunizations..." className="min-h-[80px] resize-none" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <Button type="submit" disabled={isSubmitting} className="cursor-pointer">
                {isSubmitting ? (
                  <>
                    <span className="animate-spin mr-2">⟳</span>
                    {initialData ? "Updating..." : "Creating..."}
                  </>
                ) : initialData ? (
                  "Update Profile"
                ) : (
                  "Create Profile"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
