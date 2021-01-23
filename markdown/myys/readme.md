- 在提交代码之前，需要注意什么?
    1. check 一下代码 不要把有bug 的代码提交
        review git 怎么review 代码?

    2. 测试驱动开发 mocha

## 如何用markdown 表达 代码跟上个版本的区别
```diff
const unique = (arr) => {
-  return Array.from(new Set(arr));
+  return [...new Set()];
}
```
