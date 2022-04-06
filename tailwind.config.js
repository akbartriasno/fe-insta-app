module.exports = {
    content: [
      "./_src/**/*.{js,jsx,ts,tsx}",
    ],
    safelist: [
    ],
    theme: {
      extend: {
        fontFamily: {
          'sans': ['Source Sans Pro', 'sans-serif'],
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@themesberg/flowbite/plugin')
    ]
  }