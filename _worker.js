
// 部署完成后在网址后面加上这个，获取自建节点和机场聚合节点，/?token=auto或/auto或

let mytoken = '666nfkdropeekrdsfs6';
let guestToken = ''; //可以随便取，或者uuid生成，https://1024tools.com/uuid
let BotToken = '6488279006:AAGU61W55wF2j1FbjJ3XXESzD0kQHHPWi_4'; //可以为空，或者@BotFather中输入/start，/newbot，并关注机器人
let ChatID = '6854781171'; //可以为空，或者@userinfobot中获取，/start
let TG = 0; //小白勿动， 开发者专用，1 为推送所有的访问信息，0 为不推送订阅转换后端的访问信息与异常访问
let FileName = 'AECC';
let SUBUpdateTime = 6; //自定义订阅更新时间，单位小时
let total = 99;//TB
let timestamp = 4102329600000;//2099-12-31

//节点链接 + 订阅链接
let MainData = `
vless://fab7bf9c-ddb9-4563-8a04-fb01ce6c0fbf@156.238.18.10:8880?encryption=none&security=none&sni=kjgx.laoyoutiao.link&type=ws&host=kjgx.laoyoutiao.link&path=%2F#%F0%9F%87%AF%F0%9F%87%B5%E6%97%A5%E6%9C%AC01
vless://35b03732-9707-4270-8dcd-bb95d3a154bb@3bd9.55dca.e048.f4-fef1f.yfjcs.com:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=yfjp.xn--4gq62f52gppi29k.com&fp=ios&type=tcp&headerType=none#%F0%9F%87%AF%F0%9F%87%B5%E6%97%A5%E6%9C%AC02
vless://35b03732-9707-4270-8dcd-bb95d3a154bb@3bd9.55dca.e048.f2-fef1f.yfjcs.com:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=yfjp.xn--4gq62f52gppi29k.com&fp=chrome&type=tcp&headerType=none#%F0%9F%87%AF%F0%9F%87%B5%E6%97%A5%E6%9C%AC03
vless://35b03732-9707-4270-8dcd-bb95d3a154bb@3bd9.55dca.e048.f3-fef1f.yfjcs.com:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=yfjp.xn--4gq62f52gppi29k.com&fp=safari&type=tcp&headerType=none#%F0%9F%87%AF%F0%9F%87%B5%E6%97%A5%E6%9C%AC04
vless://35b03732-9707-4270-8dcd-bb95d3a154bb@3bd9.55dca.e048.f1-fef1f.yfjcs.com:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=yfjp.xn--4gq62f52gppi29k.com&fp=chrome&type=tcp&headerType=none#%F0%9F%87%AF%F0%9F%87%B5%E6%97%A5%E6%9C%AC05
vless://35b03732-9707-4270-8dcd-bb95d3a154bb@104.18.22.235:443?encryption=none&security=tls&sni=yfjcjp1.yfjc.sbs&fp=ios&type=ws&host=yfjcjp1.yfjc.sbs&path=%2Fyfjc%2Fjp1#%F0%9F%87%AF%F0%9F%87%B5%E6%97%A5%E6%9C%AC06
vless://be0b1c5d-e2f4-4828-a527-f4e0f2eaea1a@aws-link15.liangxin1.xyz:35457?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.apple.com.cn&fp=chrome&pbk=3gb-aG6qLCJpEOFrEPZ9qKqLvVPA_ovlu0X1PvjcE0k&sid=05288db3&type=tcp&headerType=none#%F0%9F%87%AF%F0%9F%87%B5%E6%97%A5%E6%9C%AC07
hysteria2://35b03732-9707-4270-8dcd-bb95d3a154bb@138.2.2.120:20000?sni=www.bing.com&insecure=1&mport=20000-55000#%F0%9F%87%AF%F0%9F%87%B5%E6%97%A5%E6%9C%AC08
vless://35b03732-9707-4270-8dcd-bb95d3a154bb@3bd9.55dca.e048.f63-fef1f.yfjcs.com:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=yfhk2.xn--4gq62f52gppi29k.com&fp=firefox&type=tcp&headerType=none#%F0%9F%87%AD%F0%9F%87%B0%E9%A6%99%E6%B8%AF01
vless://35b03732-9707-4270-8dcd-bb95d3a154bb@3bd9.55dca.e048.f64-fef1f.yfjcs.com:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=yfhk2.xn--4gq62f52gppi29k.com&fp=safari&type=tcp&headerType=none#%F0%9F%87%AD%F0%9F%87%B0%E9%A6%99%E6%B8%AF02
vless://35b03732-9707-4270-8dcd-bb95d3a154bb@3bd9.55dca.e048.f62-fef1f.yfjcs.com:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=yfhk1.xn--4gq62f52gppi29k.com&fp=chrome&type=tcp&headerType=none#%F0%9F%87%AD%F0%9F%87%B0%E9%A6%99%E6%B8%AF03
vless://fab7bf9c-ddb9-4563-8a04-fb01ce6c0fbf@91.193.58.223:8880?encryption=none&security=none&sni=Telegram-channel-WangCai2&fp=chrome&allowInsecure=1&type=ws&host=kjgx.laoyoutiao.link&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3%20%40WangCai2%20%2F%3Fed%3D2560#%F0%9F%87%B8%F0%9F%87%AC%E6%96%B0%E5%8A%A0%E5%9D%A101
vless://35b03732-9707-4270-8dcd-bb95d3a154bb@3bd9.55dca.e048.f7-fef1f.yfjcs.com:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=b295-23ap29-6bh.xn--4gq62f52gppi29k.com&fp=safari&type=tcp&headerType=none#%F0%9F%87%B8%F0%9F%87%AC%E6%96%B0%E5%8A%A0%E5%9D%A102
vless://35b03732-9707-4270-8dcd-bb95d3a154bb@3bd9.55dca.e048.f8-fef1f.yfjcs.com:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=yfsg-1.xn--4gq62f52gppi29k.com&fp=firefox&type=tcp&headerType=none#%F0%9F%87%B8%F0%9F%87%AC%E6%96%B0%E5%8A%A0%E5%9D%A103
vless://35b03732-9707-4270-8dcd-bb95d3a154bb@3bd9.55dca.e048.f10-fef1f.yfjcs.com:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=yfsg-1.xn--4gq62f52gppi29k.com&fp=ios&type=tcp&headerType=none#%F0%9F%87%B8%F0%9F%87%AC%E6%96%B0%E5%8A%A0%E5%9D%A104
vless://35b03732-9707-4270-8dcd-bb95d3a154bb@3bd9.55dca.e048.f9-fef1f.yfjcs.com:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=yfsg-1.xn--4gq62f52gppi29k.com&fp=chrome&type=tcp&headerType=none#%F0%9F%87%B8%F0%9F%87%AC%E6%96%B0%E5%8A%A0%E5%9D%A105
hysteria2://35b03732-9707-4270-8dcd-bb95d3a154bb@168.138.184.187:20000?sni=www.bing.com&insecure=1&mport=20000-55000#%F0%9F%87%B8%F0%9F%87%AC%E6%96%B0%E5%8A%A0%E5%9D%A106
trojan://Aimer@thaddeus.ns.cloudflare.com:443?security=tls&sni=epmk.ambercc.filegear-sg.me&fp=chrome&type=ws&path=%2F%3Fed%3D2560%26proxyip%3Dts.hpc.tw#%F0%9F%87%B8%F0%9F%87%AC%E6%96%B0%E5%8A%A0%E5%9D%A107
vless://ee6774c0-9b19-4ff1-8b30-2da4b71977e2@108.165.152.202:2083?encryption=none&security=tls&sni=edmx.aimercc.filegear-sg.me&fp=chrome&type=ws&host=edmx.aimercc.filegear-sg.me&path=%2F%3Fproxyip%3Dts.hpc.tw#%F0%9F%87%B8%F0%9F%87%AC%E6%96%B0%E5%8A%A0%E5%9D%A108
trojan://Aimer@theo.ns.cloudflare.com:443?security=tls&sni=epml.ambercc.filegear-sg.me&fp=chrome&type=ws&path=%2F%3Fed%3D2560%26proxyip%3Dts.hpc.tw#%F0%9F%87%B8%F0%9F%87%AC%E6%96%B0%E5%8A%A0%E5%9D%A109
vless://ee6774c0-9b19-4ff1-8b30-2da4b71977e2@duke.ns.cloudflare.com:443?encryption=none&security=tls&sni=edmz.ambercc.filegear-sg.me&fp=chrome&type=ws&host=edmz.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%F0%9F%87%B8%F0%9F%87%AC%E6%96%B0%E5%8A%A0%E5%9D%A110
trojan://Aimer@154.219.5.44:2053?security=tls&sni=epml.ambercc.filegear-sg.me&fp=chrome&type=ws&path=%2F%3Fed%3D2560%26proxyip%3Dts.hpc.tw#%F0%9F%87%B8%F0%9F%87%AC%E6%96%B0%E5%8A%A0%E5%9D%A111
trojan://Aimer@arvind.ns.cloudflare.com:443?security=tls&sni=epml.ambercc.filegear-sg.me&fp=chrome&type=ws&path=%2F%3Fed%3D2560%26proxyip%3Dts.hpc.tw#%F0%9F%87%B8%F0%9F%87%AC%E6%96%B0%E5%8A%A0%E5%9D%A112
vless://d8b137a4-d641-566e-8f85-05f82b787215@38.76.247.230:443?encryption=none&security=tls&sni=zula.ir&fp=chrome&allowInsecure=1&type=ws&host=38.76.247.230&path=%2Fvless#%F0%9F%87%B8%F0%9F%87%AC%E6%96%B0%E5%8A%A0%E5%9D%A113
vless://fab7bf9c-ddb9-4563-8a04-fb01ce6c0fbf@91.193.58.219:8880?encryption=none&security=none&sni=Telegram-channel-WangCai2&type=ws&host=kjgx.laoyoutiao.link&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3%20%40WangCai2%20%2F%3Fed%3D2560fp%3Dchrome#%F0%9F%87%B8%F0%9F%87%AC%E6%96%B0%E5%8A%A0%E5%9D%A114
trojan://ttfang@138.2.95.61:1111?security=tls&sni=ttfang.fange.me&allowInsecure=1&type=ws&host=ttfang.fange.me&path=%2F#%F0%9F%87%B8%F0%9F%87%AC%E6%96%B0%E5%8A%A0%E5%9D%A115
vless://583ceab3-4022-4553-9158-9bedc625ad4e@92.243.74.177:8880?encryption=none&security=none&sni=Telegram-channel-WangCai2&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3#%F0%9F%87%B8%F0%9F%87%AC%E6%96%B0%E5%8A%A0%E5%9D%A116
vless://fab7bf9c-ddb9-4563-8a04-fb01ce6c0fbf@91.193.58.64:8880?encryption=none&security=none&sni=Telegram-channel-WangCai2&type=ws&host=kjgx.laoyoutiao.link&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3%20%40WangCai2%20%2F%3Fed%3D2560fp%3Dchrome#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD01
vless://fab7bf9c-ddb9-4563-8a04-fb01ce6c0fbf@91.193.58.63:8880?encryption=none&security=none&sni=Telegram-channel-WangCai2&fp=chrome&allowInsecure=1&type=ws&host=kjgx.laoyoutiao.link&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3%20%40WangCai2%20%2F%3Fed%3D2560#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD02
vless://fab7bf9c-ddb9-4563-8a04-fb01ce6c0fbf@91.193.58.65:8880?encryption=none&security=none&sni=Telegram-channel-WangCai2&type=ws&host=kjgx.laoyoutiao.link&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3%20%40WangCai2%20%2F%3Fed%3D2560fp%3Dchrome#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD03
vless://40c708ca-42e4-4224-a12d-1dbd7ef1e0b7@91.209.253.77:8880?encryption=none&security=none&sni=Telegram-channel-WangCai2&type=ws&host=free.cfdns.online&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3%20%40WangCai2%20%2F%3Fed%3D2560#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD04
vless://583ceab3-4022-4553-9158-9bedc625ad4e@5.182.84.177:8880?encryption=none&security=none&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3%20%40WangCai2%20%2F%3Fed%3D2560#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD05
vless://40c708ca-42e4-4224-a12d-1dbd7ef1e0b7@5.182.84.77:8880?encryption=none&security=none&sni=Telegram-channel-WangCai2&type=ws&host=free.cfdns.online&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3%20%40WangCai2%20%2F%3Fed%3D2560#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD06
vless://583ceab3-4022-4553-9158-9bedc625ad4e@45.131.209.177:8880?encryption=none&security=none&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%40WangCai2%2F%3Fed%3D2560#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD07
vless://583ceab3-4022-4553-9158-9bedc625ad4e@164.38.155.177:8880?encryption=none&security=none&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3%20%40WangCai2%20%2F%3Fed%3D2560#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD08
vless://583ceab3-4022-4553-9158-9bedc625ad4e@185.148.107.177:8880?encryption=none&security=none&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3%40WangCai2%2F%3Fed%3D2560#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD09
vless://583ceab3-4022-4553-9158-9bedc625ad4e@185.148.105.20:8880?encryption=none&security=none&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%40%E8%8A%82%E7%82%B9%E7%8B%82%E9%AD%942%2F%3Fed%3D2560#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD10
vless://583ceab3-4022-4553-9158-9bedc625ad4e@185.170.166.177:8880?encryption=none&security=none&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3%40WangCai2%2F%3Fed%3D2560#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD11
vless://583ceab3-4022-4553-9158-9bedc625ad4e@167.68.11.177:8880?encryption=none&security=none&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3%40WangCai2%2F%3Fed%3D2560#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD12
vless://583ceab3-4022-4553-9158-9bedc625ad4e@170.114.45.177:8880?encryption=none&security=none&sni=Telegram-channel-WangCai2&fp=chrome&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3%20%40WangCai2%20%2F%3Fed%3D2560#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD13
vless://583ceab3-4022-4553-9158-9bedc625ad4e@159.246.55.177:8880?encryption=none&security=none&sni=Telegram-channel-WangCai2&fp=chrome&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3%20%40WangCai2%20%2F%3Fed%3D2560#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD14
vless://583ceab3-4022-4553-9158-9bedc625ad4e@66.235.200.177:8880?encryption=none&security=none&sni=Telegram-channel-WangCai2&type=ws&host=ip.langmanshanxi.top&path=%2F#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD15
vless://583ceab3-4022-4553-9158-9bedc625ad4e@45.142.120.177:8880?encryption=none&security=none&sni=Telegram-channel-WangCai2&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3%40WangCai2%2F%3Fed%3D2560#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD16
vless://40c708ca-42e4-4224-a12d-1dbd7ef1e0b7@86.38.214.77:8880?encryption=none&security=none&sni=Telegram-channel-WangCai2&type=ws&host=free.cfdns.online&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3%20%40WangCai2%20%2F%3Fed%3D2560#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD17
vless://35b03732-9707-4270-8dcd-bb95d3a154bb@192.9.142.185:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=b295-23ae29-6bh.xn--4gq62f52gppi29k.com&fp=chrome&type=tcp&headerType=none#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD18
vless://583ceab3-4022-4553-9158-9bedc625ad4e@195.13.45.177:8880?encryption=none&security=none&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3%20%40WangCai2%20%2F%3Fed%3D2560#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD19
vless://583ceab3-4022-4553-9158-9bedc625ad4e@185.18.250.177:8880?encryption=none&security=none&sni=Telegram-channel-WangCai2&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3%40WangCai2%2F%3Fed%3D2560#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD20
vless://35b03732-9707-4270-8dcd-bb95d3a154bb@64.181.255.250:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=b295-23ae29-6bh.xn--4gq62f52gppi29k.com&fp=safari&type=tcp&headerType=none#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD21
vless://583ceab3-4022-4553-9158-9bedc625ad4e@77.105.163.177:8880?encryption=none&security=none&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3%20%40WangCai2%20%2F%3Fed%3D2560#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD22
vless://583ceab3-4022-4553-9158-9bedc625ad4e@31.43.179.177:8880?encryption=none&security=none&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%40WangCai2%2F%3Fed%3D2560#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD23
vless://583ceab3-4022-4553-9158-9bedc625ad4e@195.13.44.177:8880?encryption=none&security=none&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3%40WangCai2%2F%3Fed%3D2560#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD24
vless://583ceab3-4022-4553-9158-9bedc625ad4e@45.159.218.177:8880?encryption=none&security=none&sni=Telegram-channel-WangCai2&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%40WangCai2%2F%3Fed%3D2560#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD25
vless://583ceab3-4022-4553-9158-9bedc625ad4e@46.202.30.177:8880?encryption=none&security=none&sni=Telegram-channel-WangCai2&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%40WangCai2%2F%3Fed%3D2560#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD26
vless://583ceab3-4022-4553-9158-9bedc625ad4e@92.53.188.177:8880?encryption=none&security=none&sni=Telegram-channel-WangCai2&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3%40WangCai2%2F%3Fed%3D2560#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD27
vless://583ceab3-4022-4553-9158-9bedc625ad4e@185.162.228.177:8880?encryption=none&security=none&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3%40WangCai2%2F%3Fed%3D2560#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD28
vless://583ceab3-4022-4553-9158-9bedc625ad4e@103.160.204.177:8880?encryption=none&security=none&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3%20%40WangCai2%20%2F%3Fed%3D2560#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD29
vless://583ceab3-4022-4553-9158-9bedc625ad4e@102.177.176.177:8880?encryption=none&security=none&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3%20%40WangCai2%20%2F%3Fed%3D2560#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD30
vless://583ceab3-4022-4553-9158-9bedc625ad4e@92.53.191.177:8880?encryption=none&security=none&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3%20%40WangCai2%20%2F%3Fed%3D2560#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD31
vless://583ceab3-4022-4553-9158-9bedc625ad4e@188.244.122.177:8880?encryption=none&security=none&sni=Telegram-channel-WangCai2&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD32
vless://583ceab3-4022-4553-9158-9bedc625ad4e@103.245.229.177:8880?encryption=none&security=none&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3%20%40WangCai2%20%2F%3Fed%3D2560#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD33
vless://40c708ca-42e4-4224-a12d-1dbd7ef1e0b7@45.192.224.77:8880?encryption=none&security=none&sni=Telegram-channel-WangCai2&type=ws&host=free.cfdns.online&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3%20%40WangCai2%20%2F%3Fed%3D2560#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD34
vless://583ceab3-4022-4553-9158-9bedc625ad4e@86.38.214.177:8880?encryption=none&security=none&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%40WangCai2%2F%3Fed%3D2560#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD35
vless://583ceab3-4022-4553-9158-9bedc625ad4e@139.64.235.177:8880?encryption=none&security=none&sni=Telegram-channel-WangCai2&fp=chrome&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3%20%40WangCai2%20%2F%3Fed%3D2560#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD36
vless://583ceab3-4022-4553-9158-9bedc625ad4e@25.129.198.177:8880?encryption=none&security=none&sni=ip.langmanshanxi.top&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3%40WangCai2%2F%3Fed%3D2560#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD37
vless://583ceab3-4022-4553-9158-9bedc625ad4e@193.9.49.177:8880?encryption=none&security=none&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3%40WangCai2%2F%3Fed%3D2560#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD38
vless://583ceab3-4022-4553-9158-9bedc625ad4e@199.181.197.177:8880?encryption=none&security=none&sni=Telegram-channel-WangCai2&fp=chrome&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3%20%40WangCai2%20%2F%3Fed%3D2560#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD39
vless://35b03732-9707-4270-8dcd-bb95d3a154bb@104.18.15.15:443?encryption=none&security=tls&fp=safari&type=ws&host=yfjcus1.yfjc.sbs&path=%2Fyfjc%2Fus1#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD40
vless://583ceab3-4022-4553-9158-9bedc625ad4e@135.84.74.177:8880?encryption=none&security=none&type=ws&host=ip.langmanshanxi.top&path=%2F#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD41
vless://e4824193-4f54-453b-d037-88368e85ef0e@45.82.251.122:8880?encryption=none&security=none&type=grpc#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD42
vless://e4824193-4f54-453b-d037-88368e85ef0e@45.82.251.121:8880?encryption=none&security=none&type=grpc#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD43
vless://029254f9-05e8-47b2-a9a9-6e62e84aeb92@172.234.150.158:2321?encryption=none&security=none&type=tcp&headerType=none#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD44
vless://583ceab3-4022-4553-9158-9bedc625ad4e@66.81.247.177:8880?encryption=none&security=none&sni=Telegram-channel-WangCai2&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3%40WangCai2%2F%3Fed%3D2560#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD45
vless://f19ed531-81cb-433e-8746-1a69e009f9df@66.112.216.70:443?encryption=none&security=tls&sni=usa.rtot.me&fp=chrome&type=ws&host=usa.rtot.me&path=%2Fbing#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD46
vless://c891d9fe-c4eb-4526-94e0-d9bf841c572a@172.67.204.120:443?encryption=none&security=tls&sni=dddddFFfFffF.890603.xYZ&alpn=http%2F1.1&fp=chrome&type=ws&host=dddddfffffff.890603.xyz&path=%2FYVOu6Dbaf1WT6O9LnD#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD47
trojan://d6b8011a-c725-435a-9fec-bf6d3530392c@156.238.18.112:2053?security=tls&sni=vle.amclubdns.dpdns.org&allowInsecure=1&type=ws&host=vle.amclubdns.dpdns.org&path=%2F%3Fed%3D2560%26PROT_TYPE%3Dtrojan#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD48
vless://fab7bf9c-ddb9-4563-8a04-fb01ce6c0fbf@91.193.58.226:8880?encryption=none&security=none&sni=Telegram-channel-WangCai2&fp=chrome&allowInsecure=1&type=ws&host=kjgx.laoyoutiao.link&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3%20%40WangCai2%20%2F%3Fed%3D2560#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD49
vless://833a6c9e-7da7-4d38-9d22-ab435f301dac@dri261ekh.mongral.ir:80?encryption=none&security=none&type=xhttp&host=Fortinitebabajy.com&path=%2FOfficial.Channel.%40ParsCDN&mode=auto#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD50
vless://aac76e15-76e8-df0c-41a3-74d2d5450043@lightning2025.top:606?encryption=none&security=none&type=ws&host=telewebion.com%2Cuser.telewebion.com%2Cplus.telewebion.com%2Capi.telewebion.com&path=%2Fws%3Fed%3D2048#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD51
vless://583ceab3-4022-4553-9158-9bedc625ad4e@45.159.217.177:8880?encryption=none&security=none&sni=Telegram-channel-WangCai2&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3%40WangCai2%2F%3Fed%3D2560#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD52
vless://583ceab3-4022-4553-9158-9bedc625ad4e@192.65.217.177:8880?encryption=none&security=none&sni=Telegram-channel-WangCai2&fp=chrome&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3%20%40WangCai2%20%2F%3Fed%3D2560#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD53
vless://583ceab3-4022-4553-9158-9bedc625ad4e@185.16.110.177:8880?encryption=none&security=none&sni=Telegram-channel-WangCai2&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3%40WangCai2%2F%3Fed%3D2560#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD54
vless://e4824193-4f54-453b-d037-88368e85ef0e@45.82.251.93:8880?encryption=none&security=none&type=grpc#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD55
vless://583ceab3-4022-4553-9158-9bedc625ad4e@80.93.202.177:8880?encryption=none&security=none&sni=Telegram-channel-WangCai2&type=ws&host=ip.langmanshanxi.top&path=%2F#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD56
vless://583ceab3-4022-4553-9158-9bedc625ad4e@66.45.118.177:8880?encryption=none&security=none&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%40WangCai2%2F%3Fed%3D2560#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD57
vless://583ceab3-4022-4553-9158-9bedc625ad4e@155.46.167.177:8880?encryption=none&security=none&sni=Telegram-channel-WangCai2&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD58
vless://583ceab3-4022-4553-9158-9bedc625ad4e@45.159.219.177:8880?encryption=none&security=none&sni=Telegram-channel-WangCai2&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD59
vless://583ceab3-4022-4553-9158-9bedc625ad4e@216.205.52.177:8880?encryption=none&security=none&sni=Telegram-channel-WangCai2&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD60
vless://583ceab3-4022-4553-9158-9bedc625ad4e@155.46.213.177:8880?encryption=none&security=none&sni=Telegram-channel-WangCai2&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD61
vless://9f3c4ab7-ea26-4d96-91a9-c85ff64ad9a0@160.79.105.13:8880?encryption=none&security=none&sni=Telegram-channel-WangCai2&type=ws&host=c.82313369.xyz&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD62
vless://583ceab3-4022-4553-9158-9bedc625ad4e@162.120.94.177:8880?encryption=none&security=none&sni=Telegram-channel-WangCai2&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD63
hysteria2://35b03732-9707-4270-8dcd-bb95d3a154bb@193.122.106.44:20000?sni=www.bing.com&insecure=1&mport=20000-55000#%F0%9F%87%B0%F0%9F%87%B7%E9%9F%A9%E5%9B%BD01
hysteria2://35b03732-9707-4270-8dcd-bb95d3a154bb@132.226.235.134:20000?sni=www.bing.com&insecure=1&mport=20000-55000#%F0%9F%87%B0%F0%9F%87%B7%E9%9F%A9%E5%9B%BD02
hysteria2://35b03732-9707-4270-8dcd-bb95d3a154bb@152.70.234.101:20000?sni=www.bing.com&insecure=1&mport=20000-55000#%F0%9F%87%B0%F0%9F%87%B7%E9%9F%A9%E5%9B%BD03
hysteria2://35b03732-9707-4270-8dcd-bb95d3a154bb@158.179.164.122:20000?sni=www.bing.com&insecure=1&mport=20000-55000#%F0%9F%87%B0%F0%9F%87%B7%E9%9F%A9%E5%9B%BD04
vless://662e38ba-8427-4955-94aa-76f5347a0ce8@104.21.66.157:443?encryption=none&security=tls&sni=xxSSDfRt.666470.xyz&alpn=http%2F1.1&fp=chrome&type=ws&host=xxssdfrt.666470.xyz&path=%2F6DuxYMYmrGrnGKRtF5UvWyyVQu#%F0%9F%87%B0%F0%9F%87%B7%E9%9F%A9%E5%9B%BD05
vless://662e38ba-8427-4955-94aa-76f5347a0ce8@104.21.10.97:443?encryption=none&security=tls&sni=rrRRrrrRrnNNNNnnmM.222767.xyz&type=ws&host=rrrrrrrrrnnnnnnnmm.222767.xyz&path=%2F6DuxYMYmrGrnGKRtF5UvWyyVQu#%F0%9F%87%B0%F0%9F%87%B7%E9%9F%A9%E5%9B%BD06
vless://35b03732-9707-4270-8dcd-bb95d3a154bb@140.238.101.15:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=767w1-38dc0-9icf2.xn--4gq62f52gppi29k.com&fp=safari&type=tcp&headerType=none#%F0%9F%87%AC%F0%9F%87%A7%E8%8B%B1%E5%9B%BD01
vless://35b03732-9707-4270-8dcd-bb95d3a154bb@193.123.187.39:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=767w1-38dc0-9kcf2.xn--4gq62f52gppi29k.com&fp=ios&type=tcp&headerType=none#%F0%9F%87%AC%F0%9F%87%A7%E8%8B%B1%E5%9B%BD02
vless://5e236508-63e4-45b3-a7d7-f9cd81af89df@57.130.19.124:2055?encryption=none&security=reality&sni=kifpool.me&fp=chrome&pbk=HdhATsM5cYDWfhAt0LyrttGBoscuoT4M3fOSvYN8sEQ&sid=54994c92a0&type=xhttp&path=%2F&mode=auto#%F0%9F%87%AC%F0%9F%87%A7%E8%8B%B1%E5%9B%BD03
vless://583ceab3-4022-4553-9158-9bedc625ad4e@25.26.27.177:8880?encryption=none&security=none&sni=Telegram-channel-WangCai2&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3#%F0%9F%87%AC%F0%9F%87%A7%E8%8B%B1%E5%9B%BD04
vless://583ceab3-4022-4553-9158-9bedc625ad4e@94.247.142.177:8880?encryption=none&security=none&sni=Telegram-channel-WangCai2&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3#%F0%9F%87%AC%F0%9F%87%A7%E8%8B%B1%E5%9B%BD05
vless://86c50e3a-5b87-49dd-bd20-03c7f2735e40@190.93.246.156:2083?encryption=none&security=tls&sni=JAEGbSEM36.cfd&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=JAEGBSEM36.cfd&path=%2F#%F0%9F%87%AC%F0%9F%87%A7%E8%8B%B1%E5%9B%BD06
vless://19bd6c93-953d-4b01-953c-a3cf2238eaf8@188.227.84.154:8443?encryption=none&security=none&type=tcp&headerType=http&host=zula.ir#%F0%9F%87%A9%F0%9F%87%AA%E5%BE%B7%E5%9B%BD01
vless://dc58f214-4227-4f58-8090-cbcedf1adeba@holkanas.atroart.ir:52928?encryption=none&security=none&type=tcp&headerType=http&host=canva.com#%F0%9F%87%A9%F0%9F%87%AA%E5%BE%B7%E5%9B%BD02
vless://35b03732-9707-4270-8dcd-bb95d3a154bb@158.101.195.118:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=b295-23nl29-6bh.xn--4gq62f52gppi29k.com&fp=chrome&type=tcp&headerType=none#%F0%9F%87%A9%F0%9F%87%AA%E5%BE%B7%E5%9B%BD03
vless://3e656cfa-8dac-4a89-ac88-ef7eb6b79a4f@fr.fake.moaidownloader.info:2002?encryption=none&security=none&fp=chrome&type=tcp&headerType=http&host=netv2reyng.fr.netv2reyng.site.netv2reyng.com#%F0%9F%87%A9%F0%9F%87%AA%E5%BE%B7%E5%9B%BD04
vless://35b03732-9707-4270-8dcd-bb95d3a154bb@141.253.124.138:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=b2-9fr2329-6bh.xn--4gq62f52gppi29k.com&fp=chrome&type=tcp&headerType=none#%F0%9F%87%A9%F0%9F%87%AA%E5%BE%B7%E5%9B%BD05
vless://215d71a9-0047-4600-9240-7c3b86b62313@46.31.76.3:80?encryption=none&security=reality&sni=journalofbigdata.springeropen.com&fp=chrome&pbk=oTX6mQJYxkmmdF7Rq_stAKX_hYoOMXGaWmoblFl2zgo&sid=5942e2&spx=%2F&type=xhttp&host=bleep.global.ssl.fastly.net&path=%2Fpwpw&mode=auto#%F0%9F%87%A9%F0%9F%87%AA%E5%BE%B7%E5%9B%BD06
vless://e8ddff9a-4320-492d-b88c-da0202014aaf@de.foxinonet.ir:443?encryption=none&security=tls&sni=de.foxinonet.ir&type=ws&host=de.foxinonet.ir&path=%2Flw#%F0%9F%87%A9%F0%9F%87%AA%E5%BE%B7%E5%9B%BD07
vless://35b03732-9707-4270-8dcd-bb95d3a154bb@144.24.206.147:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=b2-9fr5232-96bh.xn--4gq62f52gppi29k.com&fp=chrome&type=tcp&headerType=none#%F0%9F%87%A9%F0%9F%87%AA%E5%BE%B7%E5%9B%BD08
vless://54b3cbba-e6ac-485a-9481-976a0873eab9@172.67.190.211:2082?encryption=none&security=none&type=ws&host=bLaCk-trutH-63Bc.DoviF72324.WoRKeRs.dev&path=%2Fnet.net%3Fed%3D2560#%F0%9F%87%A9%F0%9F%87%AA%E5%BE%B7%E5%9B%BD09
vless://a61fc8cb-0012-4c4b-aa5e-d1c623ae8092@172.66.132.196:8880?encryption=none&security=none&type=ws&host=worker-late-feather-d436.wedome3486.workers.DEV&path=%2F#%F0%9F%87%A9%F0%9F%87%AA%E5%BE%B7%E5%9B%BD10
vless://fab7bf9c-ddb9-4563-8a04-fb01ce6c0fbf@185.16.110.168:8880?encryption=none&security=none&sni=kjgx.laoyoutiao.link&type=ws&host=kjgx.laoyoutiao.link&path=%2F#%F0%9F%87%AB%F0%9F%87%B7%E6%B3%95%E5%9B%BD01
vless://df0680ca-e43c-498d-ed86-8e196eedd012@185.231.205.253:8880?encryption=none&security=none&type=grpc#%F0%9F%87%AB%F0%9F%87%B7%E6%B3%95%E5%9B%BD02
vless://df0680ca-e43c-498d-ed86-8e196eedd012@185.231.205.246:8880?encryption=none&security=none&type=grpc#%F0%9F%87%AB%F0%9F%87%B7%E6%B3%95%E5%9B%BD03
vless://df0680ca-e43c-498d-ed86-8e196eedd012@185.231.205.234:8880?encryption=none&security=none&type=grpc#%F0%9F%87%AB%F0%9F%87%B7%E6%B3%95%E5%9B%BD04
vless://df0680ca-e43c-498d-ed86-8e196eedd012@185.231.205.248:8880?encryption=none&security=none&type=grpc#%F0%9F%87%AB%F0%9F%87%B7%E6%B3%95%E5%9B%BD05
vless://df0680ca-e43c-498d-ed86-8e196eedd012@185.231.205.231:8880?encryption=none&security=none&type=grpc#%F0%9F%87%AB%F0%9F%87%B7%E6%B3%95%E5%9B%BD06
vless://df0680ca-e43c-498d-ed86-8e196eedd012@185.231.205.239:8880?encryption=none&security=none&type=grpc#%F0%9F%87%AB%F0%9F%87%B7%E6%B3%95%E5%9B%BD07
vless://0706a762-3fd5-4205-b5b9-42f746a3119f@104.26.14.85:8080?encryption=none&security=none&type=ws&host=WQ.R5Kt41PbPO.zuLAIR.orG.&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%E5%8A%A0%E6%8B%BF%E5%A4%A701
vless://45348e58-bca3-4a1f-989c-223f0d3cabea@angelina.ns.cloudflare.com:443?encryption=none&security=tls&sni=dt73qibp.ghasregallery.ir&fp=chrome&type=ws&host=dt73qibp.ghasregallery.ir&path=%2Fwss#%F0%9F%87%A8%F0%9F%87%A6%E5%8A%A0%E6%8B%BF%E5%A4%A702
vless://583ceab3-4022-4553-9158-9bedc625ad4e@45.131.5.177:8880?encryption=none&security=none&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3%40WangCai2%2F%3Fed%3D2560#%F0%9F%87%A8%F0%9F%87%A6%E5%8A%A0%E6%8B%BF%E5%A4%A703
vless://583ceab3-4022-4553-9158-9bedc625ad4e@74.49.214.177:8880?encryption=none&security=none&sni=Telegram-channel-WangCai2&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3#%F0%9F%87%A8%F0%9F%87%A6%E5%8A%A0%E6%8B%BF%E5%A4%A704
vless://583ceab3-4022-4553-9158-9bedc625ad4e@74.49.215.177:8880?encryption=none&security=none&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3%20%40WangCai2%20%2F%3Fed%3D2560#%F0%9F%87%A8%F0%9F%87%A6%E5%8A%A0%E6%8B%BF%E5%A4%A705
vless://583ceab3-4022-4553-9158-9bedc625ad4e@46.254.92.177:8880?encryption=none&security=none&sni=Telegram-channel-WangCai2&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3#%F0%9F%87%A8%F0%9F%87%A6%E5%8A%A0%E6%8B%BF%E5%A4%A706
vless://583ceab3-4022-4553-9158-9bedc625ad4e@45.131.208.177:8880?encryption=none&security=none&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%40WangCai2%2F%3Fed%3D2560#%F0%9F%87%A8%F0%9F%87%A6%E5%8A%A0%E6%8B%BF%E5%A4%A707
vless://583ceab3-4022-4553-9158-9bedc625ad4e@89.116.250.177:8880?encryption=none&security=none&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3%20%40WangCai2%20%2F%3Fed%3D2560#%F0%9F%87%A8%F0%9F%87%A6%E5%8A%A0%E6%8B%BF%E5%A4%A708
vless://583ceab3-4022-4553-9158-9bedc625ad4e@89.117.112.177:8880?encryption=none&security=none&sni=Telegram-channel-WangCai2&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3#%F0%9F%87%A8%F0%9F%87%A6%E5%8A%A0%E6%8B%BF%E5%A4%A709
vless://583ceab3-4022-4553-9158-9bedc625ad4e@45.85.118.177:8880?encryption=none&security=none&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%40WangCai2%2F%3Fed%3D2560#%F0%9F%87%A8%F0%9F%87%A6%E5%8A%A0%E6%8B%BF%E5%A4%A710
vless://583ceab3-4022-4553-9158-9bedc625ad4e@77.232.140.177:8880?encryption=none&security=none&sni=Telegram-channel-WangCai2&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3#%F0%9F%87%A8%F0%9F%87%A6%E5%8A%A0%E6%8B%BF%E5%A4%A711
vless://583ceab3-4022-4553-9158-9bedc625ad4e@91.124.127.177:8880?encryption=none&security=none&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3%20%40WangCai2%20%2F%3Fed%3D2560#%F0%9F%87%A8%F0%9F%87%A6%E5%8A%A0%E6%8B%BF%E5%A4%A712
vless://583ceab3-4022-4553-9158-9bedc625ad4e@213.219.247.177:8880?encryption=none&security=none&sni=Telegram-channel-WangCai2&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3#%F0%9F%87%A8%F0%9F%87%A6%E5%8A%A0%E6%8B%BF%E5%A4%A713
vless://583ceab3-4022-4553-9158-9bedc625ad4e@92.53.190.177:8880?encryption=none&security=none&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3%20%40WangCai2%20%2F%3Fed%3D2560#%F0%9F%87%A8%F0%9F%87%A6%E5%8A%A0%E6%8B%BF%E5%A4%A714
vless://583ceab3-4022-4553-9158-9bedc625ad4e@185.148.106.177:8880?encryption=none&security=none&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3%40WangCai2%2F%3Fed%3D2560#%F0%9F%87%A8%F0%9F%87%A6%E5%8A%A0%E6%8B%BF%E5%A4%A715
hysteria2://35b03732-9707-4270-8dcd-bb95d3a154bb@192.9.176.249:20000?sni=www.bing.com&insecure=1&mport=20000-55000#%F0%9F%87%AE%F0%9F%87%B3%E5%8D%B0%E5%BA%A601
vless://2a265422-84e6-5585-b36c-1e2d9437d0db@185.255.178.188:443?encryption=none&security=tls&sni=zula.ir&fp=chrome&allowInsecure=1&type=ws&host=185.255.178.188&path=%2Fvless#%F0%9F%87%AE%F0%9F%87%B3%E5%8D%B0%E5%BA%A602
hysteria2://35b03732-9707-4270-8dcd-bb95d3a154bb@129.148.39.249:20000?sni=www.bing.com&insecure=1&mport=20000-55000#%F0%9F%87%AE%F0%9F%87%B3%E5%8D%B0%E5%BA%A603
vless://8e4ec15c-af76-5076-adb3-03122327648b@5.180.45.226:443?encryption=none&security=tls&sni=zula.ir&fp=chrome&allowInsecure=1&type=ws&host=5.180.45.226&path=%2Fvless#%F0%9F%87%AE%F0%9F%87%B3%E5%8D%B0%E5%BA%A604
vless://583ceab3-4022-4553-9158-9bedc625ad4e@5.10.214.20:8880?encryption=none&security=none&type=ws&host=ip.langmanshanxi.top&path=%2F#%F0%9F%87%B9%F0%9F%87%AD%E6%B3%B0%E5%9B%BD01
vless://583ceab3-4022-4553-9158-9bedc625ad4e@5.10.215.177:8880?encryption=none&security=none&type=ws&host=ip.langmanshanxi.top&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3#%F0%9F%87%B9%F0%9F%87%AD%E6%B3%B0%E5%9B%BD02
trojan://a4291a2a-d62c-4eb9-ac7a-ac7355d1eda2@172.67.172.71:443?security=tls&sni=666666Y.999165.XYZ&alpn=http%2F1.1&fp=chrome&type=ws&host=666666y.999165.xyz&path=%2FmFvK3LJyIAe8ydvnmRKWDa8#%F0%9F%87%B9%F0%9F%87%AD%E6%B3%B0%E5%9B%BD03
trojan://trojan@109.234.211.66:8443?security=tls&sni=store.timimi.dpdns.org&type=ws&host=store.timimi.dpdns.org&path=%2F#%F0%9F%87%B9%F0%9F%87%AD%E6%B3%B0%E5%9B%BD04
trojan://c226ac5d-65e9-4379-95c3-fb542bc242d8@104.21.91.180:443?security=tls&sni=sssxXZAw.666461.xYz&alpn=http%2F1.1&fp=chrome&type=ws&host=sssxxzaw.666461.xyz&path=%2FPLibEtUpg4ykd4O#%F0%9F%87%B9%F0%9F%87%AD%E6%B3%B0%E5%9B%BD05
vless://cf8c791e-9d0b-4e90-aaf6-41ac62468416@104.21.26.17:443?encryption=none&security=tls&sni=IiIIIiiIIIiiO.459.pp.uA&alpn=http%2F1.1&fp=chrome&type=ws&host=iiiiiiiiiiiio.459.pp.ua&path=%2FdtBdvnoJO8180gomOew3d#%F0%9F%87%B9%F0%9F%87%AD%E6%B3%B0%E5%9B%BD06

`;

