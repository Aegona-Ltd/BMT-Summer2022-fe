import PrivateRoute from "@/components/PrivateRoute";
import ContactView from "@/views/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Next App",
};

export default function ContactPage() {
  return (
    <PrivateRoute>
      <ContactView />
    </PrivateRoute>
  );
}
