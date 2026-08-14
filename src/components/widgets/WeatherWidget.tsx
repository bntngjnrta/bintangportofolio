import { useState, useEffect } from "react";

// SF Symbol-style SVG weather icons
const WeatherIcon = ({ type, size = 36 }: { type: string; size?: number }) => {
  const s = size;
  if (type === "sunny")
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="4.5" fill="#FFD60A" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
          <line
            key={i}
            x1="12"
            y1="2.5"
            x2="12"
            y2="5"
            stroke="#FFD60A"
            strokeWidth="2"
            strokeLinecap="round"
            transform={`rotate(${deg} 12 12)`}
          />
        ))}
      </svg>
    );
  if (type === "rainy")
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <path
          d="M6 13a5 5 0 1 1 9.9-1H17a3 3 0 0 1 0 6H7a4 4 0 0 1-1-7.87"
          stroke="rgba(255,255,255,0.8)"
          strokeWidth="1.5"
          fill="none"
        />
        <line
          x1="9"
          y1="19"
          x2="7"
          y2="22"
          stroke="#64D2FF"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="13"
          y1="19"
          x2="11"
          y2="22"
          stroke="#64D2FF"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  if (type === "cloudy")
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <path
          d="M5 13a5 5 0 1 1 9.9-1H16a3 3 0 0 1 0 6H7a4 4 0 0 1-2-7.46"
          stroke="rgba(200,210,230,0.8)"
          strokeWidth="1.5"
          fill="rgba(200,210,230,0.12)"
        />
      </svg>
    );
  if (type === "moon")
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <path
          d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
          stroke="rgba(200,220,255,0.9)"
          strokeWidth="1.6"
          fill="rgba(160,180,255,0.15)"
          strokeLinejoin="round"
        />
      </svg>
    );
  if (type === "storm")
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <path
          d="M5 12a5 5 0 1 1 9.9-1H16a3 3 0 0 1 0 6H7a4 4 0 0 1-2-7.46"
          stroke="rgba(200,210,230,0.8)"
          strokeWidth="1.5"
          fill="rgba(200,210,230,0.12)"
        />
        <polyline
          points="13,14 11,18 14,18 12,22"
          stroke="#FFD60A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    );
  // partly-cloudy default
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="8.5" r="3.5" fill="#FFD60A" opacity="0.95" />
      {[0, 60, 120, 180, 240, 300].map((deg, i) => (
        <line
          key={i}
          x1="9"
          y1="1.5"
          x2="9"
          y2="3.2"
          stroke="#FFD60A"
          strokeWidth="1.6"
          strokeLinecap="round"
          transform={`rotate(${deg} 9 8.5)`}
        />
      ))}
      <path
        d="M8 14a4.5 4.5 0 1 1 8.9-.9H18a2.8 2.8 0 0 1 0 5.6H9a3.4 3.4 0 0 1-1-6.35"
        stroke="rgba(255,255,255,0.82)"
        strokeWidth="1.4"
        fill="rgba(255,255,255,0.14)"
      />
    </svg>
  );
};

// Map condition string to icon type
function conditionToIcon(condition: string, isDay: boolean): string {
  const c = condition.toLowerCase();
  if (c.includes("thunder") || c.includes("storm")) return "storm";
  if (c.includes("rain") || c.includes("drizzle") || c.includes("shower"))
    return "rainy";
  if (c.includes("overcast") || c.includes("fog") || c.includes("mist"))
    return "cloudy";
  if (c.includes("cloud") || c.includes("partly")) return "partly-cloudy";
  if (c.includes("sunny") || c.includes("clear"))
    return isDay ? "sunny" : "moon";
  return isDay ? "partly-cloudy" : "moon";
}

// Convert F to C
const toC = (f: number) => Math.round(((f - 32) * 5) / 9);

interface WeatherData {
  temp: number; // Celsius
  condition: string;
  high: number; // Celsius
  low?: number;
  location: string;
  humidity?: number;
  wind?: number;
  iconType: string;
  daily: {
    day: string;
    high: number;
    precipChance: number;
    iconType: string;
  }[];
  updatedAt: string;
}

