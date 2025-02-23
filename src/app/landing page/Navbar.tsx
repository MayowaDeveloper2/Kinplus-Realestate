import React from "react";

export default function Navbar() {
    return (
        <div className="">
            <div className="w-full h-[40px] bg-customBlue flex flex-col lg:flex-row lg:items-center justify-center sm:text-[11px] text-white px-5 lg:px-48">
                <div className="lg:w-1/2">Housing Cent, 10 Ikole Ekiti State</div>
                <div className="lg:w-1/2 flex lg:justify-end space-x-4">
                    <span>+234 812 2454 756</span>
                    <span>support@kinplusrealestate.com</span>
                </div>
            </div>
            <div>
                <nav className="flex justify-between lg:mx-48 h-[50px] items-center">
                    <div>
                        <div>Kinplus RealEstate</div>
                    </div>
                    <ul className="flex gap-5 items-center">
                        <li>Home</li>
                        <li>About</li>
                        <li>Listings</li>
                        <li>Contact</li>
                    </ul>
                    <div className="flex gap-5 items-center">
                        <button className="bg-customBlue h-[40px] text-[13px] px-4 py-2 text-white rounded-3xl">Post Property</button>
                        <div>Sign Up</div>
                        <div>Login In</div>
                    </div>
                </nav>
            </div>
        </div>
        

        
    );
}
