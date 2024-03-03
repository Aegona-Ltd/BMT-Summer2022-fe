import ManagementView from "@/views/Management";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Management | Next App",
};

export default function ManagementPage() {
  return (
    <div className="xl:min-h-[calc(100vh_-_84px_-_471.79px)]">
      <ManagementView />
    </div>
  );
}
