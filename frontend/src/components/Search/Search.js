import React, {useState} from 'react';
import './search.css';
import { BiSearch } from 'react-icons/bi';
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
export const Search = () => {
    const [setDate]=useState();
    return (
        <div className='border-input'>
            <div className="inputWithIcon">
                <input type="text"/>
                <BiSearch className='icon' />
            </div>
            <div className="line"></div>
            <div className="inputWithIconDate">
                <input type="date"  />
                < BsFillArrowRightCircleFill className='button' onChange={(event) => setDate({startDate: event.target.value})} />
            </div>
        </div>
    )
}
