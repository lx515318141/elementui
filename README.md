# Element
## 1.安装
    npm i element-ui -S
## 2.完整引入
    将下面代码写入main.js:
    import Vue from 'vue';
    import ElementUI from 'element-ui';
    import 'element-ui/lib/theme-chalk/index.css';
    import App from './App.vue';

    Vue.use(ElementUI);

    new Vue({
    el: '#app',
    render: h => h(App)
    });
    然后就可以在下面组件中挑选需要使用的代码了。
## 3.按需引入
    因为css太过庞大，有时可以按需引入
    首先，安装 babel-plugin-component：
    npm install babel-plugin-component -D
    然后，修改 .babelrc ,注意修改插件(plugins)内容：
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
    将上段代码加入到plugins中，接下来既可以使用了。
    import { Button, Select } from 'element-ui';
    Vue.use(Button)
    Vue.use(Select)
    /* 或写为
    * Vue.component(Button.name, Button);
    * Vue.component(Select.name, Select);
    */


