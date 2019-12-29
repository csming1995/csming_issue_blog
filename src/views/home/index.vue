<template>
  <div class="container">
    <div class="container-wrapper">
      <div class="content">
        <article-list/>
      </div>

      <div class="slider">

        <div class="author" style="color: #828282;">
          <img class="author-avatar" src="../../assets/avatar.jpg"/>
          <h1 class="author-name">
            Csming
          </h1>
          <div class="author-description">
            虽千万人吾往矣
          </div>
        </div>

      </div>
    </div>

    <div class="footer">
      Copyright © Csming 2019
    </div>
  </div>
</template>

<script>
import ArticleList from '../widget/ArticleList'
export default {
  name: 'Home',
  components: {ArticleList}
}
</script>

<style scoped>
  @import "../../style/common.css";

  .container {
    width: 1200px;
    margin-right: auto;
    margin-left: auto;
  }

  .container-wrapper {
    width: 100%;
    display: -webkit-flex;
    display: flex;
  }

  .content {
    width: 100%;
    flex: 1;
    margin-top: 24px;
    margin-bottom: 24px;
  }

  .slider {
    width: 280px;
    text-align: center;
    padding: 16px;
    margin-top: 24px;
  }

  .footer {
    height: 80px;
    line-height: 80px;
    font-size: 16px;
    text-align: center;
  }

</style>
