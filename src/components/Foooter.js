import React from "react";
import "../styles/Footer.css";

export default function Footer(){
    const onlineShopping = ["Men","Women","Kids","Home & Living","Beauty","Gift Cards","Myntra Insider"];
    const usefulLinks = ["Blog", "Careers", "Site Map", "Corporate Information", "Whitehat"];
    const customerPolicies = ["Contact Us", "FAQ", "T&C", "Terms Of Use", "Track Orders", "Shipping", "Cancellation", "Returns", "Privacy Policy", "Grievance Officer"];
    return (
        <footer id="footer">
            <div className="footerItem">
                <p className="itemHeading">ONLINE SHOPPING</p>
                {
                    onlineShopping.map((item, idx)=>(
                        <p key={idx} className="itemSubHeading">{item}</p>
                    ))
                }

                <p className="itemHeading">USEFUL LINKS</p>
                {
                    usefulLinks.map((item, idx)=>(
                        <p key={idx} className="itemSubHeading">{item}</p>
                    ))
                }
            </div>

            <div className="footerItem">
                <p className="itemHeading">CUSTOMER POLICIES</p>
                {
                    customerPolicies.map((item, idx)=>(
                        <p key={idx} className="itemSubHeading">{item}</p>
                    ))
                }
            </div>

            <div className="links">
                <p className="itemHeading">EXPERIENCE MYNTRA APP ON MOBILE</p>
                <a href="https://play.google.com/store/apps/details?id=com.myntra.android" target="_blank">
                    <img  src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"/>
                </a>
                
                <a href="https://itunes.apple.com/in/app/myntra-indias-fashion-store/id907394059" target="_blank">
                    <img src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"/>
                </a>

                <p className="itemHeading">KEEP IN TOUCH</p>
                <a href="https://www.facebook.com/myntra" className="desktop-facebook" target="_blank">
                    <img src="https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png" style={{width: "20px", height: "20px"}} />
                </a>

                <a href="https://twitter.com/myntra" className="desktop-twitter" target="_blank">
                    <img src="https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png" style={{width: "20px", height: "20px"}} />
                </a>

                <a href="https://www.youtube.com/user/myntradotcom" className="desktop-youtube" target="_blank">
                    <img src="https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png" style={{width: "20px", height: "20px"}}/>
                </a>

                <a href="https://www.instagram.com/myntra" className="desktop-instagram" data-reactid="108" target="_blank">
                    <img src="https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png" style={{width: "20px", height: "22px", position: "relative", top: "1px"}}/>
                </a>
            </div>

            <div id="promise">
                <div className="promiseDiv">
                    <div className="imgContainer">
                        <img src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" style={{width: "48px", height: "40px"}} />
                    </div>

                    <div className="titleContainer">
                        <strong>
                            100% ORIGINAL
                        </strong>
                        {" "}guarantee for all products at myntra.com
                    </div>
                </div>
                
                <div className="promiseDiv">
                    <div className="imgContainer">
                        <img src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png" style={{width: "48px", height: "49px"}} />
                    </div>
                    <div className="titleContainer">
                        <strong>
                           Return within 30days
                        </strong>
                        {" "}of receiving your order
                        </div>
                    </div>
                </div>
        </footer>
    )
}