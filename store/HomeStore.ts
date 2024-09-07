import { request } from "../utils/request";
import { action, observable } from "mobx";
import { ArticleSimple } from "../typings";

const SIZE = 10;
export default class HomeStore {
  page: number = 1;

//   observable 必须要写，不然编译报错
  @observable homeList: ArticleSimple[] = [];

  requestHomeList = async () => {
    try {
      const params = {
        page: this.page,
        size: SIZE,
      };
      const { data } = await request("homeList", params);
      console.log(`data=${JSON.stringify(data)}`);
      this.homeList = data
    } catch (error) {
      console.log(error);
    }
  };
}
