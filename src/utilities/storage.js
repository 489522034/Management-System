//把用户信息储存在loaclStorage里
import store from 'store'
//提前写好防止拼写错误
const userKey='user_key';
export default{
    //添加用户
    addUser(user){
        store.set(userKey,user);
    },
    //读取用户
    getUser(){
        return store.get(userKey)||{};
    },
    //移除用户
    removeUser(){
        store.remove(userKey);
    }
}



// 原生js loaclStorage存储
// const userKey='user_key';
// export default{
//     //添加保存用户
//     saveUsuer(user){
//         //因为第二个参数是需要是一个字符串，这时候用JSON.stringfy转化对象为 对象字符串(JSON格式)
//         localStorage.setItem(userKey,JSON.stringify(user));
//     },
//     //获取用户
//     getUser(){
//         //解析获得的字符串格式的对象=>对象
//         return JSON.parse(localStorage.getItem(userKey) || '{}');
//     },
//     //移除用户
//     removeUser(){
//         localStorage.removeItem(userKey);
//     }
// }