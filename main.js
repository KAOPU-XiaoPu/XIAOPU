// 初始化文章展示
function initializeArticles() {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    
    articles.forEach(article => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        
        slide.innerHTML = `
            <div class="article-card">
                <img src="${article.coverImage}" alt="${article.title}" 
                    style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; filter: brightness(0.9);">
                <h2>${article.title}</h2>
                <p class="excerpt">${article.excerpt}</p>
                <a href="${article.link}" class="read-more">
                    阅读全文
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 6px;">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </a>
            </div>
        `;
        
        swiperWrapper.appendChild(slide);
    });
}

// 初始化 Swiper
function initializeSwiper() {
    new Swiper('.article-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        }
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    initializeArticles();
    initializeSwiper();
}); 