import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "2xl": "1.65rem",
        "5xl": "2.65rem",
        "6xl": "3.1rem",
        "7xl": "3.6rem",
        "8xl": "1.37rem",
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
        btcolor: "#2B3137",
        contactUsColor: "#A0A6B1",
        footerBorder: "#6C7282",
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
        "hero-section-google-review": "url('/review_background.jpg')",
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
        DMsans: ["var(--font-dm-sans)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
