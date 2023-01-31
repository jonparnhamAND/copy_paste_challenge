function challenge(str) {
  const replaceCtrlC = str.replace(/\[CTRL\+C\]/g, " [CTRL+C] ");
  const replaceCtrlV = replaceCtrlC.replace(/\[CTRL\+V\]/g, " [CTRL+V] ");
  const replaceCtrlX = replaceCtrlV.replace(/\[CTRL\+X\]/g, " [CTRL+X] ");

  const splitStr = replaceCtrlX.split(" ").filter((item) => item != "");

  const outputText = [];

  let copiedStrToPaste = "";

  let cutStrToPaste = "";

  const copyKeyWords = ["[CTRL+C]", "[CTRL+V]", "[CTRL+X]"];

  splitStr.forEach((item, index) => {
    if (!item) return;

    const trimmedItem = item.trim();

    if (!copyKeyWords.includes(trimmedItem)) {
      outputText.push(trimmedItem);
    } else if (item === "[CTRL+X]") {
      cutStrToPaste = outputText.join(" ");
      copiedStrToPaste = "";
      outputText.length = 0;
    } else if (item === "[CTRL+C]") {
      copiedStrToPaste = outputText.join(" ");
      cutStrToPaste = "";
    } else if (item === "[CTRL+V]" && copiedStrToPaste) {
      outputText.push(copiedStrToPaste);
    } else if (item === "[CTRL+V]" && cutStrToPaste) {
      outputText.push(cutStrToPaste);
    }
  });

  if (outputText[outputText.length - 1] === ".") {
    outputText[outputText.length - 2] = `${outputText[outputText.length - 2]}.`;
    outputText.pop();
  }

  return outputText.join(" ");
}

// [
//   "the big red[CTRL+C] fox jumps over [CTRL+V] lazy dog.",
//   "[CTRL+V]the tall oak tree towers over the lush green meadow.",
//   "the sun shines down[CTRL+C] on [CTRL+V][CTRL+C] the busy [CTRL+V].",
//   "a majestic lion[CTRL+C] searches for [CTRL+V] in the tall grass.",
//   "the shimmering star[CTRL+X]Twinkling in the dark, [CTRL+V] shines bright.",
//   "[CTRL+X]a fluffy white cloud drifts [CTRL+V][CTRL+C] across the sky, [CTRL+V]",
// ];

const result = challenge(
  "the big red[CTRL+C] fox jumps over [CTRL+V] lazy dog."
);

console.log(result);

module.exports = challenge;
