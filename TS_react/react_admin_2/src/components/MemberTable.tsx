import * as React from 'react';
import {useState} from 'react'
import { MemberEntity } from '../model/member'
import { getMembersCollection } from '../api/memberApi'
import { Table, Tag, Space } from 'antd'
export const MemberTable = () => {
    const [members,setMember] = useState<MemberEntity[]> ([])
    const [dataSource,setdataSource] = useState([])
    React.useEffect(() => {
        getMembersCollection()
            .then((data) => {
                console.log(data); 
                setMember(data)            
            })
    },[])
//    const columns = []:<MemberEntity[]>
    return (
        <div>
            <h2>Sample App</h2>
            <Table dataSource={dataSource}  />;
        </div>


    )
}






