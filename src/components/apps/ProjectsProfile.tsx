import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface ProjectDetail {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  color: string;
  summary: string;
  longDescription: string;
  highlights: string[];
  tech: string[];
  paperLink?: string;
  hkiLink?: string;
  certificateLink?: string;
  liveDemoLink?: string;
  githubLink?: string;
}

export const projectsList: ProjectDetail[] = [
  {
    id: "sentiment-analysis",
    icon: "i-ph:article",
    title: "Sentiment Analysis & Clustering ML",
    subtitle: "Vocational Education Selection Analysis with Machine Learning",
    category: "Research Paper & NLP",
    year: "2024",
    color: "#007AFF",
    summary:
      "Sentiment analysis and clustering of vocational education selection with machine learning",
    longDescription:
      "Penelitian akademik yang berfokus pada penerapan algoritma Machine Learning dan pemrosesan bahasa alami (Natural Language Processing / NLP) untuk menganalisis sentimen dan preferensi siswa dalam memilih pendidikan vokasi. Melalui analisis data umpan balik pendaftar, riset ini mengelompokkan faktor-faktor penentu minat siswa guna membantu institusi pendidikan meningkatkan relevansi kurikulum dan bimbingan karir.",
    highlights: [
      "Preprocessing teks bahasa Indonesia: tokenization, stopword removal, dan TF-IDF feature extraction.",
      "Klasifikasi sentimen menggunakan model Supervised Learning (SVM, Naive Bayes, dan Random Forest).",
      "Segmentasi minat siswa berbasis Unsupervised Learning (K-Means Clustering).",
      "Dipublikasikan secara resmi di IEEE Xplore Digital Library.",
      "Telah terdaftar resmi dan memiliki Hak Cipta (HKI) dari Kemenkumham RI.",
    ],
    tech: ["Python", "Machine Learning", "NLP", "K-Means", "Scikit-Learn", "Pandas", "Matplotlib"],
    paperLink: "https://ieeexplore.ieee.org/document/11381376",
    hkiLink: "https://drive.google.com/file/d/1z5ozBWJldrQylcjBU3FhV0oJobwCFR6h/view?usp=sharing",
  },
  {
    id: "melanoma-detection",
    icon: "i-ph:camera",
    title: "Melanoma Detection with XAI",
    subtitle: "Efficient & Interpretable Dermoscopic Image-Based Melanoma Detection",
    category: "Explainable AI & Computer Vision",
    year: "2024 - Present",
    color: "#AF52DE",
    summary:
      "Development of an efficient and interpretable dermoscopic image-based melanoma detection model using an explainable artificial intelligence approach (on going)",
    longDescription:
      "Pengembangan model klasifikasi citra dermoskopi untuk deteksi dini kanker kulit melanoma menggunakan pendekatan Deep Learning yang efisien dan Explainable AI (XAI). Pendekatan ini tidak hanya memberikan prediksi akurasi tinggi, tetapi juga memvisualisasikan peta atensi (heatmaps) bagian lesi kulit yang menjadi dasar keputusan AI, sehingga meningkatkan transparansi dan kepercayaan tenaga medis profesional.",
    highlights: [
      "Model Convolutional Neural Networks (CNN) & Vision Transformers yang dioptimalkan untuk citra medis.",
      "Integrasi Explainable AI (Grad-CAM & SHAP) untuk visualisasi area lesi kritis.",
      "Preprocessing dan augmentasi citra dermatologi dengan dataset ISIC benchmark.",
      "Dilengkapi sertifikasi kompetensi terkait penelitian AI dan Machine Learning.",
    ],
    tech: ["Python", "PyTorch", "Computer Vision", "Grad-CAM", "Deep Learning", "Medical AI", "OpenCV"],
    certificateLink: "https://drive.google.com/file/d/1Umpu-bwWe23QHhGorEXij9P3Rz7SQo7J/view?usp=sharing",
  },
  {
    id: "asset-management",
    icon: "i-ph:hard-drives",
    title: "Asset Management System",
    subtitle: "Enterprise IT & Hardware Asset Tracking for UPT Informatics",
    category: "Enterprise Web Application",
    year: "2024",
    color: "#FF9500",
    summary:
      "Developed an asset management system for UPT Informatics using PHP CodeIgniter 3",
    longDescription:
      "Sistem informasi manajemen aset dan inventaris berbasis web yang dikembangkan khusus untuk UPT Informatika. Sistem ini mengotomatisasi pencatatan, peminjaman, perawatan berkala, serta pelacakan lokasi dan depresiasi seluruh perangkat keras dan fasilitas laboratorium kampus dengan efisiensi tinggi.",
    highlights: [
      "Manajemen siklus hidup aset lengkap: pengadaan, penempatan, pemeliharaan, hingga penghapusan.",
      "Sistem pelabelan dan pencarian cepat menggunakan integrasi Barcode / QR Code.",
      "Otorisasi bertingkat (Admin, Teknisi Laboratorium, Pengguna / Dosen).",
      "Laporan mutasi aset dan rekapitulasi audit otomatis yang dapat diekspor ke PDF dan Excel.",
    ],
    tech: ["PHP", "CodeIgniter 3", "MySQL", "Bootstrap", "JavaScript", "jQuery", "DataTables"],
  },
  {
    id: "academic-system",
    icon: "i-ph:graduation-cap",
    title: "Academic Information System",
    subtitle: "Comprehensive Campus Academic Portal for ASTRA Polytechnic",
    category: "Fullstack Web Application",
    year: "2024",
    color: "#34C759",
    summary:
      "Developed an academic information system for ASTRA Polytechnic using Next.js and ASP.NET",
    longDescription:
      "Sistem informasi akademik terpadu untuk Politeknik Astra yang melayani mahasiswa, dosen, dan bagian administrasi akademik. Dirancang dengan arsitektur modern berbasis Next.js untuk frontend yang cepat dan responsif, serta ASP.NET Core di sisi backend untuk keamanan data transaksi perkuliahan yang tangguh.",
    highlights: [
      "Modul Kartu Rencana Studi (KRS) online dan rekapitulasi nilai mahasiswa (KHS/Transkrip).",
      "Portal dosen untuk input presensi, penilaian tugas/ujian, dan monitoring kurikulum.",
      "Arsitektur RESTful API yang aman dengan otentikasi JWT dan Role-Based Access Control.",
      "Antarmuka pengguna modern, intuitif, dan responsif menggunakan Tailwind CSS.",
    ],
    tech: ["Next.js", "React", "TypeScript", "ASP.NET Core", "C#", "SQL Server", "Tailwind CSS"],
  },
  {
    id: "recruitment-system",
    icon: "i-ph:briefcase",
    title: "PT GS Battery Recruitment System",
    subtitle: "Enterprise Candidate Hiring & Applicant Tracking System",
    category: "Enterprise System",
    year: "2024",
    color: "#FF3B30",
    summary:
      "Developed an employee recruitment system for PT GS Battery using C# and DevExpress",
    longDescription:
      "Sistem rekrutmen karyawan berbasis web skala enterprise yang dikembangkan untuk PT GS Battery (Grup Astra Otoparts). Mengelola seluruh proses seleksi calon karyawan mulai dari publikasi lowongan kerja, pengumpulan berkas lamaran, penjadwalan psikotes dan wawancara, hingga pengumuman penerimaan secara otomatis.",
    highlights: [
      "Portal publik pendaftaran kandidat dengan unggah portofolio dan resume otomatis.",
      "Dashboard back-office HR dengan komponen DevExpress untuk filterisasi dan visualisasi data pelamar.",
      "Alur seleksi bertahap: Administrasi → Psikotes → Wawancara HR & User → MCU → Offering.",
      "Email notification service otomatis untuk undangan seleksi dan konfirmasi status pelamar.",
    ],
    tech: ["C#", "DevExpress", ".NET Framework", "SQL Server", "ASP.NET", "Bootstrap"],
    liveDemoLink: "https://career.gs.astra.co.id/",
  },
  {
    id: "cening-community",
    icon: "i-ph:globe",
    title: "Cening Community Website",
    subtitle: "Company Profile & Event Portal for Cening Community",
    category: "Frontend Web & Community",
    year: "2024",
    color: "#5856D6",
    summary:
      "Developed a company profile website for Cening Community using React.js",
    longDescription:
      "Website profil perusahaan dan wadah komunitas kepemudaan Cening Community. Menampilkan program kerja, dokumentasi kegiatan sosial, pendaftaran anggota baru, dan artikel kegiatan dengan tampilan modern, interaktif, dan ramah pengguna di berbagai perangkat mobile maupun desktop.",
    highlights: [
      "Desain antarmuka modern dengan transisi dan animasi interaktif menggunakan Tailwind CSS.",
      "Galeri dokumentasi program kerja komunitas dan pengumuman kegiatan terkini.",
      "Integrasi formulir kontak dan registrasi keanggotaan langsung.",
      "Proses CI/CD otomatis terintegrasi dengan GitHub dan dideploy di platform Vercel.",
    ],
    tech: ["React.js", "Tailwind CSS", "JavaScript", "Framer Motion", "Vercel", "Git"],
    githubLink: "https://github.com/bntngjnrta/cening-community",
    liveDemoLink: "https://ceningcommunity.vercel.app/",
  },
  {
    id: "mentora-ai",
    icon: "i-fa6-brands:github",
    title: "Mentora AI (RAG Learning Assistant)",
    subtitle: "Retrieval-Augmented Generation in a Mobile-Based AI Learning Assistant",
    category: "Mobile AI & Generative AI",
    year: "2024 - Present",
    color: "#00C7BE",
    summary:
      "Mentora AI: Implementation of Retrieval-Augmented Generation in a Mobile-Based AI Learning Assistant for Informatics Management Students",
    longDescription:
      "Asisten pembelajaran cerdas berbasis kecerdasan buatan (AI) untuk mahasiswa Manajemen Informatika. Memanfaatkan teknologi Retrieval-Augmented Generation (RAG), Mentora AI menghubungkan model bahasa besar (LLM) dengan materi kuliah, slide presentasi, dan modul praktikum agar dapat memberikan jawaban dan bimbingan coding yang kontekstual dan akurat.",
    highlights: [
      "Sistem RAG berbasis Vector Database untuk pencarian semantik dokumen materi perkuliahan.",
      "Fitur AI Tutor interaktif untuk penjelasan konsep algoritma, pemrograman, dan basis data.",
      "Backend API berkecepatan tinggi menggunakan FastAPI dan Python.",
      "Antarmuka chat interaktif dengan dukungan syntax highlighting untuk kode program.",
    ],
    tech: ["Python", "FastAPI", "RAG", "LLM", "Vector DB", "Mobile AI", "LangChain"],
    githubLink: "https://github.com/bntngjnrta",
  },
  {
    id: "mackerel-carbon",
    icon: "i-ph:lightning-fill",
    title: "Mackerel Tuna Bone Carbon Electrode",
    subtitle: "Waste-to-Energy: Activated Carbon Electrode for EDLC Supercapacitors",
    category: "Renewable Energy & Material Science",
    year: "2023",
    color: "#FFCC00",
    summary:
      "Utilization of mackerel tuna (euthynnus affinis) bone waste as activated carbon electrode material for electric double-layer capacitors",
    longDescription:
      "Penelitian inovatif material energi terbarukan yang memanfaatkan limbah tulang ikan tongkol (euthynnus affinis) sebagai bahan baku karbon aktif untuk elektroda Electric Double-Layer Capacitors (EDLC / Superkapasitor). Melalui proses aktivasi kimia dan karbonisasi bertahap, limbah organik diolah menjadi penyimpan energi listrik yang ramah lingkungan dan berkapasitansi tinggi.",
    highlights: [
      "Sintesis karbon aktif berpori dari limbah biomassa tulang ikan melalui aktivasi kimiawi.",
      "Karakterisasi struktur material karbon aktif, luas permukaan pori, dan konduktivitas.",
      "Uji elektrokimia superkapasitor (Cyclic Voltammetry dan Galvanostatic Charge-Discharge).",
      "Solusi energi hijau bernilai ekonomis tinggi untuk mendukung teknologi circular economy.",
    ],
    tech: ["Material Science", "Electrochemistry", "Renewable Energy", "Supercapacitor", "Biomass"],
  },
  {
    id: "water-purification",
    icon: "i-ph:sun",
    title: "Solar-Powered Water Purification IoT",
    subtitle: "Arduino and Solar-Powered Water Purification System for Contaminated Water",
    category: "IoT & Environmental Engineering",
    year: "2023",
    color: "#32ADE6",
    summary:
      "Developed an Arduino and solar-powered water purification system for treating contaminated water",
    longDescription:
      "Sistem pemurnian air bertenaga surya (Solar PV) yang terintegrasi dengan mikrokontroler Arduino dan sensor IoT untuk mengolah air terkontaminasi menjadi air bersih siap pakai. Sistem ini beroperasi secara mandiri (off-grid) dan memonitor kualitas air olahan secara real-time.",
    highlights: [
      "Penyaringan bertahap terpadu: filtrasi sedimen, karbon aktif, dan sterilisasi sinar UV-C.",
      "Sistem catu daya mandiri menggunakan panel surya fotovoltaik (Solar PV) dan baterai.",
      "Monitoring kualitas air real-time: sensor kekeruhan (turbidity), pH meter, dan sensor TDS.",
      "Hasil penelitian dituangkan dalam publikasi makalah ilmiah.",
    ],
    tech: ["Arduino", "C++", "Solar PV", "Sensors", "IoT", "UV-C Sterilization"],
    paperLink: "https://ieeexplore.ieee.org/document/11381376",
  },
];

