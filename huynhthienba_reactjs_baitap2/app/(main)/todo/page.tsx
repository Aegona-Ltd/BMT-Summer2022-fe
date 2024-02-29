import ClientOnly from "@/components/ClientOnly";
import TodoView from "@/views/Todo";

export default function TodoPage() {
  return (
    <div className="xl:min-h-[calc(100vh_-_89.2px_-_471.79px)]">
      <ClientOnly>
        <TodoView />
      </ClientOnly>
    </div>
  );
}
