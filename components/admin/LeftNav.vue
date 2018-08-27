<template>
	<div>
		<!-- LEFT SIDEBAR -->
		<div id="sidebar-nav" class="sidebar">
			<div class="sidebar-scroll">
				<nav>
					<ul class="nav">
						<li><a :class="{active:isFocus=='home'?true:false}" @click="mychange('home')"><i class="lnr lnr-home"></i> <span>首页</span></a></li>
						<li><a :class="{active:isFocus=='write'?true:false}" @click="mychange('write')"><i class="lnr lnr-code"></i> <span>发表博客</span></a></li>
						<li><a :class="{active:isFocus=='stat'?true:false}" @click="mychange('stat')"><i class="lnr lnr-chart-bars"></i> <span>文章统计</span></a></li>
						<li><a :class="{active:isFocus=='setting'?true:false}" @click="mychange('setting')"><i class="lnr lnr-cog"></i> <span>设置</span></a></li>
						<li><a :class="{active:isFocus=='message'?true:false}" @click="mychange('message')"><i class="lnr lnr-alarm"></i> <span>消息管理</span></a></li>
						<li>
							<a href="#subPages" :class="{active:isFocus=='page'?true:false}" @click="mychange('page')" data-toggle="collapse" class="collapsed"><i class="lnr lnr-file-empty"></i> <span>页面</span> <i class="icon-submenu lnr lnr-chevron-left"></i></a>
							<div id="subPages" class="collapse ">
								<ul class="nav">
									<li><a class="" @click="mychange('profile')">个人信息</a></li>
									<li><nuxt-link :to="{name:'admin-login'}" class="">登录</nuxt-link></li>
									<li><a class="">锁屏</a></li>
								</ul>
							</div>
						</li>
						<li><a :class="{active:isFocus=='table'?true:false}" @click="mychange('table')"><i class="lnr lnr-dice"></i> <span>表格</span></a></li>
						<li><a :class="{active:isFocus=='compos'?true:false}" @click="mychange('compos')"><i class="lnr lnr-text-format"></i> <span>排版</span></a></li>
						<li><a :class="{active:isFocus=='icons'?true:false}" @click="mychange('icons')"><i class="lnr lnr-linearicons"></i> <span>图标</span></a></li>
					</ul>
				</nav>
			</div>
		</div>
		<div style="clear: both;"></div>
		<!-- END LEFT SIDEBAR -->
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				isFocus:'home'
			};
		},
		methods:{
			mychange(tabName,e){
				this.$emit('mychange',tabName);
				this.$data.isFocus=tabName;
			}
		}
	}
</script>
<style type="text/css"></style>
<style type="text/css" src="../../assets/style/main.css"></style>