document.addEventListener('DOMContentLoaded', () => {
    let swiperInstance;
    let swiperElement;
    
    function initSwiper() {
        swiperInstance = new Swiper('.featured-swiper', {
            slidesPerView: 4,
            spaceBetween: 12,
            grabCursor: true,
            watchOverflow: true,
            speed: 500,
            resistance: true,
            resistanceRatio: 0.65,
            touchRatio: 1.5,
            longSwipes: true,
            longSwipesRatio: 0.2,
            longSwipesMs: 50,
            followFinger: true,
            touchStartPreventDefault: false,
            touchMoveStopPropagation: true,
            cssMode: true,
            mousewheel: {
                enabled: true,
                sensitivity: 2.5,
                thresholdDelta: 1,
                thresholdTime: 75,
                forceToAxis: true,
                releaseOnEdges: true
            },
            touchEventsTarget: 'container',
            preventInteractionOnTransition: true,
            freeMode: {
                enabled: true,
                momentum: true,
                momentumRatio: 0.8,
                momentumBounce: true,
                momentumBounceRatio: 0.5,
                minimumVelocity: 0.02
            },
            keyboard: {
                enabled: true,
                onlyInViewport: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            on: {
                touchStart: function() {
                    this.params.speed = 400;
                },
                touchEnd: function() {
                    this.params.speed = 500;
                },
                touchMove: function() {
                    this.params.speed = 0;
                }
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 12
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 12
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 12
                },
                1400: {
                    slidesPerView: 4,
                    spaceBetween: 12
                }
            }
        });
    }

    // 加载精选文章
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    // 添加文章简介截断函数
    function truncateExcerpt(excerpt, minLength = 60, maxLength = 80) {
        let currentLength = 0;
        let result = '';
        if (excerpt.length < minLength) {
            return excerpt + '，' + excerpt.slice(0, minLength - excerpt.length);
        }
        
        for (let char of excerpt) {
            currentLength += /[\u4e00-\u9fa5]/.test(char) ? 2 : 1;
            if (currentLength <= maxLength) {
                result += char;
            } else {
                break;
            }
        }
        return result.length < excerpt.length ? result + '...' : result;
    }

    featuredArticles.forEach(article => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        
        slide.innerHTML = `
            <div class="featured-card">
                <img 
                    src="${article.image}"
                    alt="${article.title}" 
                    class="featured-image" 
                    loading="lazy"
                    onerror="this.src='default.jpg'"
                >
                <div class="featured-content">
                    <h3 class="featured-title">${article.title}</h3>
                    <p class="featured-excerpt">${truncateExcerpt(article.excerpt)}</p>
                </div>
            </div>
        `;

        const card = slide.querySelector('.featured-card');
        card.addEventListener('click', () => {
            window.open(article.link, '_blank');
        });
        card.style.cursor = 'pointer';
        
        swiperWrapper.appendChild(slide);
    });

    // 初始化 Swiper
    initSwiper();

    // 在页面加载完成后触发一次 resize 事件
    window.addEventListener('load', () => {
        window.dispatchEvent(new Event('resize'));
        if (swiperInstance) {
            swiperInstance.update();
        }
    });

    // 修改鼠标滚轮事件监听
    swiperElement = document.querySelector('.featured-swiper');
    
    swiperElement.addEventListener('wheel', (e) => {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
        
        if (!swiperInstance) return;
        
        // 获取卡片容器的位置信息
        const rect = swiperElement.getBoundingClientRect();
        const cardHeight = 280;  // 与 CSS 中 .featured-card 的 height 保持一致
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        // 只在卡片实际高度范围内触发左右滑动
        if (mouseX >= rect.left && 
            mouseX <= rect.right && 
            mouseY >= rect.top && 
            mouseY <= rect.top + cardHeight) {
            e.preventDefault();
            
            const delta = -e.deltaY;
            const currentTranslate = swiperInstance.getTranslate();
            const newTranslate = currentTranslate + (delta * 0.5);
            
            swiperInstance.setTransition(300);
            swiperInstance.setTranslate(newTranslate);
        }
    }, { passive: false });

    // 分页相关变量
    const ITEMS_PER_PAGE = 6;
    let currentPage = 1;
    const totalPages = Math.ceil(articleList.length / ITEMS_PER_PAGE);

    // 更新分页UI
    function updatePaginationUI() {
        const prevBtn = document.querySelector('.prev-page');
        const nextBtn = document.querySelector('.next-page');
        const currentPageEl = document.querySelector('.current-page');
        const totalPagesEl = document.querySelector('.total-pages');

        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === totalPages;
        currentPageEl.textContent = currentPage;
        totalPagesEl.textContent = `/ ${totalPages}`;
    }

    // 渲染文章列表
    function renderArticles(page) {
        const tableBody = document.querySelector('.table-body');
        const start = (page - 1) * ITEMS_PER_PAGE;
        const end = start + ITEMS_PER_PAGE;
        const pageArticles = articleList.slice(start, end);

        tableBody.innerHTML = '';
        pageArticles.forEach(article => {
            const row = document.createElement('div');
            row.className = 'table-row';
            row.innerHTML = `
                <div class="row-content">
                    <div class="row-title">${article.title}</div>
                    <div class="row-excerpt">${article.excerpt}</div>
                </div>
                <div class="row-reads">${article.reads}</div>
                <div class="row-date">${article.date}</div>
            `;
            const content = row.querySelector('.row-content');
            content.addEventListener('click', () => {
                window.open(article.link, '_blank');
            });
            content.style.cursor = 'pointer';
            tableBody.appendChild(row);
        });

        updatePaginationUI();
    }

    // 初始化分页器
    document.querySelector('.prev-page').addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderArticles(currentPage);
        }
    });

    document.querySelector('.next-page').addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderArticles(currentPage);
        }
    });

    // 初始渲染
    renderArticles(currentPage);

    // 处理微信号复制功能
    document.querySelector('.contact-text').addEventListener('click', function() {
        const textToCopy = this.getAttribute('data-clipboard');
        const tooltip = document.querySelector('.copy-tooltip');
        
        // 复制文本
        navigator.clipboard.writeText(textToCopy).then(() => {
            // 显示提示
            tooltip.classList.add('show');
            
            // 1.5秒后隐藏提示
            setTimeout(() => {
                tooltip.classList.remove('show');
            }, 1500);
        }).catch(err => {
            console.error('复制失败:', err);
        });
    });
}); 