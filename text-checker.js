const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');

// 从文章链接获取第一段内容
async function getFirstParagraph(url) {
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        // 获取文章第一段内容
        const firstParagraph = $('.article-content p').first().text().trim();
        return firstParagraph;
    } catch (error) {
        console.error(`Failed to fetch content from ${url}`);
        return null;
    }
}

// 控制文本长度
function formatExcerpt(text, isFeatured = false) {
    // 精选文章卡片约1行，普通列表约2行
    const maxChars = isFeatured ? 35 : 85;
    
    let formatted = text.trim().replace(/\s+/g, ' ');
    
    // 如果文本超过限定长度，截断并添加省略号
    if (formatted.length > maxChars) {
        // 尝试在标点符号处截断
        const punctuation = ['.', '。', '！', '!', '？', '?'];
        let cutIndex = maxChars - 3;
        
        // 向前查找最近的标点
        for (let i = cutIndex; i >= cutIndex - 10; i--) {
            if (punctuation.includes(formatted[i])) {
                cutIndex = i + 1;
                break;
            }
        }
        
        formatted = formatted.slice(0, cutIndex) + '...';
    }
    
    return formatted;
}

// 检查并修复文章数据
async function checkAndFixArticlesData() {
    const articlesData = require('./articles-data.js');
    let hasChanges = false;

    // 处理精选文章
    for (const article of articlesData.featuredArticles) {
        const firstParagraph = await getFirstParagraph(article.link);
        if (firstParagraph) {
            const formattedExcerpt = formatExcerpt(firstParagraph, true);
            if (formattedExcerpt !== article.excerpt) {
                console.log(`Updated featured article ${article.id} excerpt`);
                article.excerpt = formattedExcerpt;
                hasChanges = true;
            }
        }
    }

    // 处理文章列表
    for (const article of articlesData.articleList) {
        const firstParagraph = await getFirstParagraph(article.link);
        if (firstParagraph) {
            const formattedExcerpt = formatExcerpt(firstParagraph, false);
            if (formattedExcerpt !== article.excerpt) {
                console.log(`Updated article ${article.id} excerpt`);
                article.excerpt = formattedExcerpt;
                hasChanges = true;
            }
        }
    }

    // 保存修改
    if (hasChanges) {
        const content = `const featuredArticles = ${JSON.stringify(articlesData.featuredArticles, null, 4)};\n\nconst articleList = ${JSON.stringify(articlesData.articleList, null, 4)};\n\nmodule.exports = { featuredArticles, articleList };`;
        fs.writeFileSync('articles-data.js', content, 'utf8');
        console.log('Fixed and saved articles-data.js');
    } else {
        console.log('No issues found in articles-data.js');
    }
}

// 安装依赖并运行
console.log('Installing required packages...');
require('child_process').execSync('npm install axios cheerio');

// 运行检查
checkAndFixArticlesData().catch(console.error); 