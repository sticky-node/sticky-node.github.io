export const DEFAULT_FONT_SIZE = 20;
export const getLineHeight = (fontSize = DEFAULT_FONT_SIZE) => Math.round(fontSize * 1.2);

export function createTextBox({
  canvas,
  position,
  color,
  textItem,
  fontSize = DEFAULT_FONT_SIZE,
  onCommit
}) {
  const bounds = canvas.getBoundingClientRect();
  const textBox = document.createElement("textarea");
  
  textBox.className = "sticky-node-textbox";
  textBox.style.position = "fixed";
  textBox.style.left = `${bounds.left + position.x - 8}px`;
  textBox.style.top = `${bounds.top + position.y - 8}px`;
  textBox.style.boxSizing = "content-box";
  textBox.style.width = "180px";
  textBox.style.height = "70px";
  textBox.style.padding = "6px";
  textBox.style.margin = "0";
  textBox.style.backgroundColor = "white";
  textBox.style.border = "2px solid red";
  textBox.style.color = color;
  textBox.style.zIndex = "1000";
  textBox.value = textItem?.text ?? "";

  document.body.appendChild(textBox);

  let committed = false;
  let allowBlur = false;

  const commitText = () => {
    if (committed) return;
    committed = true;

    const text = textBox.value.trim();

    if (text) {
      onCommit({
        ...(textItem ?? {}),
        x: textItem?.x ?? position.x,
        y: textItem?.y ?? position.y,
        color: textItem?.color ?? color,
        fontSize,
        text
      });
    }

    textBox.remove();
  };

  requestAnimationFrame(() => {
    textBox.focus();
    textBox.select();
    requestAnimationFrame(() => {
      allowBlur = true;
    });
  });

  textBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      commitText();
    }

    if (event.key === "Escape") {
      committed = true;
      textBox.remove();
    }
  });

  textBox.addEventListener("blur", () => {
    if (!allowBlur) {
      textBox.focus();
      return;
    }
    commitText();
  });
}
