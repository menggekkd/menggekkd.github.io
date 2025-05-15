const sliders = document.querySelectorAll(".fade-slider");

sliders.forEach(slider => {
  const container = slider.closest(".fade-compare-container");
  const before = container.querySelector(".fade-before");
  const after = container.querySelector(".fade-after");

  slider.addEventListener("input", function() {
    const value = this.value / 100;
    before.style.opacity = 1 - value;
    after.style.opacity = value;

    // 更新滑块背景位置以确保方向正确
    slider.style.backgroundPosition = `${(1 - value) * 100}% 0`;
  });
});

document.querySelectorAll(".fade-compare-container").forEach(container => {
  const icon = document.createElement("div");
  icon.className = "icon-overlay";
  icon.innerHTML = '<i class="fa-solid fa-images"></i>';
  container.appendChild(icon);
});
