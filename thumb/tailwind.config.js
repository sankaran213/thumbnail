// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Adjust this to match your project structure
  theme: {
    extend: {
      keyframes: {
        blink: {
          "0%": { opacity: "0.3", transform: "scale(0.5) rotate(5deg)" },
          "50%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        blink: "blink 0.6s alternate infinite linear",
      },
    },
  },
  plugins: [],
};
