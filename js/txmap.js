//get请求
$.ajax({
    type: 'get',
    url: 'https://apis.map.qq.com/ws/location/v1/ip',
    data: {
        key: 'KLBBZ-6KG6J-AXZFX-DGXJW-S4MDO-QSFW2',
        output: 'jsonp',
    },
    dataType: 'jsonp',
    success: function (res) {
        ipLoacation = res;
    }
})
function getDistance(e1, n1, e2, n2) {
    const R = 6371
    const { sin, cos, asin, PI, hypot } = Math
    let getPoint = (e, n) => {
        e *= PI / 180
        n *= PI / 180
        return { x: cos(n) * cos(e), y: cos(n) * sin(e), z: sin(n) }
    }

    let a = getPoint(e1, n1)
    let b = getPoint(e2, n2)
    let c = hypot(a.x - b.x, a.y - b.y, a.z - b.z)
    let r = asin(c / 2) * 2 * R
    return Math.round(r);
}

function showWelcome() {

    let dist = getDistance(113.34499552, 23.15537143, ipLoacation.result.location.lng, ipLoacation.result.location.lat); //这里换成自己的经纬度
    let pos = ipLoacation.result.ad_info.nation;
    let ip;
    let posdesc;
    //根据国家、省份、城市信息自定义欢迎语
    switch (ipLoacation.result.ad_info.nation) {
        case "日本":
            posdesc = "よろしく，一起去看樱花吗";
            break;
        case "美国":
            posdesc = "Let us live in peace!";
            break;
        case "英国":
            posdesc = "想同你一起夜乘伦敦眼";
            break;
        case "俄罗斯":
            posdesc = "干了这瓶伏特加！";
            break;
        case "法国":
            posdesc = "C'est La Vie";
            break;
        case "德国":
            posdesc = "Die Zeit verging im Fluge.";
            break;
        case "澳大利亚":
            posdesc = "一起去大堡礁吧！";
            break;
        case "加拿大":
            posdesc = "拾起一片枫叶赠予你";
            break;
        case "中国":
            pos = ipLoacation.result.ad_info.province + " " + ipLoacation.result.ad_info.city + " " + ipLoacation.result.ad_info.district;
            ip = ipLoacation.result.ip;
            switch (ipLoacation.result.ad_info.province) {
                case "北京市":
                    posdesc = "帝都风华，古韵今辉，北京欢迎您！";
                    break;
                case "天津市":
                    posdesc = "天津卫，哏都情，煎饼果子配相声！";
                    break;
                case "河北省":
                    posdesc = "燕赵大地，长城巍峨，雄安新区正崛起！";
                    break;
                case "山西省":
                    posdesc = "表里山河，晋商故里，平遥古城展芳华！";
                    break;
                case "内蒙古自治区":
                    posdesc = "天似穹庐，草原辽阔，骏马奔腾牧歌扬！";
                    break;
                case "辽宁省":
                    posdesc = "共和国长子，工业摇篮，沈阳故宫觅史踪！";
                    break;
                case "吉林省":
                    posdesc = "长白仙境，天池奇观，东北三宝甲天下！";
                    break;
                case "黑龙江省":
                    posdesc = "冰城夏都，湿地鹤乡，北国风光无限好！";
                    break;
                case "上海市":
                    posdesc = "魔都魅力，外滩风云，浦东奇迹看今朝！";
                    break;
                case "江苏省":
                    switch (ipLoacation.result.ad_info.city) {
                        case "南京市":
                            posdesc = "六朝古都，十朝都会，金陵风华冠江南！";
                            break;
                        case "苏州市":
                            posdesc = "园林甲天下，丝绸美名扬，姑苏诗意醉人心！";
                            break;
                        default:
                            posdesc = "十三太保，各展风采，散装江苏更精彩！";
                            break;
                    }
                    break;
                case "浙江省":
                    posdesc = "诗画江南，活力浙江，西湖美景映钱江！";
                    break;
                case "河南省":
                    switch (ipLoacation.result.ad_info.city) {
                        case "郑州市":
                            posdesc = "天地之中，黄河之滨，中原枢纽新商都！";
                            break;
                        case "南阳市":
                            posdesc = "诸葛躬耕地，医圣故里，南阳明珠耀华夏！";
                            break;
                        case "驻马店市":
                            posdesc = "传奇嵖岈山，西游之源，天中之地绽芳华！";
                            break;
                        case "开封市":
                            posdesc = "汴京富丽天下无，清明上河续传奇！";
                            break;
                        case "洛阳市":
                            posdesc = "千年帝都，牡丹花城，丝路起点耀古今！";
                            break;
                        default:
                            posdesc = "烩面飘香，少林武魂，河南豪情等你来！";
                            break;
                    }
                    break;
                case "安徽省":
                    posdesc = "徽风皖韵，黄山奇松，江淮大地展新貌！";
                    break;
                case "福建省":
                    posdesc = "清新福建，鼓浪琴音，武夷茶香飘四海！";
                    break;
                case "江西省":
                    posdesc = "庐山云雾，滕王阁序，红色摇篮谱新篇！";
                    break;
                case "山东省":
                    posdesc = "好客山东，孔孟之乡，泰山巍峨颂齐鲁！";
                    break;
                case "湖北省":
                    posdesc = "千湖之省，楚风汉韵，黄鹤楼头揽胜景！";
                    break;
                case "湖南省":
                    posdesc = "潇湘热土，伟人故里，张家界上觅仙境！";
                    break;
                case "广东省":
                    posdesc = "活力广东，美食天堂，改革开放前沿地！";
                    break;
                case "广西壮族自治区":
                    posdesc = "山水甲天下，壮乡歌如海，桂林风光醉游人！";
                    break;
                case "海南省":
                    posdesc = "热带天堂，度假胜地，椰风海韵醉心扉！";
                    break;
                case "四川省":
                    posdesc = "天府之国，熊猫故乡，川菜麻辣香天下！";
                    break;
                case "贵州省":
                    posdesc = "多彩贵州，黄果树瀑，茅台美酒醉人间！";
                    break;
                case "云南省":
                    posdesc = "彩云之南，春城花都，香格里拉觅净土！";
                    break;
                case "西藏自治区":
                    posdesc = "雪域高原，布达拉宫，圣洁之地涤心灵！";
                    break;
                case "陕西省":
                    posdesc = "三秦大地，千年帝都，兵马俑前忆汉唐！";
                    break;
                case "甘肃省":
                    posdesc = "丝路明珠，敦煌莫高，大漠孤烟映长河！";
                    break;
                case "青海省":
                    posdesc = "三江之源，青海湖畔，高原风光无限美！";
                    break;
                case "宁夏回族自治区":
                    posdesc = "塞上江南，西夏王陵，黄河金岸展新颜！";
                    break;
                case "新疆维吾尔自治区":
                    posdesc = "广袤新疆，天山南北，瓜果飘香歌舞欢！";
                    break;
                case "台湾省":
                    posdesc = "宝岛台湾，阿里山高，日月潭水情相连！";
                    break;
                case "香港特别行政区":
                    posdesc = "东方之珠，购物天堂，维港夜景耀全球！";
                    break;
                case "澳门特别行政区":
                    posdesc = "莲花宝地，中西合璧，博彩之都展魅力！";
                    break;
                default:
                    posdesc = "这座城市藏着无尽惊喜，快带我去探索！";
                    break;
            }
            break;
        default:
            posdesc = "世界那么大，您的国家一定很精彩！";
            break;
    }

    //根据本地时间切换欢迎语
    let timeChange;
    let date = new Date();
    if (date.getHours() >= 5 && date.getHours() < 11) timeChange = "<span>上午好</span>，一日之计在于晨！";
    else if (date.getHours() >= 11 && date.getHours() < 13) timeChange = "<span>中午好</span>，该摸鱼吃午饭了。";
    else if (date.getHours() >= 13 && date.getHours() < 15) timeChange = "<span>下午好</span>，懒懒地睡个午觉吧！";
    else if (date.getHours() >= 15 && date.getHours() < 16) timeChange = "<span>三点几啦</span>，一起饮茶呀！";
    else if (date.getHours() >= 16 && date.getHours() < 19) timeChange = "<span>夕阳无限好！</span>";
    else if (date.getHours() >= 19 && date.getHours() < 24) timeChange = "<span>晚上好</span>，夜生活嗨起来！";
    else timeChange = "夜深了，早点休息，少熬夜。";

    try {
        //自定义文本和需要放的位置
        document.getElementById("welcome-info").innerHTML =
            `<b><center>🎉 欢迎信息 🎉</center>&emsp;&emsp;欢迎来自 <span style="color:var(--theme-color)">${pos}</span> 的小伙伴，${timeChange}您现在距离站长约 <span style="color:var(--theme-color)">${dist}</span> 公里，当前的IP地址为： <span style="color:var(--theme-color)">${ip}</span>， ${posdesc}</b>`;
    } catch (err) {
        // console.log("Pjax无法获取#welcome-info元素🙄🙄🙄")
    }
}
window.onload = showWelcome;
// 如果使用了pjax在加上下面这行代码
document.addEventListener('pjax:complete', showWelcome);

