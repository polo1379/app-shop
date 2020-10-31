const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
 
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set("img", resolve("./public/img"))
  },
  chainWebpack:config=>{
    config.plugins.delete("prefetch")
    // 删除index.html开头的带有prefetch属性的link，不要异步下载暂时不需要的页面组件文件
  },
}
