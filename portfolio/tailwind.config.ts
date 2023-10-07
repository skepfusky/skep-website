import kuroConfig from "@kuro/ui/tailwind.config"
import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  presets: [kuroConfig],
  theme: {
    extend: {
      backgroundImage: {
        // Adds `radial-gradient` funcionality
        "gradient-round": "radial-gradient(var(--tw-gradient-stops))"
      }
    }
  }
}

export default config
