const sliders = document.querySelectorAll(".fade-slider");

sliders.forEach(slider => {
    const container = slider.closest(".fade-compare-container");
    const images = container.querySelectorAll(".fade-img"); 

    const step = 100 / (images.length - 1);

        slider.addEventListener("input", function () {
        const value = this.value;

        images.forEach((img, index) => {
        const min = step * (index - 1);
        const max = step * index;

        if (value < min) {
            img.style.opacity = 0;
        } else if (value >= min && value <= max) {
            img.style.opacity = (value - min) / step;
        } else {
            img.style.opacity = 1;
        }
    });

        slider.style.backgroundPosition = `${(100 - value)}% 0`;
    });
});

// icon
const svgContent = `
<svg width="24" height="24" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M185 15C185 6.71574 191.716 0 200 0C208.284 0 215 6.71573 215 15V385C215 393.284 208.284 400 200 400C191.716 400 185 393.284 185 385V15Z" fill="#EEEEEE"/>
  <path d="M271 50C259.799 50 254.198 50 249.92 52.1799C246.157 54.0973 243.097 57.1569 241.18 60.9202C239 65.1984 239 70.799 239 82V139.835C239 143.696 239 145.627 239.289 147.51C239.545 149.183 239.971 150.825 240.559 152.411C241.221 154.197 242.158 155.885 244.034 159.261L332.286 318.115C334.458 322.025 335.544 323.98 335.358 325.58C335.194 326.976 334.451 328.239 333.31 329.06C332.002 330 329.766 330 325.293 330H249C243.477 330 239 334.477 239 340C239 345.523 243.477 350 249 350H352C366.701 350 374.971 350 381.108 347.809C381.765 347.575 382.398 347.315 383.012 347.027C383.216 346.931 383.419 346.832 383.62 346.73C389.265 343.854 393.854 339.265 396.73 333.62C400 327.202 400 318.802 400 302V98C400 81.1984 400 72.7976 396.73 66.3803C393.854 60.7354 389.265 56.146 383.62 53.2698C377.202 50 368.802 50 352 50H271Z" fill="#EEEEEE"/>
  <path d="M151 350C156.523 350 161 345.523 161 340V181.073C161 171.964 161 167.41 159.518 165.943C158.24 164.677 156.382 164.196 154.65 164.681C152.642 165.244 150.43 169.226 146.007 177.188L67.4784 318.539C65.4606 322.171 64.4517 323.987 63.1026 325.391C61.195 327.377 58.7776 328.8 56.1154 329.503C54.2325 330 52.155 330 48 330C39.2692 330 33.924 329.984 29.9248 329.657C24.2319 329.192 20.8409 326.172 20.3428 320.075C20.016 316.076 20 310.731 20 302V98C20 89.2692 20.016 83.924 20.3428 79.9248C20.8397 73.8429 24.1454 70.815 29.9248 70.3428C33.924 70.016 39.2692 70 48 70H151C156.523 70 161 65.5229 161 60C161 54.4772 156.523 50 151 50H47.9958C31.197 50 22.7967 50 16.3799 53.2695C10.5715 56.3141 5.85486 61.0817 2.97266 66.9883C7.03335e-05 73.3312 0 81.7238 0 98V302C0 318.799 0 327.203 3.26953 333.62C6.31093 339.423 11.0977 344.153 16.9883 347.027C23.3312 350 31.7238 350 48 350H151Z" fill="#EEEEEE"/>
</svg>
`;

document.querySelectorAll(".fade-compare-container").forEach(container => {
    const icon = document.createElement("div");
    icon.className = "icon-overlay";
    icon.innerHTML = svgContent;
    container.appendChild(icon);
});

// text change
document.addEventListener("DOMContentLoaded", () => {
  const containers = document.querySelectorAll(".fade-compare-container");

  containers.forEach(container => {
    const slider = container.querySelector(".fade-slider");
    const label = container.querySelector(".fade-text");
    const images = container.querySelectorAll(".fade-img");

    if (images.length === 0) return;

    const total = images.length;
    const step = 100 / total;

    slider.addEventListener("input", () => {
      const value = +slider.value;

      let index = Math.floor(value / step);
      if (index >= total) index = total - 1;

      const newLabel = images[index].dataset.label || "";
      label.textContent = newLabel;
    });

    slider.dispatchEvent(new Event("input"));
  });
});