let urls = [];
let subConverter = "SUBAPI.cmliussss.net"; //在线订阅转换后端，目前使用CM的订阅转换功能。支持自建psub 可自行搭建https://github.com/bulianglin/psub
let subConfig = "https://github.com/ACL4SSR/ACL4SSR/blob/master/Clash/config/ACL4SSR_NoApple.ini"; //订阅配置文件
let subProtocol = 'https';

export default {
	async fetch(request, env) {
		const userAgentHeader = request.headers.get('User-Agent');
		const userAgent = userAgentHeader ? userAgentHeader.toLowerCase() : "null";
		const url = new URL(request.url);
		const token = url.searchParams.get('token');
		mytoken = env.TOKEN || mytoken;
		BotToken = env.TGTOKEN || BotToken;
		ChatID = env.TGID || ChatID;
		TG = env.TG || TG;
		subConverter = env.SUBAPI || subConverter;
		if (subConverter.includes("http://")) {
			subConverter = subConverter.split("//")[1];
			subProtocol = 'http';
		} else {
			subConverter = subConverter.split("//")[1] || subConverter;
		}
		subConfig = env.SUBCONFIG || subConfig;
		FileName = env.SUBNAME || FileName;

		const currentDate = new Date();
		currentDate.setHours(0, 0, 0, 0);
		const timeTemp = Math.ceil(currentDate.getTime() / 1000);
		const fakeToken = await MD5MD5(`${mytoken}${timeTemp}`);
		guestToken = env.GUESTTOKEN || env.GUEST || guestToken;
		if (!guestToken) guestToken = await MD5MD5(mytoken);
		const 访客订阅 = guestToken;
		//console.log(`${fakeUserID}\n${fakeHostName}`); // 打印fakeID

		let UD = Math.floor(((timestamp - Date.now()) / timestamp * total * 1099511627776) / 2);
		total = total * 1099511627776;
		let expire = Math.floor(timestamp / 1000);
		SUBUpdateTime = env.SUBUPTIME || SUBUpdateTime;

		if (!([mytoken, fakeToken, 访客订阅].includes(token) || url.pathname == ("/" + mytoken) || url.pathname.includes("/" + mytoken + "?"))) {
			if (TG == 1 && url.pathname !== "/" && url.pathname !== "/favicon.ico") await sendMessage(`#异常访问 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgent}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			if (env.URL302) return Response.redirect(env.URL302, 302);
			else if (env.URL) return await proxyURL(env.URL, url);
			else return new Response(await nginx(), {
				status: 200,
				headers: {
					'Content-Type': 'text/html; charset=UTF-8',
				},
			});
		} else {
			if (env.KV) {
				await 迁移地址列表(env, 'LINK.txt');
				if (userAgent.includes('mozilla') && !url.search) {
					await sendMessage(`#编辑订阅 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
					return await KV(request, env, 'LINK.txt', 访客订阅);
				} else {
					MainData = await env.KV.get('LINK.txt') || MainData;
				}
			} else {
				MainData = env.LINK || MainData;
				if (env.LINKSUB) urls = await ADD(env.LINKSUB);
			}
			let 重新汇总所有链接 = await ADD(MainData + '\n' + urls.join('\n'));
			let 自建节点 = "";
			let 订阅链接 = "";
			for (let x of 重新汇总所有链接) {
				if (x.toLowerCase().startsWith('http')) {
					订阅链接 += x + '\n';
				} else {
					自建节点 += x + '\n';
				}
			}
			MainData = 自建节点;
			urls = await ADD(订阅链接);
			await sendMessage(`#获取订阅 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);

			let 订阅格式 = 'base64';
			if (userAgent.includes('null') || userAgent.includes('subconverter') || userAgent.includes('nekobox') || userAgent.includes(('CF-Workers-SUB').toLowerCase())) {
				订阅格式 = 'base64';
			} else if (userAgent.includes('clash') || (url.searchParams.has('clash') && !userAgent.includes('subconverter'))) {
				订阅格式 = 'clash';
			} else if (userAgent.includes('sing-box') || userAgent.includes('singbox') || ((url.searchParams.has('sb') || url.searchParams.has('singbox')) && !userAgent.includes('subconverter'))) {
				订阅格式 = 'singbox';
			} else if (userAgent.includes('surge') || (url.searchParams.has('surge') && !userAgent.includes('subconverter'))) {
				订阅格式 = 'surge';
			} else if (userAgent.includes('quantumult%20x') || (url.searchParams.has('quanx') && !userAgent.includes('subconverter'))) {
				订阅格式 = 'quanx';
			} else if (userAgent.includes('loon') || (url.searchParams.has('loon') && !userAgent.includes('subconverter'))) {
				订阅格式 = 'loon';
			}

			let subConverterUrl;
			let 订阅转换URL = `${url.origin}/${await MD5MD5(fakeToken)}?token=${fakeToken}`;
			//console.log(订阅转换URL);
			let req_data = MainData;

			let 追加UA = 'v2rayn';
			if (url.searchParams.has('b64') || url.searchParams.has('base64')) 订阅格式 = 'base64';
			else if (url.searchParams.has('clash')) 追加UA = 'clash';
			else if (url.searchParams.has('singbox')) 追加UA = 'singbox';
			else if (url.searchParams.has('surge')) 追加UA = 'surge';
			else if (url.searchParams.has('quanx')) 追加UA = 'Quantumult%20X';
			else if (url.searchParams.has('loon')) 追加UA = 'Loon';

			const 订阅链接数组 = [...new Set(urls)].filter(item => item?.trim?.()); // 去重
			if (订阅链接数组.length > 0) {
				const 请求订阅响应内容 = await getSUB(订阅链接数组, request, 追加UA, userAgentHeader);
				console.log(请求订阅响应内容);
				req_data += 请求订阅响应内容[0].join('\n');
				订阅转换URL += "|" + 请求订阅响应内容[1];
			}

			if (env.WARP) 订阅转换URL += "|" + (await ADD(env.WARP)).join("|");
			//修复中文错误
			const utf8Encoder = new TextEncoder();
			const encodedData = utf8Encoder.encode(req_data);
			//const text = String.fromCharCode.apply(null, encodedData);
			const utf8Decoder = new TextDecoder();
			const text = utf8Decoder.decode(encodedData);

			//去重
			const uniqueLines = new Set(text.split('\n'));
			const result = [...uniqueLines].join('\n');
			//console.log(result);

			let base64Data;
			try {
				base64Data = btoa(result);
			} catch (e) {
				function encodeBase64(data) {
					const binary = new TextEncoder().encode(data);
					let base64 = '';
					const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

					for (let i = 0; i < binary.length; i += 3) {
						const byte1 = binary[i];
						const byte2 = binary[i + 1] || 0;
						const byte3 = binary[i + 2] || 0;

						base64 += chars[byte1 >> 2];
						base64 += chars[((byte1 & 3) << 4) | (byte2 >> 4)];
						base64 += chars[((byte2 & 15) << 2) | (byte3 >> 6)];
						base64 += chars[byte3 & 63];
					}

					const padding = 3 - (binary.length % 3 || 3);
					return base64.slice(0, base64.length - padding) + '=='.slice(0, padding);
				}

				base64Data = encodeBase64(result)
			}

			if (订阅格式 == 'base64' || token == fakeToken) {
				return new Response(base64Data, {
					headers: {
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						//"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
					}
				});
			} else if (订阅格式 == 'clash') {
				subConverterUrl = `${subProtocol}://${subConverter}/sub?target=clash&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'singbox') {
				subConverterUrl = `${subProtocol}://${subConverter}/sub?target=singbox&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'surge') {
				subConverterUrl = `${subProtocol}://${subConverter}/sub?target=surge&ver=4&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'quanx') {
				subConverterUrl = `${subProtocol}://${subConverter}/sub?target=quanx&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&udp=true`;
			} else if (订阅格式 == 'loon') {
				subConverterUrl = `${subProtocol}://${subConverter}/sub?target=loon&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false`;
			}
			//console.log(订阅转换URL);
			try {
				const subConverterResponse = await fetch(subConverterUrl);

				if (!subConverterResponse.ok) {
					return new Response(base64Data, {
						headers: {
							"content-type": "text/plain; charset=utf-8",
							"Profile-Update-Interval": `${SUBUpdateTime}`,
							"Profile-web-page-url": request.url.includes('?') ? request.url.split('?')[0] : request.url,
							//"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
						}
					});
					//throw new Error(`Error fetching subConverterUrl: ${subConverterResponse.status} ${subConverterResponse.statusText}`);
				}
				let subConverterContent = await subConverterResponse.text();
				if (订阅格式 == 'clash') subConverterContent = await clashFix(subConverterContent);
				return new Response(subConverterContent, {
					headers: {
						"Content-Disposition": `attachment; filename*=utf-8''${encodeURIComponent(FileName)}`,
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Profile-web-page-url": request.url.includes('?') ? request.url.split('?')[0] : request.url,
						//"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,

					},
				});
			} catch (error) {
				return new Response(base64Data, {
					headers: {
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Profile-web-page-url": request.url.includes('?') ? request.url.split('?')[0] : request.url,
						//"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
					}
				});
			}
		}
	}
};

