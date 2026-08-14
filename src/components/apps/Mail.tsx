import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_epuqu85";
const TEMPLATE_ID = "template_dg4afyj";
const PUBLIC_KEY = "OMa3E4b5lL_vVwVYX";

interface MailMessage {
  id: string;
  from: string;
  fromEmail: string;
  subject: string;
  preview: string;
  body: string;
  time: string;
  unread?: boolean;
  starred?: boolean;
  avatar: string;
}

const MESSAGES: MailMessage[] = [
  {
    id: "1",
    from: "Kadek Bintang Januarta",
    fromEmail: "kadekbintangjanuarta@gmail.com",
    subject: "Welcome to my portfolio!",
    preview:
      "Let's connect and explore my projects, achievements, and experiences showcased in this portfolio. Feel free to reach out!",
    body: "Let's connect and explore my projects, achievements, and experiences showcased in this portfolio. Feel free to reach out!",
    time: "10:42 AM",
    unread: true,
    avatar: "⭐",
  },
];

const FOLDERS = ["Inbox", "Sent", "Drafts", "Starred", "Trash"];

export default function Mail() {
  const { winWidth } = useWindowSize();
  const isMobile = winWidth < 768;

  const [selected, setSelected] = useState<string>(MESSAGES[0].id);
  const [mobileView, setMobileView] = useState<"list" | "detail">("list");
  const [activeFolder, setActiveFolder] = useState("Inbox");
  const [search, setSearch] = useState("");
  const [composing, setComposing] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );
  const subjectRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const replyToRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (composing) {
      setTimeout(() => subjectRef.current?.focus(), 300);
    }
  }, [composing]);

  const handleSend = async () => {
    const subject = subjectRef.current?.value || "";
    const message = bodyRef.current?.value || "";
    const name = nameRef.current?.value || "Portfolio Visitor";
    const reply_to = replyToRef.current?.value || "";

    if (!subject.trim() || !message.trim()) {
      alert("Please fill in Subject and Message.");
      return;
    }

    setSending(true);
    setSendStatus("idle");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { subject, message, name, reply_to },
        PUBLIC_KEY,
      );
      setSendStatus("success");
      setTimeout(() => {
        setComposing(false);
        setSendStatus("idle");
      }, 1500);
    } catch (err) {
      console.error("EmailJS error:", err);
      setSendStatus("error");
    } finally {
      setSending(false);
    }
  };

  const filtered = search.trim()
    ? MESSAGES.filter(
        (m) =>
          m.subject.toLowerCase().includes(search.toLowerCase()) ||
          m.from.toLowerCase().includes(search.toLowerCase()) ||
          m.preview.toLowerCase().includes(search.toLowerCase()),
      )
    : MESSAGES;

  const activeMsg = MESSAGES.find((m) => m.id === selected);

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        background: "#f5f5f7",
        borderRadius: "0 0 14px 14px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Sidebar - hidden on mobile */}
      {!isMobile && (
        <div
          style={{
            width: "160px",
            flexShrink: 0,
            background: "rgba(235,235,240,0.98)",
            borderRight: "0.5px solid rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            padding: "8px 0",
          }}
        >
          <div
            style={{
              fontSize: "11px",
              fontWeight: 700,
              color: "rgba(0,0,0,0.35)",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              padding: "6px 14px 4px",
            }}
          >
            Mailboxes
          </div>
          {FOLDERS.map((folder) => (
            <div
              key={folder}
              onClick={() => setActiveFolder(folder)}
              style={{
                padding: "6px 14px",
                borderRadius: "7px",
                margin: "1px 6px",
                cursor: "default",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background:
                  activeFolder === folder
                    ? "rgba(0,122,255,0.12)"
                    : "transparent",
                color: activeFolder === folder ? "#007AFF" : "#1c1c1e",
                fontSize: "13px",
                transition: "background 0.15s ease",
              }}
            >
              <span>{folder}</span>
              {folder === "Inbox" && (
                <span
                  style={{
                    background: "#007AFF",
                    color: "#fff",
                    borderRadius: "10px",
                    fontSize: "10px",
                    fontWeight: 600,
                    padding: "1px 6px",
                    minWidth: "18px",
                    textAlign: "center",
                  }}
                >
                  {MESSAGES.filter((m) => m.unread).length}
                </span>
              )}
            </div>
          ))}
          <div style={{ flex: 1 }} />
          <button
            onClick={() => {
              setComposing(true);
              setSendStatus("idle");
            }}
            style={{
              margin: "8px 12px",
              background: "#007AFF",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "7px",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "4px",
            }}
          >
            <span style={{ fontSize: "16px", lineHeight: 1 }}>+</span> Compose
          </button>
        </div>
      )}

      {/* Message list - shown if not mobile OR if mobile and mobileView === 'list' */}
      {(!isMobile || mobileView === "list") && (
        <div
          style={{
            width: isMobile ? "100%" : "260px",
            flexShrink: 0,
            borderRight: isMobile ? "none" : "0.5px solid rgba(0,0,0,0.1)",
            background: "rgba(248,248,252,0.99)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "8px 10px",
              borderBottom: "0.5px solid rgba(0,0,0,0.08)",
              display: "flex",
              gap: "8px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                gap: "5px",
                background: "rgba(0,0,0,0.07)",
                borderRadius: "7px",
                padding: "5px 8px",
              }}
            >
              <input
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  background: "none",
                  border: "none",
                  outline: "none",
                  fontSize: "12px",
                  width: "100%",
                  color: "#1c1c1e",
                }}
              />
            </div>
            {isMobile && (
              <button
                onClick={() => {
                  setComposing(true);
                  setSendStatus("idle");
                }}
                style={{
                  background: "#007AFF",
                  color: "#fff",
                  border: "none",
                  borderRadius: "7px",
                  padding: "5px 10px",
                  fontSize: "12px",
                  fontWeight: 600,
                  cursor: "pointer",
                  flexShrink: 0,
                }}
              >
                + Compose
              </button>
            )}
          </div>

          <div style={{ overflowY: "auto", flex: 1 }}>
            {filtered.map((msg) => (
              <motion.div
                key={msg.id}
                onClick={() => {
                  setSelected(msg.id);
                  if (isMobile) setMobileView("detail");
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  padding: "10px 14px",
                  borderBottom: "0.5px solid rgba(0,0,0,0.06)",
                  cursor: "default",
                  background:
                    selected === msg.id ? "rgba(0,122,255,0.1)" : "transparent",
                  transition: "background 0.12s ease",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: msg.unread
                        ? "rgba(0,122,255,0.15)"
                        : "rgba(0,0,0,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "16px",
                      flexShrink: 0,
                      fontWeight: 600,
                      color: msg.unread ? "#007AFF" : "#666",
                    }}
                  >
                    {msg.avatar.startsWith("i-") ? (
                      <span
                        className={msg.avatar}
                        style={{ width: "18px", height: "18px" }}
                      />
                    ) : (
                      msg.avatar
                    )}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "13px",
                          fontWeight: msg.unread ? 700 : 500,
                          color: "#1c1c1e",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          flex: 1,
                        }}
                      >
                        {msg.from}
                      </span>
                      <span
                        style={{
                          fontSize: "10px",
                          color: "rgba(0,0,0,0.4)",
                          flexShrink: 0,
                          marginLeft: "6px",
                        }}
                      >
                        {msg.time}
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#1c1c1e",
                        fontWeight: msg.unread ? 600 : 400,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        marginTop: "1px",
                      }}
                    >
                      {msg.subject}
                    </div>
                    <div
                      style={{
                        fontSize: "11px",
                        color: "rgba(0,0,0,0.4)",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        marginTop: "1px",
                      }}
                    >
                      {msg.preview}
                    </div>
                  </div>
                </div>
                {msg.unread && (
                  <div
                    style={{
                      position: "absolute",
                      left: "6px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#007AFF",
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Message view - shown if not mobile OR if mobile and mobileView === 'detail' */}
      {(!isMobile || mobileView === "detail") && (
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            width: isMobile ? "100%" : "auto",
          }}
        >
          {isMobile && (
            <div
              style={{
                padding: "8px 12px",
                borderBottom: "0.5px solid rgba(0,0,0,0.08)",
                background: "rgba(245,245,247,0.98)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <button
                onClick={() => setMobileView("list")}
                style={{
                  background: "none",
                  border: "none",
                  color: "#007AFF",
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "3px",
                  padding: "4px 0",
                }}
              >
                ← Mailboxes
              </button>
              <button
                onClick={() => {
                  setComposing(true);
                  setSendStatus("idle");
                }}
                style={{
                  background: "#007AFF",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  padding: "4px 10px",
                  fontSize: "12px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                + Compose
              </button>
            </div>
          )}
          {activeMsg ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMsg.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  padding: isMobile ? "16px" : "24px 28px",
                  overflowY: "auto",
                  background: "#fff",
                }}
              >
                <h2
                  style={{
                    fontSize: isMobile ? "17px" : "20px",
                    fontWeight: 700,
                    color: "#1c1c1e",
                    margin: "0 0 12px",
                  }}
                >
                  {activeMsg.subject}
                </h2>
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "50%",
                      background: "rgba(0,122,255,0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "18px",
                      fontWeight: 600,
                      color: "#007AFF",
                    }}
                  >
                    {activeMsg.avatar.startsWith("i-") ? (
                      <span
                        className={activeMsg.avatar}
                        style={{ width: "20px", height: "20px" }}
                      />
                    ) : (
                      activeMsg.avatar
                    )}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#1c1c1e",
                      }}
                    >
                      {activeMsg.from}
                    </div>
                    <div style={{ fontSize: "11px", color: "rgba(0,0,0,0.4)" }}>
                      {activeMsg.fromEmail} · {activeMsg.time}
                    </div>
                  </div>
                  {activeMsg.starred && (
                    <span style={{ marginLeft: "auto" }}>
                      <span
                        className="i-ph:star-fill"
                        style={{
                          width: "18px",
                          height: "18px",
                          color: "#FF9500",
                        }}
                      />
                    </span>
                  )}
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.65",
                    color: "#1c1c1e",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {activeMsg.body}
                </div>
              </motion.div>
            </AnimatePresence>
          ) : (
            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(0,0,0,0.3)",
                fontSize: "14px",
              }}
            >
              Select a message
            </div>
          )}
        </div>
      )}

      {/* Compose overlay */}
      <AnimatePresence>
        {composing && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            style={{
              position: "absolute",
              bottom: isMobile ? "8px" : "20px",
              right: isMobile ? "8px" : "20px",
              left: isMobile ? "8px" : "auto",
              width: isMobile ? "auto" : "420px",
              maxHeight: isMobile ? "calc(100% - 16px)" : "auto",
              background: "rgba(248,248,252,0.98)",
              borderRadius: "12px",
              boxShadow:
                "0 16px 60px rgba(0,0,0,0.2), 0 4px 16px rgba(0,0,0,0.1)",
              border: "0.5px solid rgba(0,0,0,0.12)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              zIndex: 50,
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: "10px 14px",
                background: "rgba(235,235,240,0.99)",
                borderBottom: "0.5px solid rgba(0,0,0,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{ fontSize: "13px", fontWeight: 600, color: "#1c1c1e" }}
              >
                New Message
              </span>
              <button
                onClick={() => setComposing(false)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "16px",
                  color: "rgba(0,0,0,0.4)",
                  lineHeight: 1,
                  padding: "2px",
                }}
              >
                ×
              </button>
            </div>

            {/* To */}
            <div
              style={{
                padding: "8px 14px",
                borderBottom: "0.5px solid rgba(0,0,0,0.06)",
                display: "flex",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  color: "rgba(0,0,0,0.4)",
                  width: "46px",
                }}
              >
                To:
              </span>
              <input
                value="kadekbintangjanuarta@gmail.com"
                readOnly
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  fontSize: "13px",
                  background: "transparent",
                  color: "#1c1c1e",
                }}
              />
            </div>

            {/* From name */}
            <div
              style={{
                padding: "8px 14px",
                borderBottom: "0.5px solid rgba(0,0,0,0.06)",
                display: "flex",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  color: "rgba(0,0,0,0.4)",
                  width: "46px",
                }}
              >
                Name:
              </span>
              <input
                ref={nameRef}
                placeholder="Your name"
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  fontSize: "13px",
                  background: "transparent",
                  color: "#1c1c1e",
                }}
              />
            </div>

            {/* Reply to */}
            <div
              style={{
                padding: "8px 14px",
                borderBottom: "0.5px solid rgba(0,0,0,0.06)",
                display: "flex",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  color: "rgba(0,0,0,0.4)",
                  width: "46px",
                }}
              >
                Email:
              </span>
              <input
                ref={replyToRef}
                placeholder="your@email.com"
                type="email"
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  fontSize: "13px",
                  background: "transparent",
                  color: "#1c1c1e",
                }}
              />
            </div>

            {/* Subject */}
            <div
              style={{
                padding: "8px 14px",
                borderBottom: "0.5px solid rgba(0,0,0,0.06)",
                display: "flex",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  color: "rgba(0,0,0,0.4)",
                  width: "46px",
                }}
              >
                Subject:
              </span>
              <input
                ref={subjectRef}
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  fontSize: "13px",
                  background: "transparent",
                  color: "#1c1c1e",
                }}
              />
            </div>

            {/* Body */}
            <textarea
              ref={bodyRef}
              placeholder="Write your message..."
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                resize: "none",
                fontSize: "13px",
                lineHeight: "1.6",
                color: "#1c1c1e",
                padding: "12px 14px",
                background: "transparent",
                height: "180px",
              }}
            />

            {/* Footer */}
            <div
              style={{
                padding: "8px 14px",
                borderTop: "0.5px solid rgba(0,0,0,0.06)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {sendStatus === "success" && (
                <span
                  style={{
                    fontSize: "12px",
                    color: "#34C759",
                    fontWeight: 500,
                  }}
                >
                  ✓ Message sent!
                </span>
              )}
              {sendStatus === "error" && (
                <span
                  style={{
                    fontSize: "12px",
                    color: "#FF3B30",
                    fontWeight: 500,
                  }}
                >
                  Failed to send. Try again.
                </span>
              )}
              {sendStatus === "idle" && <div />}
              <button
                onClick={handleSend}
                disabled={sending}
                style={{
                  background: sending ? "rgba(0,122,255,0.5)" : "#007AFF",
                  color: "#fff",
                  border: "none",
                  borderRadius: "7px",
                  padding: "6px 16px",
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: sending ? "default" : "pointer",
                }}
              >
                {sending ? "Sending..." : "Send"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
