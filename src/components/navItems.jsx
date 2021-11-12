import React from 'react'
import {BsSearch} from 'react-icons/bs'
import {HiLocationMarker} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import styled from "styled-components";
import { useState } from "react";
import Incrementor from "./incrementor";

const Holder = styled.div`
  display: flex;
  -webkit-box-shadow: 7px 5px 11px -1px rgba(11, 33, 51, 0.92);
  box-shadow: 7px 5px 11px -1px rgba(11, 33, 51, 0.92);
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1e88e5;
  width: 120px;
  height: 180px;
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  width: 220px;
`;

const Display = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  font-size: 3rem;
`;

const min = 0;
const max = 10;
const NavItems = (props) =>{
    const [value, setValue] = useState(min);

    
    return(
        <div className="w-full container absolute  bg-white h-s">

            <div className="flex p-1 hp:flex hp:flex-col justify-around">
                <div className="flex rounded-lg pr-48  flex-col border-gray-700">
                    <div className="flex px-8 py-4 rounded-lg pr-48  flex-col border-gray-700">
                        <label className="font-mulish text-xs uppercase">location</label>
                        <p className="font-mulish text-sm uppercase mt-2 text-gray-400 font-normal">Helnski, finland</p>
                    </div>
                    <div className="flex flex-col justify-self-start my-4">
                        <button className="font-mulish text-sm flex  my-8   uppercase mt-2 text-gray-400    font-normal"><Search icon={<HiLocationMarker size="24" className=" text-gray-700 mx-4  "/>}/>  Helnski, finland</button>
                        <button className="font-mulish text-sm flex my-8  uppercase mt-2 text-gray-400   font-normal"><Search icon={<HiLocationMarker size="24" className=" text-gray-700 mx-4  "/>}/>  Helnski, finland</button>
                        
                    </div>
                </div>

                <div className="flex px-8 py-4 rounded-lg pr-48 hp:invisible  flex-col mx-4 border-gray-700">
                    <label className="font-mulish text-xs uppercase">add guests</label>
                    <p className="font-mulish text-sm mt-2 uppercase text-gray-400">adult </p>
          <Incrementor
            value={value}
            onChange={(v) => setValue(v)}
            min={min}
            max={max}
            ks
          />
                    <p className="font-mulish text-sm mt-2 uppercase text-gray-400">children </p>
          <Incrementor
            value={value}   
            onChange={(v) => setValue(v)}
            min={min}
            max={max}
            ks
          />
                </div>
                <div className="flex px-8  py-4 rounded-lg   font-mulish    border-gray-700">
                    <button className="flex text-red-700"><Search icon={<BsSearch size="24" className=" text-red-700 mx-4 " />} />search</button>
                    <a href="/" className="flex text-red-700"><Search icon={<AiOutlineClose size="24" className=" text-red-900 mx-4 " />} /></a>
                </div>
                
                <div>
                
                </div>

            </div>
        </div>
    )
}
const Search = ({icon}) =>{
    return(
        <div>
            {icon}
        </div>
    )
}
export default NavItems
