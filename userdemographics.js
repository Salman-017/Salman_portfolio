document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".bar");

  bars.forEach((bar) => {
    const value = bar.getAttribute("data-value");

    // Create red fill bar
    const fill = document.createElement("div");
    fill.classList.add("bar-fill");
    fill.style.width = "0%"; // start at 0

    // Create value text
    const text = document.createElement("div");
    text.classList.add("bar-text");
    text.innerText = `${value}%`;

    // Add both to bar
    bar.appendChild(fill);
    bar.appendChild(text);

    // Animate the red bar fill
    setTimeout(() => {
      fill.style.width = value + "%";
    }, 100);
  });
});
