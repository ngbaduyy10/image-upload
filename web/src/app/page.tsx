import { Header } from "@/components/Header";
import { Preview } from "@/components/Preview";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Preview />
    </div>
  );
}
