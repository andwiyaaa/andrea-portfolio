"use client";

import { motion } from "motion/react";
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

type Tool = {
  name: string;
  category: string;
  icon: React.ComponentType<IconProps>;
  className: string;
};

function PythonIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 2.5c-4.2 0-4.5 2-4.5 3.5v2h4.5v1H5.5C3.3 9 2 10.8 2 13s1.3 4 3.5 4h2v-2.5c0-1.5 1.3-2.5 3-2.5h5c2.1 0 3.5-1.5 3.5-3.5V6c0-2-2-3.5-5-3.5H12Z"
        fill="currentColor"
        opacity=".95"
      />
      <path
        d="M12 21.5c4.2 0 4.5-2 4.5-3.5v-2H12v-1h6.5c2.2 0 3.5-1.8 3.5-4s-1.3-4-3.5-4h-2v2.5c0 1.5-1.3 2.5-3 2.5h-5C6.4 12 5 13.5 5 15.5V18c0 2 2 3.5 5 3.5H12Z"
        fill="currentColor"
        opacity=".5"
      />
      <circle cx="9.5" cy="5.5" r="1" fill="black" />
      <circle cx="14.5" cy="18.5" r="1" fill="black" />
    </svg>
  );
}

function SQLIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <ellipse
        cx="12"
        cy="5"
        rx="7"
        ry="3"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function ExcelIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M14 3h5.5A1.5 1.5 0 0 1 21 4.5v15a1.5 1.5 0 0 1-1.5 1.5H14V3Z"
        fill="currentColor"
        opacity=".65"
      />
      <path
        d="M3 5.2 14 3v18L3 18.8V5.2Z"
        fill="currentColor"
      />
      <path
        d="m6.2 8.2 2 3.3 2-3.3h1.8l-2.8 4.4 2.9 4.6h-1.9l-2-3.4-2 3.4H4.3l2.8-4.6-2.7-4.4h1.8Z"
        fill="black"
      />
    </svg>
  );
}

function PowerBIIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M3.5 13a1.5 1.5 0 0 1 3 0v5.5a1.5 1.5 0 0 1-3 0V13Z" />
      <path d="M8.3 9a1.5 1.5 0 0 1 3 0v9.5a1.5 1.5 0 0 1-3 0V9Z" />
      <path d="M13.1 5a1.5 1.5 0 0 1 3 0v13.5a1.5 1.5 0 0 1-3 0V5Z" />
      <path d="M17.9 2.5a1.5 1.5 0 0 1 3 0v16a1.5 1.5 0 0 1-3 0v-16Z" />
    </svg>
  );
}

function TableauIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M11 2h2v20h-2zM2 11h20v2H2z"
        fill="currentColor"
      />
      <path
        d="M7 6h2v12H7zM15 6h2v12h-2zM6 7H18v2H6zM6 15h12v2H6z"
        fill="currentColor"
        opacity=".65"
      />
      <path
        d="M4 4h16v16H4z"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity=".25"
      />
    </svg>
  );
}

function PandasIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8 7v10M12 5v14M16 7v10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="8" cy="5" r="1.3" fill="currentColor" />
      <circle cx="8" cy="19" r="1.3" fill="currentColor" />
      <circle cx="16" cy="5" r="1.3" fill="currentColor" />
      <circle cx="16" cy="19" r="1.3" fill="currentColor" />
    </svg>
  );
}

function PostgresIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M6 8.5C6 5 8.7 3 12 3s6 2 6 5.5v5c0 4-2.1 6.5-6 6.5s-6-2.5-6-6.5v-5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8.5 9c1.2 1 5.8 1 7 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M16.5 7.5c2-.2 3.5.5 4 1.8-.8.8-2 .9-3.3.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="10" cy="7" r="1" fill="currentColor" />
    </svg>
  );
}

function AWSIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M4 14.5c2.5 2.2 6.2 3.5 10.2 3.5 2.1 0 4.1-.3 5.8-1"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M16 15.2 20 17l-2.8 3"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 8.5a5 5 0 0 1 9.5 1.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M5.5 12.5a3.5 3.5 0 0 1 1.5-6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function S3Icon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M5 7.5 12 4l7 3.5L12 11 5 7.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M5 7.5v9L12 20l7-3.5v-9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M12 11v9" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function EC2Icon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect
        x="6"
        y="6"
        width="12"
        height="12"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <rect
        x="9"
        y="9"
        width="6"
        height="6"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M9 2v4M12 2v4M15 2v4M9 18v4M12 18v4M15 18v4M2 9h4M2 12h4M2 15h4M18 9h4M18 12h4M18 15h4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LinuxIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M9 15c.7 1 1.8 1.5 3 1.5s2.3-.5 3-1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="9" cy="10" r="1" fill="currentColor" />
      <circle cx="15" cy="10" r="1" fill="currentColor" />
      <path
        d="M7.5 6.5c1.2-1.1 2.7-1.7 4.5-1.7s3.3.6 4.5 1.7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GithubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .7A11.3 11.3 0 0 0 8.4 22.7c.57.1.78-.25.78-.55v-2.08c-3.18.69-3.85-1.34-3.85-1.34-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.72-1.54-2.54-.29-5.21-1.27-5.21-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.03 0 0 .96-.31 3.12 1.17a10.8 10.8 0 0 1 5.68 0c2.16-1.48 3.12-1.17 3.12-1.17.62 1.57.23 2.74.11 3.03.73.8 1.18 1.82 1.18 3.07 0 4.4-2.68 5.36-5.23 5.65.41.36.77 1.08.77 2.18v3.23c0 .3.2.66.79.55A11.3 11.3 0 0 0 12 .7Z" />
    </svg>
  );
}

function VSCodeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="m8.2 6.2 7.8-3.7 3 1.6v15.8l-3 1.6-7.8-3.7-3.2-2.7 2-1.8 2.5 1.8V9.4L7 11.2 5 9.4l3.2-3.2Z"
        fill="currentColor"
        opacity=".9"
      />
      <path
        d="m8.2 6.2 7.8 7.3v4.3l-7.8-3.8V6.2Z"
        fill="black"
        opacity=".35"
      />
    </svg>
  );
}

function TypeScriptIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="2" />
      <path
        d="M5 9h7v2H9.5v7h-2v-7H5V9Zm8 0h5v2h-3.1c-.2 0-.4.2-.4.4 0 .2.1.3.3.4l2 .9c1.1.5 1.6 1.2 1.6 2.4 0 1.8-1.3 2.9-3.5 2.9-1.1 0-2.1-.3-2.9-.9l.9-1.6c.6.4 1.2.6 1.9.6.9 0 1.5-.3 1.5-.9 0-.3-.2-.5-.6-.7l-1.9-.8c-1-.4-1.5-1.2-1.5-2.3 0-1.5 1.1-2.4 2.7-2.4Z"
        fill="black"
      />
    </svg>
  );
}

function NextIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M3 3h18v18H3z" fill="none" />
      <path d="m6 18 5.1-12h2.1L18 18h-2.3l-1.1-2.8H9.5L8.4 18H6Zm4.2-4.7h3.7L12 8.5l-1.8 4.8Z" />
      <path d="M15.2 6H18v12h-2.1V8.4l-.7-2.4Z" opacity=".45" />
    </svg>
  );
}

function NotionIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M5 3.5h13.5L20 5v15.5H5V3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m8 8 3 5.5V8h2v8h-2l-3-5.5V16H8V8Zm6 0h2v8h-2V8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function TrelloIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect x="7" y="7" width="4" height="8" rx="1" fill="currentColor" />
      <rect x="13" y="7" width="4" height="5.5" rx="1" fill="currentColor" />
    </svg>
  );
}

function CanvaIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M15.8 9.2c-.9-.9-2-1.4-3.3-1.4-2.3 0-4.3 1.9-4.3 4.2s1.9 4.2 4.3 4.2c1.4 0 2.7-.6 3.6-1.7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

const tools: Tool[] = [
  { name: "Python", category: "Data", icon: PythonIcon, className: "tool-node-1" },
  { name: "SQL", category: "Data", icon: SQLIcon, className: "tool-node-2" },
  { name: "Excel", category: "Analytics", icon: ExcelIcon, className: "tool-node-3" },
  { name: "Power BI", category: "Analytics", icon: PowerBIIcon, className: "tool-node-4" },
  { name: "Tableau", category: "Analytics", icon: TableauIcon, className: "tool-node-5" },
  { name: "Pandas", category: "Data", icon: PandasIcon, className: "tool-node-6" },
  { name: "PostgreSQL", category: "Database", icon: PostgresIcon, className: "tool-node-7" },
  { name: "AWS", category: "Cloud", icon: AWSIcon, className: "tool-node-8" },
  { name: "S3", category: "Cloud", icon: S3Icon, className: "tool-node-9" },
  { name: "EC2", category: "Cloud", icon: EC2Icon, className: "tool-node-10" },
  { name: "Linux", category: "Systems", icon: LinuxIcon, className: "tool-node-11" },
  { name: "GitHub", category: "Development", icon: GithubIcon, className: "tool-node-12" },
  { name: "VS Code", category: "Development", icon: VSCodeIcon, className: "tool-node-13" },
  { name: "TypeScript", category: "Development", icon: TypeScriptIcon, className: "tool-node-14" },
  { name: "Next.js", category: "Development", icon: NextIcon, className: "tool-node-15" },
  { name: "Notion", category: "Workflow", icon: NotionIcon, className: "tool-node-16" },
  { name: "Trello", category: "Workflow", icon: TrelloIcon, className: "tool-node-17" },
  { name: "Canva", category: "Design", icon: CanvaIcon, className: "tool-node-18" },
];

function ToolNode({ tool, index }: { tool: Tool; index: number }) {
  const Icon = tool.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 12 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay: index * 0.035,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -5,
        scale: 1.04,
        transition: { duration: 0.2 },
      }}
      className={`tool-node ${tool.className} group`}
    >
      <div className="tool-node-inner">
        <div className="tool-mark">
          <Icon width={19} height={19} />
        </div>

        <div className="min-w-0">
          <p className="truncate text-[11px] font-medium text-white/90">
            {tool.name}
          </p>

          <p className="mt-0.5 truncate text-[8px] uppercase tracking-[0.12em] text-white/40">
            {tool.category}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ToolConstellation() {
  return (
    <div className="tool-constellation">
      <div className="tool-constellation-glow" />
      <div className="tool-constellation-grid" />

      <div className="tool-orbit tool-orbit-one" />
      <div className="tool-orbit tool-orbit-two" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="tool-core"
      >
        <div className="tool-core-ring" />

        <div className="tool-core-inner">
          <span className="tool-core-label">TOOLS</span>

          <span className="tool-core-title">
            Data · Systems
            <br />
            · Cloud
          </span>

          <span className="tool-core-line" />
        </div>
      </motion.div>

      {tools.map((tool, index) => (
        <ToolNode
          key={tool.name}
          tool={tool}
          index={index}
        />
      ))}
    </div>
  );
}