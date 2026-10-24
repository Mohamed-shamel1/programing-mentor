import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';

/**
 * MooreLawChart
 * Professional exponential growth curve for Moore's Law using Recharts.
 * Shows exponential rise from 1971 (2.3K) to 2026 (+50B),
 * physical limit wall indicator (2nm barrier), and multi-core shift.
 */
export default function MooreLawChart({ isEn = false, isRTL = true }) {
  // Calibrated exponential curve data points matching historical milestones
  const chartData = [
    { year: '1971', transistors: '2.3K', growth: 15, chip: isEn ? 'Intel 4004' : 'إنتل 4004' },
    { year: '1985', transistors: '275K', growth: 45, chip: isEn ? 'Intel 386' : 'معالج 386' },
    { year: '1995', transistors: '5.5M', growth: 130, chip: isEn ? 'Pentium Pro' : 'بنتيوم برو' },
    { year: '2005', transistors: '230M', growth: 290, chip: isEn ? 'Pentium D' : 'بنتيوم D' },
    { year: '2015', transistors: '1.75B', growth: 580, chip: isEn ? 'Core i7' : 'كور i7' },
    { year: '2026', transistors: '+50B', growth: 960, chip: isEn ? 'Blackwell / M4' : 'بلاك ويل / M4' },
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div
          style={{
            backgroundColor: 'rgba(15, 23, 42, 0.95)',
            border: '1px solid #10b981',
            borderRadius: '4px',
            padding: '3px 6px',
            color: '#fff',
            fontSize: '7.5px',
            lineHeight: 1.25,
            boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
            direction: isRTL ? 'rtl' : 'ltr',
          }}
        >
          <div style={{ color: '#34d399', fontWeight: 900 }}>
            {data.year}: {data.transistors} {isEn ? 'Transistors' : 'ترانزستور'}
          </div>
          <div style={{ color: '#cbd5e1', fontSize: '7px' }}>
            {isEn ? 'Example: ' : 'الشريحة: '}{data.chip}
          </div>
        </div>
      );
    }
    return null;
  };

  const renderDataLabel = (props) => {
    const { x, y, index } = props;
    const item = chartData[index];
    if (!item) return null;
    const isLast = index === chartData.length - 1;
    const isFirst = index === 0;

    return (
      <text
        x={isFirst ? x + 2 : isLast ? x - 4 : x}
        y={y - 4}
        fill={isLast ? '#065f46' : '#047857'}
        fontSize={isLast ? 7.2 : 6.3}
        fontWeight={900}
        textAnchor={isFirst ? 'start' : isLast ? 'end' : 'middle'}
      >
        {item.transistors}
      </text>
    );
  };

  return (
    <div
      style={{
        width: '100%',
        backgroundColor: '#f0fdf4',
        border: '1px solid #bbf7d0',
        borderRadius: '3px',
        padding: '2px 4px 1px 4px',
        position: 'relative',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
      dir="ltr"
    >
      {/* Chart Canvas */}
      <div style={{ width: '100%', height: '58px', minWidth: 0 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 10, left: 6, bottom: 2 }}
          >
            <defs>
              <linearGradient id="mooreGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#059669" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0.02} />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={{ stroke: '#86efac', strokeWidth: 1 }}
              tick={{ fontSize: 6.8, fill: '#334155', fontWeight: 700 }}
              interval={0}
              padding={{ left: 6, right: 10 }}
            />
            <YAxis hide domain={[0, 1100]} />

            <Tooltip content={<CustomTooltip />} />

            {/* Red Physical Wall Marker at 2026 */}
            <ReferenceLine
              x="2026"
              stroke="#ef4444"
              strokeDasharray="2 2"
              strokeWidth={1.2}
            />

            {/* Smooth Monotone Exponential Curve with Exact SVG Labels */}
            <Area
              type="monotone"
              dataKey="growth"
              stroke="#059669"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#mooreGradient)"
              activeDot={{ r: 3.5, fill: '#047857', stroke: '#fff', strokeWidth: 1 }}
              dot={{ r: 2.2, fill: '#047857', stroke: '#fff', strokeWidth: 0.8 }}
              label={renderDataLabel}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Physical Wall & Multi-Core Badge */}
      <div
        style={{
          position: 'absolute',
          top: '2px',
          right: '4px',
          backgroundColor: '#fee2e2',
          color: '#991b1b',
          padding: '1px 4px',
          borderRadius: '3px',
          border: '0.8px solid #fca5a5',
          fontSize: '6.5px',
          fontWeight: 900,
          display: 'flex',
          alignItems: 'center',
          gap: '2px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          pointerEvents: 'none',
        }}
      >
        <span>{isEn ? 'Physical Wall (2nm)' : 'الجدار الفيزيائي (2nm)'}</span>
        <span>➔</span>
        <span style={{ color: '#b45309' }}>{isEn ? 'Multi-Core' : 'تعدد الأنوية'}</span>
      </div>
    </div>
  );
}
