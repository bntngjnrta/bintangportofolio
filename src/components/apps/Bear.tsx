import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeExternalLinks from "rehype-external-links";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula, prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import bear from "~/configs/bear";
import AboutMeProfile from "~/components/apps/AboutMeProfile";
import AchievementsProfile from "~/components/apps/AchievementsProfile";
import PDFViewer from "~/components/PDFViewer";
import ProjectsProfile from "~/components/apps/ProjectsProfile";
import type { BearMdData } from "~/types";

interface ContentProps {
  contentID: string;
  contentURL: string;
  curSidebar?: number;
}

interface MiddlebarProps {
  items: BearMdData[];
  cur: number;
  setContent: (id: string, url: string, index: number) => void;
}

interface SidebarProps {
  cur: number;
  setMidBar: (items: BearMdData[], index: number) => void;
}

interface BearState extends ContentProps {
  curSidebar: number;
  curMidbar: number;
  midbarList: BearMdData[];
}

const Highlighter = (dark: boolean): any => {
  interface codeProps {
    node: any;
    inline: boolean;
    className: string;
    children: any;
  }

  return {
    code({ node, inline, className, children, ...props }: codeProps) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          style={dark ? dracula : prism}
          language={match[1]}
          PreTag="div"
          {...props}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code className={className}>{children}</code>
      );
    }
  };
};