async function ADD(envadd) {
	var addtext = envadd.replace(/[	"'|\r\n]+/g, '\n').replace(/\n+/g, '\n');	// 替换为换行
	//console.log(addtext);
	if (addtext.charAt(0) == '\n') addtext = addtext.slice(1);
	if (addtext.charAt(addtext.length - 1) == '\n') addtext = addtext.slice(0, addtext.length - 1);
	const add = addtext.split('\n');
	//console.log(add);
	return add;
}

async function nginx() {
	const text = `
	<!DOCTYPE html>
	<html>
	<head>
	<title>Welcome to nginx!</title>
	<style>
		body {
			width: 35em;
			margin: 0 auto;
			font-family: Tahoma, Verdana, Arial, sans-serif;
		}
	</style>
	</head>
	<body>
	<h1>Welcome to nginx!</h1>
	<p>If you see this page, the nginx web server is successfully installed and
	working. Further configuration is required.</p>
	
	<p>For online documentation and support please refer to
	<a href="http://nginx.org/">nginx.org</a>.<br/>
	Commercial support is available at
	<a href="http://nginx.com/">nginx.com</a>.</p>
	
	<p><em>Thank you for using nginx.</em></p>
	</body>
	</html>
	`
	return text;
}

async function sendMessage(type, ip, add_data = "") {
	if (BotToken !== '' && ChatID !== '') {
		let msg = "";
		const response = await fetch(`http://ip-api.com/json/${ip}?lang=zh-CN`);
		if (response.status == 200) {
			const ipInfo = await response.json();
			msg = `${type}\nIP: ${ip}\n国家: ${ipInfo.country}\n<tg-spoiler>城市: ${ipInfo.city}\n组织: ${ipInfo.org}\nASN: ${ipInfo.as}\n${add_data}`;
		} else {
			msg = `${type}\nIP: ${ip}\n<tg-spoiler>${add_data}`;
		}

		let url = "https://api.telegram.org/bot" + BotToken + "/sendMessage?chat_id=" + ChatID + "&parse_mode=HTML&text=" + encodeURIComponent(msg);
		return fetch(url, {
			method: 'get',
			headers: {
				'Accept': 'text/html,application/xhtml+xml,application/xml;',
				'Accept-Encoding': 'gzip, deflate, br',
				'User-Agent': 'Mozilla/5.0 Chrome/90.0.4430.72'
			}
		});
	}
}

function base64Decode(str) {
	const bytes = new Uint8Array(atob(str).split('').map(c => c.charCodeAt(0)));
	const decoder = new TextDecoder('utf-8');
	return decoder.decode(bytes);
}

async function MD5MD5(text) {
	const encoder = new TextEncoder();

	const firstPass = await crypto.subtle.digest('MD5', encoder.encode(text));
	const firstPassArray = Array.from(new Uint8Array(firstPass));
	const firstHex = firstPassArray.map(b => b.toString(16).padStart(2, '0')).join('');

	const secondPass = await crypto.subtle.digest('MD5', encoder.encode(firstHex.slice(7, 27)));
	const secondPassArray = Array.from(new Uint8Array(secondPass));
	const secondHex = secondPassArray.map(b => b.toString(16).padStart(2, '0')).join('');

	return secondHex.toLowerCase();
}

function clashFix(content) {
	if (content.includes('wireguard') && !content.includes('remote-dns-resolve')) {
		let lines;
		if (content.includes('\r\n')) {
			lines = content.split('\r\n');
		} else {
			lines = content.split('\n');
		}

		let result = "";
		for (let line of lines) {
			if (line.includes('type: wireguard')) {
				const 备改内容 = `, mtu: 1280, udp: true`;
				const 正确内容 = `, mtu: 1280, remote-dns-resolve: true, udp: true`;
				result += line.replace(new RegExp(备改内容, 'g'), 正确内容) + '\n';
			} else {
				result += line + '\n';
			}
		}

		content = result;
	}
	return content;
}

async function proxyURL(proxyURL, url) {
	const URLs = await ADD(proxyURL);
	const fullURL = URLs[Math.floor(Math.random() * URLs.length)];

	// 解析目标 URL
	let parsedURL = new URL(fullURL);
	console.log(parsedURL);
	// 提取并可能修改 URL 组件
	let URLProtocol = parsedURL.protocol.slice(0, -1) || 'https';
	let URLHostname = parsedURL.hostname;
	let URLPathname = parsedURL.pathname;
	let URLSearch = parsedURL.search;

	// 处理 pathname
	if (URLPathname.charAt(URLPathname.length - 1) == '/') {
		URLPathname = URLPathname.slice(0, -1);
	}
	URLPathname += url.pathname;

	// 构建新的 URL
	let newURL = `${URLProtocol}://${URLHostname}${URLPathname}${URLSearch}`;

	// 反向代理请求
	let response = await fetch(newURL);

	// 创建新的响应
	let newResponse = new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers: response.headers
	});

	// 添加自定义头部，包含 URL 信息
	//newResponse.headers.set('X-Proxied-By', 'Cloudflare Worker');
	//newResponse.headers.set('X-Original-URL', fullURL);
	newResponse.headers.set('X-New-URL', newURL);

	return newResponse;
}

