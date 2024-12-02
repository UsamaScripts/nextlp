import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx,tff}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,tff}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,ttf}",
  ],
  theme: {
    extend: {
      fontSize: {
        "2xl": "1.65rem",
        "5xl": "2.65rem",
      },
      width: {
        "max-w-4xl": "740px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        herosection: "rgba(89, 51, 170, 0.8)",
        Personalizedmesssage: "rgba(12,19,80,0.9)",
        project: "rgba(49,104,216,0.9)",
        review: "rgba(12,19,80,0.9)",
        investmentHero: "#f8f8f8",
        invoiceBG: "#5933aa",
        footerBG: " #393F47",
        footerLogo: "#C2C7D1",
        footerText: " #C2E4BA",
        buttonBook: "#F2C94C",
        footerlogotext: "#DAF1D6",
        buttonColor: "#4DCF85",
      },
      height: {
        "100": "436px",
      },
      backgroundImage: {
        "footer-transparent-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #5CBC45 70.5%)",
        "footer-green-gradient":
          "linear-gradient(180deg, #5CBC45 14.5%, #256825 100%)",
        "ready-section":
          "url('https://images.pexels.com/photos/4705933/pexels-photo-4705933.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200')",
        "hero-section-google-review":
          "url('https://images.pexels.com/photos/2117938/pexels-photo-2117938.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200')",
        "hero-section-first-image":
          "url('https://images.pexels.com/photos/3616764/pexels-photo-3616764.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200')",
        "hero-section-second-image":
          "url('https://images.pexels.com/photos/2768398/pexels-photo-2768398.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200')",
        "simplicity-is-beautifull":
          "url('https://images.pexels.com/photos/978503/pexels-photo-978503.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200')",
      },
      fontFamily: {
        work: ["var(--font-work)"],
        open: ["var(--font-open)"],
        DMsans: ["var(--font-dmsans)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
