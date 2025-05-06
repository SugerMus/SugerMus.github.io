// 设置网站创建时间（这里以当前时间往前推85天为例，可根据实际情况修改）
const create_time = new Date();
create_time.setDate(create_time.getDate() - 85);

// 获取相关DOM元素
const statusElement = document.getElementById('status');
const runtimeElement = document.getElementById('runtime');
const voyagerDistanceElement = document.getElementById('voyager - distance');
const astronomicalUnitsElement = document.getElementById('astronomical - units');

// 每秒更新一次时间信息
setInterval(() => {
  const now = new Date();
  const diff = now - create_time;
  const second = Math.floor(diff / 1000);
  const year = Math.floor(second / (365 * 24 * 3600));
  const day = Math.floor((second % (365 * 24 * 3600)) / (24 * 3600));
  const hour = Math.floor((second % (24 * 3600)) / 3600);
  const minute = Math.floor((second % 3600) / 60);
  const sec = second % 60;

  // 营业状态判断（假设7点 - 22点营业）
  const currentHour = now.getHours();
  if (currentHour >= 7 && currentHour < 22) {
    statusElement.innerHTML = '🍵 F小屋 营业中';
  } else {
    statusElement.innerHTML = '🍵 F小屋 打烊休息啦';
  }

  // 渲染运行时间
  runtimeElement.innerHTML = `本站居然运行了 ${year} 年 ${day} 天 ${hour} 小时 ${minute} 分 ${sec} 秒 ❤️`;

  // 模拟旅行者1号距离数据（这里随机生成近似值，实际可从API获取真实数据）
  const randomDistance = Math.random() * 1000000000 + 23537957418;
  const astronomicalUnits = randomDistance / 149597870.7;
  voyagerDistanceElement.innerHTML = randomDistance;
  astronomicalUnitsElement.innerHTML = astronomicalUnits.toFixed(6);
}, 1000);