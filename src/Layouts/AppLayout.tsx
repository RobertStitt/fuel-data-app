import { Outlet } from "react-router";
import AppSidebar from "./AppSidebar";

const LayoutContent: React.FC = () => {
  return (
    <div className="min-h-screen xl:flex">
      <div className="p-10 min-w-[300px]">
        <AppSidebar />
      </div>
      <div className="flex-1 transition-all duration-300 ease-in-out text-black p-10 pt-8 bg-gray-100 dark:bg-gray-900 dark:text-white">
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const AppLayout: React.FC = () => {
  return <LayoutContent />;
};

export default AppLayout;
