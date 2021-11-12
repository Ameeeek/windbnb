import React from 'react'
import {BsSearch} from 'react-icons/bs'
import {useState} from 'react';


const Navbar = (props) => {
    
    const [open, setOpen] = useState(false);

    return (
        <div>
            <nav className="navbar justify-between flex hp:flex-col">
                <h1 className="text-xl font-bold font-mulish text-red-700 ">windbnb</h1>
                    <div className="flex p-1 font-bold font-mulish">
                        <button onClick={() => setOpen(!open)} className="mx-4">Helnski, finland </button>
                        <button onClick={() => setOpen(!open)} className="mx-4 invisible text-gray-400">add guests</button>
                        <button onClick={() => setOpen(!open)} className="mx-4"><Search icon={<BsSearch size="24" className="text-red-700" />} /></button>
                        
                    </div>
                    {open && props.children}
            </nav>

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
export default Navbar
