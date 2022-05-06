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

        typping: {
          "0%": { "max-width": "0px" },
          "5%": { "max-width": "0px" },
          "99%": { "max-width": "500px" },
        },

        aboutOpen: {
          from: {
            transform: "scaleY(0)",
            "transform-origin": "top",
          },
          to: {
            transform: "scaleY(1)",
            "transform-origin": "top",
          },
        },
      },

      // Animations export
      animation: {
        open: "open 1s normal",
        close: "close 1s normal",
        aboutOpen: "aboutOpen ease-out 0.2s normal",
      },
    },
  },
  plugins: [],
};
