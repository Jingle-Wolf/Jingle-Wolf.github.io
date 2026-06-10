// ==========================================
// 📝 【时间轴核心数据区】
// 后期请按需修改以下字段的内容：
// ==========================================
const milestones = [
    {
        date: '2025-8-11',       // 【日期】
        title: '相逢',         // 【标题】
        img: './images/01.jpg',  // 【图片路径】⚠️确保images文件夹下有这张图
        desc: '今天来的可真巧，能遇到你，真好~' 
    },
    {
        date: '2025-8-16',       // 【日期】
        title: '初见',       // 【标题】
        img: './images/02.jpg',   // 【图片路径】
        desc: '还记得初见你时，慌乱中带着欢喜，失措中带着雀跃。那种感觉就像淡若云烟的花朵遇见了春风。刹那间，春光便照进了心里' 
    },
    {
        date: '2025-8-29',       // 【日期】
        title: '翘明',         // 【标题】
        img: './images/03.jpg',  // 【图片路径】⚠️确保images文件夹下有这张图
        desc: '我是一个时常恋旧的人，那晚见你，方懂夜色很美，心中安宁如故。或许这就是缘分。' 
    },
    {
        date: '2025-9-1',       // 【日期】
        title: '执手',       // 【标题】
        img: './images/04.jpg',   // 【图片路径】
        desc: '指尖触碰的那一刹，心开始动荡，久违的爱意从四面八方袭来，之后送你一个温暖的拥抱~' 
    },
    {
        date: '2025-9-4',       // 【日期】
        title: '剪水双瞳',         // 【标题】
        img: './images/05.jpg',  // 【图片路径】⚠️确保images文件夹下有这张图
        desc: '那不经意的一眼，好似春光都被揉碎，千万般情绪，都掺杂进那若深若浅的瞳色之中，晦暗不明，我彻底沦陷了' 
    },
    {
        date: '2025-9-8',       // 【日期】
        title: 'S',       // 【标题】
        img: './images/06.jpg',   // 【图片路径】
        desc: '如果说一见钟情太敷衍，日久生情太肤浅。那么，那一眼已是万年！' 
    },
    {
        date: '2025-9-21',       // 【日期】
        title: '芳兰湖',         // 【标题】
        img: './images/07.jpg',  // 【图片路径】⚠️确保images文件夹下有这张图
        desc: '我想，若把时间酿成酒，那么余生有你，何处不香醇~' 
    },
    {
        date: '2025-10-01',       // 【日期】
        title: '首个国庆',       // 【标题】
        img: './images/08.jpg',   // 【图片路径】
        desc: '李白曾说，这月亮是瑶台镜。我本是不信的。直到今天，从月亮中看到了你…' 
    },
    {
        date: '2025-10-01',       // 【日期】
        title: '那刻最喜欢的一张照片~',       // 【标题】
        img: './images/09.jpg',   // 【图片路径】
        desc: '甜有100种方式：吃糖、吃蛋糕和想你98次。' 
    },
    {
        date: '2025-10-18',       // 【日期】
        title: '烟雨·南京',       // 【标题】
        img: './images/10.jpg',   // 【图片路径】
        desc: '上海的风，南京的雨，心里的你，一个都不能少' 
    },
    {
        date: '2025-11-16',       // 【日期】
        title: '服务生小H为您服务',       // 【标题】
        img: './images/11.jpg',   // 【图片路径】
        desc: '秋意中时长会唤起心中的暖意，我想你应该就说村上春树口中那种热气腾腾的人' 
    },
    {
        date: '2025-11-30',       // 【日期】
        title: '小桥流水人家',       // 【标题】
        img: './images/12.jpg',   // 【图片路径】
        desc: '站念卿，前思后想；坐念卿，左思右想；眠念卿，朝思暮想；业念卿，苦思冥想' 
    },
    {
        date: '2025-12-3',       // 【日期】
        title: '联合办事处',       // 【标题】
        img: './images/13.jpg',   // 【图片路径】
        desc: '经研究决定，成立联合办事处~' 
    },
    {
        date: '2025-12-4',       // 【日期】
        title: '第一个生日',       // 【标题】
        img: './images/14.jpg',   // 【图片路径】
        desc: '眼睛藏不住心事，一提到你的名字就温柔泛滥。' 
    },
    {
        date: '2025-12-21',       // 【日期】
        title: '海会寺',       // 【标题】
        img: './images/15.jpg',   // 【图片路径】
        desc: '想给你从清晨点赞到日暮，从北极跨越到南极，你放心去飞！' 
    },
    {
        date: '2026-1-2',       // 【日期】
        title: '第一个元旦',       // 【标题】
        img: './images/17.jpg',   // 【图片路径】
        desc: '跟小安总会师了！获得挖掘机驾驶体验卡。' 
    },
    {
        date: '2026-1-3',       // 【日期】
        title: '古树之约',       // 【标题】
        img: './images/16.jpg',   // 【图片路径】
        desc: '我希望关于你的所有答案都是我' 
    }
];

