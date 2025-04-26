"use client"

import Image from "next/image";
import Navbar from "./components/navbar";
import LeftPanel from "./components/LeftPanel";
import SkillTestHeader from "./components/SkillTestHeader";
import QuickStatistics from "./components/QuickStatistics";
import SyllabusAnalysis from "./components/SyllabusAnalysis";
import QuestionAnalysis from "./components/QuestionAnalysis";
import ComparisonGraph from "./components/ComparisonGraph";
import { useState } from "react";

export default function Home() {

  const [rank, setRank] = useState<number>(1);
  const [percentile, setPercentile] = useState<number>(30);
  const [score, setScore] = useState<number>(10);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <LeftPanel />
        <div className="flex-1 p-6">
          <h1 className="text-xl font-semibold mb-6">Skill Test</h1>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 space-y-6">
            <SkillTestHeader 
                rank={rank} 
                setRank={setRank} 
                percentile={percentile} 
                setPercentile={setPercentile} 
                score={score} 
                setScore={setScore} 
              />
              <QuickStatistics 
                rank={rank}
                percentile={percentile}
                score={score}
              />
              <ComparisonGraph 
                percentile={percentile}
              />
            </div>
            <div className="lg:col-span-2 space-y-6">
              <SyllabusAnalysis />
              <QuestionAnalysis 
              score={score}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