const LAT = -6.2646;
const LON = 107.1428;
const LOCATION = "Cikarang";

async function fetchWeather(): Promise<WeatherData> {
  // Open-Meteo: free, no API key needed
  const url =
    `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}` +
    `&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,is_day` +
    `&daily=temperature_2m_max,temperature_2m_min,weather_code,precipitation_probability_max` +
    `&timezone=Asia%2FJakarta&forecast_days=5&temperature_unit=celsius&wind_speed_unit=kmh`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("fetch failed");
  const json = await res.json();

  const cur = json.current;
  const daily = json.daily;

  const wmoToCondition = (code: number): string => {
    if (code === 0) return "clear";
    if (code <= 2) return "partly cloudy";
    if (code === 3) return "overcast";
    if (code <= 49) return "foggy";
    if (code <= 57) return "drizzle";
    if (code <= 67) return "rain";
    if (code <= 77) return "snow";
    if (code <= 82) return "shower";
    if (code <= 99) return "thunderstorm";
    return "partly cloudy";
  };

  const wmoToText = (code: number): string => {
    if (code === 0) return "Clear";
    if (code <= 2) return "Partly Cloudy";
    if (code === 3) return "Overcast";
    if (code <= 49) return "Foggy";
    if (code <= 57) return "Drizzle";
    if (code <= 67) return "Rain";
    if (code <= 77) return "Snow";
    if (code <= 82) return "Heavy Rain";
    if (code <= 99) return "Thunderstorm";
    return "Partly Cloudy";
  };

  const isDay = cur.is_day === 1;
  const condStr = wmoToCondition(cur.weather_code);

  const days = daily.time.map((date: string, i: number) => {
    const d = new Date(date);
    const dayName =
      i === 0 ? "Today" : d.toLocaleDateString("en-US", { weekday: "short" });
    return {
      day: dayName,
      high: Math.round(daily.temperature_2m_max[i]),
      low: Math.round(daily.temperature_2m_min[i]),
      precipChance: daily.precipitation_probability_max[i] ?? 0,
      iconType: conditionToIcon(wmoToCondition(daily.weather_code[i]), true),
    };
  });

  const now = new Date();
  const updatedAt = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return {
    temp: Math.round(cur.temperature_2m),
    condition: wmoToText(cur.weather_code),
    high: days[0].high,
    low: days[0].low,
    location: LOCATION,
    humidity: cur.relative_humidity_2m,
    wind: Math.round(cur.wind_speed_10m),
    iconType: conditionToIcon(condStr, isDay),
    daily: days,
    updatedAt,
  };
}

interface WeatherWidgetProps {
  compact?: boolean;
}

