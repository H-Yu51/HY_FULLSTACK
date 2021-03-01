import { MemberEntity } from "../../model"
import { members } from './mockData';
// 假数据
// 做完页面开发后  再换真数据

const fetchMembers = () => {
    //Promise 类
    // return Promise.resolve（members）
    return members;
}
const fetchMembersAsync = () => {

}
export const memberAPI = {
    fetchMembers,
    fetchMembersAsync
}