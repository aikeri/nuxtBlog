<template>
  <div>
    <header>
  <div id="mnav">
    <h2><span class="navicon"></span></h2>
    <ul>
      <li><nuxt-link :to="{name:'index'}">网站首页</nuxt-link></li>
      <li><nuxt-link :to="{name:'list'}">学无止境</nuxt-link></li>
      <li><nuxt-link :to="{name:'list'}">慢生活</nuxt-link></li>
      <li><nuxt-link :to="{name:'about'}">关于我</nuxt-link></li>
      <li><nuxt-link :to="{name:'leavemessage'}">留言</nuxt-link></li>
      <!-- <li><a href="link.html">博客导航</a></li> -->
      <!-- <li><a href="share.html">模板分享</a></li> -->
    </ul>
  </div>
  <div class="topnav">
    <nav>
      <ul>
      <li><nuxt-link :to="{name:'index'}">网站首页</nuxt-link></li>
      <li><nuxt-link :to="{name:'list'}">学无止境</nuxt-link></li>
      <li><nuxt-link :to="{name:'list'}">慢生活</nuxt-link></li>
      <li><nuxt-link :to="{name:'about'}">关于我</nuxt-link></li>
      <li><nuxt-link :to="{name:'leavemessage'}">留言</nuxt-link></li>
      <!-- <li><a href="link.html">博客导航</a></li> -->
      <!-- <li><a href="share.html">模板分享</a></li> -->
      </ul>
    </nav>
  </div>
</header>
  </div>
</template>

<script type="text/javascript">
	export default{
		
	}
</script>
<style type="text/css">
  nuxt-link:hover{
    color:white;
  }
</style>