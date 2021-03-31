import { request } from 'express'
import { createPostfix } from 'typescript'
import { postModel } from './post.model'
import {connection} from '../app/database/mysql'
/**
 * 新增文章
 */
export const createPost = async (post: postModel) => {
    const statement = `
    INSERT INTO post
    SET ?
    `;
    // 每次用户访问 走数据库
    // 保存
    // list  select redis  内存数据 作为缓存 
    const [data] = await connection.promise().query(statement, post);
    return data;
}
// export default createPost