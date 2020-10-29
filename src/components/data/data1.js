import Mock from 'mockjs';

// Mock.mock('http://api.com', {
//   "user|5-10": [{
//     'name': '@cname', //中文名称
//     'age|1-100': 100, //100以内随机整数
//     'birthday|1': '@date("yyyy-MM-dd")', //日期
//     'city': '@city(true)' //中国城市
//   }]
// });
Mock.mock('/login', {
    'loginInfo|0-1': 100, //0、1
    'user':{
        "name":"XiaoMing",
        "id":1
    }
});