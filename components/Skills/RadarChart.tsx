"use client";

import React, { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Bold } from "lucide-react";

// Register once on the client
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

// Client-only import (prevents SSR canvas issues)
const Radar = dynamic(() => import("react-chartjs-2").then((m) => m.Radar), { ssr: false });

type Axis = { label: string; score: number };
type RadarTopic = {
  id: number;
  title: string;
  axes: Axis[]; 
  max?: number; 
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

const RadarChart = ({ topic }: { topic: RadarTopic }) => {
  const max = topic.max ?? 5;

  const labels = useMemo(() => topic.axes.map((a) => a.label), [topic.axes]);
  const target = useMemo(
    () => topic.axes.map((a) => clamp(a.score, 0, max)),
    [topic.axes, max]
  );

  // Start at 0 so the chart animates outward on load
  const [values, setValues] = useState<number[]>(() => target.map(() => 0));

  useEffect(() => {
    // Trigger animation after first paint
    const t = requestAnimationFrame(() => setValues(target));
    return () => cancelAnimationFrame(t);
  }, [target]);

  const data = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: topic.title,
          data: values,
          fill: true,
          borderWidth: 2,
          pointRadius: 3,
          pointHoverRadius: 5,

          borderColor: "rgba(71,99,255,1)",
          pointBackgroundColor:"rgba(71,99,255,1)",

          backgroundColor: (ctx: any) => {
          const chart = ctx.chart;
          const { ctx: c, chartArea } = chart;
          if (!chartArea) return "rgba(71,99,255,0.18)";

          const cx = (chartArea.left + chartArea.right) / 2;
          const cy = (chartArea.top + chartArea.bottom) / 2;
          const r = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top) / 2;

          const g = c.createRadialGradient(cx, cy, 0, cx, cy, r);
          g.addColorStop(0, "rgba(139,92,246,0.18)");
          g.addColorStop(1, "rgba(71,99,255,0.70)");
          return g;
        },

        },
      ],
    }),
    [labels, values, topic.title]
  );

  const options: ChartOptions<"radar"> = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 1000 },
      plugins: {
        legend: { display: false },
        tooltip: { enabled: true },
      },
      scales: {
        r: {
          beginAtZero: true,
          min: 0,
          max,
          ticks: { stepSize: 1 },
          grid: {
            circular: true,
            color: "rgba(255,255,255,.45)",   // rings
            lineWidth: 1.25,
          },
          angleLines: {
          color: "rgba(255,255,255,0.35)",   // spokes
          lineWidth: 1,
          },
          pointLabels: {
            font: { size: 14 },
          },
        },
      },
    }),
    [max]
  );

  return (
    <div className="w-full max-w-xl">
      <div className="h-80 w-full">
        <Radar data={data} options={options} />
      </div>
    </div>
  );
}


export default RadarChart;