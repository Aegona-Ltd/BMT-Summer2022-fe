import { getAccounts } from "@/lib/interactApi";
import dynamic from "next/dynamic";

const HomeView = dynamic(() => import("@/views/HomeView"), {
  loading: () => <div>Loading...</div>,
});

export default async function Home() {
  await getAccounts();
  return <HomeView />;
}
