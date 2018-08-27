<template>
    <div class="banner">
    <div id="sucaihuo" class="fader"> <img class="slide" src="../assets/images/banner01.jpg"> <img class="slide" src="../assets/images/banner02.jpg"> <img class="slide" src="../assets/images/banner03.jpg">
      <div class="fader_controls">
        <div class="page prev" data-target="prev">&lsaquo;</div>
        <div class="page next" data-target="next">&rsaquo;</div>
        <ul class="pager_list">
        </ul>
      </div>
    </div>
    
  </div>
</template>

<script type="text/javascript">
	export default{
		head:{
			script:[
				{src:'js/jquery.min.js'},
    			{src:'js/jquery-2.1.1.min.js'},
    			{src:'js/jquery.easyfader.min.js'}
  			],
		},
		data(){
			return {

			}
		},
		mounted(){
			$(function() {
				$('#sucaihuo').easyFader();
			});
			this.$http.get('/data').then((response)=>{
				console.log(response);
			})
		}
	}
</script>
<style type="text/css">
.banner { width: 100%; margin: 30px 0; overflow: hidden }
.fader { position: relative; padding-top: 30%; font-family: "futura", arial; overflow: hidden; }
.fader .slide { position: absolute; width: 100%; height: 100%; top: 0; z-index: 1; opacity: 0; }
.fader img.slide { height: auto; }
.fader .prev, .fader .next { position: absolute; height: 80px; line-height: 55px; width: 50px; font-size: 100px; text-align: center; color: #fff; top: 50%; left: 0; z-index: 4; margin-top: -25px; cursor: pointer; opacity: .3; transition: all 150ms; }
.fader .prev:hover, .fader .next:hover { opacity: 1; }
.fader .next { left: auto; right: 0; }
.fader .pager_list { position: absolute; width: 100%; height: 40px; padding: 0; line-height: 40px; bottom: 0; text-align: center; z-index: 4; }
.fader .pager_list li { display: inline-block; width: 15px; height: 15px; margin: 0 7px; background: #fff; opacity: .3; text-indent: -9999px; border-radius: 999px; cursor: pointer; transition: all 150ms; }
.fader .pager_list li:hover, .fader .pager_list li.active { opacity: 1; }
</style>