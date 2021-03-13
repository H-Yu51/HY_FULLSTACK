import * as React from 'react';
// typescript 多写点什么呢？ 
// 保证代码的正确性 
// export const MemberHeader = () => {   没有return也不报错   
export const MemberHeader:React.FC<{}> = ({}) => {  // ts保证代码正确性
  return (
    <tr>
      <th>Avatar</th>
      <th>Id</th>
      <th>Name</th>
    </tr>
  )
}
