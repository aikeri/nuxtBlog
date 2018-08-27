const atricle={
	matutions:{
		loadData(state){
			console.log("哈哈~~~");
		}
	},
	actions:{
		toShowData(state,data){
			state.commit('loadData',data);
		}
	}
}
export default atricle;