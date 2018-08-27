<template>
	<div>
		<table class="table table-bordered">
			<tbody>
				<tr>
					<th v-for=" th in column">{{th.name}}</th>
				</tr>
				<tr v-for="(bb,index) in bbs">
					<td :style="{'text-align':td.align?td.align:'left','background-color':'white'}" v-for="td in column">{{bb[td.dataIndex]}}<div v-show="td.isOperation"><a href="">编辑</a>&nbsp;&nbsp;&nbsp;<a href="">删除</a></div></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				bbs:[
					{title:"夏天如何预防蚊虫叮咬",author:"aikeri",createtime:"2018/08/20 20:05:23"},
					{title:"秋天如何预防蚊虫叮咬",author:"aikeri",createtime:"2018/10/20 20:15:50"},
					{title:"冬天如何预防蚊虫叮咬",author:"aikeri",createtime:"2018/02/20 20:55:12"},
					{title:"春天如何预防蚊虫叮咬",author:"aikeri",createtime:"2018/05/20 20:25:30"},
					{title:"四季如何预防蚊虫叮咬",author:"aikeri",createtime:"2018/07/20 20:10:24"},
				],
				column:[
					{name:"标题",dataIndex:'title'},
					{name:"作者",dataIndex:'author',align:'center'},
					{name:"创建时间",dataIndex:'createtime',align:'center'},
					{name:"最新浏览时间",dataIndex:'browsetime',align:'center'},
					{name:"操作",dataIndex:'',isOperation:true,align:'center'},
				]
			}
		}
	}
</script>
<style type="text/css">
	th{
		text-align: center;
	}
</style>
<style type="text/css" src="../../assets/style/main.css"></style>