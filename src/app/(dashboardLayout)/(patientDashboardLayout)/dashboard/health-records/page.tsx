import HealthRecordsHeader from "@/components/modules/health-records/HealthRecordsHeader";
import { MedicalProfileDisplay } from "@/components/modules/health-records/MedicalProfileDisplay";
import { getMyPatientData } from "@/services/admin/patientMangement";

async function HealthRecordsPage() {
  const data = await getMyPatientData();
  
  return (
    <div>
      <HealthRecordsHeader data={data?.data} />
      {data?.data ? <MedicalProfileDisplay profile={data?.data} /> : null}
    </div>
  );
}

export default HealthRecordsPage;
