import LoginForm from "@/components/LoginForm";

export default function LoginView() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl text-center font-bold">Sign in</h1>
      <LoginForm />
    </div>
  );
}
