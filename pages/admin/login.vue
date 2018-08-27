<template>
	<div id="wrapper">
		<div class="vertical-align-wrap" ref="wrap">
			<div class="vertical-align-middle">
				<div class="auth-box ">
					<div class="left">
						<div class="content">
							<div class="header">
								<div class="logo text-center"><img src="~assets/images/logo-dark.png" alt="Klorofil Logo"></div>
								<!-- <p class="lead">账号登录</p> -->
							</div>
							<form class="form-auth-small" action="index.php">
								<div class="form-group">
									<label for="signin-email" class="control-label sr-only">邮箱</label>
									<input type="email" class="form-control" id="signin-email" value="samuel.gold@domain.com" placeholder="请输入邮箱">
								</div>
								<div class="form-group">
									<label for="signin-password" class="control-label sr-only">密码</label>
									<input type="password" class="form-control" id="signin-password" value="thisisthepassword" placeholder="请输入密码">
								</div>
								<div class="form-group clearfix">
									<label class="fancy-checkbox element-left">
										<input type="checkbox">
										<span>记住我</span>
									</label>
								</div>
								<button type="submit" class="btn btn-primary btn-lg btn-block">登录</button>
								<div class="bottom">
									<span class="helper-text"><i class="fa fa-lock"></i> <a href="#">忘记密码?</a></span>
								</div>
							</form>
						</div>
					</div>
					<div class="right">
						<div class="overlay"></div>
						<div class="content text">
							<h1 class="heading">欢迎使用aikeri博客</h1>
							<p>by aikeri</p>
						</div>
					</div>
					<div class="clearfix"></div>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {}
		},
		mounted(){
			this.setHeight();
		},
		methods:{
			setHeight(){
				let height=document.documentElement.clientHeight;
				this.$refs.wrap.style.height=height+"px";
			}
		}
	}
</script>
<style type="text/css">
</style>
<style type="text/css" src="../../assets/style/main.css"></style>