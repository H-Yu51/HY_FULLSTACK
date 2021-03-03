// 数据是要类型化的， 
// 拿着数据做一大波操作， 为了不掉链子
// export type User = {   
//     name: string;
//     age: number;
//     occupation?: string;
//     role?:string;   // ?  可有可无
//   };
// 用户表里 有的用户是role 管理员 

interface User {/*接口 */
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;  // 普通用户和管理员
export const users: Person[] = [ // ts 类型的约束， 每个元素，满足
    {
        name: '黄志乾',
        age: 18,
        occupation: "Chimney sweep",

    },
    {
        name: "郑孝龙",
        age: 18,
        occupation: "Astronaut"
    },
    {
        name: '徐蕊',
        age: 18,
        role: "Administrator"
    },
    {
        name: "廖辉",
        age: 18,
        role: '主任'
    }
];
export function logPerson(user: Person) {
    console.log(`- ${user.name}, ${user.age}`);
    let additionalInformation: string;
    // // <>  泛型
    // if((<Admin>user).role){
    //     additionalInformation = (<Admin>user).role;
    // }else{
    //     additionalInformation = (<User>user).occupation;
    // }
    // console.log(`${user.name} ${user.age} ${additionalInformation}`);

    if("role" in user){
        additionalInformation = (<Admin>user).role;
    }else{
        additionalInformation = (<User>user).occupation;
    }
    console.log(`${user.name} ${user.age} ${additionalInformation}`);

    
}

users.forEach(logPerson);
