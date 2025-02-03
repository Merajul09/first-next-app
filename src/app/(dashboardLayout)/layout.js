import Sidebar from "@/components/Sidebar";
const DashboardLayout = ({ children }) => {
  return (
    <div>
      <Sidebar></Sidebar>
      {children}
    </div>
  );
};

export default DashboardLayout;
