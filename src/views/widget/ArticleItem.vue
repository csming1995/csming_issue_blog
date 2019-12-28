<template>
  <div class="item">

    <a class="link" href="#">
      <h1 class="title">
        想去冒险，从南到北
      </h1>
      <p class="content">
        JavaScript的闭包与函数重载 闭包的概念 什么是闭包 说到JavaScript的闭包，需要先说一说JavaScript的作用域。
        JavaScript在ECMA6之前，作用域是只有全局作用域跟函数作用域的。（这里先不涉及let和const） 函数内部可以读取器外部作用域定义的变量，而外部作用域不能直接读取到函数中定义的变量。 eg: var n =
        0;function f1() &....
      </p>
    </a>
    <div class="author">
      Posted by 烧面 on 2019-12-28
    </div>
    <!--<div class="tags">-->

    <!--</div>-->
  </div>
</template>

<script>
export default {
  name: 'ArticleItem'
}
</script>

<style scoped>

  .item {
    padding-bottom: 16px;
    border-bottom: solid #e6e6e6 .5px;
  }

  .link {
    text-decoration: none;
  }

  .title {
    font-size: 22px;
    color: #373737;
  }

  .title:hover{
    color: #42A5F5;
    transition: color .2s;
  }

  .content {
    font-size: 15px;
    color: #828282;
    transition: color .2s;
  }

  .content:hover{
    color: #42A5F5;
  }

  .author {
    font-size: 16px;
    color: #6e6e6e;
  }
</style>
