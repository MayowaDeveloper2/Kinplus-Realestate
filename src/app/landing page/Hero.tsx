'use client'

import React from 'react';
import Image from 'next/image';
import kinplusimage from "../images/kinplus realestate.png";
import manager1 from "../images/manager1.jpg";
import manager2 from "../images/manager2.jpg";
import manager3 from "../images/manager3.jpg";
import { IoIosSearch } from "react-icons/io";
import Autocomplete from 'react-google-autocomplete';

export default function Hero() {
    return (
        <>
            <div className='flex-col lg:flex-row flex h-screen w-full items-center px-24 relative bg-gradient-to-b from-white to-[#CAB6F7]  rounded-b-[400px]'>
                <div>
                    <div className='text-7xl text-black w-[680px]'>Buy, rent, or sell your property easily</div>
                    <div className='text-[18px]  text-black first-line:mt-5'>A great platform to buy, sell, or even rent your properties without any commissions.</div>
                    <div className='flex mt-5 items-center'>
                        <div className='flex -space-x-4'>
                            <Image className='w-10 h-10 border-2 border-white rounded-full' src={manager1} alt="manager1"/>
                            <Image className='w-10 h-10 border-2 border-white rounded-full' src={manager2} alt="manager2" />
                            <Image className='w-10 h-10 border-2 border-white rounded-full' src={manager3} alt="manager3" />
                            <a className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+99 </a>
                        </div>
                        <div className='ml-2 text-black'>Customers Using Kinplus Real Estate Service</div>
                    </div>
                    <div>
                        <form className="bg-white h-[50px] flex items-center mt-10">
                            <Autocomplete 
                                apiKey="AIzaSyDuuMjUF2QpZBtM3J4deM-lpSCYI22FOIE"
                                placeholder='Enter an address, neighborhood, city, or ZIP code'
                                className='w-[600px] px-4 border-none outline-none'
                                onPlaceSelected={(place) => {
                                    console.log(place);
                                }}
                                options={{
                                    types: ['geocode'],
                                    componentRestrictions: { country: 'ng' } // Restrict to a country
                                }}
                            />
                            <IoIosSearch className='text-[24px]' />
                        </form>
                    </div>
                </div>
                <div>
                    <Image className='w-[750px] h-[750px]' src={kinplusimage} alt="kinplus" />
                </div>
            </div>
        </>
    )
}
