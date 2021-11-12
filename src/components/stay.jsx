import React from 'react'
import image from '../images/gambar1.jpg'
import {AiTwotoneStar} from 'react-icons/ai'
const stay = () => {
    return (
        <div className="card-main-container hp:flex hp:flex-col flex justify-around">
            <div className="card-container p-12">
                <div className="card-image">
                    <img alt="gambar1" className="w-96 rounded-md h-56 object-cover object-center" src={image}></img>
                </div>
                <div className="card-content">
                    <div className="card-content-tags font-Montserrat flex flex-col pt-1">
                        <div className="cards-contentt flex">

                        <div className="card-tags flex">
                            <h1 className="text-sm p-1 font-bold text-gray-900 rounded-lg border-2 border-gray-800">super host</h1>
                            <h1 className="text-sm p-1 text-gray-600">entire apartment</h1>
                        </div>
                        <div className="cards-tag-rating flex ">
                            <Rating icon={<AiTwotoneStar className="text-red-700 mt-1" size="24"/>}/>
                            <p className="p-1">4.5/5</p>
                        </div>
                        </div>
                        <div className="cards-main-text">
                            <h1 className="text-xl font-bold font-mulish mt-3 text-gray-900">Stylist apartment in center of the city</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-container p-12">
                <div className="card-image">
                    <img alt="gambar1" className="w-96 rounded-md h-56 object-cover object-center" src={image}></img>
                </div>
                <div className="card-content">
                <div className="card-content-tags font-Montserrat flex flex-col pt-1">
                        <div className="cards-contentt flex">

                        <div className="card-tags flex">
                            <h1 className="text-sm p-1 font-bold text-gray-900 rounded-lg border-2 border-gray-800">super host</h1>
                            <h1 className="text-sm p-1 text-gray-600">entire apartment</h1>
                        </div>
                        <div className="cards-tag-rating flex ">
                            <Rating icon={<AiTwotoneStar className="text-red-700 mt-1" size="24"/>}/>
                            <p className="p-1">4.5/5</p>
                        </div>
                        </div>
                        <div className="cards-main-text">
                            <h1 className="text-xl font-bold font-mulish mt-3 text-gray-900">Stylist apartment in center of the city</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-container p-12">
                <div className="card-image">
                    <img alt="gambar1" className="w-96 rounded-md h-56 object-cover object-center" src={image}></img>
                </div>
                <div className="card-content">
                <div className="card-content-tags font-Montserrat flex flex-col pt-1">
                        <div className="cards-contentt flex">

                        <div className="card-tags flex">
                            <h1 className="text-sm p-1 font-bold text-gray-900 rounded-lg border-2 border-gray-800">super host</h1>
                            <h1 className="text-sm p-1 text-gray-600">entire apartment</h1>
                        </div>
                        <div className="cards-tag-rating flex ">
                            <Rating icon={<AiTwotoneStar className="text-red-700 mt-1" size="24"/>}/>
                            <p className="p-1">4.5/5</p>
                        </div>
                        </div>
                        <div className="cards-main-text">
                            <h1 className="text-xl font-bold font-mulish mt-3 text-gray-900">Stylist apartment in center of the city</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const Rating = ({icon}) =>{
    return(
        <div>
            {icon}
        </div>
    )
}
export default stay
