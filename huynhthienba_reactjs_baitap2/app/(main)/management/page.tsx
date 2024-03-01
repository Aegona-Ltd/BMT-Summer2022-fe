import PrivateRoute from "@/components/PrivateRoute";
import ManagementView from "@/views/Management";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Management | Next App",
};

export default function ManagementPage() {
  return (
    <PrivateRoute>
      <div className="xl:min-h-[calc(100vh_-_89.2px_-_471.79px)] flex justify-center items-center">
        <ManagementView />
      </div>
    </PrivateRoute>
  );
}
