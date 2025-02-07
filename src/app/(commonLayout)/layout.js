import Sidebar from "@/components/Sidebar";
const CommonLayout = ({ children }) => {
  return (
    <div>
      <Sidebar></Sidebar>
      {children}
    </div>
  );
};

export default CommonLayout;
