<template>
  <div>
    <div class="header">
      <div class="header-title">
        <ul>
          <li><a href="/#/home">Csming's Planet</a></li>
          <li><a href="/#/home">HOME</a></li>
          <li><a href="/#/archives">ARCHIVES</a></li>
          <li><a href="/#/contact">TAGS</a></li>
          <li><a href="/#/about">ABOUT</a></li>
        </ul>

        <div class="author">
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
    <div>
      <div class="container">
        <div class="container-wrapper">
          <div class="content">
            <router-view :key="key"></router-view>
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  computed: {
    key () {
      return this.$route.path
    }
  }
}
</script>

<style scoped>

  @import "../../style/common.css";

  .header {
    height: 400px;
    background: #90CAF9 url("../../assets/normal-header.png") 0 center;
    -webkit-background-size: 100%;
    background-size: 100%;
  }

  .header-title {
    height: 400px;
    color: #ffffff;
    background: rgba(255, 255, 255, 0.26);
    font-size: 15px;
    font-weight: bold;
    line-height: 16px;
    padding: 22px;
  }

  /* 菜单 */
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  li {
    float: left;
  }

  li a{
    display: block;
    color: #ffffff;
    text-align: center;
    padding-right: 20px;
    text-decoration: none;
    transition: color .2s;
  }

  li a:hover {
    color: #90CAF9;
  }

  /* container */
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
