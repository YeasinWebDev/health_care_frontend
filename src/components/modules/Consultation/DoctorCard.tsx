"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getInitials } from "@/lib/formatters";
import { IDoctor } from "@/types/doctor.interface";
import { Eye, MapPin, Star, Calendar, Award, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import BookAppointmentDialog from "./BookAppointmentDialog";

interface DoctorCard {
  doctor: IDoctor;
}

export default function DoctorCard({ doctor }: DoctorCard) {
  const [showScheduleModal, setShowScheduleModal] = useState(false);


  return (
    <>
      <Card className="group relative overflow-hidden border border-gray-200/80 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-b from-white to-gray-50/50 cursor-pointer">

        {/* Background Glow Effect */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-indigo-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" /> */}

        <CardHeader className="pb-4 relative">
          <div className="flex items-start gap-4">
            {/* Doctor Avatar with Status */}
            <div className="relative">
              <Avatar className="h-20 w-20 border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                <AvatarImage src={doctor.profilePhoto || ""} alt={doctor.name} />
                <AvatarFallback className="text-xl bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-700 font-bold">{getInitials(doctor.name)}</AvatarFallback>
              </Avatar>

              {/* Online Status Dot */}
              <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
            </div>

            <div className="flex-1 min-w-0 space-y-2">
              {/* Doctor Name & Title */}
              <div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">Dr. {doctor.name}</CardTitle>
                <CardDescription className="text-gray-600 font-medium">{doctor.designation}</CardDescription>
              </div>

              {/* Rating & Badges */}
              <div className="flex items-center flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-gradient-to-r from-amber-50 to-yellow-50 px-3 py-1 rounded-full border border-amber-100">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold text-gray-900">{doctor.avgRating?.toFixed(1) || "N/A"}</span>
                  </div>
                  <span className="text-xs text-gray-500">Rating</span>
                </div>

                {/* Verified Badge */}
                <Badge variant="outline" className="border-green-200 bg-green-50 text-green-700">
                  <CheckCircle size={12} className="mr-1" />
                  Verified
                </Badge>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-2  relative">
          {/* Main Stats Grid */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-3 rounded-xl border border-blue-100">
              <div className="flex items-center gap-2">
                {/* <Clock className="h-4 w-4 text-blue-600" /> */}
                <span className="text-xs font-medium text-blue-700">Experience</span>
              </div>
              <p className="text-lg font-bold text-gray-900 mt-1">
                {doctor.experience}
                <span className="text-sm font-normal text-gray-600"> yrs</span>
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 p-3 rounded-xl border border-emerald-100">
              <div className="flex items-center gap-2">
                {/* <DollarSign className="h-4 w-4 text-emerald-600" /> */}
                <span className="text-xs font-medium text-emerald-700">Fee</span>
              </div>
              <p className="text-lg font-bold text-gray-900 mt-1">৳ {doctor.appointmentFee}</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 p-3 rounded-xl border border-purple-100">
              <div className="flex items-center gap-2">
                {/* <Calendar className="h-4 w-4 text-purple-600" /> */}
                <span className="text-xs font-medium text-purple-700">Available</span>
              </div>
              <p className="text-lg font-bold text-gray-900 mt-1">Today</p>
            </div>
          </div>

          {/* Location */}
          {doctor.currentWorkPlace && (
            <div className="flex items-center gap-3 p-3 bg-gray-50/80 rounded-xl border border-gray-100">
              <MapPin className="h-5 w-5 text-gray-400 shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-700">Location</p>
                <p className="text-sm text-gray-600 truncate">{doctor.currentWorkPlace}</p>
              </div>
            </div>
          )}

          {/* Qualifications */}
          <div className="space-y-2">
            <p className="text-sm font-semibold text-gray-800 flex items-center gap-2">
              <Award size={16} className="text-blue-600" />
              Qualifications
            </p>
            <p className="text-sm text-gray-600 bg-gray-50/80 p-3 rounded-lg border border-gray-100">{doctor.qualification}</p>
          </div>

          {/* Specialties */}
          {doctor.doctorSpecialties && doctor.doctorSpecialties.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-800">Specializations</p>
              <div className="flex flex-wrap gap-2">
                {doctor.doctorSpecialties.slice(0, 3).map((specialty) => (
                  <Badge
                    key={specialty.specialitiesId}
                    className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 hover:text-blue-800 border-blue-200 hover:border-blue-300 transition-colors font-medium px-3 py-1"
                  >
                    {specialty.specialities?.title}
                  </Badge>
                ))}
                {doctor.doctorSpecialties.length > 3 && (
                  <Badge variant="outline" className="text-gray-600 border-gray-200">
                    +{doctor.doctorSpecialties.length - 3} more
                  </Badge>
                )}
              </div>
            </div>
          )}
        </CardContent>

        <CardFooter className=" border-t border-gray-100 bg-gradient-to-r from-gray-50/50 to-white/50 flex gap-3">
          <Link className="flex-1" href={`/consultation/doctor/${doctor.id}`}>
            <Button variant="outline" className="w-full border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 group transition-all duration-300">
              <Eye className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
              <span className="font-medium">View Profile</span>
            </Button>
          </Link>
          <Button
            onClick={() => setShowScheduleModal(true)}
            className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <Calendar className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
            <span className="font-semibold">Book Now</span>
          </Button>
        </CardFooter>
      </Card>

      <BookAppointmentDialog doctor={doctor} isOpen={showScheduleModal} onClose={() => setShowScheduleModal(false)} />
    </>
  );
}
