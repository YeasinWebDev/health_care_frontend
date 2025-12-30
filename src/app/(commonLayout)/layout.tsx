import CommonFooter from "@/components/shared/CommonFooter";
import CommonNavbar from "@/components/shared/CommonNavbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <CommonNavbar />
      {children}
      <CommonFooter />
    </div>
  );
};

export default CommonLayout;