interface ProjectsProfileProps {
  isDark?: boolean;
  contentID?: string;
}

export default function ProjectsProfile({
  isDark = false,
  contentID = "",
}: ProjectsProfileProps) {
  // Find project by contentID or fallback to first project
  const selectedProject =
    projectsList.find((p) => p.id === contentID) || projectsList[0];

  const textPrimary = isDark ? "#ffffff" : "#1c1c1e";
  const textSecondary = isDark ? "#cccccc" : "#3a3a3c";
  const textTertiary = isDark ? "#888888" : "#777777";
  const cardBg = isDark ? "rgba(30, 30, 34, 0.85)" : "rgba(255, 255, 255, 0.95)";
  const cardBorder = isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.08)";
  const innerCardBg = isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(0, 0, 0, 0.035)";

  const renderActionButtons = (item: ProjectDetail) => {
    return (
      <div className="flex flex-wrap items-center gap-2 mt-3">
        {item.paperLink && (
          <a
            href={item.paperLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 hover:scale-105 shadow-sm"
            style={{
              background: isDark ? "rgba(0, 122, 255, 0.22)" : "rgba(0, 122, 255, 0.12)",
              color: isDark ? "#64D2FF" : "#0066CC",
              border: isDark ? "1px solid rgba(0, 122, 255, 0.4)" : "1px solid rgba(0, 122, 255, 0.3)",
            }}
          >
            <span>Paper</span>
            <span className="i-ph:arrow-up-right text-[11px]" />
          </a>
        )}

        {item.hkiLink && (
          <a
            href={item.hkiLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 hover:scale-105 shadow-sm"
            style={{
              background: isDark ? "rgba(52, 199, 89, 0.22)" : "rgba(52, 199, 89, 0.14)",
              color: isDark ? "#30D158" : "#248A3D",
              border: isDark ? "1px solid rgba(52, 199, 89, 0.4)" : "1px solid rgba(52, 199, 89, 0.3)",
            }}
          >
            <span>HKI</span>
            <span className="i-ph:arrow-up-right text-[11px]" />
          </a>
        )}

        {item.certificateLink && (
          <a
            href={item.certificateLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 hover:scale-105 shadow-sm"
            style={{
              background: isDark ? "rgba(175, 82, 222, 0.22)" : "rgba(175, 82, 222, 0.14)",
              color: isDark ? "#BF5AF2" : "#8944AB",
              border: isDark ? "1px solid rgba(175, 82, 222, 0.4)" : "1px solid rgba(175, 82, 222, 0.3)",
            }}
          >
            <span>Certificate</span>
            <span className="i-ph:arrow-up-right text-[11px]" />
          </a>
        )}

        {item.liveDemoLink && (
          <a
            href={item.liveDemoLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 hover:scale-105 shadow-sm"
            style={{
              background: isDark ? "rgba(255, 149, 0, 0.22)" : "rgba(255, 149, 0, 0.14)",
              color: isDark ? "#FF9F0A" : "#C96800",
              border: isDark ? "1px solid rgba(255, 149, 0, 0.4)" : "1px solid rgba(255, 149, 0, 0.3)",
            }}
          >
            <span>Live Demo</span>
            <span className="i-ph:arrow-up-right text-[11px]" />
          </a>
        )}

        {item.githubLink && (
          <a
            href={item.githubLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 hover:scale-105 shadow-sm"
            style={{
              background: isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.08)",
              color: isDark ? "#FFFFFF" : "#1C1C1E",
              border: isDark ? "1px solid rgba(255, 255, 255, 0.3)" : "1px solid rgba(0, 0, 0, 0.25)",
            }}
          >
            <span>GitHub</span>
            <span className="i-ph:arrow-up-right text-[11px]" />
          </a>
        )}
      </div>
    );
  };

  return (
    <div className="w-full h-full overflow-y-auto p-4 md:p-6 space-y-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedProject.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
          className="space-y-6"
        >
          {/* Project Hero Header Card */}
          <div
            className="p-5 md:p-6 rounded-2xl border relative overflow-hidden"
            style={{
              background: cardBg,
              borderColor: selectedProject.color + "44",
              boxShadow: isDark
                ? `0 10px 30px ${selectedProject.color}18`
                : `0 10px 30px ${selectedProject.color}12`,
            }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-md"
                style={{
                  background: selectedProject.color + "22",
                  color: selectedProject.color,
                  border: `1px solid ${selectedProject.color}44`,
                }}
              >
                <span className={selectedProject.icon} />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span
                    className="text-[11px] font-bold px-2.5 py-0.5 rounded-full"
                    style={{
                      background: selectedProject.color + "18",
                      color: selectedProject.color,
                      border: `1px solid ${selectedProject.color}33`,
                    }}
                  >
                    {selectedProject.category}
                  </span>
                  <span className="text-[11px] font-medium" style={{ color: textTertiary }}>
                    {selectedProject.year}
                  </span>
                </div>

                <h1 className="text-lg md:text-xl font-bold tracking-tight" style={{ color: textPrimary }}>
                  {selectedProject.title}
                </h1>
                <p className="text-xs md:text-sm mt-0.5 font-medium" style={{ color: textSecondary }}>
                  {selectedProject.subtitle}
                </p>

                {/* Direct Action Pill Links */}
                {renderActionButtons(selectedProject)}
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div
            className="p-5 rounded-2xl border space-y-3"
            style={{
              background: cardBg,
              borderColor: cardBorder,
            }}
          >
            <div className="flex items-center gap-2">
              <span className="i-ph:article text-base" style={{ color: selectedProject.color }} />
              <h3 className="text-xs font-bold uppercase tracking-wider" style={{ color: textTertiary }}>
                Tentang Proyek / About Project
              </h3>
            </div>
            <p className="text-[13.5px] leading-relaxed" style={{ color: textSecondary }}>
              {selectedProject.longDescription}
            </p>
          </div>

          {/* Key Highlights / Fitur Utama */}
          <div
            className="p-5 rounded-2xl border space-y-3"
            style={{
              background: cardBg,
              borderColor: cardBorder,
            }}
          >
            <div className="flex items-center gap-2">
              <span className="i-ph:check-circle text-base" style={{ color: selectedProject.color }} />
              <h3 className="text-xs font-bold uppercase tracking-wider" style={{ color: textTertiary }}>
                Fitur Utama & Metodologi
              </h3>
            </div>
            <ul className="space-y-2.5 p-0 m-0 list-none">
              {selectedProject.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs md:text-[13px] leading-relaxed" style={{ color: textSecondary }}>
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                    style={{ background: selectedProject.color }}
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Badges */}
          <div
            className="p-5 rounded-2xl border space-y-3"
            style={{
              background: cardBg,
              borderColor: cardBorder,
            }}
          >
            <div className="flex items-center gap-2">
              <span className="i-ph:code text-base" style={{ color: selectedProject.color }} />
              <h3 className="text-xs font-bold uppercase tracking-wider" style={{ color: textTertiary }}>
                Teknologi & Tools
              </h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {selectedProject.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-semibold px-3 py-1 rounded-lg"
                  style={{
                    background: selectedProject.color + "14",
                    color: selectedProject.color,
                    border: `1px solid ${selectedProject.color}28`,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

