# 开发工作流  给 node

- 工作内容和工作流程是两码事
  轻量级的开发流程
  parcel
  重量级的开发流程
  webpack  babel


- live-server http 静态服务
  stylus 编译
  初级阶段  -> 高级阶段

  多个命令行，有点复杂，统一


- 轻量级的前端开发流程套件 parcel
  - node  开发流程工具  npm init -y
                      npm i parcel
          

- 现代开发工艺
  parcel  live-server  + stylus  + ...全部

    index.html是入口文件  http 服务 1234
    Built 编译 stylus -> css
    .styl devDependencies style.styl -> style.css
    src / 开发目录


    1. 删除  node_modules   package.json 
    2. npm init -y 
    3. 加  "dependencies": {
                "parcel": "^1.12.4"
              },
              "devDependencies": {
                "stylus": "^0.54.8"
              }  
    4.  npm i  parcel  
    5.  script  "start": "parcel index.html"  
    6.  npm run start
