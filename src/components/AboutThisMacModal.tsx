import { motion, AnimatePresence } from "framer-motion";
import PDFViewer from "./PDFViewer";

interface AboutThisMacModalProps {
  show: boolean;
  onClose: () => void;
  isDark?: boolean;
}

export default function AboutThisMacModal({ show, onClose, isDark = false }: AboutThisMacModalProps) {
  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Backdrop */}
          <motion.div
            key="about-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 200,
              backdropFilter: "blur(2px)",
              WebkitBackdropFilter: "blur(2px)",
              background: "rgba(0,0,0,0.18)",
            }}
          />

          {/* PDF Viewer */}
          <motion.div
            key="pdf-viewer"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 201,
              width: "90vw",
              maxWidth: 900,
              height: "90vh",
              maxHeight: 700,
              background: isDark ? "#1c1c1e" : "#f5f5f7",
              backdropFilter: "var(--lg-blur)",
              WebkitBackdropFilter: "var(--lg-blur)",
              border: "var(--lg-border)",
              borderTop: "var(--lg-border-strong)",
              boxShadow: "var(--shadow-window-focused), var(--lg-inner-highlight-strong)",
              borderRadius: "var(--radius-window)",
              overflow: "hidden",
              fontFamily: "var(--font-system)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Traffic lights and close button */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 14px",
                borderBottom: isDark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.1)",
              }}
            >
              <div style={{ display: "flex", gap: 8 }}>
                <button
                  onClick={onClose}
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "#FF5F57",
                    border: "none",
                    cursor: "pointer",
                  }}
                />
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#FDBC40" }} />
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28C840" }} />
              </div>
            </div>

            {/* PDF Viewer Content */}
            <div style={{ flex: 1, overflow: "auto" }}>
              <PDFViewer pdfUrl="/resume.pdf" fileName="Resume" isDark={isDark} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
