document.addEventListener('DOMContentLoaded', async () => {
    // 从URL获取文章ID
    const articleId = window.location.pathname.split('/').pop().replace('.html', '');
    
    // 获取文章数据
    const article = articleList.find(a => a.id === articleId);
    if (!article) return;

    // 获取原文内容
    try {
        const response = await fetch(article.link);
        const html = await response.text();
        
        // 解析文章内容（这里需要根据少数派的HTML结构来提取）
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const content = doc.querySelector('.article-content'); // 根据实际DOM结构调整
        
        // 更新页面内容
        document.title = `${article.title} - XIAO PU`;
        document.querySelector('.article-title').textContent = article.title;
        document.querySelector('.article-date').textContent = article.date;
        document.querySelector('.article-reads').textContent = `${article.reads} 阅读`;
        document.querySelector('.article-body').innerHTML = content.innerHTML;
    } catch (error) {
        console.error('Failed to fetch article:', error);
        document.querySelector('.article-body').innerHTML = '文章加载失败，请稍后重试...';
    }
}); 