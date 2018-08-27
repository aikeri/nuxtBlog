<template>
  <div class="newblogs">
      <h2 class="hometitle">最新文章</h2>
     <ul>
     	<li v-for="blog in blogs">
        <h3 class="blogtitle"><span><a href="/jstt/css3/" title="css3" target="_blank"  class="classname">个人博客</a></span><nuxt-link :to="{name:'detail'}" target="_blank" >帝国cms 首页或者列表无图，不使用默认图片的方法</nuxt-link></h3>
        <div class="bloginfo"><span class="blogpic"><a href="/jstt/css3/2018-03-26/812.html" title="帝国cms 首页或者列表无图，不使用默认图片的方法"><img src="../assets/images/t01.jpg" alt="帝国cms 首页或者列表无图，不使用默认图片的方法" /></a></span>
          <p>帝国cms列表页图文展示，或者首页图文展示，如果使用全图和文字，编辑起来比较麻烦，因为每一篇文章，你都得花时间去配图，所以，可有使用以下方法来实现。</p>
        </div>
        <div class="autor"><span class="lm f_l"></span><span class="dtime f_l">2018-03-26</span><span class="viewnum f_l">浏览（<a href="/">1429</a>）</span><span class="f_r"><nuxt-link :to="{name:'detail'}" class="more">阅读原文>></nuxt-link></span></div>
        <div class="line"></div>
      	</li>
     </ul>
  </div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				blogs:[0,1,2,3,4,5,6,7,8,9]
			}
		}
	}
</script>
<style type="text/css">
.newblogs { background: #fff; overflow: hidden; /*width: 68%; float: left;*/ }
h3.blogtitle { line-height: 30px; height: 30px; margin: 10px 0; }
.blogtitle span { background: #299982; padding: 2px 5px; font-size: 14px; color: #FFF; border-radius: 2px; position: relative; margin-right: 20px }
.blogtitle span a { color: #FFF }
.blogtitle span:after { content: ""; width: 0px; height: 0px; border-top-width: 6px; border-top-style: solid; border-top-color: transparent; border-left-width: 6px; border-left-style: solid; border-left-color: #299982; border-bottom-width: 6px; border-bottom-style: solid; border-bottom-color: transparent; margin: 0px; padding: 0px; position: absolute; right: -6px; top: 6px } /*三角形*/
.blogpic { overflow: hidden; width: 30%; height: 100px; display: block; float: left; margin-right: 20px; background: #333; }
.newblogs ul { padding: 10px; overflow: hidden }
.newblogs li { border-bottom: #ccc 1px solid; margin-bottom: 10px; overflow: hidden; }
.autor { width: 100%; overflow: hidden; clear: both; margin: 20px 0 0 0; display: inline-block; color: #838383; font-size: 12px }
.autor span { margin: 0 10px 0 0; padding-left: 20px }
.autor span a { color: #096; }
.autor span a:hover { text-decoration: underline }
.lm { background: url(../assets/images/newsbg01.png) no-repeat left center }
.dtime { background: url(../assets/images/posttime.gif) no-repeat left center }
.viewnum { background: url(../assets/images/newsbg04.png) no-repeat left center }
.pingl { background: url(../assets/images/newsbg03.png) no-repeat left center }
.blogpic img { width: 100%; }
.bloginfo p { color: #888; line-height: 24px; }
.more { font-size: 14px; }
.line { width: 0px; height: 2px; background: #349075; -moz-transition: all 5s ease; -webkit-transition: all 5s ease; transition: all 5s ease; }/* line 过渡*/
.newblogs li:hover .line { width: 100%; }
</style>
