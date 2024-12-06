const featuredArticles = [
    {
        id: "15",
        title: "风口上的新职业：AI训练师的崛起与未来",
        excerpt: "大家可能已经注意到，AI训练师这个新兴职业正悄然走入公众视野...",
        image: "15.jpg",
        link: "https://sspai.com/post/93828"
    },
    {
        id: "14",
        title: "刚入职要学会'脏活累活'抢着做",
        excerpt: "在职场的起步阶段，我们大多都有些谨慎，习惯在自己的小范围内把每件事做到尽善尽美...",
        image: "14.jpg",
        link: "https://sspai.com/post/93438"
    },
    {
        id: "13",
        title: "应届生的我如何拿到高薪'入场券'？",
        excerpt: "曾经我几度以为，考上大学、考上研、找个班上就是人生中非常重要的几个大事...",
        image: "13.jpg",
        link: "https://sspai.com/post/92545"
    },
    {
        id: "9",
        title: "怕被裁？三大软技能让你稳住岗位！",
        excerpt: "在职场中，你是否曾遇到过这样的情况：你认为自己在会议中提出了一个绝妙想法...",
        image: "9.jpg",
        link: "https://sspai.com/post/91976"
    },
    {
        id: "7",
        title: "让你在职场中晋升的秘密：具备'打草稿'能力",
        excerpt: "你是不是也有这样的感觉，明明每天都在忙碌，仿佛把所有的时间都投入到工作中...",
        image: "7.jpg",
        link: "https://sspai.com/post/87800"
    },
    {
        id: "6",
        title: "千万不要直接用AI，真正帮你高效完成工作的是工作流",
        excerpt: "在这个信息爆炸的时代，AI工具正以飞快的速度涌入我们的工作和生活...",
        image: "6.jpg",
        link: "https://sspai.com/post/90517"
    },
    {
        id: "5",
        title: "GPTs的'窗口定向'策略：优化使用体验",
        excerpt: "在前面几篇文章中，我们讲解了GPT的基本使用和高阶技巧...",
        image: "5.jpg",
        link: "https://sspai.com/post/89880"
    },
    {
        id: "4",
        title: "高效ChatGPT交流指南：GPTs搭建的全面教程",
        excerpt: "在掌握了基本的ChatGPT对话技巧后，很多朋友开始对GPTs的搭建产生兴趣...",
        image: "4.jpg",
        link: "https://sspai.com/post/89855"
    },
    {
        id: "3",
        title: "高效ChatGPT交流指南：提示词设计的专业技巧",
        excerpt: "你有没有遇到过和ChatGPT对话却总是得不到想要的答案的情况？...",
        image: "3.jpg",
        link: "https://sspai.com/post/89311"
    }
];

