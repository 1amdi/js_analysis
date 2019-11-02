先连接设备
adb connect 127.0.0.1:62001

再查看设备
adb devices

反编译命令：apktool d app-release.apk -o outdir
回编译命令：apktool b outdir


手机安装frida-server
adb push frida-server-12.6.8-android-x86 /data/local/tmp/ adb shell
cd /data/local/tmp 确定手机当前用户是root用户或拥有root权限
chmod 777 frida-server-12.6.8-android-x86 ./frida-server-12.6.8-android-x86

电脑上运行
frida-ps -U 电脑上运行 android.process.acore 字样表示成功