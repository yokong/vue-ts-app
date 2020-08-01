import { GetterTree } from "vuex";

const getters: GetterTree<any, any> = {
  user(state: any): any {
    return state.user;
  },
  routers(state: any): any {
    return state.routes;
  },
};
export default getters;
