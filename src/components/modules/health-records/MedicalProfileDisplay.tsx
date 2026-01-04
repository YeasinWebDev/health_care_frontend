// components/medical-profile-display.tsx
"use client";

import { MedicalProfile, BloodGroup, Gender } from "@/types/medical-profile";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Droplets, Heart, Scale, Ruler, Utensils, Shield, Brain, AlertCircle, CheckCircle2, XCircle, User, Pill, Cigarette, Baby } from "lucide-react";
import { format } from "date-fns";

interface MedicalProfileDisplayProps {
  profile: MedicalProfile;
  className?: string;
}

export function MedicalProfileDisplay({ profile, className }: MedicalProfileDisplayProps) {
  const formatDate = (date: Date | string) => {
    try {
      return format(new Date(date), "MMM dd, yyyy");
    } catch {
      return "Not specified";
    }
  };

  const getBloodGroupColor = (group: BloodGroup) => {
    const colors: Record<string, string> = {
      [BloodGroup.O_POSITIVE]: "bg-red-100 text-red-800 border-red-300",
      [BloodGroup.O_NEGATIVE]: "bg-red-50 text-red-700 border-red-200",
      [BloodGroup.A_POSITIVE]: "bg-blue-100 text-blue-800 border-blue-300",
      [BloodGroup.A_NEGATIVE]: "bg-blue-50 text-blue-700 border-blue-200",
      [BloodGroup.B_POSITIVE]: "bg-green-100 text-green-800 border-green-300",
      [BloodGroup.B_NEGATIVE]: "bg-green-50 text-green-700 border-green-200",
      [BloodGroup.AB_POSITIVE]: "bg-purple-100 text-purple-800 border-purple-300",
      [BloodGroup.AB_NEGATIVE]: "bg-purple-50 text-purple-700 border-purple-200",
    };
    return colors[group] || "bg-gray-100 text-gray-800 border-gray-300";
  };

  const StatusBadge = ({ condition, label, icon: Icon }: { condition: boolean; label: string; icon?: React.ComponentType<any> }) => (
    <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${condition ? 'bg-amber-50 border-amber-200' : 'bg-green-50 border-green-200'}`}>
      {Icon && <Icon className={`h-4 w-4 ${condition ? 'text-amber-600' : 'text-green-600'}`} />}
      <span className="text-sm font-medium">{label}</span>
      <span className={`ml-auto text-xs ${condition ? 'text-amber-700' : 'text-green-700'}`}>
        {condition ? 'Yes' : 'No'}
      </span>
    </div>
  );

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10 ${className}`}>
      {/* Left Column - Personal Info & Health Metrics */}
      <div className="lg:col-span-2 space-y-4">
        {/* Personal Information */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <User className="h-5 w-5 text-blue-600" />
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className="space-y-1">
                <p className="text-xs text-gray-500">Gender</p>
                <div className="flex items-center gap-2">
                  <span className="text-lg">{profile.gender === Gender.MALE ? '♂' : '♀'}</span>
                  <span className="font-medium">{profile.gender}</span>
                </div>
              </div>
              
              <div className="space-y-1">
                <p className="text-xs text-gray-500">Date of Birth</p>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span className="font-medium">{formatDate(profile.dateOfBirth)}</span>
                </div>
              </div>
              
              <div className="space-y-1">
                <p className="text-xs text-gray-500">Blood Group</p>
                <div className="flex items-center gap-2">
                  <Droplets className="h-4 w-4 text-gray-400" />
                  <Badge className={getBloodGroupColor(profile.bloodGroup)} variant="outline">
                    {profile.bloodGroup.replace("_", " ")}
                  </Badge>
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-xs text-gray-500">Marital Status</p>
                <p className="font-medium">{profile.maritalStatus.charAt(0) + profile.maritalStatus.slice(1).toLowerCase()}</p>
              </div>

              <div className="space-y-1">
                <p className="text-xs text-gray-500">Height</p>
                <div className="flex items-center gap-2">
                  <Ruler className="h-4 w-4 text-gray-400" />
                  <span className="font-medium">{profile.height} cm</span>
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-xs text-gray-500">Weight</p>
                <div className="flex items-center gap-2">
                  <Scale className="h-4 w-4 text-gray-400" />
                  <span className="font-medium">{profile.width} kg</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Health Conditions */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-600" />
              Health Conditions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <StatusBadge 
                condition={profile.hasAllergies} 
                label="Allergies" 
                icon={AlertCircle}
              />
              <StatusBadge 
                condition={profile.hasDiabetes} 
                label="Diabetes" 
                icon={Pill}
              />
              <StatusBadge 
                condition={profile.smokingStatus} 
                label="Smoking" 
                icon={Cigarette}
              />
              <StatusBadge 
                condition={profile.hasPastSurgeries} 
                label="Past Surgeries" 
                // icon={Scalpel}
              />
              {profile.gender === Gender.FEMALE && (
                <StatusBadge 
                  condition={profile.pregnancyStatus} 
                  label="Pregnancy" 
                  icon={Baby}
                />
              )}
            </div>
          </CardContent>
        </Card>

        {/* Mental Health */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <Brain className="h-5 w-5 text-indigo-600" />
              Mental Health
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <StatusBadge 
                condition={profile.recentAnxiety} 
                label="Anxiety" 
              />
              <StatusBadge 
                condition={profile.recentDepression} 
                label="Depression" 
              />
            </div>
            
            {profile.mentalHealthHistory && (
              <div className="mt-3">
                <p className="text-sm font-medium text-gray-700 mb-1">Mental Health History</p>
                <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-md">
                  {profile.mentalHealthHistory}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Right Column - Stats & Additional Info */}
      <div className="space-y-4">
        {/* Health Metrics */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold">Health Metrics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">BMI</p>
                  <p className="text-xs text-gray-500">{getBMICategory(calculateBMI(profile.height, profile.width))}</p>
                </div>
                <span className="text-lg font-bold text-gray-900">
                  {calculateBMI(profile.height, profile.width)}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Health Score</p>
                  <p className="text-xs text-gray-500">Based on profile</p>
                </div>
                <span className="text-lg font-bold text-blue-600">
                  {calculateHealthScore(profile)}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Age</p>
                  <p className="text-xs text-gray-500">Years</p>
                </div>
                <span className="text-lg font-bold text-purple-600">
                  {calculateAge(new Date(profile.dateOfBirth))}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Information */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <Shield className="h-5 w-5 text-emerald-600" />
              Additional Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {profile.dietaryPreferences && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Utensils className="h-4 w-4 text-gray-400" />
                  <p className="text-sm font-medium">Dietary Preferences</p>
                </div>
                <div className="flex flex-wrap gap-1">
                  {profile.dietaryPreferences.split(',').map((pref, index) => (
                    <Badge key={index} variant="secondary" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100">
                      {pref.trim()}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {profile.immunizationStatus && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="h-4 w-4 text-gray-400" />
                  <p className="text-sm font-medium">Immunization Status</p>
                </div>
                <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded-md">
                  {profile.immunizationStatus}
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Quick Summary */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold">Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Conditions</span>
                <span className="font-medium">
                  {[
                    profile.hasAllergies,
                    profile.hasDiabetes,
                    profile.smokingStatus,
                    profile.hasPastSurgeries,
                    profile.recentAnxiety,
                    profile.recentDepression
                  ].filter(Boolean).length} active
                </span>
              </div>
              
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">BMI Status</span>
                <Badge variant="outline" className={
                  getBMICategory(calculateBMI(profile.height, profile.width)) === 'Normal' 
                    ? 'bg-green-50 text-green-700 border-green-200'
                    : 'bg-amber-50 text-amber-700 border-amber-200'
                }>
                  {getBMICategory(calculateBMI(profile.height, profile.width))}
                </Badge>
              </div>
              
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Profile Status</span>
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  {profile.hasAllergies || profile.hasDiabetes || profile.recentAnxiety || profile.recentDepression ? 'Needs Review' : 'Healthy'}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Utility Functions
function calculateHealthScore(profile: MedicalProfile): string {
  let score = 100;
  
  if (profile.hasAllergies) score -= 5;
  if (profile.hasDiabetes) score -= 15;
  if (profile.smokingStatus) score -= 20;
  if (profile.hasPastSurgeries) score -= 10;
  if (profile.recentAnxiety) score -= 10;
  if (profile.recentDepression) score -= 15;
  
  const bmi = calculateBMI(profile.height, profile.width);
  if (Number(bmi) >= 18.5 && Number(bmi) <= 24.9) score += 10;
  
  return `${Math.max(0, Math.min(100, score))}/100`;
}

function calculateBMI(height: number, weight: number): string {
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  return bmi.toFixed(1);
}

function getBMICategory(bmi: string): string {
  const value = parseFloat(bmi);
  if (value < 18.5) return "Underweight";
  if (value < 25) return "Normal";
  if (value < 30) return "Overweight";
  return "Obese";
}

function calculateAge(birthDate: Date): number {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
}