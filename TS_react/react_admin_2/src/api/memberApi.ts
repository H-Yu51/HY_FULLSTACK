import { MemberEntity } from '../model/member'
import Axios,{AxiosResponse} from 'axios'
import { rejects } from 'assert';
// 后台前缀基本一样
const githubURL = "https://api.github.com";
// 业务API 不用重复写相同的前缀
const githubMembersUrl = `${githubURL}/orgs/lemoncode/members`;


// 


export const getMembersCollection = (): Promise<MemberEntity[]> => {
    return new Promise((resolve,reject) => {
        // 使用try catch 处理网络请求错误
        try {
            Axios.get<MemberEntity[]>(githubMembersUrl).then((res) => {
                console.log(res,'-----');
                resolve(mapMemberListApiToModel(res))
            })
        }
        catch(err) {
            reject(err)
        }


    })
}

const mapMemberListApiToModel = ({data}:AxiosResponse<any[]>):MemberEntity[] => data.map(githubMember => ({
    id:githubMember.id,
    login:githubMember.login,
    avatar_url:githubMember.avatar_url
}))





