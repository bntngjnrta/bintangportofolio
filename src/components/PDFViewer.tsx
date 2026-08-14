import { useState } from "react";

interface PDFViewerProps {
  pdfUrl: string;
  fileName?: string;
  isDark?: boolean;
}

export default function PDFViewer({
  pdfUrl,
  fileName = "Resume",
  isDark = false,
}: PDFViewerProps) {
  const [zoom, setZoom] = useState(100);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = `${fileName}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleZoomIn = () => setZoom((z) => Math.min(z + 20, 200));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 20, 50));

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        background: isDark ? "#1c1c1e" : "#f5f5f7",
        borderRadius: "var(--radius-window)",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 16px",
          borderBottom: isDark
            ? "1px solid rgba(255,255,255,0.1)"
            : "1px solid rgba(0,0,0,0.1)",
          background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.02)",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: 16,
            fontWeight: 600,
            color: isDark ? "#fff" : "#1c1c1e",
          }}
        >
          {fileName}
        </h2>
        <button
          onClick={handleDownload}
          style={{
            padding: "6px 12px",
            background: "#007AFF",
            border: "none",
            borderRadius: "6px",
            color: "white",
            fontSize: 12,
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          Download PDF
        </button>
      </div>

      {/* PDF via iframe */}
      <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>
        <iframe
          src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
            style={{
            width: `${10000 / zoom}%`,
            height: `${10000 / zoom}%`,
            border: "none",
            transformOrigin: "top left",
            transform: `scale(${zoom / 100})`,
            }}
          title={fileName}
        />
      </div>

      {/* Controls */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "12px 16px",
          borderTop: isDark
            ? "1px solid rgba(255,255,255,0.1)"
            : "1px solid rgba(0,0,0,0.1)",
          background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.02)",
          gap: "12px",
        }}
      >
        <button
          onClick={handleZoomOut}
          disabled={zoom <= 50}
          style={{
            padding: "4px 8px",
            background: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
            border: "none",
            borderRadius: "4px",
            cursor: zoom <= 50 ? "default" : "pointer",
            opacity: zoom <= 50 ? 0.5 : 1,
            color: isDark ? "#fff" : "#1c1c1e",
            fontSize: 12,
          }}
        >
          −
        </button>
        <span
          style={{
            fontSize: 11,
            color: isDark ? "#aaa" : "#666",
            minWidth: "50px",
            textAlign: "center",
          }}
        >
          {zoom}%
        </span>
        <button
          onClick={handleZoomIn}
          disabled={zoom >= 200}
          style={{
            padding: "4px 8px",
            background: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
            border: "none",
            borderRadius: "4px",
            cursor: zoom >= 200 ? "default" : "pointer",
            opacity: zoom >= 200 ? 0.5 : 1,
            color: isDark ? "#fff" : "#1c1c1e",
            fontSize: 12,
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
