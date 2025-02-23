'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import brand1 from "../images/Logo (10).svg";
import brand2 from '../images/Logo (8).svg';
import brand3 from "../images/Logo (9).svg";
import brand4 from "../images/id9ckF4rJ5_1739886150398.svg";
import house1 from "../images/luxury-water-swimming-resort-hotel.jpg";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { BsQuote } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import home1 from "../images/Open House Realestate Instagram Post (3000 x 3000 px) (1).png"
import home2 from "../images/Open House Realestate Instagram Post (3000 x 3000 px) (2).png"
import home3 from "../images/Open House Realestate Instagram Post (3000 x 3000 px).png";
import person1 from "../images/headshot-portrait-security-guard-work-smiling1.jpg";
import person2 from "../images/headshot-portrait-security-guard-work-smiling1.jpg";
import person3 from "../images/headshot-portrait-security-guard-work-smiling1.jpg";
import person4 from "../images/headshot-portrait-security-guard-work-smiling1.jpg";
import agentman from "../images/portrait-stylish-smiley-man.png";



export default function Bodysection () {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleprev = () => {
        setCurrentIndex((prevIndex) => (prevIndex == 0 ? Testimonials.length - 1: prevIndex - 1));
    }

    const handlenext = () => {
        setCurrentIndex((prevIndex) => (prevIndex == Testimonials.length - 1 ? 0: prevIndex + 1));
    }

    const ListedProperties = [
        { src:house1, alt:"house1", location:"104 Ikole Local Government Secretariat", propertyTitle: "Bungalow in the City", price: "$200", bed:"5", bathroom:"3", tag:'Rent'},
        { src:house1, alt:"house1", location:"104 Ikole Local Government Secretariat", propertyTitle: "Bungalow in the City", price: "$200", bed:"5", bathroom:"3", tag:'Rent'},
        { src:house1, alt:"house1", location:"104 Ikole Local Government Secretariat", propertyTitle: "Bungalow in the City", price: "$200", bed:"5", bathroom:"3", tag:'Rent'},
        { src:house1, alt:"house1", location:"104 Ikole Local Government Secretariat", propertyTitle: "Bungalow in the City", price: "$200", bed:"5", bathroom:"3", tag:'Rent'},
        { src:house1, alt:"house1", location:"104 Ikole Local Government Secretariat", propertyTitle: "Bungalow in the City", price: "$200", bed:"5", bathroom:"3", tag:'Rent'},
        { src:house1, alt:"house1", location:"104 Ikole Local Government Secretariat", propertyTitle: "Bungalow in the City", price: "$200", bed:"5", bathroom:"3", tag:'Rent'},
    ]

    const Testimonials = [
        {src:person1, personname: "Akintoye Mayowa", kinplustestimonial: "I highly recommend Kinplus Real Estate for students seeking apartment having perfect atmosphere for their schooling activities"},
        {src:person2, personname: "Emmanuel Toyosi", kinplustestimonial: "Finding a student-friendly apartment was a challenge until I discovered Kinplus Real Estate. The environment is peaceful and perfect for my studies!"},
        {src:person3, personname: "Feyi Kolawole", kinplustestimonial: "I'm grateful to Kinplus Real Estate for providing a comfortable and study-friendly environment. It's the perfect place for students who value both convenience and tranquility."},
        {src:person4, personname: "Chukemeka Jonathan", kinplustestimonial: "Thanks to Kinplus Real Estate, I now live in an apartment that supports my academic goals. The surroundings are quiet, safe, and student-friendly!"}

    ]
    return (
        <>
            <div className='flex flex-col w-full mt-10'>
                <div className='text-center text-[18px] font-bold text-black'>Trusted by 100+ Companies across the globe!</div>
                <div className='flex gap-10 mt-4 justify-center'>
                    <Image src={brand1} alt="brand1"/>
                    <Image src={brand2} alt="brand2" />
                    <Image src={brand3} alt="brand3" />
                    <Image src={brand4} alt="brand4" />
                </div>
                <div className='px-24'>
                    <div className='flex flex-row items-center mt-10'>
                        <div className='w-1/2'>
                            <div className='text-black'>CHECKOUT OUR NEW</div>
                            <div className='text-2xl font-bold text-black'>Latest Listed Properties</div>
                        </div>
                        <div className='w-1/2 flex justify-end'>
                            <ul className='flex text-black space-x-4'>
                                <li className='border px-8 py-2 rounded-full'> All</li>
                                <li className='border px-8 py-2 rounded-full'> Sell</li>
                                <li className='border px-8 py-2 rounded-full'> Rent</li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className='px-[100px] grid grid-cols-3 mt-5 gap-8 '>
                    {ListedProperties.map((property, index) => (
                        <div key={index} className='flex '>
                            <div>
                                <div className='relative'>
                                    <Image src={property.src} alt={property.alt} className='rounded-[30px] w-[400px] h-[300px]'/>
                                    <button className='absolute top-8 right-4 bg-blue-500 px-4 py-2 text-white' >{property.tag}</button>
                                </div>
                                <div className='mt-3 text-black text-[18px]'>{property.price}</div>
                                <div className='font-bold text-black text-[24px]'>{property.propertyTitle}</div>
                                <div>{property.location}</div>
                                <div className='flex gap-5'>
                                    <span className='flex items-center text-black'> <FaBed className='mr-2'/> 4 Beds</span>
                                    <span className='flex items-center text-black'> <FaBath className='mr-2' /> 3 Bath</span>
                                </div>
                            </div>

                        </div>

                    ))}

                </div>
                <div className='px-24 mt-20 bg-[#3a0ca3] py-10'>
                    <div className='text-white text-3xl '>Explore our properties</div>
                    <div className='flex flex-row gap-8 mt-5'>
                        <div className='relative'>
                            <Image src={home1} alt='home1' className='w-[500px] h-[300px] rounded-3xl'/>
                            <div className='absolute top-8 ml-7 text-2xl font-bold text-black'>Own landed properties</div>
                        </div>
                        <div className='relative'>
                            <Image src={home2} alt='home1' className='w-[500px] h-[300px] rounded-3xl'/>
                            <div className='absolute top-8 ml-7 text-2xl font-bold text-black'>Buy a House</div>
                        </div>
                        <div className='relative'>
                            <Image src={home3} alt='home1' className='w-[500px] h-[300px] rounded-3xl'/>
                            <div className='absolute top-8 ml-7 text-2xl font-bold text-black'>Rent a Home</div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center w-full px-24 mb-8'>
                    <div className='flex flex-row items-center w-full'>
                        <div className='w-1/2'>
                            <div className='text-black text-[15px]'>TESTIMONIALS</div>
                            <div className='text-3xl font-bold text-black'>Look at What Our Customers Say!</div>
                            <div className='text-black'>Hear from Our Happy Customers</div>
                            <div className='flex flex-row mt-5 gap-5'>
                                <IoArrowBackCircleOutline onClick={handleprev} className='text-[40px]' />
                                <IoArrowForwardCircleOutline onClick={handlenext} className='text-[40px]' />
                            </div>
                        </div>
                        <div className='relative flex items-center justify-center mt-10 w-1/2'>
                            <div className='w-[600px] overflow-hidden'>
                                <div className="flex transition-transform duration-500 ease-in-out" style={{transform: `translateX(-${currentIndex * 100}%)`}}>
                                    {Testimonials.map((testimonial, index) => (
                                        <div key={index} className="flex-shrink-0 w-full p-6 rounded-lg bg-blue-100 text-black shadow-lg">
                                            <BsQuote className="text-3xl text-gray-400 mb-3" />
                                            <div className='text-lg'>{testimonial.kinplustestimonial}</div>
                                            <hr className='my-3 border-gray-300' />
                                            <div className='flex items-center space-x-4'>
                                                <Image src={testimonial.src} alt="person" className='h-10 w-10 rounded-full' />
                                                <div>
                                                    <span className='font-bold'>{testimonial.personname}</span>
                                                    <div className='flex text-yellow-500'>
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaRegStarHalfStroke />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
                <div className='flex justify-center mt-32'>
                    <div className='relative justify-evenly items-center flex w-[1200px] h-[300px] bg-[#3a0ca3] rounded-[40px]'>
                        <Image src={agentman} alt="agent man" className='w-[300px] left-0  bottom-0 absolute' />
                        <div className='ml-[300px]'>
                            <div className='text-white text-5xl'>Become an Agent.</div>
                            <div className='mt-3 text-white'>Join our network of top real estate professionals</div>
                        </div>
                        <button className='bg-white rounded-3xl text-[#3a0ca3]  w-[200px] h-[40px]'>Register Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}