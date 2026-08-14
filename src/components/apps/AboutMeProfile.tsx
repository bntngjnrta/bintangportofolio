import { motion } from "framer-motion";

interface AboutMeProfileProps {
  isDark?: boolean;
}

export default function AboutMeProfile({ isDark = false }: AboutMeProfileProps) {
  const profileItems = [
    {
      icon: "i-ph:envelope",
      label: "Email",
      value: "kadekbintangjanuarta@gmail.com",
      link: "mailto:kadekbintangjanuarta@gmail.com"
    },
    {
      icon: "i-fa6-brands:github",
      label: "GitHub",
      value: "@bntngjnrta",
      link: "https://github.com/bntngjnrta"
    },
    {
      icon: "i-fa6-brands:linkedin",
      label: "LinkedIn",
      value: "Kadek Bintang Januarta",
      link: "https://www.linkedin.com/in/kadek-bintang-januarta/"
    },
    {
      icon: "i-fa6-brands:instagram",
      label: "Instagram",
      value: "@bntngjnrta",
      link: "https://instagram.com/bntngjnrta"
    }
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      color: {
        bg: isDark ? "rgba(0,122,255,0.15)" : "rgba(0,122,255,0.08)",
        text: isDark ? "#5aa8ff" : "#0055cc",
        border: isDark ? "1px solid rgba(0,122,255,0.25)" : "1px solid rgba(0,122,255,0.2)"
      },
      skills: [
        "React.js",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "AJAX",
        "Responsive Web Design",
        "REST API Integration"
      ]
    },
    {
      title: "Backend Development",
      color: {
        bg: isDark ? "rgba(52,199,89,0.15)" : "rgba(52,199,89,0.08)",
        text: isDark ? "#6fc66d" : "#008726",
        border: isDark ? "1px solid rgba(52,199,89,0.25)" : "1px solid rgba(52,199,89,0.2)"
      },
      skills: [
        "C#",
        "ASP.NET Core",
        "PHP",
        "Laravel",
        "Java",
        "Spring Boot",
        "RESTful API Development",
        "Dapper",
        "Authentication & Authorization (JWT)",
        "Entity Framework"
      ]
    },
    {
      title: "Database",
      color: {
        bg: isDark ? "rgba(255,149,0,0.15)" : "rgba(255,149,0,0.08)",
        text: isDark ? "#ffa83a" : "#b36200",
        border: isDark ? "1px solid rgba(255,149,0,0.25)" : "1px solid rgba(255,149,0,0.2)"
      },
      skills: [
        "Microsoft SQL Server",
        "MySQL",
        "Oracle Database"
      ]
    },
    {
      title: "Tools",
      color: {
        bg: isDark ? "rgba(175,82,222,0.15)" : "rgba(175,82,222,0.08)",
        text: isDark ? "#da8fff" : "#8927b5",
        border: isDark ? "1px solid rgba(175,82,222,0.25)" : "1px solid rgba(175,82,222,0.2)"
      },
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "Swagger",
        "Power BI",
        "Figma",
        "Microsoft Visio",
        "Microsoft Office"
      ]
    },
    {
      title: "Network Infrastructure",
      color: {
        bg: isDark ? "rgba(88,86,214,0.15)" : "rgba(88,86,214,0.08)",
        text: isDark ? "#9d9bfa" : "#4441b8",
        border: isDark ? "1px solid rgba(88,86,214,0.25)" : "1px solid rgba(88,86,214,0.2)"
      },
      skills: [
        "MikroTik",
        "Cisco",
        "Ruijie",
        "DNS Management",
        "Windows Server Administration",
        "VLAN"
      ]
    },
    {
      title: "Soft Skills",
      color: {
        bg: isDark ? "rgba(255,45,85,0.15)" : "rgba(255,45,85,0.08)",
        text: isDark ? "#ff6b8b" : "#c70d3a",
        border: isDark ? "1px solid rgba(255,45,85,0.25)" : "1px solid rgba(255,45,85,0.2)"
      },
      skills: [
        "Leadership",
        "Public Speaking",
        "Critical & Analytical Thinking",
        "Problem Solving",
        "Time and Priority Management",
        "Team Collaboration",
        "Attention to Detail"
      ]
    },
    {
      title: "Language",
      color: {
        bg: isDark ? "rgba(0,199,190,0.15)" : "rgba(0,199,190,0.08)",
        text: isDark ? "#5ee2db" : "#00857f",
        border: isDark ? "1px solid rgba(0,199,190,0.25)" : "1px solid rgba(0,199,190,0.2)"
      },
      skills: [
        "Indonesian (Native)",
        "English (Intermediate)"
      ]
    }
  ];

  const dividerStyle = {
    borderTop: isDark ? "3px solid rgba(255, 255, 255, 0.58)" : "3px solid rgba(0,0,0,0.08)",
    margin: 0
  };

  const sectionLabelStyle = {
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.06em",
    textTransform: "uppercase" as const,
    color: isDark ? "#555" : "#aaa",
    marginBottom: "12px"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full h-full overflow-y-auto"
      style={{
        background: isDark ? "#1a1a1a" : "#f5f5f7",
      }}
    >
      <div className="w-full p-2.5 sm:p-4 md:p-6 lg:p-8">
        <div
          className="rounded-xl overflow-hidden"
          style={{
            background: isDark ? "#242424" : "#ffffff",
            border: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.08)"
          }}
        >
          <div className="flex items-center gap-4 p-5">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="relative flex-shrink-0"
            >
              <img
                src="img/profile/profile.jpg"
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
                style={{
                  border: isDark ? "2px solid rgba(255,255,255,0.1)" : "2px solid rgba(0,0,0,0.06)"
                }}
              />
              <div
                className="absolute bottom-0.5 right-0.5 w-3 h-3 rounded-full"
                style={{
                  background: "#22c55e",
                  border: isDark ? "2px solid #242424" : "2px solid #ffffff"
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              className="flex-1 min-w-0"
            >
              <h1
                className="text-lg font-semibold mb-0.5"
                style={{ color: isDark ? "#ffffff" : "#1c1c1e" }}
              >
                KADEK BINTANG JANUARTA
              </h1>
              <p
                className="text-sm font-medium mb-2"
                style={{ color: "#007AFF" }}
              >
                Fullstack Developer
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <span
                  className="flex items-center gap-1 text-xs"
                  style={{ color: isDark ? "#666" : "#aaa" }}
                >
                  <span className="i-ph:map-pin" style={{ fontSize: "13px" }} />
                  Cikarang, West Java, ID   
                </span>
                <span
                  className="flex items-center gap-1 text-xs"
                  style={{ color: isDark ? "#666" : "#aaa" }}
                >
                  {/* <span className="i-ph:graduation-cap" style={{ fontSize: "13px" }} />
                  Informatics Management Student */}
                </span>
              </div>
            </motion.div>
          </div>

          <hr style={dividerStyle} />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-5"
          >
            <p style={sectionLabelStyle}>About</p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: isDark ? "#aaa" : "#444" }}
            >
              Hi there! 👋 I'm an Informatics Management student at{" "}
              <a
                href="https://www.polytechnic.astra.ac.id/"
                className="font-medium hover:underline"
                style={{ color: "#007AFF" }}
                target="_blank"
                rel="noreferrer"
              >
                ASTRA Polytechnic
              </a>{" "}
              with a strong passion for software engineering, full stack development, and system analysis. Experienced in developing applications for web, mobile, and desktop platforms through end-to-end academic projects, including system requirement analysis and application design. Skilled in problem solving, critical thinking, and collaborative development to deliver efficient, scalable, and user-focused software solutions.
            </p>
          </motion.div>

          <hr style={dividerStyle} />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-5 space-y-4"
          >
            <p style={sectionLabelStyle}>Education</p>
            
            <div style={{ position: 'relative', paddingLeft: '24px' }}>
              {/* Timeline line */}
              <div
                style={{
                  position: 'absolute',
                  left: '5px',
                  top: '0',
                  bottom: '0',
                  width: '2px',
                  background: isDark
                    ? "linear-gradient(180deg, rgba(0,122,255,0.6) 0%, rgba(0,122,255,0.2) 100%)"
                    : "linear-gradient(180deg, rgba(0,122,255,0.5) 0%, rgba(0,122,255,0.1) 100%)"
                }}
              />
              
              {/* ASTRA Polytechnic */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 }}
                style={{ position: 'relative', paddingBottom: '20px' }}
              >
                {/* Timeline dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: '-24px',
                    top: '2px',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: '#007AFF',
                    border: isDark ? "3px solid #242424" : "3px solid #ffffff",
                    boxShadow: '0 0 8px rgba(0,122,255,0.4)'
                  }}
                />
                <div className="space-y-1">
                  <div style={{ 
                    fontSize: '14px', 
                    fontWeight: 600, 
                    color: isDark ? "#fff" : "#1c1c1e" 
                  }}>
                    POLITEKNIK ASTRA
                  </div>
                  <div style={{ 
                    fontSize: '13px', 
                    color: isDark ? "#b0b0b0" : "#555" 
                  }}>
                    Diploma III - Informatics Management
                  </div>
                  <div style={{ 
                    fontSize: '12px', 
                    color: isDark ? "#888" : "#999" 
                  }}>
                    August 2024 - Present
                  </div>
                </div>
              </motion.div>

              {/* SMA NEGERI BALI MANDARA */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                style={{ position: 'relative' }}
              >
                {/* Timeline dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: '-24px',
                    top: '2px',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: '#007AFF',
                    border: isDark ? "3px solid #242424" : "3px solid #ffffff",
                    boxShadow: '0 0 8px rgba(0,122,255,0.4)'
                  }}
                />
                <div className="space-y-1">
                  <div style={{ 
                    fontSize: '14px', 
                    fontWeight: 600, 
                    color: isDark ? "#fff" : "#1c1c1e" 
                  }}>
                    SMA NEGERI BALI MANDARA
                  </div>
                  <div style={{ 
                    fontSize: '13px', 
                    color: isDark ? "#b0b0b0" : "#555" 
                  }}>
                    Mathematics and Natural Sciences
                  </div>
                  <div style={{ 
                    fontSize: '12px', 
                    color: isDark ? "#888" : "#999" 
                  }}>
                    June 2021 - August 2024
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <hr style={dividerStyle} />

          {/* Skills & Interests */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="p-5 space-y-4"
          >
            <p style={sectionLabelStyle}>Skills & Interests</p>
            
            <div className="space-y-4">
              {skillCategories.map((cat, catIdx) => (
                <div key={cat.title}>
                  <div style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: isDark ? '#aaa' : '#666',
                    marginBottom: '8px'
                  }}>
                    {cat.title}
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {cat.skills.map((skill, idx) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.35 + catIdx * 0.03 + idx * 0.01 }}
                        className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium"
                        style={{
                          background: cat.color.bg,
                          color: cat.color.text,
                          border: cat.color.border
                        }}
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <hr style={dividerStyle} />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="p-5"
          >
            <p style={sectionLabelStyle}>Get in Touch</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {profileItems.map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + idx * 0.05 }}
                  className="flex items-center gap-3 py-2.5 px-3 rounded-lg transition-all duration-150"
                  style={{
                    textDecoration: "none",
                    background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.045)",
                    border: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.08)"
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.045)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)"
                    }}
                  >
                    <span
                      className={`${item.icon}`}
                      style={{ fontSize: "16px", color: isDark ? "#fff" : "#1c1c1e" }}
                    />
                  </div>
                  <div className="min-w-0">
                    <div
                      className="text-[11px] font-semibold"
                      style={{ color: isDark ? "#888" : "#888" }}
                    >
                      {item.label}
                    </div>
                    <div
                      className="text-xs font-medium truncate"
                      style={{ color: isDark ? "#ccc" : "#1c1c1e" }}
                    >
                      {item.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <hr style={dividerStyle} />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="px-5 py-3 text-center"
            style={{
              background: isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)"
            }}
          >
            <p
              className="text-xs"
              style={{ color: isDark ? "#444" : "#bbb" }}
            >
              Let's build something amazing together!
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}