async function getSUB(api, request, 追加UA, userAgentHeader) {
	if (!api || api.length === 0) {
		return [];
	} else api = [...new Set(api)]; // 去重
	let newapi = "";
	let 订阅转换URLs = "";
	let 异常订阅 = "";
	const controller = new AbortController(); // 创建一个AbortController实例，用于取消请求
	const timeout = setTimeout(() => {
		controller.abort(); // 2秒后取消所有请求
	}, 2000);

	try {
		// 使用Promise.allSettled等待所有API请求完成，无论成功或失败
		const responses = await Promise.allSettled(api.map(apiUrl => getUrl(request, apiUrl, 追加UA, userAgentHeader).then(response => response.ok ? response.text() : Promise.reject(response))));

		// 遍历所有响应
		const modifiedResponses = responses.map((response, index) => {
			// 检查是否请求成功
			if (response.status === 'rejected') {
				const reason = response.reason;
				if (reason && reason.name === 'AbortError') {
					return {
						status: '超时',
						value: null,
						apiUrl: api[index] // 将原始的apiUrl添加到返回对象中
					};
				}
				console.error(`请求失败: ${api[index]}, 错误信息: ${reason.status} ${reason.statusText}`);
				return {
					status: '请求失败',
					value: null,
					apiUrl: api[index] // 将原始的apiUrl添加到返回对象中
				};
			}
			return {
				status: response.status,
				value: response.value,
				apiUrl: api[index] // 将原始的apiUrl添加到返回对象中
			};
		});

		console.log(modifiedResponses); // 输出修改后的响应数组

		for (const response of modifiedResponses) {
			// 检查响应状态是否为'fulfilled'
			if (response.status === 'fulfilled') {
				const content = await response.value || 'null'; // 获取响应的内容
				if (content.includes('proxies:')) {
					//console.log('Clash订阅: ' + response.apiUrl);
					订阅转换URLs += "|" + response.apiUrl; // Clash 配置
				} else if (content.includes('outbounds"') && content.includes('inbounds"')) {
					//console.log('Singbox订阅: ' + response.apiUrl);
					订阅转换URLs += "|" + response.apiUrl; // Singbox 配置
				} else if (content.includes('://')) {
					//console.log('明文订阅: ' + response.apiUrl);
					newapi += content + '\n'; // 追加内容
				} else if (isValidBase64(content)) {
					//console.log('Base64订阅: ' + response.apiUrl);
					newapi += base64Decode(content) + '\n'; // 解码并追加内容
				} else {
					const 异常订阅LINK = `trojan://CMLiussss@127.0.0.1:8888?security=tls&allowInsecure=1&type=tcp&headerType=none#%E5%BC%82%E5%B8%B8%E8%AE%A2%E9%98%85%20${response.apiUrl.split('://')[1].split('/')[0]}`;
					console.log('异常订阅: ' + 异常订阅LINK);
					异常订阅 += `${异常订阅LINK}\n`;
				}
			}
		}
	} catch (error) {
		console.error(error); // 捕获并输出错误信息
	} finally {
		clearTimeout(timeout); // 清除定时器
	}

	const 订阅内容 = await ADD(newapi + 异常订阅); // 将处理后的内容转换为数组
	// 返回处理后的结果
	return [订阅内容, 订阅转换URLs];
}

