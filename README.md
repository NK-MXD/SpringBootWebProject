# SpringBootWebProject安装运行说明
软件工程课设英语六级报考系统项目使用 JAVA 开发，要求 JAVA 版本最低为 1.8，编译工具为 Maven，运用到
的框架有 SpringMVC、MyBatis、Redis、Apache Shiro 等常规的开发框架。

## 环境准备 

### Java
项目基于 JAVA 开发，运行环境必须高于 1.8，已调整架构，支持 JDK1.8 及以上版本。

### Redis
引用 Redis，用于做用户会话存储、数据缓存等作用，必须安装，数据文件存储于库 1 中。

### MySQL
必须安装 MySQL 5.7+以上的版本

### Node.js
[安装链接](https://nodejs.org/download/release/v16.20.0/node-v16.20.0-x64.msi)

## 资源准备
将数据库脚本文件导入数据库中，并在以下位置修改：

`exam-api\target\classes\application.yml`和`exam-api\src\main\resources\application.yml`中：

```
  datasource:
    type: com.alibaba.druid.pool.DruidDataSource
    url: jdbc:mysql://localhost:3306/your_databasename?useSSL=false&serverTimezone=Asia/Shanghai&useUnicode=true&characterEncoding=utf-8&allowPublicKeyRetrieval=true
    username: your_username
    password: your_passwd
```

## 运行项目
首先启动SpringBoot项目，看到字样：
![c9a8f27f24bd8c18afbd3e60e2ff9f6.png|500](https://image-1305894911.cos.ap-beijing.myqcloud.com/Obsidian/202306041102637.png)

即为运行成功。接下来运行：
```
npm install

npm run dev
```
访问给定端口号，更改`vue`文件即可实时观察到更改。
