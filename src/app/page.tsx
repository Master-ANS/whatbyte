import Image from "next/image";
import Navbar from "./components/navbar";
import LeftPanel from "./components/LeftPanel";
import SkillTestHeader from "./components/SkillTestHeader";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <LeftPanel />
        <div className="flex-1 p-6">
          <h1 className="text-xl font-semibold mb-6">Skill Test</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <SkillTestHeader />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
