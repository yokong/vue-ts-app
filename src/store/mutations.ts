import { MutationTree } from "vuex";

const mutions: MutationTree<any> = {
  SET_USER(state: any, user: any): void {
    state.user = user;
  },
};
export default mutions;