const articleList = [
    {
        id: "17",
        title: "AI时代下设计师作业模式的变化",
        reads: "12.8w",
        date: "2024-12-19",
        excerpt: "最近一段时间一直在思考目前设计师的作业模式是否已然被AI改变。AI的出现确实给设计行业带来了巨大的变革，但同时也引发了诸多思考。设计师们需要重新定位自己的角色...",
        link: "https://sspai.com/post/94469"
    },
    {
        id: "16",
        title: "你确定AI真的帮你提效了吗？",
        reads: "15.2w",
        date: "2024-11-21",
        excerpt: "AI在里面提效了吗？好像是有提效，但为什么感觉还是和传统工作流耗费的时间差不多呢？本文将从实际工作场景出发，探讨AI工具在工作中的真实效果...",
        link: "https://sspai.com/post/94146"
    },
    {
        id: "15",
        title: "风口上的新职业：AI训练师的崛起与未来",
        reads: "18.5w",
        date: "2024-11-12",
        excerpt: "大家可能已经注意到，'AI训练师'这个职业正悄然走入公众视野。随着AI技术的快展，这个新兴职业正在成为市场的热门选择。本文将深入分析这个职业的现状与前景...",
        link: "https://sspai.com/post/93828"
    },
    {
        id: "14",
        title: "刚入职要学会'脏活累活'抢着做",
        reads: "15.8k",
        date: "2024-11-08",
        excerpt: "在职场的起步阶段，我们大多都有些谨慎，习惯在自己的小范围内把每件事做到尽善尽美。但这种思维方式可能会限制我们的职业发展，本文将分享一些突破的方法...",
        link: "https://sspai.com/post/93438"
    },
    {
        id: "13",
        title: "应届生的我如何拿到高薪'入场券'？",
        reads: "12.2k",
        date: "2024-10-15",
        excerpt: "曾经我几度以为，考上大学、考上研、找个班上就是人生中非常重要的几个大事。但后来我发现，每一个'当下的目标'，其实都是下一阶段的新起点...",
        link: "https://sspai.com/post/92545"
    },
    {
        id: "12",
        title: "普通人如何抓住AI红利？提效+赚钱两不误",
        reads: "16.8w",
        date: "2024-09-30",
        excerpt: "最近，越来越多的朋友问我：AI到底怎么用来搞钱��它真能帮忙提高效率吗？本文将分享一些实用的AI应用景，帮助普通人在这波AI浪潮中抓住机会...",
        link: "https://sspai.com/post/92544"
    },
    {
        id: "11",
        title: "2024年我离不开的三个效率工具",
        reads: "18.1k",
        date: "2024-09-26",
        excerpt: "希望这三个提效工具可以帮到你。回顾2024这大半年我虽尝试了许多新的应用和工具，但其中有这三款工具已然让我用成习惯了，只能说非常实用。",
        link: "https://sspai.com/post/92281"
    },
    {
        id: "10",
        title: "如何判断AI的输出是否正确？三个办法搞定！",
        reads: "14.2w",
        date: "2024-09-13",
        excerpt: "在生成式AI工具如ChatGPT逐渐融入日常工作和生活的今天，很多人都在依赖AI来完成各种任务：撰写文案、编程、生成分析报告，甚至是做生活规划。",
        link: "https://sspai.com/post/91977"
    },
    {
        id: "9",
        title: "怕被裁？三大软技能让你稳住岗位！",
        reads: "16.8k",
        date: "2024-09-05",
        excerpt: "在职场中，你是否曾遇到过这样的情况：你认为自己在会议中提出了一个绝妙的想法，结果却得不到任何响应；或者面对突如其来的项目挑战，你以为自己应对得当，却现领导的态度并不如预期那样积极。",
        link: "https://sspai.com/post/91976"
    },
    {
        id: "8",
        title: "从零到AI高手：用OpenAI API极速打造智能应用！",
        reads: "19.8w",
        date: "2024-09-02",
        excerpt: "像我之前也提到过，AI的发展愈发迅猛这是无可置疑的，但很多人知道AI好，却不会引进实际的业务中去。论是市面上常见的文本生成工具，还是智能Copilot，这些应用都展示了AI的强大能力。",
        link: "https://sspai.com/post/90523"
    },
    {
        id: "7",
        title: "让你在职场中晋升的秘密：具备'打草稿'能力",
        reads: "17.8k",
        date: "2024-08-19",
        excerpt: "你是不是也有这样的感觉，明明每天都在忙碌，仿佛把所有的时间都投入到工作中，可回头看看，却发现自己似乎没什么进步？尤其是当你看到那些比你年、经验不如你的人一个个被提拔，心里真的五味杂陈。",
        link: "https://sspai.com/post/87800"
    },
    {
        id: "6",
        title: "千万不要直接用AI，真正帮你高效完成工作的是工作流",
        reads: "13.1w",
        date: "2024-07-25",
        excerpt: "在这个信息爆炸的时代，AI工具正以飞快的速度涌入我们的工作和生活。但很多人忽视了一个关键点：真正能提升效率的不是单个工具，而是完整的工作流程...",
        link: "https://sspai.com/post/90517"
    },
    {
        id: "5",
        title: "GPTs的'窗口定向'策略：优化使用体验",
        reads: "19.2k",
        date: "2024-07-08",
        excerpt: "在前面几篇文章中，我们讲解了GPT的基本使用和高阶技巧。本文将深入探讨如何通过'窗口定向'策略来优化GPTs的使用体验，让AI助手更好地服务我们的需求...",
        link: "https://sspai.com/post/89880"
    },
    {
        id: "4",
        title: "高效ChatGPT交流指南：GPTs搭建的全面教程",
        reads: "14.5k",
        date: "2024-06-26",
        excerpt: "在掌握了基本的ChatGPT对话技巧后，很多朋友开始对GPTs的搭建产生兴趣。本文将通过实际案例，详细讲解如何搭建属于自己的专属AI助手...",
        link: "https://sspai.com/post/89855"
    },
    {
        id: "3",
        title: "高效ChatGPT交流指南：提示词设计的专业技巧",
        reads: "16.1k",
        date: "2024-06-26",
        excerpt: "你有没有遇到过和ChatGPT对话却总是得不到想要的答案的情况？这往往是因为提示词设计不当。本文将分享一些实用的提示词设计技巧，帮你提升AI对话效率...",
        link: "https://sspai.com/post/89311"
    },
    {
        id: "2",
        title: "AI节点式接入：搭建批量生图SOP工程",
        reads: "17.1w",
        date: "2024-05-29",
        excerpt: "随着AI技术的发展，图像生成需求在各行业快速增长。本文将介绍如何通过节点式接入的方式，搭建一个高效的AI批量生图工作流，让图像生成更加规范和高效...",
        link: "https://sspai.com/post/88220"
    },
    {
        id: "1",
        title: "AI探索：最佳落地应用场景",
        reads: "20.1w",
        date: "2024-04-02",
        excerpt: "如果说今年的风口，那一定是AI。但AI像一把双刃剑，既有助益也有风险。本文将通过多个真实案例，分析AI落地应用的成功经验与失教训，助你在AI浪潮中把握方向...",
        link: "https://sspai.com/post/87668"
    }
];

module.exports = { featuredArticles, articleList }; 