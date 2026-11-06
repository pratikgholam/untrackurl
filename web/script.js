// Web UI only. Imports the shared cleaning core; no CLI code here.
import { cleanUrl } from "../src/clean-url.js";

const input = document.getElementById("urlInput");
const cleanBtn = document.getElementById("cleanBtn");
const result = document.getElementById("result");
const cleanUrlInput = document.getElementById("cleanUrl");
const copyBtn = document.getElementById("copyBtn");

// Clear fields on load so a refresh doesn't restore old values.
input.value = "";
cleanUrlInput.value = "";
result.hidden = true;

cleanBtn.addEventListener("click", () => {
  const value = input.value.trim();
  if (!value) {
    result.hidden = true;
    return;
  }

  const cleaned = cleanUrl(value);
  if (cleaned === null) {
    result.hidden = true;
    return;
  }

  cleanUrlInput.value = cleaned;
  result.hidden = false;
});

copyBtn.addEventListener("click", () => {
  cleanUrlInput.select();
  document.execCommand("copy");
});
