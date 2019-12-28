<template>
  <div>
    <div class="header">
      <div class="header-title">
        <ul>
          <li><a href="#home">Csming's Planet</a></li>
          <li><a href="#home">HOME</a></li>
          <li><a href="#archives">ARCHIVES</a></li>
          <li><a href="#contact">TAGS</a></li>
          <li><a href="#about">ABOUT</a></li>
        </ul>
      </div>

    </div>
    <div>
      <router-view :key="key"></router-view>
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

  .header {
    height: 360px;
    background: #90CAF9 url("../../assets/normal-header.png") 0 center;
    -webkit-background-size: 100%;
    background-size: 100%;
  }

  .header-title {
    height: 380px;
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
</style>
