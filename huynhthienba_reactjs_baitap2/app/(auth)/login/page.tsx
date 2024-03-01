import ClientOnly from "@/components/ClientOnly";
import LoginView from "@/views/Login";

export default function LoginPage() {
  return (
    <ClientOnly>
      <LoginView />
    </ClientOnly>
  );
}
