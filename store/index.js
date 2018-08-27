import Vuex from 'vuex'
import mutations from './modules/mutations'
import atricle from './modules/atricle'
const createStore=()=>{
	return new Vuex.Store({
			modules:{
				atricle
			},
			state:{
				counter: 0
			},
			mutations:{
				// mutations,
				// atricle
			}
		})
	}
export default  createStore;
