export const config = {
  github: {
    login: "mydaygram", // github login name, not user name
    repo: "mydaygram.github.io", //"urodele",
    logInUrl: "",
    logInAuthUrl: "",
  },
  head: {
    title: "Daygram",
    brand: "Daygram",
    description: "One line a day",
  },
  footer: {
    copyright: "© Daygram",
    copyrightUrl: "https://mydaygram.github.io",
  },
  pagination: {
    size: 10,
  },
  giscus: false as object | false,
} as const;

export default config;
