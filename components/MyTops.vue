<template>
	<div class="rbox">
		<div class="paihang">
			<h2 class="hometitle">模板排行</h2>
			<ul>
				<li v-for="top in tops"><b><a href="/download/div/2015-04-10/746.html" target="_blank">【活动作品】柠檬绿兔小白个人博客模板30...</a></b>
          		<p><i><img src="../assets/images/t02.jpg"  /></i>展示的是首页html，博客页面布局格式简单，没有复杂的背景，色彩局部点缀，动态的幻灯片展示，切换卡，标...</p>
        		</li>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				tops:[0,1,2,3,4,5]
			}
		}
	}
</script>
<style type="text/css">
.rbox { /*width: 30%;*/ overflow: hidden; /*float: right*/ }
.paihang { background: #FFF; overflow: hidden; margin-bottom: 20px }
.paihang ul { padding: 10px; }
.paihang ul li { border-bottom: solid 1px #EAEAEA; font-size: 14px; margin: 0 0 10px 0; padding: 0 0 10px 0; overflow:hidden }
.paihang ul li b { height: 30px; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; display: block; }
.paihang ul li p { line-height: 24px; color: #888 }
.paihang ul li a:hover { color: #000; }
.paihang ul li:hover p { color: #000; }
.paihang ul li:hover b a { color: #000; }
.paihang li i { width: 100px; height: 90px; overflow: hidden; display: block; border: #efefef 1px solid; float: left; margin-right: 10px }
.paihang li img { height: 100%; margin: auto; -moz-transition: all .5s ease; -webkit-transition: all .5s ease; transition: all .5s ease; }
.paihang ul li:hover i img { transform: scale(1.1) }
</style>
