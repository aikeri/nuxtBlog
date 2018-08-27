<template>
  <div>
      <my-head></my-head>
      <article>
        <my-banner></my-banner>
        <!-- 博客内容 -->
        <div style="overflow: hidden;">
          <my-blogs style="float: left;width: 68%"></my-blogs>
          <my-tops style="float: right;width: 30%"></my-tops>
        </div>
      </article>
      <my-footer></my-footer>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import MyHead from '~/components/MyHead.vue'
import MyFooter from '~/components/MyFooter.vue'
import MyBanner from '~/components/MyBanner.vue'
import MyBlogs from '~/components/MyBlogs.vue'
import MyTops from '~/components/MyTops.vue'
import axios from 'axios'

export default {
  components: {
    AppLogo,
    MyHead,
    MyFooter,
    MyBanner,
    MyBlogs,
    MyTops
  },
  mounted(){
    debugger;
  }
}
</script>
<style >
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
<style src="../assets/style/base.css"></style>


