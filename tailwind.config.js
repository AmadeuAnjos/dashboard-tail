const plugin = require("tailwindcss/plugin");

module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: "class",
    theme: {
        extend: {
            important: true,
            container: {
                center: true,
                padding: "1.5rem",
                screens: {
                    xs: "540px",
                    sm: "640px",
                    md: "768px",
                    lg: "1024px",
                    xl: "1170px",
                },
            },
            screens: {
                max: { max: "768px" },
            },
            fontFamily: {
                title: ["Montserrat, sans-serif"],
                text: ["Inter, sans-serif"]
            },
            colors: {
              primary: "#43a047",
              accent: "#348538",
              alt: "#2b6a2f",
              title: "#191919",
              text: "#82848e",
              body: "#f0f1f5",
              border: "#e2e8f0",
              "dark-white": "#0a0a0b",
              "dark-body": "#323232",
              "dark-container": "#3a3a3f",
              "dark-text": "#82848e",
              "dark-border": "#454545"
              
            },
            gridTemplateColumns: {
                max: "repeat(2, max-content)"
            },
            backgroundImage: {
                sidenav: "url(../img/sidebar.jpg)"
            }
        },
    },
    plugins: [plugin(function ({ addComponents }) {})],
};