async function getUrl(request, targetUrl, 追加UA, userAgentHeader) {
	// 设置自定义 User-Agent
	const newHeaders = new Headers(request.headers);
	newHeaders.set("User-Agent", `${atob('djJyYXlOLzYuNDU=')} cmliu/CF-Workers-SUB ${追加UA}(${userAgentHeader})`);

	// 构建新的请求对象
	const modifiedRequest = new Request(targetUrl, {
		method: request.method,
		headers: newHeaders,
		body: request.method === "GET" ? null : request.body,
		redirect: "follow",
		cf: {
			// 忽略SSL证书验证
			insecureSkipVerify: true,
			// 允许自签名证书
			allowUntrusted: true,
			// 禁用证书验证
			validateCertificate: false
		}
	});

	// 输出请求的详细信息
	console.log(`请求URL: ${targetUrl}`);
	console.log(`请求头: ${JSON.stringify([...newHeaders])}`);
	console.log(`请求方法: ${request.method}`);
	console.log(`请求体: ${request.method === "GET" ? null : request.body}`);

	// 发送请求并返回响应
	return fetch(modifiedRequest);
}

function isValidBase64(str) {
	// 先移除所有空白字符(空格、换行、回车等)
	const cleanStr = str.replace(/\s/g, '');
	const base64Regex = /^[A-Za-z0-9+/=]+$/;
	return base64Regex.test(cleanStr);
}

