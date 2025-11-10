import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import { motion, AnimatePresence } from "framer-motion";

export default function HybridChart() {
  const data = [
    { name: "Claim.50SOL", value: 3, img: "/meme.gif" },
    { name: "Claim.250SOL", value: 15, img: "/meme.gif" },
    { name: "Claim.500SOL", value: 30, img: "/meme.gif" },
    { name: "Claim.1000SOL", value: 60, img: "/meme.gif" },
  ];

  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prev) => (prev + 1) % data.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [data.length]);

  // ✅ Custom bar shape that adds image on top
  const CustomBarWithImage = (props) => {
    const { x, y, width, height, index } = props;
    const entry = data[index];
    const isVisible = visibleIndex === index;

    return (
      <g>
        {/* Main Bar */}
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          fill="transparent"
          rx={8}
          ry={8}
        />

        {/* Image on top of bar */}
        <AnimatePresence>
          {isVisible && (
            <motion.image
              key={entry.name}
              href={entry.img}
              x={x + width / 2 - 20} // center image horizontally
              y={y - 45} // position just above bar
              width={40}
              height={40}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </AnimatePresence>
      </g>
    );
  };

  return (
    <div
      style={{
        width: "100%",
        height: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "16px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        padding: "16px",
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 40, right: 0, left: 0, bottom: 20 }}
          barCategoryGap="15%"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 10 }} />
          <YAxis tick={false} axisLine={false} />
          <Tooltip cursor={{ fill: "transparent" }} />
          <Legend
            verticalAlign="bottom"
            height={20}
            iconSize={10}
            wrapperStyle={{ fontSize: "12px" }}
          />

          {/* ✅ Custom bar renderer */}
          <Bar dataKey="value" shape={<CustomBarWithImage />} />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#10B981"
            strokeWidth={3}
            dot={{ r: 5 }}
            activeDot={{ r: 7 }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