const Sidebar = ({ cur, setMidBar }: SidebarProps) => {
  return (
    <div text-white>
      <div className="h-12 pr-3 hstack space-x-3 justify-end">
        <span className="i-ph:cloud-slash text-xl" />
        <span className="i-ph:sliders-horizontal text-xl" />
      </div>
      <ul>
        {bear.map((item, index) => (
          <li
            key={`bear-sidebar-${item.id}`}
            className={`pl-6 h-8 hstack cursor-default ${cur === index ? "bg-red-500" : "bg-transparent"
              } ${cur === index ? "" : "hover:bg-gray-600"}`}
            onClick={() => setMidBar(item.md, index)}
          >
            <span className={item.icon} />
            <span className="ml-2">{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Middlebar = ({ items, cur, setContent }: MiddlebarProps) => {
  return (
    <ul>
      {items.map((item: BearMdData, index: number) => (
        <li
          key={`bear-midbar-${item.id}`}
          className={`h-20 flex flex-col justify-center cursor-default border-l-2 px-2.5 py-2 ${cur === index
              ? "border-red-500 bg-white dark:bg-gray-900 shadow-sm"
              : "border-transparent bg-transparent"
            } hover:(bg-white dark:bg-gray-900)`}
          onClick={() => setContent(item.id, item.file, index)}
        >
          <div className="flex items-center gap-2 mb-1">
            <span className={`${item.icon} text-sm text-gray-500 dark:text-gray-400 flex-shrink-0`} />
            <span className="flex-1 font-bold text-[13px] truncate text-gray-900 dark:text-gray-100">
              {item.title}
            </span>
          </div>
          <div className="text-[11.5px] text-gray-500 dark:text-gray-400 line-clamp-2 leading-tight pl-5">
            {item.excerpt}
          </div>
        </li>
      ))}
    </ul>
  );
};

const getRepoURL = (url: string) => {
  return url.slice(0, -10) + "/";
};

const fixImageURL = (text: string, contentURL: string): string => {
  text = text.replace(/&nbsp;/g, "");
  if (contentURL.indexOf("raw.githubusercontent.com") !== -1) {
    const repoURL = getRepoURL(contentURL);

    const imgReg = /!\[(.*?)\]\((.*?)\)/;
    const imgRegGlobal = /!\[(.*?)\]\((.*?)\)/g;

    const imgList = text.match(imgRegGlobal);

    if (imgList) {
      for (const img of imgList) {
        const imgURL = (img.match(imgReg) as Array<string>)[2];
        if (imgURL.indexOf("http") !== -1) continue;
        const newImgURL = repoURL + imgURL;
        text = text.replace(imgURL, newImgURL);
      }
    }
  }
  return text;
};

const Content = ({ contentID, contentURL, curSidebar }: ContentProps) => {
  const [storeMd, setStoreMd] = useState<{ [key: string]: string }>({});
  const dark = useStore((state) => state.dark);

  const isCustomProject =
    curSidebar === 1 ||
    contentID === "sentiment-analysis" ||
    contentID === "melanoma-detection" ||
    contentID === "asset-management" ||
    contentID === "academic-system" ||
    contentID === "recruitment-system" ||
    contentID === "cening-community" ||
    contentID === "mentora-ai" ||
    contentID === "mackerel-carbon" ||
    contentID === "water-purification" ||
    contentID === "paytm-web" ||
    contentID === "portfolio-macos";

  const fetchMarkdown = useCallback(
    (id: string, url: string) => {
      if (!storeMd[id] && url && url.startsWith("http")) {
        fetch(url)
          .then((response) => response.text())
          .then((text) => {
            storeMd[id] = fixImageURL(text, url);
            setStoreMd({ ...storeMd });
          })
          .catch((error) => { /* console.error(error) */ });
      }
    },
    [storeMd]
  );

  useEffect(() => {
    if (
      contentID !== "about-me" &&
      contentID !== "github-stats" &&
      contentID !== "about-site" &&
      !isCustomProject
    ) {
      fetchMarkdown(contentID, contentURL);
    }
  }, [contentID, contentURL, isCustomProject, fetchMarkdown]);

  // Render AboutMeProfile component for about-me section
  if (contentID === "about-me") {
    return (
      <div className="w-full h-full overflow-auto">
        <AboutMeProfile isDark={dark as boolean} />
      </div>
    );
  }

  // Render AchievementsProfile component for github-stats section
  if (contentID === "github-stats") {
    return (
      <div className="w-full h-full overflow-auto">
        <AchievementsProfile isDark={dark as boolean} />
      </div>
    );
  }

  // Render ProjectsProfile component for projects section
  if (isCustomProject) {
    return (
      <div className="w-full h-full overflow-auto">
        <ProjectsProfile isDark={dark as boolean} contentID={contentID} />
      </div>
    );
  }

  // Render PDFViewer component for about-site section
  if (contentID === "about-site") {
    return (
      <div className="w-full h-full overflow-auto">
        <PDFViewer pdfUrl="/resume.pdf" fileName="Resume" isDark={dark as boolean} />
      </div>
    );
  }

  return (
    <div className="markdown w-2/3 mx-auto px-2 py-6 text-c-700">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[
          rehypeKatex,
          [rehypeExternalLinks, { target: "_blank", rel: "noopener noreferrer" }]
        ]}
        components={Highlighter(dark as boolean)}
      >
        {storeMd[contentID]}
      </ReactMarkdown>
    </div>
  );
};

const Bear = () => {
  const { winWidth } = useWindowSize();
  const isMobile = winWidth < 768;
  const dark = useStore((state) => state.dark);

  const [state, setState] = useState<BearState>({
    curSidebar: 0,
    curMidbar: 0,
    midbarList: bear[0].md,
    contentID: bear[0].md[0].id,
    contentURL: bear[0].md[0].file
  });

  const setMidBar = (items: BearMdData[], index: number) => {
    setState({
      curSidebar: index,
      curMidbar: 0,
      midbarList: items,
      contentID: items[0].id,
      contentURL: items[0].file
    });
  };

  const setContent = (id: string, url: string, index: number) => {
    setState({
      ...state,
      curMidbar: index,
      contentID: id,
      contentURL: url
    });
  };

  const mobileNavItems = [
    {
      id: "about-me",
      title: "About Me",
      sidebarIdx: 0,
      midbarIdx: 0,
      item: bear[0].md[0]
    },
    {
      id: "github-stats",
      title: "Achievements",
      sidebarIdx: 0,
      midbarIdx: 1,
      item: bear[0].md[1]
    },
    {
      id: "project",
      title: "Projects",
      sidebarIdx: 1,
      midbarIdx: 0,
      item: bear[1].md[0]
    },
    {
      id: "about-site",
      title: "Resume",
      sidebarIdx: 0,
      midbarIdx: 2,
      item: bear[0].md[2]
    }
  ];

  const handleMobileNav = (navItem: typeof mobileNavItems[0]) => {
    setState({
      curSidebar: navItem.sidebarIdx,
      curMidbar: navItem.midbarIdx,
      midbarList: bear[navItem.sidebarIdx].md,
      contentID: navItem.item.id,
      contentURL: navItem.item.file
    });
  };

  const isCurrentSection = (sectionId: string) => {
    if (sectionId === "project") {
      return state.curSidebar === 1;
    }
    return state.contentID === sectionId;
  };

  if (isMobile) {
    return (
      <div className="bear font-avenir flex flex-col h-full overflow-hidden" style={{ background: dark ? "#1a1a1a" : "#f5f5f7" }}>
        {/* Mobile Top Navigation Tabs */}
        <div
          className="flex-shrink-0 px-2 py-2 border-b flex items-center gap-1.5 overflow-x-auto scrollbar-none"
          style={{
            background: dark ? "#202020" : "#ffffff",
            borderColor: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
            boxShadow: dark ? "0 1px 4px rgba(0,0,0,0.3)" : "0 1px 3px rgba(0,0,0,0.04)",
          }}
        >
          {mobileNavItems.map((nav) => {
            const active = isCurrentSection(nav.id);
            return (
              <button
                key={`mob-nav-${nav.id}`}
                onClick={() => handleMobileNav(nav)}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-150 border flex-shrink-0"
                style={{
                  background: active
                    ? (dark ? "#007AFF" : "#007AFF")
                    : (dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)"),
                  color: active ? "#ffffff" : (dark ? "#a0a0a0" : "#555555"),
                  borderColor: active
                    ? "transparent"
                    : (dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"),
                }}
              >
                <span>{nav.title}</span>
              </button>
            );
          })}
        </div>

        {/* Secondary Project Selector (when in Projects section) */}
        {state.curSidebar === 1 && (
          <div
            className="flex-shrink-0 px-2 py-1.5 border-b flex items-center gap-1 overflow-x-auto scrollbar-none"
            style={{
              background: dark ? "#181818" : "#f0f0f3",
              borderColor: dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"
            }}
          >
            {bear[1].md.map((proj, idx) => {
              const active = state.contentID === proj.id;
              return (
                <button
                  key={`mob-proj-${proj.id}`}
                  onClick={() => setContent(proj.id, proj.file, idx)}
                  className="px-2.5 py-1 rounded-md text-[11px] font-medium whitespace-nowrap transition-all duration-150 flex-shrink-0"
                  style={{
                    background: active
                      ? (dark ? "rgba(0,122,255,0.25)" : "rgba(0,122,255,0.12)")
                      : "transparent",
                    color: active
                      ? (dark ? "#5aa8ff" : "#007AFF")
                      : (dark ? "#888888" : "#666666"),
                    border: active
                      ? (dark ? "1px solid rgba(0,122,255,0.4)" : "1px solid rgba(0,122,255,0.25)")
                      : "1px solid transparent",
                  }}
                >
                  {proj.title}
                </button>
              );
            })}
          </div>
        )}

        {/* Mobile Full-Width Single-Column Content */}
        <div className="flex-1 overflow-y-auto w-full">
          <Content
            contentID={state.contentID}
            contentURL={state.contentURL}
            curSidebar={state.curSidebar}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="bear font-avenir flex h-full">
      <div className="w-44 overflow-auto" style={{ background: "var(--lg-bg-tinted)", backdropFilter: "var(--lg-blur-menu)" }}>
        <Sidebar cur={state.curSidebar} setMidBar={setMidBar} />
      </div>
      <div className="w-60 overflow-auto" bg="gray-50 dark:gray-800" border="r c-300">
        <Middlebar
          items={state.midbarList}
          cur={state.curMidbar}
          setContent={setContent}
        />
      </div>
      <div className="flex-1 overflow-auto" bg="gray-50 dark:gray-800">
        <Content
          contentID={state.contentID}
          contentURL={state.contentURL}
          curSidebar={state.curSidebar}
        />
      </div>
    </div>
  );
};

export default Bear;