// ==========================================
// 🌟 1. 渲染时间轴到页面 (已加入图文混排)
// ==========================================
const timelineWrapper = document.getElementById('timeline-wrapper');
milestones.forEach(item => {
    const div = document.createElement('div');
    div.className = 'timeline-item';
    div.setAttribute('data-img', item.img); 
    
    // 核心改动：增加了 img 标签，并用 card-content 包裹文字，方便排版
    div.innerHTML = `
        <img src="${item.img}" alt="${item.title}" class="node-img">
        <div class="card-content">
            <span class="date">${item.date}</span>
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
        </div>
    `;
    timelineWrapper.appendChild(div);
});


// ==========================================
// 🌟 2. 引导页 API 调用与手写渐显效果
// ==========================================
const overlay = document.getElementById('intro-overlay');
const quoteText = document.getElementById('quote-text');
const enterBtn = document.getElementById('enter-btn');
const timelineContainer = document.querySelector('.timeline-container');

/**
 * 核心函数：手写渐显效果
 * @param {string} text - 要显示的文字
 * @param {number} delay - 每个字出现的间隔时间(毫秒)
 */
function typeWriterSmooth(text, delay = 80) {
    return new Promise(resolve => {
        // 【修复1】：彻底清空原有文字，防止内容叠加
        quoteText.innerHTML = ''; 
        
        // 将文字拆分成一个个 <span> 标签并插入页面
        const chars = text.split('').map(char => `<span class="char-span">${char}</span>`).join('');
        quoteText.innerHTML = chars;
        
        // 获取所有生成的 span 标签，依次添加可见类名
        const spans = quoteText.querySelectorAll('.char-span');
        let i = 0;
        
        const timer = setInterval(() => {
            if (i < spans.length) {
                spans[i].classList.add('visible'); // 触发CSS渐显动画
                i++;
            } else {
                clearInterval(timer);
                resolve(); // 所有字显示完毕，通知下一步
            }
        }, delay);
    });
}

// 请求接口并触发动画
// （fetch 请求内部逻辑修改如下）
fetch('https://api.shadiao.pro/chp')
    .then(response => response.json())
    .then(async data => {
        await typeWriterSmooth(data.data.text, 80); 
        
        // 【优化1】：不再用生硬的 display 切换，而是通过添加类名触发 CSS 的上浮淡入
        enterBtn.style.display = 'inline-block';
        setTimeout(() => { enterBtn.classList.add('show'); }, 50);
    })
    .catch(async err => {
        await typeWriterSmooth("哎呀，网络好像开小差了，但爱你的心不会断线~", 80);
        enterBtn.style.display = 'inline-block';
        setTimeout(() => { enterBtn.classList.add('show'); }, 50);
    });

// 【优化2】：点击按钮时，先播放水波纹动画，再关闭引导页
enterBtn.addEventListener('click', () => {
    // 1. 触发水波纹扩散特效
    enterBtn.classList.add('animate-ripple');
    
    // 2. 延迟一点时间，让水波纹有足够的时间展现，然后再执行页面跳转/消失
    setTimeout(() => {
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.display = 'none';
            timelineContainer.classList.add('show'); 
        }, 500); 
    }, 300); 
});



// ==========================================
// 🌟 3. 滚动监听与背景模糊特效
// ==========================================
window.addEventListener('scroll', () => {
    const items = document.querySelectorAll('.timeline-item');
    let currentActive = null;

    items.forEach(item => {
        const rect = item.getBoundingClientRect();
        // 当节点滚动到屏幕垂直居中区域时触发
        if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
            currentActive = item;
        }
    });

    if (currentActive && !currentActive.classList.contains('active')) {
        document.querySelectorAll('.timeline-item.active').forEach(el => el.classList.remove('active'));
        currentActive.classList.add('active');
        
        // 更新背景图片
        const bgImg = currentActive.getAttribute('data-img');
        const dynamicBg = document.getElementById('dynamic-bg');
        dynamicBg.style.backgroundImage = `url(${bgImg})`;
        dynamicBg.style.opacity = '0.6'; 
    }
});
