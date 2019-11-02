2019-9-21 安卓逆向第三节 安装逆向apk部分

2019-9-24 
window={} 可以赋值，看代码涉及的属性是否可以自己定义
纪录片：极简主义：记录生命中的重要事物
马特.达维拉谈论的极简主义和自我完善
保罗.贾维斯：够了（播客）

problem: 
1.多重匿名函数立即执行顺序，了解匿名函数执行方式✅
2.抠js代码过程中遇到有些变量读取window.document属性不知道本地怎么构造，
除了用jsdom发起请求定义一个window自带document属性之外有别的办法吗❓
关于易盾破解思路：涉及到window属性的值，看看它的来源能不能替换成自己构造的

断点： ve = window && window[l[52]] && window[l[52]][e[61]] || l[82]

2019-9-25
js内置对象添加原型方法（可以看到hook cookie的原理和方法)：https://yq.aliyun.com/articles/702492?spm=a2c4e.11163080.searchblog.9.6b372ec1quLQWL
待学（破解浏览器指纹）：https://yq.aliyun.com/articles/692511?spm=a2c4e.11163080.searchblog.49.6b372ec1quLQWL
js逆向思路：https://yq.aliyun.com/live/907?spm=a2c4e.11153940.0.0.535273872E3dQh
【补充】异步爬虫aiohttp的使用：https://yq.aliyun.com/live/917
阿里云社区：data_starter 654321test
螺丝帽大佬直播课程：百度网盘

2019-9-26
python 调用jar方法

2019-10-1
frida hook alicrackme lesson4未完成

2019-10-3
frida hook alicrackme lesson4完成
要点：模拟器的frida-serve要处于打开状态，app处于打开状态
adb push frida-server-12.6.8-android-x86 /data/local/tmp/ adb shell
cd /data/local/tmp 确定手机当前用户是root用户或拥有root权限
chmod 777 frida-server-12.6.8-android-x86 ./frida-server-12.6.8-android-x86

电脑上运行
frida-ps -U 电脑上运行 android.process.acore 字样表示成功

2019-10-7
安装ida pro未完成
hook lib.so的写法
js浏览器指纹：使用大佬的cookieset插件和jsonfy基本上追踪所有参数生成
demo url: 
https://lengyue.me/demo/dx-const-id/demo.html


2019-10-8
易盾fp this.get函数里面有canvas,没有模拟到位

链接: https://pan.baidu.com/s/1XttIfpPyUIQ4nb6r3fw4qg 提取码: k4pz 复制这段内容后打开百度网盘手机App，操作更方便哦

2019-10-9
易盾fp this.get函数里面有canvas,画图，不构造canvas画布，直接写死传值
还没有执行就报错， n没有定义，问题是前面已经定义了，为什么不生效
答：此n非彼n仅仅是名字相同，函数不一样，作用域不一样
细节很多，很多计算点，赋值的地方
function(module, exports)构造了很多隐藏的函数
全局变量不用var修饰，Object.defineProperty()给对象添加属性，set,get方法，示例：jspytest.js

2019-10-11
js抠代码，缺什么补什么，有些是常数的数组可以直接赋值，避免牵连过多，层层括号的内容可以运行一下化简，便于理解
方法套方法，细节实现也要对照

kuaishou did 函数exports了几层
 n.baseOption = s({}, pt, r),
 n.commomPackage = ct(n.baseOption),
 
流畅的python P62


2019-10-19
安卓逆向第五课完成

2019-10-30
安卓逆向第六课，hook加密方法思想同样适用于js逆向hook function
fiddler抓不到包，hook网络请求库request（了解安卓网络请求的库）
问题：hook java类方法怎么写？

安卓逆向第七课，网络抓包




















