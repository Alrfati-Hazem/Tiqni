import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#070B16",
          900: "#0B1120",
          800: "#111A2E",
          700: "#1C2740",
          600: "#2A3A5C",
        },
        brand: {
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
        },
        cyan: {
          400: "#22D3EE",
        },
        paper: "#FFFFFF",
        mist: "#F6F8FB",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["3.75rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15,23,42,0.04), 0 8px 24px rgba(15,23,42,0.06)",
        lift: "0 4px 12px rgba(15,23,42,0.08), 0 16px 40px rgba(15,23,42,0.10)",
        glow: "0 0 0 1px rgba(34,211,238,0.4), 0 0 24px rgba(34,211,238,0.25)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #2563EB 0%, #22D3EE 100%)",
        "dot-grid":
          "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.18) 1px, transparent 0)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drift: {
          "0%,100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(20px,-20px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        drift: "drift 12s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