export default function WeatherWidget({ compact }: WeatherWidgetProps) {
  const [data, setData] = useState<WeatherData | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWeather()
      .then((d) => {
        setData(d);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const GLASS: React.CSSProperties = {
    background:
      "linear-gradient(145deg, rgba(22,28,42,0.84) 0%, rgba(16,22,36,0.92) 100%)",
    backdropFilter: "blur(64px) saturate(200%)",
    WebkitBackdropFilter: "blur(64px) saturate(200%)",
    border: "0.5px solid rgba(255,255,255,0.12)",
    boxShadow:
      "0 4px 32px rgba(0,0,0,0.42), inset 0 0.5px 0 rgba(255,255,255,0.16)",
    fontFamily: "var(--font-system)",
  };

  // Loading state
  if (loading) {
    return (
      <div
        style={{
          ...GLASS,
          borderRadius: 18,
          padding: "16px 18px",
          width: compact ? 162 : 200,
          userSelect: "none",
        }}
      >
        <div
          style={{
            fontSize: 12,
            color: "rgba(255,255,255,0.4)",
            textAlign: "center",
            padding: "20px 0",
          }}
        >
          Loading weather...
        </div>
      </div>
    );
  }

  // Error fallback
  if (error || !data) {
    return (
      <div
        style={{
          ...GLASS,
          borderRadius: 18,
          padding: "16px 18px",
          width: compact ? 162 : 200,
          userSelect: "none",
        }}
      >
        <div
          style={{
            fontSize: 11,
            color: "rgba(255,200,0,0.7)",
            textAlign: "center",
            padding: "16px 0",
          }}
        >
          ⚠ Failed to load weather data
        </div>
      </div>
    );
  }

  // ── Compact variant ──
  if (compact) {
    return (
      <div
        style={{
          ...GLASS,
          borderRadius: 16,
          padding: "14px 16px 12px",
          userSelect: "none",
          width: 162,
        }}
      >
        <div
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: "rgba(255,255,255,0.72)",
            marginBottom: 4,
          }}
        >
          {data.location}
        </div>
        <div
          style={{
            fontSize: 48,
            fontWeight: 200,
            color: "white",
            lineHeight: 1,
            letterSpacing: "-2px",
            fontVariantNumeric: "tabular-nums",
            marginBottom: 6,
          }}
        >
          {data.temp}°
        </div>
        <div
          style={{
            fontSize: 11,
            color: "rgba(255,255,255,0.55)",
            marginBottom: 8,
          }}
        >
          {data.condition}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            paddingTop: 8,
            borderTop: "0.5px solid rgba(255,255,255,0.09)",
          }}
        >
          <WeatherIcon type={data.iconType} size={14} />
          <span style={{ fontSize: 10, color: "rgba(255,255,255,0.55)" }}>
            H:{data.high}° L:{data.low}°
          </span>
        </div>
      </div>
    );
  }

  // ── Full variant ──
  return (
    <div
      style={{
        ...GLASS,
        borderRadius: 18,
        padding: "16px 18px",
        userSelect: "none",
        width: 220,
      }}
    >
      {/* Top row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div>
          <div
            style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.65)",
              marginBottom: 4,
              fontWeight: 500,
            }}
          >
            {data.location}
          </div>
          <div
            style={{
              fontSize: 42,
              fontWeight: 200,
              color: "white",
              lineHeight: 1,
              letterSpacing: "-1.5px",
            }}
          >
            {data.temp}°C
          </div>
          <div
            style={{
              fontSize: 12,
              color: "rgba(255,255,255,0.65)",
              marginTop: 5,
            }}
          >
            {data.condition}
          </div>
        </div>
        <WeatherIcon type={data.iconType} size={48} />
      </div>

      {/* Stats */}
      <div
        style={{
          display: "flex",
          gap: 10,
          marginTop: 12,
          paddingTop: 10,
          borderTop: "0.5px solid rgba(255,255,255,0.09)",
          flexWrap: "wrap",
        }}
      >
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.55)" }}>
          H:{data.high}° L:{data.low}°
        </span>
        {data.humidity !== undefined && (
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.55)" }}>
            💧 {data.humidity}%
          </span>
        )}
        {data.wind !== undefined && (
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.55)" }}>
            💨 {data.wind} km/h
          </span>
        )}
      </div>

      {/* 5-day forecast */}
      <div
        style={{
          marginTop: 12,
          paddingTop: 10,
          borderTop: "0.5px solid rgba(255,255,255,0.07)",
          display: "flex",
          flexDirection: "column",
          gap: 6,
        }}
      >
        {data.daily.map((d, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{
                fontSize: 11,
                color: "rgba(255,255,255,0.6)",
                width: 56,
              }}
            >
              {d.day}
            </span>
            <WeatherIcon type={d.iconType} size={16} />
            {d.precipChance > 0 && (
              <span
                style={{
                  fontSize: 10,
                  color: "#64D2FF",
                  width: 28,
                  textAlign: "right",
                }}
              >
                {d.precipChance}%
              </span>
            )}
            {d.precipChance === 0 && <span style={{ width: 28 }} />}
            <span
              style={{
                fontSize: 11,
                color: "white",
                width: 28,
                textAlign: "right",
              }}
            >
              {d.high}°
            </span>
          </div>
        ))}
      </div>

      {/* Updated at */}
      <div
        style={{
          marginTop: 10,
          fontSize: 10,
          color: "rgba(255,255,255,0.3)",
          textAlign: "right",
        }}
      >
        Updated {data.updatedAt}
      </div>
    </div>
  );
}
