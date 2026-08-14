import { motion } from "framer-motion";

interface AchievementsProfileProps {
  isDark?: boolean;
}

export default function AchievementsProfile({ isDark = false }: AchievementsProfileProps) {
  const awards = [
    {
      icon: "i-ph:trophy",
      title: "Google Student Ambassador",
      organization: "Google Indonesia",
      date: "Apr 2026",
      description: "Selected to be one of two thousand GSAs throughout Indonesia (on going)",
      link: "https://drive.google.com/drive/folders/1pHDqcCdTjwTKFrT1lEWy1EEHEwsYP9Ra?usp=sharing",
      linkText: "Documentation"
    },
    {
      icon: "i-ph:medal",
      title: "KPP Youth In Action 2",
      organization: "PT Kalimantan Prima Persada",
      date: "Aug 2026",
      description: "Recipients of social project grant funds (on going)",
      link: "https://drive.google.com/file/d/1XGXmc5QlKGQ-BOe0ic2j5bgkdWYQlAUY/view?usp=sharing",
      linkText: "Certificate"
    },
    {
      icon: "i-ph:trophy",
      title: "1st International Conference on Data Science and Geoinformatics (ICDSG)",
      organization: "INABIMS Center",
      date: "Nov 2025",
      description: "Best paper awardee",
      link: "https://drive.google.com/file/d/1Wkv-lUJXDqnVRyKIeL4SrXwm9X_ZNihf/view?usp=sharing",
      linkText: "Certificate"
    },
    {
      icon: "i-ph:medal",
      title: "AHM GEAR Business Case Competition",
      organization: "PT Astra Honda Motor",
      date: "Nov 2025",
      description: "National finalist",
      link: "https://drive.google.com/file/d/1QC6hQqozHTzfdYSa0yEJ5lHwjFuYS6H3/view?usp=drive_link",
      linkText: "Certificate"
    },
    {
      icon: "i-ph:medal",
      title: "West Java Renewable Energy Exploration",
      organization: "Institute for Essential Services Reform (IESR)",
      date: "Jan 2024",
      description: "Delegated from Bali Province for the renewable energy exploration event",
      link: "https://drive.google.com/drive/folders/1fceIeFvr_8wY_oaiKco21tcpF3W84l89?usp=sharing",
      linkText: "Documentation"
    },
    {
      icon: "i-ph:medal",
      title: "Astra Honda Motor Best Student",
      organization: "PT Astra Honda Motor",
      date: "Nov 2023",
      description: "Silver medal in the invention category",
      link: "https://drive.google.com/file/d/1JvnbK5YoOgaxkhF8kkxJrUs5PKdW8G6D/view?usp=drive_link",
      linkText: "Certificate"
    },
    {
      icon: "i-ph:medal",
      title: "Festival of Innovation and Student Entrepreneurship in Indonesia",
      organization: "Kemendikbudristek, Puspresnas",
      date: "Sept 2023",
      description: "Silver medal in advanced business cultivation and cross-sector collaboration",
      link: "https://drive.google.com/file/d/1CwHmioQ6jDTqmDGqKp4o867ZhFfq2skU/view?usp=drive_link",
      linkText: "Certificate"
    },
    {
      icon: "i-ph:medal",
      title: "INCUBITS (WASH Innovation Hub Start-Up Incubator)",
      organization: "UNICEF, Kementerian PUPR",
      date: "Feb 2023",
      description: "National grand finalist",
      link: "https://drive.google.com/file/d/1DVUq-Mn-X8yPimdWbzIXKgA1vXhuW4ta/view?usp=drive_link",
      linkText: "Certificate"
    },
    {
      icon: "i-ph:medal",
      title: "The 10th Ambassador Business Edupreneur",
      organization: "Universitas Pendidikan Indonesia",
      date: "Nov 2022",
      description: "2nd place in the start-up business category",
      link: "https://drive.google.com/file/d/1Hx5LlMSODNMc1VapXNcUu7_CSaLYAqWq/view?usp=drive_link",
      linkText: "Certificate"
    },
    {
      icon: "i-ph:trophy",
      title: "Digital Innovation and Technology Competition",
      organization: "PT Astra International Tbk",
      date: "Jan 2022",
      description: "1st place in the future of mobility category",
      link: "https://drive.google.com/file/d/1OePO4EscFy3EojCxSsGC2wu92EPFPFOt/view?usp=drive_link",
      linkText: "Certificate"
    }
  ];

  const organizations = [
    {
      icon: "i-ph:briefcase",
      name: "ASEEC EDUCATION",
      role: "Digital Marketing Team",
      period: "Jun 2025 – Present",
      points: [
        "Produced 30+ digital content assets and collaborated with cross-functional teams to execute data-driven campaigns, supporting community engagement and digital growth."
      ]
    },
    {
      icon: "i-ph:briefcase",
      name: "STUDENT EXECUTIVE BOARD",
      role: "Secretary",
      period: "Mar 2025 – Mar 2026",
      points: [
        "Managed 100+ digital documents, meeting records, and organizational data, implementing structured documentation practices to ensure 100% accessibility and information accuracy.",
        "Coordinated cross-functional teams, schedules, and project documentation across 20+ programs, supporting timely execution and streamlined organizational workflows."
      ]
    },
    {
      icon: "i-ph:briefcase",
      name: "CLEAN ENERGY TECHNOLOGY STARTUP COMMUNITY",
      role: "Program & Social Media Officer",
      period: "Aug 2024 – Aug 2026",
      points: [
        "Managed 5+ community projects from planning to execution, leveraging engagement data to optimize program delivery and achieve 80%+ member participation per event.",
        "Coordinated 10+ external partners and industry stakeholders, managing timelines, communication, and project requirements to ensure effective program execution."
      ]
    },
    {
      icon: "i-ph:briefcase",
      name: "INDONESIAN YOUNG RESEARCHERS ASSOCIATION",
      role: "Entrepreneurship Division",
      period: "Jan 2024 – Jan 2026",
      points: [
        "Managed partnerships with 15+ business and entrepreneurship organizations across Indonesia, coordinating collaboration initiatives and stakeholder communication to support program objectives.",
        "Mentored 50+ students in business planning, innovation, and problem-solving."
      ]
    }
  ];

  const publications = [
    {
      icon: "i-ph:article",
      title: "Sentiment Analysis and Clustering of Vocational Education Selection with Machine Learning",
      authors: "Muhammad Ridha; Yosep Setiawan; Kadek Bintang Januarta; Wildan Yazid Ziddan; Deni Handika Shaputra",
      journal: "Institute of Electrical and Electronics Engineers",
      year: "2026",
      link: "https://ieeexplore.ieee.org/document/11381376",
      hkiLink: "https://drive.google.com/file/d/1z5ozBWJldrQylcjBU3FhV0oJobwCFR6h/view?usp=sharing"
    }
  ];

  const licenses = [
    {
      icon: "i-ph:certificate",
      title: "Basic Artificial Intelligence",
      issuer: "Dicoding & Google Cloud Partner",
      credentialId: "L4PQ99JNQPO1",
      date: "May 2026",
      link: "https://www.dicoding.com/certificates/L4PQ99JNQPO1"
    },
    {
      icon: "i-ph:certificate",
      title: "Gemini University Student Certification",
      issuer: "Google for Education",
      credentialId: "EE1C2A7F-30F4-411D-B9D7-CFF64713E68D",
      date: "Apr 2026",
      link: "https://edu.google.accredible.com/ee1c2a7f-30f4-411d-b9d7-cff64713e68d#acc.3kdqU8Ix"
    },
    {
      icon: "i-ph:certificate",
      title: "MikroTik Certified Network Associate",
      issuer: "MikroTik",
      credentialId: "2601NA2724",
      date: "Jan 2026",
      link: "https://mikrotik.com/training/certificates/c702724c6f5e028fbbaf"
    },
    {
      icon: "i-ph:certificate",
      title: "Basic Cyber Security",
      issuer: "IDNetworkers",
      credentialId: "IDN-1746776857-13888-54222",
      date: "May 2025",
      link: "https://lms.idn.id/cert-verification/?certificate_id=IDN-1746776857-13888-54222"
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
      <div className="w-full p-4 md:p-6 lg:p-8">
        <div
          className="rounded-xl overflow-hidden"
          style={{
            background: isDark ? "#242424" : "#ffffff",
            border: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.08)"
          }}
        >
          {/* AWARDS (Last 5 Years) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-5 space-y-3"
          >
            <p style={sectionLabelStyle}>Awards (Last 5 Years)</p>

            <div className="space-y-3">
              {awards.map((award, idx) => (
                <motion.div
                  key={`${award.title}-${idx}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.12 + idx * 0.035 }}
                  className="p-3.5 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 transition-colors duration-150"
                  style={{
                    background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.045)",
                    border: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.08)"
                  }}
                >
                  <div className="flex items-start gap-3 min-w-0 flex-1">
                    <div style={{ fontSize: "18px", marginTop: "2px", color: "#FFB800", flexShrink: 0 }}>
                      <span className={award.icon} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline gap-x-1.5">
                        <span style={{
                          fontSize: "13.5px",
                          fontWeight: 700,
                          color: isDark ? "#fff" : "#1c1c1e"
                        }}>
                          {award.title}
                        </span>
                        <span style={{
                          fontSize: "12.5px",
                          fontWeight: 500,
                          color: isDark ? "#aaa" : "#555"
                        }}>
                          – {award.organization}
                        </span>
                      </div>
                      <div className="mt-1 text-xs leading-relaxed" style={{ color: isDark ? "#888" : "#666" }}>
                        {award.description}
                      </div>
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 flex-shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-black/5 dark:border-white/5">
                    <span style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      color: isDark ? "#e0e0e0" : "#2c2c2e",
                      whiteSpace: "nowrap"
                    }}>
                      {award.date}
                    </span>
                    {award.link && (
                      <a
                        href={award.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="px-2.5 py-1 rounded-md text-[11px] font-semibold inline-flex items-center gap-1 transition-all duration-150 shadow-sm hover:scale-105"
                        style={{
                          background: isDark ? "rgba(0,122,255,0.2)" : "rgba(0,122,255,0.1)",
                          color: isDark ? "#5aa8ff" : "#007AFF",
                          border: isDark ? "1px solid rgba(0,122,255,0.4)" : "1px solid rgba(0,122,255,0.25)",
                          textDecoration: "none"
                        }}
                      >
                        <span>{award.linkText}</span>
                        <span className="i-ph:arrow-square-out text-[11px]" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <hr style={dividerStyle} />

          {/* ORGANIZATIONAL EXPERIENCE */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="p-5 space-y-3"
          >
            <p style={sectionLabelStyle}>Organizational Experience</p>
            <div className="space-y-3">
              {organizations.map((org, idx) => (
                <motion.div
                  key={`${org.name}-${idx}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.38 + idx * 0.04 }}
                  className="p-3.5 rounded-lg flex flex-col gap-2 transition-colors duration-150"
                  style={{
                    background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.045)",
                    border: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.08)"
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div style={{ fontSize: "18px", color: "#007AFF", flexShrink: 0 }}>
                        <span className={org.icon} />
                      </div>
                      <div className="flex flex-wrap items-baseline gap-x-2">
                        <span style={{
                          fontSize: "13.5px",
                          fontWeight: 700,
                          color: isDark ? "#fff" : "#1c1c1e"
                        }}>
                          {org.name}
                        </span>
                        <span style={{
                          fontSize: "12.5px",
                          fontWeight: 500,
                          color: isDark ? "#aaa" : "#555"
                        }}>
                          | {org.role}
                        </span>
                      </div>
                    </div>

                    <div className="text-left sm:text-right flex-shrink-0">
                      <span style={{
                        fontSize: "12px",
                        fontWeight: 600,
                        color: isDark ? "#e0e0e0" : "#2c2c2e",
                        whiteSpace: "nowrap"
                      }}>
                        {org.period}
                      </span>
                    </div>
                  </div>

                  {org.points && org.points.length > 0 && (
                    <ul className="space-y-1.5 pl-6 list-disc mt-0.5" style={{ color: isDark ? "#aaa" : "#555" }}>
                      {org.points.map((point, pIdx) => (
                        <li
                          key={pIdx}
                          className="text-xs leading-relaxed"
                          style={{ color: isDark ? "#aaa" : "#555" }}
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <hr style={dividerStyle} />

          {/* PUBLICATIONS */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="p-5 space-y-3"
          >
            <p style={sectionLabelStyle}>Publications</p>
            <div className="space-y-3">
              {publications.map((pub, idx) => (
                <motion.div
                  key={`${pub.title}-${idx}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.55 + idx * 0.05 }}
                  className="flex gap-3 p-3 rounded-lg"
                  style={{
                    background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.045)",
                    border: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.08)"
                  }}
                >
                  <div style={{ fontSize: "18px", marginTop: "2px", color: "#34C759", flexShrink: 0 }}>
                    <span className={pub.icon} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: isDark ? "#fff" : "#1c1c1e",
                      marginBottom: "4px",
                      lineHeight: "1.4"
                    }}>
                      {pub.title}
                    </div>
                    <div style={{
                      fontSize: "11px",
                      color: isDark ? "#aaa" : "#666",
                      marginBottom: "3px"
                    }}>
                      {pub.authors}
                    </div>
                    <div style={{
                      fontSize: "11px",
                      color: isDark ? "#888" : "#999",
                      marginBottom: "4px"
                    }}>
                      <span style={{ color: "#007AFF" }}>{pub.journal}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 mt-1.5">
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        style={{
                          fontSize: "11px",
                          color: "#007AFF",
                          textDecoration: "none",
                          fontWeight: 600
                        }}
                        className="inline-flex items-center gap-1 hover:underline"
                      >
                        <span>Read Paper</span>
                        <span className="i-ph:arrow-up-right text-[10px]" />
                      </a>
                      {pub.hkiLink && (
                        <>
                          <span style={{ color: isDark ? "#444" : "#ccc" }}>•</span>
                          <a
                            href={pub.hkiLink}
                            target="_blank"
                            rel="noreferrer noopener"
                            style={{
                              fontSize: "11px",
                              color: "#AF52DE",
                              textDecoration: "none",
                              fontWeight: 600
                            }}
                            className="inline-flex items-center gap-1 hover:underline"
                          >
                            <span>HKI</span>
                            <span className="i-ph:arrow-up-right text-[10px]" />
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div style={{
                      fontSize: "11px",
                      color: isDark ? "#888" : "#999"
                    }}>
                      {pub.year}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <hr style={dividerStyle} />

          {/* LICENSES & CERTIFICATIONS */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="p-5 space-y-3"
          >
            <p style={sectionLabelStyle}>Licenses & Certifications</p>
            <div className="space-y-3">
              {licenses.map((license, idx) => (
                <motion.div
                  key={`${license.title}-${idx}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.62 + idx * 0.04 }}
                  className="p-3.5 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 transition-colors duration-150"
                  style={{
                    background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.045)",
                    border: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.08)"
                  }}
                >
                  <div className="flex items-start gap-3 min-w-0 flex-1">
                    <div style={{ fontSize: "18px", marginTop: "2px", color: "#AF52DE", flexShrink: 0 }}>
                      <span className={license.icon} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline gap-x-1.5">
                        <span style={{
                          fontSize: "13.5px",
                          fontWeight: 700,
                          color: isDark ? "#fff" : "#1c1c1e"
                        }}>
                          {license.title}
                        </span>
                        <span style={{
                          fontSize: "12.5px",
                          fontWeight: 500,
                          color: isDark ? "#aaa" : "#555"
                        }}>
                          – {license.issuer}
                        </span>
                      </div>
                      <div className="mt-1 text-xs" style={{ color: isDark ? "#888" : "#666" }}>
                        <span>Credential ID {license.credentialId}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 flex-shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-black/5 dark:border-white/5">
                    <span style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      color: isDark ? "#e0e0e0" : "#2c2c2e",
                      whiteSpace: "nowrap"
                    }}>
                      {license.date}
                    </span>
                    {license.link && (
                      <a
                        href={license.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="px-2.5 py-1 rounded-md text-[11px] font-semibold inline-flex items-center gap-1 transition-all duration-150 shadow-sm hover:scale-105"
                        style={{
                          background: isDark ? "rgba(175,82,222,0.2)" : "rgba(175,82,222,0.1)",
                          color: isDark ? "#da8fff" : "#AF52DE",
                          border: isDark ? "1px solid rgba(175,82,222,0.4)" : "1px solid rgba(175,82,222,0.25)",
                          textDecoration: "none"
                        }}
                      >
                        <span>Certificate</span>
                        <span className="i-ph:arrow-square-out text-[11px]" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <hr style={dividerStyle} />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            className="px-5 py-3 text-center"
            style={{
              background: isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)"
            }}
          >
            <p
              className="text-xs"
              style={{ color: isDark ? "#444" : "#bbb" }}
            >
              Contributions in organization, technology, and research!
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
