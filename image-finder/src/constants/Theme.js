export const theme = Object.freeze({
  colors: {
    primaryColor: "#080872",
    reverseColor: "#ffffff",
    accentColor: "#F7CC07",
    placeholderColor: "#3f51b582",

    backgroundColor: "#F7F5F9",
    backroundColorSerchbar: "#3f51b5",
    backgroundColorForm: "#E3DEE9",
    backgroundColorBackdrop: "#3f51b59c",
    boxShadow: `0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)`,
    boxShadowBtn: `0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)`,
  },
  transition: `250ms cubic-bezier(0.4, 0, 0.2, 1)`,
  fonts: { family: `"Poppins", sans-serif`, size: "1em", lh: "1.333" },
  spacing: (value) => `${4 * value}px`,
});
