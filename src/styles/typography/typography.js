import Typography from "typography";

import sutroTheme from "typography-theme-sutro";
sutroTheme.headerFontFamily = sutroTheme.bodyFontFamily;

const typography = new Typography(sutroTheme);

// Insert styles directly into the <head>
typography.injectStyles();

export default typography;
