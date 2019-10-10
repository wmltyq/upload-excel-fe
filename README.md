## 项目说明
这是我在掘金上看到一篇文章（[使用Vue+Spring Boot实现Excel上传](https://juejin.im/post/5bff4a1851882516eb5625a1#comment)）觉得挺有意思就照着做了一遍。因为之前只是看过Vue和Spring Boot方面的书没有什么实战经验，所以在环境搭建和开发中也遇到了不少问题。
将upload-excel-fe和upload-excel-be前后端代码分别运行起来后。点击运行窗口输出的地址，即可看到网站首页：  
![网站首页](https://github.com/wmltyq/upload-excel-fe/blob/master/img/start-web.png)

上传在upload-excel-fe项目更目录下的example.xlsx实例文件：  
![上传文件](https://github.com/wmltyq/upload-excel-fe/blob/master/img/upload-excel.png)

最后就能看到excel表格中的数据都呈现在网页上了，可以点击每一项右边的Edit进行编辑，点击Delete进行删除：
![显示效果](https://github.com/wmltyq/upload-excel-fe/blob/master/img/display-effect.png)

## 相关命令
```
# Project setup
npm install

# Compiles and hot-reloads for development
npm run serve

# Compiles and minifies for production
npm run build

# Run your tests
npm run test

# Lints and fixes files
npm run lint
```

