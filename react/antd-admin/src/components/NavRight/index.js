import React ,{useState,useEffect}from 'react'
import {Tag} from 'antd'
import{NavLink} from 'react-router-dom'
import axios from 'axios'



const NavRight = ()=>{
    const [tagList,setTagList] = useState([])
    const getTagAPIList = ()=>{
        axios
            .get('/tags')
            .then(res=>{
                console.log(res)
            })
    }
    useEffect(()=>{
        getTagAPIList()
    },[])
    
    return(
        <>
        </>
    );
}




export default NavRight;
