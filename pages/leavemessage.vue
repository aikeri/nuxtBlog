<template>
	<div>
		<my-head></my-head>
		<article>
			<h2 class="litle"><span>你，我生命中一个重要的过客，我们之所以是过客，因为你未曾会为我停留。</span>留言</h2>
			<div class="gbko">

			</div>
		</article>
		<my-footer></my-footer>
	</div>
</template>
<script type="text/javascript">
	import MyHead from '~/components/MyHead.vue'
	import MyFooter from '~/components/MyFooter.vue'
	export default{
		components:{
			MyHead,
			MyFooter
		}
	}
</script>
<style type="text/css">
.gbko{ border-top: #a6c3bd 1px solid; padding: 20px; overflow: hidden;  background: rgba(255,255,255,0.8);}
</style>