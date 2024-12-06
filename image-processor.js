const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');

// 从 articles-data.js 导入文章数据
const { featuredArticles } = require('./articles-data.js');

// 确保图片目录存在
const coverDir = path.join(__dirname, 'images', 'cover');
if (!fs.existsSync(coverDir)) {
    fs.mkdirSync(coverDir, { recursive: true });
}

// 从文章页面提取封面图片URL
async function extractCoverImageUrl(articleUrl) {
    try {
        const response = await axios.get(articleUrl);
        const $ = cheerio.load(response.data);
        
        // 少数派文章封面图片选择器
        const coverImage = $('.article-banner img').attr('src') || 
                         $('meta[property="og:image"]').attr('content');
        
        return coverImage;
    } catch (error) {
        console.error(`Failed to extract cover from ${articleUrl}:`, error.message);
        return null;
    }
}

// 下载图片的函数
async function downloadImage(url, filename) {
    try {
        const response = await axios({
            url,
            method: 'GET',
            responseType: 'stream'
        });

        const filePath = path.join(coverDir, filename);
        const writer = fs.createWriteStream(filePath);

        response.data.pipe(writer);

        return new Promise((resolve, reject) => {
            writer.on('finish', () => {
                console.log(`Downloaded: ${filename}`);
                resolve();
            });
            writer.on('error', reject);
        });
    } catch (error) {
        console.error(`Failed to download ${url}:`, error.message);
    }
}

// 处理所有文章的封面图片
async function processAllImages() {
    try {
        // 添加延迟函数
        const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

        for (const article of featuredArticles) {
            console.log(`Processing article ${article.id}...`);
            
            // 提取封面图片URL
            const coverUrl = await extractCoverImageUrl(article.link);
            
            if (coverUrl) {
                // 下载图片
                await downloadImage(coverUrl, `${article.id}.jpg`);
                
                // 更新 articles-data.js 中的图片路径
                article.image = `/images/cover/${article.id}.jpg`;
            }

            // 添加延迟，避免请求过快
            await delay(1000);
        }

        // 保存更新后的文章数据
        const updatedData = `const featuredArticles = ${JSON.stringify(featuredArticles, null, 4)};\n\nmodule.exports = { featuredArticles };`;
        fs.writeFileSync('articles-data.js', updatedData);

        console.log('All images processed successfully!');

    } catch (error) {
        console.error('Error processing images:', error);
    }
}

// 首先安装必要的依赖
console.log('Installing required packages...');
require('child_process').execSync('npm install axios cheerio');

// 运行处理程序
processAllImages(); 