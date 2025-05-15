// 动态加载组件到指定的 DOM 元素
async function loadComponent(id, file) {
    try {
        const response = await fetch(`block/${file}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.text();
        document.getElementById(id).innerHTML = data;
    } catch (error) {
        console.error(`Error loading ${file}:`, error);
        document.getElementById(id).innerHTML = '<p>Error loading component</p>';
    }
}

// 404 页面处理
async function handle404() {
    // 检查是否是 404 页面
    if (document.title.includes('404')) {
        // 记录 404 错误
        console.warn('404 Error:', window.location.pathname);
        
        // 尝试加载相似页面建议
        try {
            // 这里可以添加页面推荐逻辑
        } catch (error) {
            console.error('Error loading suggestions:', error);
        }
    }
}

// 页面加载时执行
window.addEventListener("DOMContentLoaded", async () => {
    await Promise.all([
        loadComponent("header", "header.html"),
        loadComponent("footer", "footer.html"),
        loadComponent("overlay-content", "nav.html"),
        loadComponent("header-nav", "nav.html")
    ]);
    
    handle404();
});

// 打开导航叠加窗口
function openNav() {
  const overlayNav = document.getElementById("overlay-nav");
  overlayNav.classList.add("show");
  overlayNav.setAttribute("aria-hidden", "false");
}

// 关闭导航叠加窗口
function closeNav() {
  const overlayNav = document.getElementById("overlay-nav");
  overlayNav.classList.remove("show");
  overlayNav.setAttribute("aria-hidden", "true");
}

// 事件绑定（推荐替代 HTML 中的 onclick）
document.addEventListener("click", (event) => {
  if (event.target.matches(".nav-toggle")) {
    openNav();
  } else if (event.target.matches(".close-btn")) {
    closeNav();
  }
});

// 回到顶部按钮
const backToTop = document.querySelector('.back-to-top');

// 监听滚动事件
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

// 点击回到顶部
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 页面过渡处理
document.addEventListener('DOMContentLoaded', () => {
    const transition = document.querySelector('.page-transition');
    
    // 页面加载完成后的淡出效果
    window.addEventListener('load', () => {
        setTimeout(() => {
            transition.classList.add('fade-out');
        }, 300);
    });

    // 处理站内链接点击事件
    document.addEventListener('click', e => {
        const link = e.target.closest('a');
        if (link && link.hostname === window.location.hostname && !link.target && !link.hash) {
            e.preventDefault();
            transition.classList.remove('fade-out');
            setTimeout(() => {
                window.location.href = link.href;
            }, 600);
        }
    });
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
