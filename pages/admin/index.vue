<template>
	<div id="wrapper" style="overflow: hidden;background-color: white" ref="wrap">
		<my-head></my-head>
		<left-nav style="width: 260px;float: left" @mychange="tabchange"></left-nav>
		<div style="clear: both;"></div>
		<my-publish class="contain" v-show="tabName=='publish'?true:false"></my-publish>
		<my-home class="contain" v-show="tabName=='home'?true:false"></my-home>
		<my-write class="contain" v-show="tabName=='write'?true:false"></my-write>
	</div>
</template>
<script type="text/javascript">
	import MyHead from "~/components/admin/MyHead.vue"
	import LeftNav from "~/components/admin/LeftNav.vue"
	import MyPublish from "~/components/admin/MyPublish.vue"
	import MyHome from "~/components/admin/MyHome.vue"
	import MyWrite from "~/components/admin/MyWrite.vue"
	export default{
		components:{
			MyHead,
			LeftNav,
			MyPublish,
			MyHome,
			MyWrite
		},
		data(){
			return {
				tabName:'home'
			}
		},
		mounted(){
			let height=document.documentElement.clientHeight;
			this.$refs.wrap.style.height=height+"px";
			
		},
		methods:{
			tabchange(tabName){
				this.$data.tabName=tabName;
			}
		}
	}


</script>
<style type="text/css">
	.contain{
		width:calc(100% - 260px);
		height:100%;
		float: right;
		padding-top: 80px;
	}
</style>