import TodoView from "@/views/Todo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Todo | Next App",
};

export default function TodoPage() {
  return (
    <div className="xl:min-h-[calc(100vh_-_89.2px_-_471.79px)]">
      <TodoView />
    </div>
  );
}
