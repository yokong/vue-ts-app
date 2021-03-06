import { ActionTree } from "vuex";
import jwt_decode from "jwt-decode";
// SET_USER mutations里面面的定义的文件
const actions: ActionTree<any, any> = {
  async setUser({ state, commit }, user: any) {
    console.log(user);
    const decoded = jwt_decode(user);
    commit("SET_USER", decoded);
  },
};
export default actions;
