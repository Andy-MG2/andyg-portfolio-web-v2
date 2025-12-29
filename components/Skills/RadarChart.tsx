"use client";

import React, { useMemo } from "react";
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

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

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

export function RadarChart({ topic }: { topic: RadarTopic }) {
  const max = topic.max ?? 5;

  const labels = useMemo(() => topic.axes.map((a) => a.label), [topic.axes]);
  const values = useMemo(
    () => topic.axes.map((a) => clamp(a.score, 0, max)),
    [topic.axes, max]
  );

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
          pointBackgroundColor: "rgba(71,99,255,1)",

          backgroundColor: (ctx: any) => {
            const chart = ctx.chart;
            const { ctx: c, chartArea } = chart;
            if (!chartArea) return "rgba(71,99,255,0.18)";

            const cx = (chartArea.left + chartArea.right) / 2;
            const cy = (chartArea.top + chartArea.bottom) / 2;
            const r =
              Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top) / 2;

            const g = c.createRadialGradient(cx, cy, 0, cx, cy, r);
            g.addColorStop(0, "rgba(71,99,255,0.35)");
            g.addColorStop(1, "rgba(71,99,255,0.18)");
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
      // animation removed

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
          pointLabels: { font: { size: 12 } },
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


