-  yarn add express @types/express
- yarn add typescript tsc-watch       
- tsconfig.json
  {
  "compilerOptions": {
    "module": "commonjs",
    "declaration": true,
    "removeComments": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "target": "es2017",
    "sourceMap": true,
    "outDir": "./dist",
    "baseUrl": "./",
    "incremental": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
- "scripts": {
    "dev": "tsc-watch --onSuccess \"node dist/main.js\""
  },
    tsc-watch   帮助编译dist目录


- 引入 express