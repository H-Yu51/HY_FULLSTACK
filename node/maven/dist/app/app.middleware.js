"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultErrorHandler = void 0;
const defaultErrorHandler = (error, request, response, next) => {
    if (error.message) {
        console.log(error.message, '++++++');
    }
    let statusCode, message;
    switch (error.message) {
        case 'NAME_IS_REQUIRED':
            statusCode = 400;
            message = '请提供用户名';
            break;
        case 'PASSWARD_IS_REQUIRED':
            statusCode = 400;
            message = '请提供密码';
            break;
        case 'USER_ALREADY_EXIT':
            statusCode = 409;
            message = '用户名被注册';
            break;
        case 'USER_DOES_NOT_EXIT':
            statusCode = 400;
            message = '用户不存在';
            break;
        case 'UNAUTHORIZED':
            statusCode = 401;
            message = "请先登录";
        case 'USER_DOES_NOT_OWN_RESOURCE':
            statusCode = 403;
            message = '您不能处理这个内容';
            break;
        case 'NOT_FOUND':
            statusCode = 404;
            message = '内容找不到';
            break;
        default:
            statusCode = 500;
            message = '运维小哥哥正在...';
            break;
    }
    response.status(statusCode).send({ message });
};
exports.defaultErrorHandler = defaultErrorHandler;
//# sourceMappingURL=app.middleware.js.map