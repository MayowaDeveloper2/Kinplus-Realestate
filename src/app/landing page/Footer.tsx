import facebook from "../images/facebook-rounded-border-svgrepo-com.svg";
import twitter from "../images/twitter-rounded-border-svgrepo-com.svg";
import Image from "next/image";
import instagram from "../images/instagram-rounded-border-svgrepo-com.svg";



export default function Footer() {
    return (
        <>
            <div className="grid grid-cols-4 bg-[#3a0ca3] px-24 py-20 mt-20">
                <div className="text-white">
                    <div>Kinplus Real Estate</div>
                    <div>Ikole, Ikole Local Government, Ekiti State</div>
                    <div>+234 810-214-2296</div>
                    <div>support@kinplusrealestate.com</div>
                </div>
                <div className="text-white">
                    <span className="text-4xl">Quick Links</span>
                    <div className="mt-4">
                        <div>Home</div>
                        <div>About</div>
                        <div>Listings</div>
                        <div>Services</div>
                        <div>Blogs</div>
                        <div>Become An Agent</div>
                    </div>
                </div>
                <div className="text-white">
                    <span className="text-4xl">Discovery</span>
                    <div className="mt-4">
                        <div>Ikole</div>
                        <div>Ado-Ekiti</div>
                        <div>Ido-Ekiti</div>
                        <div>Ayedun-Ekiti</div>
                    </div>
                </div>
                <div className="text-white">
                    <span className="text-4xl">Follow Us On</span>
                    <div className="flex gap-4 mt-4">
                        <Image src={facebook} alt="facebook" className="w-6 h-6"/>
                        <Image src={twitter} alt="twitter"  className="w-6 h-6"  />
                        <Image src={instagram} alt ="instagram"  className="w-6 h-6"/>

                    </div>
                </div>

            </div>
        </>
    )
}