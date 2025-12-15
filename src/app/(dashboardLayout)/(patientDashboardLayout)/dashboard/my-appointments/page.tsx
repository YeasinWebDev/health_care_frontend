import AppointmentsList from "@/components/modules/Patient/PatientAppointment/AppointmentList";
import { getMyAppointments } from "@/services/patient/appointment.service";

async function MyAppointments() {
  const appointments = await getMyAppointments();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Appointments</h1>
        <p className="text-muted-foreground mt-2">View and manage your scheduled appointments</p>
      </div>
      <AppointmentsList appointments={appointments?.data?.data} />
    </div>
  );
}

export default MyAppointments;
