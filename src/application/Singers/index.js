import React, { useState } from 'react'
import { NavContainer } from "./style";
import Horizen from '../../baseUI/horizen-item'
import { categoryTypes, alphaTypes } from '../../api/config'


function Singers () {
    let [category, setCategory] = useState ('');
    let [alpha, setAlpha] = useState ('');
  
    let handleUpdateAlpha = (val) => {
      setAlpha (val);
    }
  
    let handleUpdateCatetory = (val) => {
      setCategory (val);
    }

    const singerList = [1, 2,3, 4,5,6,7,8,9,10,11,12].map (item => {
        return {
          picUrl: "https://p2.music.126.net/uTwOm8AEFFX_BYHvfvFcmQ==/109951164232057952.jpg",
          name: "隔壁老樊",
          accountId: 277313426,
        }
    })
     


  return (
    <NavContainer>
      <Horizen 
        list={categoryTypes} 
        title={"分类 (默认热门):"} 
        handleClick={handleUpdateCatetory} 
        oldVal={category}></Horizen>
      <Horizen 
        list={alphaTypes} 
        title={"首字母:"} 
        handleClick={val => handleUpdateAlpha (val)} 
        oldVal={alpha}></Horizen>
    </NavContainer>

  )
}

export default React.memo (Singers);