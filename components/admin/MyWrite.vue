<template>
	<div style="background-color: #f5f5fa;overflow: auto" >
		<div class="write_box">
			<div class="form-box">
				<input ref="input" class="form-control" type="text" name="" placeholder="请输入标题" style="width:90%;height: 50px;font-size: 20px">
				<button ref="submit" class="publish btn btn-info" :class="{'btn-lg':isLg}">发布博客</button>
			</div>
			<script ref="edit" id="editor" type="text/plain" style="min-width: 700px;width:100%;height:600px;padding:0 20px"></script>
		</div>
		
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				isLg:true
			}
		},
		mounted(){
			let me=this;
			let ue = UE.getEditor('editor');
			me.initsize();
			let width=this.$refs.input.clientWidth;
			window.onresize=()=>{
				me.initsize();
			}
		},
		methods:{
			initsize(){
				let iwidth=document.body.clientWidth;
				if(iwidth<1740){
					this.$data.isLg=false;
					this.$refs.input.style.height="38px";
					this.$refs.input.style.fontSize="16px";
					this.$refs.input.style.width="88%";
					this.$refs.submit.style.left="88%";
				}else{
					this.$data.isLg=true;
					this.$refs.input.style.height="50px";
					this.$refs.input.style.fontSize="20px";
					this.$refs.input.style.width="90%";
					this.$refs.submit.style.left="90%";
				}
			}
		}
		
	}
</script>
<style type="text/css">
	.write_box{
		width: 96%;
		height: 92%;
		margin: 2% 2%;
		background-color: white;
		overflow:hidden;
	}
	/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/  
	::-webkit-scrollbar{  
	    width: 7px;  /*滚动条宽度*/
	    height: 7px;  /*滚动条高度*/
	}  
	  
	/*定义滚动条轨道 内阴影+圆角*/  
	::-webkit-scrollbar-track{  
	    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);  
	    border-radius: 5px;  /*滚动条的背景区域的圆角*/
	    background-color: #eee;/*滚动条的背景颜色*/  
	}  
	  
	/*定义滑块 内阴影+圆角*/  
	::-webkit-scrollbar-thumb{  
	    border-radius: 5px;  /*滚动条的圆角*/
	    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);  
	    background-color: #aaa;  /*滚动条的背景颜色*/
	}  
	.form-box{
		width: 100%;
		margin: 5px auto;
		padding:  20px;
		position: relative;
	}
	.publish{
		position: absolute;
		left: 90%;
		top:22px;
		outline: none;
	}
</style>