import calculate from "./calculate.js";
import CopytoClipboard from "./CopytoClipboard.js";
import { handleButtonPress, handleClearButton, handletyping } from "./keys.js";
import themeSwither from "./themeSwither.js";

const input = document.getElementById("input");

//operation of the buttons
document.querySelectorAll(".charKey").forEach((charKeyBtn) => {
    charKeyBtn.addEventListener("click", handleButtonPress);
});
// clean (C)
document.getElementById("clear").addEventListener("click", handleClearButton);
// result(=)
document.getElementById("equal").addEventListener("click", calculate);

// the input only allows clicking on the keys that have in the 'allowedkeys' array
input.addEventListener("keydown", handletyping);

//switch DARK/LIGHT theme

document.getElementById("themeSwitcher").addEventListener("click", themeSwither);

// copy and paste button
document.getElementById("copyToClipboard").addEventListener("click", CopytoClipboard);
