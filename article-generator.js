const fs = require('fs');
const path = require('path');

// 导入文章数据
const { articleList } = require('./articles-data.js');

// 读取文章模板
const template = fs.readFileSync('article-template.html', 'utf-8');

// 创建 articles 目录（如果不存在）
const articlesDir = path.join(__dirname, 'articles');
if (!fs.existsSync(articlesDir)) {
    fs.mkdirSync(articlesDir);
}

// 文章内容（这里可以从外部文件或数据库导入）
const articleContents = {
    "1": `
        <p>如果说今年的风口，那一定是 AI。不过AI像一把双刃剑，既有助益也有风险。</p>
        <h2>AI 应用的现状</h2>
        <p>我们将从IBM Watson的高飞与坠落，到Google Allo的黯然失色，探索AI应用中的教训。</p>
        <!-- 更多内容 -->
    `,
    // ... 其他文章内容
};

// 为每篇文章生成HTML文件
articleList.forEach(article => {
    const articleHtml = template
        .replace('{{title}}', article.title)
        .replace('{{date}}', article.date)
        .replace('{{reads}}', article.reads)
        .replace('{{content}}', articleContents[article.id] || '文章内容正在准备中...');

    const filePath = path.join(articlesDir, `${article.id}.html`);
    fs.writeFileSync(filePath, articleHtml);
});

console.log('文章页面生成完成！'); 