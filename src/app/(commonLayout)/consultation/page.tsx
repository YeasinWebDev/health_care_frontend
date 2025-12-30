import DoctorGrid from "@/components/modules/Consultation/DoctorGrid";
import DoctorSearchFilters from "@/components/modules/Consultation/DoctorSearchFilter";
import AISearchDialog from "@/components/shared/AiSearchDialog";
import TablePagination from "@/components/shared/TablePagination";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import { queryStringFormatter } from "@/lib/formatters";
import { getDoctors } from "@/services/admin/doctorManagement";
import { getSpecialities } from "@/services/admin/specialitiesManagement";
import { Suspense } from "react";

export const revalidate = 600;

const ConsultationPage = async ({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) => {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);

  // Fetch doctors and specialties in parallel
  const [doctorsResponse, specialtiesResponse] = await Promise.all([getDoctors(queryString), getSpecialities()]);

  const doctors = doctorsResponse?.data?.data || [];
  const specialties = specialtiesResponse?.data || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="max-w-[1500px] mx-auto px-5 pt-12 pb-5 flex flex-col items-center justify-center">
        <h1 className="text-4xl text-primary font-bold tracking-tight">Find & Consult with Trusted Doctors</h1>
        <p className=" text-lg mt-4">Book appointments with certified healthcare professionals from the comfort of your home</p>
        <div className="flex items-center mt-6 space-x-4">
          <div className="bg-primary text-white backdrop-blur-sm rounded-full px-4 py-2">
            <span className="font-semibold">{doctors.length}+</span>
            <span className="ml-2 ">Verified Doctors</span>
          </div>
          <div className="bg-primary text-white backdrop-blur-sm rounded-full px-4 py-2">
            <span className="font-semibold">24/7</span>
            <span className="ml-2 ">Available</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1500px] mx-auto px-5 py-8 -mt-6 relative">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:sticky top-20 flex items-center justify-center flex-col lg:flex-row gap-4 z-[49] mb-10">
          <DoctorSearchFilters specialties={specialties} />
          <AISearchDialog title="Get AI Recommendations" />
        </div>

        {/* Main Content Area */}
        <div className="space-y-6">
          {/* Doctor Grid */}
          <div className=" rounded-2xl overflow-hidden">
            <Suspense
              fallback={
                <div className="p-8">
                  <TableSkeleton columns={3} />
                </div>
              }
            >
              <DoctorGrid doctors={doctors} />
            </Suspense>
          </div>

          {/* Pagination */}
          <TablePagination currentPage={doctorsResponse?.meta?.page || 1} totalPages={doctorsResponse?.meta?.totalPage || 1} />
        </div>
      </div>
    </div>
  );
};

export default ConsultationPage;
