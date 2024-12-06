const fs = require('fs');

// 从 articles-data.js 导入文章数据
const { featuredArticles } = require('./articles-data.js');

// 处理所有文章
function processAllArticles() {
    const updatedArticles = featuredArticles.map(article => {
        // 从文章链接中提取文章ID
        const postId = article.link.split('/').pop();
        // 使用新的图片URL格式
        article.image = `https://cdn.sspai.com/2024/01/${postId}/header.jpg`;
        return article;
    });
    
    // 更新 articles-data.js
    const fileContent = `const featuredArticles = ${JSON.stringify(updatedArticles, null, 4)};\n\nconst articleList = ${JSON.stringify(featuredArticles, null, 4)};\n\nmodule.exports = { featuredArticles, articleList };`;
    fs.writeFileSync('articles-data.js', fileContent);
    
    console.log('All articles processed and saved!');
}

// 运行处理
processAllArticles(); 