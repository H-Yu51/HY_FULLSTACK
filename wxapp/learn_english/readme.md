- 用数据源 表达界面  数据驱动界面  

    articles: [
        {
            cotentId: 1177432,
            cover: '',
            pubdata: '2017-06-27 00:45:00',
            title: ' Quora精选:为什么聪明人总能保持冷静?'

        }
    ]
    - 小程序 架构简单 :页面
    - 数据 => 页面

        每个页面由四个文件组成  
            .wxml   ===  .html文件    其中的 view 标签 = div 标签 
            .wxss   ===  .css
            .js     ===  .js

            约定   js data的数据 用   {{ }} 在 wxml文件中显示出来

        1. 哪里有小程序的 组件   https://www.w3cschool.cn/miniappbook/          看文档

        2. 数据   {{ 数据 }}  由占位符{{}}填入
            或
                setData({
                    key: val
                })
                页面会根据数据的改变而改变

