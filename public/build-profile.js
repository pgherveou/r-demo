({
  baseUrl: "./",
  dir: 'build',
  optimize: "none",
  paths: {
    "i18n": "i18n"
  },
  locale: process.env.LOCALE,
  modules: [
    {
      name: "app-" + process.env.LOCALE
    }
  ]
})

