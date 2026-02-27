import { defineConfig, transformerDirectives, presetUno, presetIcons } from "unocss";
import { presetTheme } from "unocss-preset-theme";

// Daygram-inspired color palette
const themes = {
  dark: {
    colors: {
      primary: "#A84545",      // Daygram red accent
      text: "#E8E6E1",         // Light warm gray for dark mode
      icon: "#BAB7A9",         // Super light gray
      bg: "#2A2927",           // Dark warm background
      modal: '#3D3C3A',        // Dark modal background
      accent: "#A84545",       // Red accent for Sunday/special
      border: "#504F4B",       // Border color
      muted: "#A6A6A2",        // Muted/unselected text
    },
  } as any,
  light: {
    colors: {
      primary: "#A84545",      // Daygram red accent
      text: "#504F4B",         // Daygram dark gray text
      icon: "#504F4B",         // Icon color
      bg: "#F2F1ED",           // Daygram warm cream background
      modal: '#FFFFFF',        // White modal
      accent: "#A84545",       // Red accent for Sunday/special
      border: "#504F4B",       // Border color
      muted: "#A6A6A2",        // Muted/unselected text
    },
  },
};

export default defineConfig({
  transformers: [transformerDirectives({ enforce: "pre" })],
  presets: [
    presetUno({
      dark: "media",
    }),
    presetTheme({
      theme: {
        dark: themes.dark,
      },
    }),
    presetIcons({
      autoInstall: true,
    }),
  ],
  theme: themes.light,
  content: {
    filesystem: [
      'src/**/*.tsx'
    ]
  }
});
