module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "350px",
      md: "768px",
    },
    extend: {
      keyframes: {
        // Animation to open the collapsed mobile nav
        open: {
          from: { height: "0" },
          to: { height: "168px" },
        },

        // Animation to collapse the mobile nav
        close: {
          from: { height: "168px" },
          to: { height: "0" },
        },

        blink: {
          "0%": { opacity: "0" },
          "15%": { opacity: "1" },
          "30%": { opacity: "1" },
          "100%": { opacity: "0" },
        },

        typping: {
          "0%": { "max-width": "0" },
          "5%": { "max-width": "0" },
          "99%": { "max-width": "288px" },
        },

        aboutOpen: {
          from: {
            transform: "scaleY(0)",
            "transform-origin": "top"
          },
          to: {
            transform: "scaleY(1)",
            "transform-origin": "top"
          },
        },
      },

      // Animations export
      animation: {
        open: "open 1s normal",
        close: "close 1s normal",
        blink: "blink 1.3s 4.2s infinite",
        typping: "typping 4s steps(21, end)",
        aboutOpen: "aboutOpen ease-out 0.2s normal",
      },
    },
  },
  plugins: [],
};