async function 迁移地址列表(env, txt = 'ADD.txt') {
	const 旧数据 = await env.KV.get(`/${txt}`);
	const 新数据 = await env.KV.get(txt);

	if (旧数据 && !新数据) {
		// 写入新位置
		await env.KV.put(txt, 旧数据);
		// 删除旧数据
		await env.KV.delete(`/${txt}`);
		return true;
	}
	return false;
}

async function KV(request, env, txt = 'ADD.txt', guest) {
	const url = new URL(request.url);
	try {
		// POST请求处理
		if (request.method === "POST") {
			if (!env.KV) return new Response("未绑定KV空间", { status: 400 });
			try {
				const content = await request.text();
				await env.KV.put(txt, content);
				return new Response("保存成功");
			} catch (error) {
				console.error('保存KV时发生错误:', error);
				return new Response("保存失败: " + error.message, { status: 500 });
			}
		}

		// GET请求部分
		let content = '';
		let hasKV = !!env.KV;

		if (hasKV) {
			try {
				content = await env.KV.get(txt) || '';
			} catch (error) {
				console.error('读取KV时发生错误:', error);
				content = '读取数据时发生错误: ' + error.message;
			}
		}

		const html = `
			<!DOCTYPE html>
			<html>
				<head>
					<title>${FileName} 订阅编辑</title>
					<meta charset="utf-8">
					<meta name="viewport" content="width=device-width, initial-scale=1">
					<style>
						body {
							margin: 0;
							padding: 15px; /* 调整padding */
							box-sizing: border-box;
							font-size: 13px; /* 设置全局字体大小 */
						}
						.editor-container {
							width: 100%;
							max-width: 100%;
							margin: 0 auto;
						}
						.editor {
							width: 100%;
							height: 300px; /* 调整高度 */
							margin: 15px 0; /* 调整margin */
							padding: 10px; /* 调整padding */
							box-sizing: border-box;
							border: 1px solid #ccc;
							border-radius: 4px;
							font-size: 13px;
							line-height: 1.5;
							overflow-y: auto;
							resize: none;
						}
						.save-container {
							margin-top: 8px; /* 调整margin */
							display: flex;
							align-items: center;
							gap: 10px; /* 调整gap */
						}
						.save-btn, .back-btn {
							padding: 6px 15px; /* 调整padding */
							color: white;
							border: none;
							border-radius: 4px;
							cursor: pointer;
						}
						.save-btn {
							background: #4CAF50;
						}
						.save-btn:hover {
							background: #45a049;
						}
						.back-btn {
							background: #666;
						}
						.back-btn:hover {
							background: #555;
						}
						.save-status {
							color: #666;
						}
					</style>
					<script src="https://cdn.jsdelivr.net/npm/@keeex/qrcodejs-kx@1.0.2/qrcode.min.js"></script>
				</head>
				<body>
					################################################################<br>
					Subscribe / sub 订阅地址, 点击链接自动 <strong>复制订阅链接</strong> 并 <strong>生成订阅二维码</strong> <br>
					---------------------------------------------------------------<br>
					自适应订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?sub','qrcode_0')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}</a><br>
					<div id="qrcode_0" style="margin: 10px 10px 10px 10px;"></div>
					Base64订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?b64','qrcode_1')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}?b64</a><br>
					<div id="qrcode_1" style="margin: 10px 10px 10px 10px;"></div>
					clash订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?clash','qrcode_2')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}?clash</a><br>
					<div id="qrcode_2" style="margin: 10px 10px 10px 10px;"></div>
					singbox订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?sb','qrcode_3')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}?sb</a><br>
					<div id="qrcode_3" style="margin: 10px 10px 10px 10px;"></div>
					surge订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?surge','qrcode_4')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}?surge</a><br>
					<div id="qrcode_4" style="margin: 10px 10px 10px 10px;"></div>
					loon订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?loon','qrcode_5')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}?loon</a><br>
					<div id="qrcode_5" style="margin: 10px 10px 10px 10px;"></div>
					&nbsp;&nbsp;<strong><a href="javascript:void(0);" id="noticeToggle" onclick="toggleNotice()">查看访客订阅∨</a></strong><br>
					<div id="noticeContent" class="notice-content" style="display: none;">
						---------------------------------------------------------------<br>
						访客订阅只能使用订阅功能，无法查看配置页！<br>
						GUEST（访客订阅TOKEN）: <strong>${guest}</strong><br>
						---------------------------------------------------------------<br>
						自适应订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}','guest_0')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}</a><br>
						<div id="guest_0" style="margin: 10px 10px 10px 10px;"></div>
						Base64订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}&b64','guest_1')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}&b64</a><br>
						<div id="guest_1" style="margin: 10px 10px 10px 10px;"></div>
						clash订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}&clash','guest_2')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}&clash</a><br>
						<div id="guest_2" style="margin: 10px 10px 10px 10px;"></div>
						singbox订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}&sb','guest_3')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}&sb</a><br>
						<div id="guest_3" style="margin: 10px 10px 10px 10px;"></div>
						surge订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}&surge','guest_4')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}&surge</a><br>
						<div id="guest_4" style="margin: 10px 10px 10px 10px;"></div>
						loon订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}&loon','guest_5')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}&loon</a><br>
						<div id="guest_5" style="margin: 10px 10px 10px 10px;"></div>
					</div>
					---------------------------------------------------------------<br>
					################################################################<br>
					订阅转换配置<br>
					---------------------------------------------------------------<br>
					SUBAPI（订阅转换后端）: <strong>${subProtocol}://${subConverter}</strong><br>
					SUBCONFIG（订阅转换配置文件）: <strong>${subConfig}</strong><br>
					---------------------------------------------------------------<br>
					################################################################<br>
					${FileName} 汇聚订阅编辑: 
					<div class="editor-container">
						${hasKV ? `
						<textarea class="editor" 
							placeholder="${decodeURIComponent(atob('TElOSyVFNyVBNCVCQSVFNCVCRSU4QiVFRiVCQyU4OCVFNCVCOCU4MCVFOCVBMSU4QyVFNCVCOCU4MCVFNCVCOCVBQSVFOCU4QSU4MiVFNyU4MiVCOSVFOSU5MyVCRSVFNiU4RSVBNSVFNSU4RCVCMyVFNSU4RiVBRiVFRiVCQyU4OSVFRiVCQyU5QQp2bGVzcyUzQSUyRiUyRjI0NmFhNzk1LTA2MzctNGY0Yy04ZjY0LTJjOGZiMjRjMWJhZCU0MDEyNy4wLjAuMSUzQTEyMzQlM0ZlbmNyeXB0aW9uJTNEbm9uZSUyNnNlY3VyaXR5JTNEdGxzJTI2c25pJTNEVEcuQ01MaXVzc3NzLmxvc2V5b3VyaXAuY29tJTI2YWxsb3dJbnNlY3VyZSUzRDElMjZ0eXBlJTNEd3MlMjZob3N0JTNEVEcuQ01MaXVzc3NzLmxvc2V5b3VyaXAuY29tJTI2cGF0aCUzRCUyNTJGJTI1M0ZlZCUyNTNEMjU2MCUyM0NGbmF0CnRyb2phbiUzQSUyRiUyRmFhNmRkZDJmLWQxY2YtNGE1Mi1iYTFiLTI2NDBjNDFhNzg1NiU0MDIxOC4xOTAuMjMwLjIwNyUzQTQxMjg4JTNGc2VjdXJpdHklM0R0bHMlMjZzbmklM0RoazEyLmJpbGliaWxpLmNvbSUyNmFsbG93SW5zZWN1cmUlM0QxJTI2dHlwZSUzRHRjcCUyNmhlYWRlclR5cGUlM0Rub25lJTIzSEsKc3MlM0ElMkYlMkZZMmhoWTJoaE1qQXRhV1YwWmkxd2IyeDVNVE13TlRveVJYUlFjVzQyU0ZscVZVNWpTRzlvVEdaVmNFWlJkMjVtYWtORFVUVnRhREZ0U21SRlRVTkNkV04xVjFvNVVERjFaR3RTUzBodVZuaDFielUxYXpGTFdIb3lSbTgyYW5KbmRERTRWelkyYjNCMGVURmxOR0p0TVdwNlprTm1RbUklMjUzRCU0MDg0LjE5LjMxLjYzJTNBNTA4NDElMjNERQoKCiVFOCVBRSVBMiVFOSU5OCU4NSVFOSU5MyVCRSVFNiU4RSVBNSVFNyVBNCVCQSVFNCVCRSU4QiVFRiVCQyU4OCVFNCVCOCU4MCVFOCVBMSU4QyVFNCVCOCU4MCVFNiU5RCVBMSVFOCVBRSVBMiVFOSU5OCU4NSVFOSU5MyVCRSVFNiU4RSVBNSVFNSU4RCVCMyVFNSU4RiVBRiVFRiVCQyU4OSVFRiVCQyU5QQpodHRwcyUzQSUyRiUyRnN1Yi54Zi5mcmVlLmhyJTJGYXV0bw=='))}"
							id="content">${content}</textarea>
						<div class="save-container">
							<button class="save-btn" onclick="saveContent(this)">保存</button>
							<span class="save-status" id="saveStatus"></span>
						</div>
						` : '<p>请绑定 <strong>变量名称</strong> 为 <strong>KV</strong> 的KV命名空间</p>'}
					</div>
					<br>
					################################################################<br>
					${decodeURIComponent(atob('dGVsZWdyYW0lMjAlRTQlQkElQTQlRTYlQjUlODElRTclQkUlQTQlMjAlRTYlOEElODAlRTYlOUMlQUYlRTUlQTQlQTclRTQlQkQlQUMlN0UlRTUlOUMlQTglRTclQkElQkYlRTUlOEYlOTElRTclODklOEMhJTNDYnIlM0UKJTNDYSUyMGhyZWYlM0QlMjdodHRwcyUzQSUyRiUyRnQubWUlMkZDTUxpdXNzc3MlMjclM0VodHRwcyUzQSUyRiUyRnQubWUlMkZDTUxpdXNzc3MlM0MlMkZhJTNFJTNDYnIlM0UKLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJTNDYnIlM0UKZ2l0aHViJTIwJUU5JUExJUI5JUU3JTlCJUFFJUU1JTlDJUIwJUU1JTlEJTgwJTIwU3RhciFTdGFyIVN0YXIhISElM0NiciUzRQolM0NhJTIwaHJlZiUzRCUyN2h0dHBzJTNBJTJGJTJGZ2l0aHViLmNvbSUyRmNtbGl1JTJGQ0YtV29ya2Vycy1TVUIlMjclM0VodHRwcyUzQSUyRiUyRmdpdGh1Yi5jb20lMkZjbWxpdSUyRkNGLVdvcmtlcnMtU1VCJTNDJTJGYSUzRSUzQ2JyJTNFCi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSUzQ2JyJTNFCiUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMw=='))}
					<br><br>UA: <strong>${request.headers.get('User-Agent')}</strong>
					<script>
					function copyToClipboard(text, qrcode) {
						navigator.clipboard.writeText(text).then(() => {
							alert('已复制到剪贴板');
						}).catch(err => {
							console.error('复制失败:', err);
						});
						const qrcodeDiv = document.getElementById(qrcode);
						qrcodeDiv.innerHTML = '';
						new QRCode(qrcodeDiv, {
							text: text,
							width: 220, // 调整宽度
							height: 220, // 调整高度
							colorDark: "#000000", // 二维码颜色
							colorLight: "#ffffff", // 背景颜色
							correctLevel: QRCode.CorrectLevel.Q, // 设置纠错级别
							scale: 1 // 调整像素颗粒度
						});
					}
						
					if (document.querySelector('.editor')) {
						let timer;
						const textarea = document.getElementById('content');
						const originalContent = textarea.value;
		
						function goBack() {
							const currentUrl = window.location.href;
							const parentUrl = currentUrl.substring(0, currentUrl.lastIndexOf('/'));
							window.location.href = parentUrl;
						}
		
						function replaceFullwidthColon() {
							const text = textarea.value;
							textarea.value = text.replace(/：/g, ':');
						}
						
						function saveContent(button) {
							try {
								const updateButtonText = (step) => {
									button.textContent = \`保存中: \${step}\`;
								};
								// 检测是否为iOS设备
								const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
								
								// 仅在非iOS设备上执行replaceFullwidthColon
								if (!isIOS) {
									replaceFullwidthColon();
								}
								updateButtonText('开始保存');
								button.disabled = true;

								// 获取textarea内容和原始内容
								const textarea = document.getElementById('content');
								if (!textarea) {
									throw new Error('找不到文本编辑区域');
								}

								updateButtonText('获取内容');
								let newContent;
								let originalContent;
								try {
									newContent = textarea.value || '';
									originalContent = textarea.defaultValue || '';
								} catch (e) {
									console.error('获取内容错误:', e);
									throw new Error('无法获取编辑内容');
								}

								updateButtonText('准备状态更新函数');
								const updateStatus = (message, isError = false) => {
									const statusElem = document.getElementById('saveStatus');
									if (statusElem) {
										statusElem.textContent = message;
										statusElem.style.color = isError ? 'red' : '#666';
									}
								};

								updateButtonText('准备按钮重置函数');
								const resetButton = () => {
									button.textContent = '保存';
									button.disabled = false;
								};

								if (newContent !== originalContent) {
									updateButtonText('发送保存请求');
									fetch(window.location.href, {
										method: 'POST',
										body: newContent,
										headers: {
											'Content-Type': 'text/plain;charset=UTF-8'
										},
										cache: 'no-cache'
									})
									.then(response => {
										updateButtonText('检查响应状态');
										if (!response.ok) {
											throw new Error(\`HTTP error! status: \${response.status}\`);
										}
										updateButtonText('更新保存状态');
										const now = new Date().toLocaleString();
										document.title = \`编辑已保存 \${now}\`;
										updateStatus(\`已保存 \${now}\`);
									})
									.catch(error => {
										updateButtonText('处理错误');
										console.error('Save error:', error);
										updateStatus(\`保存失败: \${error.message}\`, true);
									})
									.finally(() => {
										resetButton();
									});
								} else {
									updateButtonText('检查内容变化');
									updateStatus('内容未变化');
									resetButton();
								}
							} catch (error) {
								console.error('保存过程出错:', error);
								button.textContent = '保存';
								button.disabled = false;
								const statusElem = document.getElementById('saveStatus');
								if (statusElem) {
									statusElem.textContent = \`错误: \${error.message}\`;
									statusElem.style.color = 'red';
								}
							}
						}
		
						textarea.addEventListener('blur', saveContent);
						textarea.addEventListener('input', () => {
							clearTimeout(timer);
							timer = setTimeout(saveContent, 5000);
						});
					}

					function toggleNotice() {
						const noticeContent = document.getElementById('noticeContent');
						const noticeToggle = document.getElementById('noticeToggle');
						if (noticeContent.style.display === 'none' || noticeContent.style.display === '') {
							noticeContent.style.display = 'block';
							noticeToggle.textContent = '隐藏访客订阅∧';
						} else {
							noticeContent.style.display = 'none';
							noticeToggle.textContent = '查看访客订阅∨';
						}
					}
			
					// 初始化 noticeContent 的 display 属性
					document.addEventListener('DOMContentLoaded', () => {
						document.getElementById('noticeContent').style.display = 'none';
					});
					</script>
				</body>
			</html>
		`;

		return new Response(html, {
			headers: { "Content-Type": "text/html;charset=utf-8" }
		});
	} catch (error) {
		console.error('处理请求时发生错误:', error);
		return new Response("服务器错误: " + error.message, {
			status: 500,
			headers: { "Content-Type": "text/plain;charset=utf-8" }
		});
	}
}
