# vue-app
vue.js是一个mvvm框架
mvvm框架包括三部分View-ViewModel-Model
view:视图 dom
ViewModel: 通讯 观察者
model:数据 javascript对象
### 优点:
+ 针对具有复杂交互逻辑的前端应用
+ 提供基础的架构抽象
+ 同过Ajax数据持久化,保证前端用户的体验

### 特点:
+ 轻量级的mvvm框架
+ 数据驱动+组件化开发
+ github 超过25K+的star数,社区完善

### 选型 三大框架对比
Vue.js更轻量,压缩以后只有20k+
Vue.js更容易上手,学习曲线平稳
吸收了两家之长,借鉴了angular的指令和react的组件化,计算属性是独有的

### Vue.js核心思想
#### 数据驱动
+ dom是数据的一种自然映射  view-ViewModel(domListeners,Directives)-Model

#### 组件化
+ 扩展HTML元素,封装可重用的代码  

##### 组件设计原则
+ 页面上每个独立的可视/可交互区域视为一个组件
+ 每个组件对应一个工程目录,组件所需要的各种资源在这个目录下就近维护
+ 页面不过是组件的容器,组件可以嵌套自由组合形成完整的页面  

# 在线演示地址
![](http://i4.buimg.com/567571/04b23e2fde004dce.png)

# 项目运行
+ 安装依赖  

``` npm install ```  

+ dev服务器打开  

``` npm run dev ```  

+ 上线版本打开  

``` node prod.server.js ```

