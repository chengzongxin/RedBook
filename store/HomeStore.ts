import { request } from "../utils/request";
import { action, observable } from "mobx";
import { ArticleSimple } from "../typings";

const SIZE = 10;
export default class HomeStore {
  page: number = 1;

  //   observable 必须要写，不然编译报错
  @observable homeList: ArticleSimple[] = [];

  @observable refreshing: boolean = false;

  //   改变内部数据要加 @action
  @action
  resetPage = () => {
    this.page = 1;
  };

  requestHomeList = async () => {
    if (this.refreshing) {
      return;
    }

    try {
      this.refreshing = true;
      const params = {
        page: this.page,
        size: SIZE,
      };
      const { data } = await request("homeList", params);

      if (data.length) {
        if (this.page === 1) {
          this.homeList = data;
        } else {
          this.homeList = [...this.homeList, ...data];
        }
      } else {
        if (this.page === 1) {
          this.homeList = [];
        } else {
        }
      }
      console.log("cout={}", this.homeList.length);
      this.page++;
    } catch (error) {
      console.log(error);
    } finally {
      this.refreshing = false;
    }
  };
}
