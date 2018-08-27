<template>
	<div>
		<my-head></my-head>
		<article>
			<h2 class="litle"><span>不要轻易放弃。学习成长的路上，我们长路漫漫，只因学无止境。</span>学无止境</h2>
			<div class="navtab">
			    <div class="search">
			      <form action="/e/search/index.php" method="post" name="searchform" id="searchform">
			        <input name="keyboard" id="keyboard" class="input_text" value="请输入关键字" style="color: rgb(153, 153, 153);" onfocus="if(value=='请输入关键字'){this.style.color='#000';value=''}" onblur="if(value==''){this.style.color='#999';value='请输入关键字'}" type="text">
			        <input name="show" value="title" type="hidden">
			        <input name="tempid" value="1" type="hidden">
			        <input name="tbname" value="news" type="hidden">
			        <input name="Submit" class="input_submit" value="搜索" type="submit">
			      </form>
			    </div>
			    <ul class="navlist" id="pageContent">
			      <li><a href="list.html">CSS3|Html5</a></li>
			      <li><a href="list2.html">网站建设</a></li>
			      <li><a href="list2.html">心得笔记</a></li>
			      <li><a href="list2.html">推荐工具</a></li>
			      <li><a href="http://www.yangqq.com/news/jsex/">JS实例索引</a></li>
			    </ul>
			    <script language="javascript"> 
					var obj=null;
					var As=document.getElementById('pageContent').getElementsByTagName('li');
					obj = As[0];
					for(i=1;i<As.length;i++){if(window.location.href.indexOf(As[i].href)>=0)
					obj=As[i];}
					obj.id='pagecurrent'
				</script> 
		 	</div>
		 	<div style="overflow: hidden;">
		 		<my-blogs style="width: 68%;float: left;"></my-blogs>
		 		<my-tops style="width: 30%;float: right"></my-tops>
		 	</div>
		</article>
		<my-footer></my-footer>
	</div>
</template> 
<script type="text/javascript">
	import MyHead from '~/components/MyHead.vue'
	import MyFooter from '~/components/MyFooter'
	import MyBlogs from '~/components/MyBlogs.vue'
	import MyTops from '~/components/MyTops.vue'
	export default{
		components:{
			MyHead,
			MyFooter,
			MyBlogs,
			MyTops
		}
	}
</script>
<style type="text/css">
	
</style>