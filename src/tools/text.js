export function createTextBox({
  canvas,
  position,
  color,
  textItem,
  onCommit
}) {
  const bounds = canvas.getBoundingClientRect();
  const textBox = document.createElement("textarea");

  textBox.style.position = "absolute";
  textBox.style.left = `${bounds.left + position.x + window.scrollX}px`;
  textBox.style.top = `${bounds.top + position.y + window.scrollY}px`;
  textBox.style.width = "180px";
  textBox.style.height = "70px";
  textBox.style.padding = "6px";
  textBox.style.backgroundColor = "white";
  textBox.style.border = "2px solid red";
  textBox.style.color = color;
  textBox.style.font = "20px sans-serif";
  textBox.style.zIndex = "1000";
  textBox.value = textItem?.text ?? "";

  document.body.appendChild(textBox);
  textBox.focus();

  let committed = false;

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
        text
      });
    }

    textBox.remove();
  };

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

  textBox.addEventListener("blur", commitText);
}