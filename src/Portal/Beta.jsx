import React from "react";
import { ImArrowRight2 } from "react-icons/im";
import BannerBeta from "./BannerBeta";
import BannerV3 from "./Bannerv3";
import Download from "./sections/Download";
import SupportSocial from "./sections/SupportSocial";


const Beta = () => {

    window.scrollTo(0, 0);

    return (
        <>
            <BannerBeta></BannerBeta>
            < div className={`beta-section inherit-grid`
            }>

                <div className="about-section section">
                    <h1 >
                        Welcome to Niceland VPN free and open beta <br></br>
                    </h1>
                    <h3 >
                        Just download and install to join the beta, registration is in the app!
                    </h3>
                    NicelandVPN is currently in development and we have finally reached enough stability to enter a Beta phase. Even though we consider the app to be stable enough to be revealed to the public, there might still be undiscovered bugs.
                    <br></br>
                    <br></br>
                    We need your help to squash those bugs!
                </div>

                <div className="more-about-section section">
                    <h1>Why did we create a new VPN platform from scratch ?</h1>
                    Most VPNs today re-sell open source software such as OpenVPN or WireGuard, both of these platforms have served VPN users for years and proven themselves to be fairly reliable. However, re-selling a pre-build VPN platform limits you to the implementation of that specific platform. <br /><br />In short, the reason we made our VPN platform from scratch is because we wanted more customizability in order to accomplish the goals we set for NicelandVPN.
                    <br />
                    <br />
                    <h1>Out beta testing goals</h1>

                    <h2 className="more-space"><u>Anonymity</u></h2>
                    The most important goal for NicelandVPN was to accomplish as much anonymity as possible. Talking in depth about how we accomplish this goal would be a very long discussion.<br></br> We will be adding a detailed section about security and anonymity to the website at a later date.
                    <br />
                    <br />
                    <b>in the meantime here is an short list of methods we use to keep our users safe</b>
                    {/* <h4> */}
                    <br></br>
                    <br></br>
                    - The app is not DNS dependent in order to operate properly
                    <br />
                    - Connection Meta Data uses byte-tag system instead of IPs
                    <br />
                    - No user specific network logs are collected by Niceland
                    <br />
                    - Meta Data is instantly deleted upon disconnecting
                    <br />
                    - Accounts can be created using usernames/tokens
                    <br />
                    - No logs are generated regarding user activity
                    <br />
                    - All functionality operates on port 443/tcp
                    <br />
                    - No user activity is tracked in any form
                    <br />
                    - Anonymous payments (crypto/cash)
                    <br />
                    - Prevention of DNS and IPv6 leaks
                    <br />
                    - Double VPN by default
                    <br />

                    {/* </h4> */}



                    <h2 className="more-space"><u>Quality Of Service</u></h2>
                    This goal is very important to us. Most VPNs out there assign to many users to a single VPN and do not take into account traffic spikes and other factors that may decrease their users available bandwidth. <br></br>
                    <br />
                    In order to guarantee users a minimum amount of bandwidth we have implemented a custom algorithm which engages if any VPN is above 80% bandwidth usage. This algorithm prioritizes limiting users that are using a high amount of bandwidth and DOES NOT limit users that are at or below the minimum bandwidth threshold.
                    <br />
                    <br />
                    Additionally, there is no upper-limit to bandwidth, if the VPN has the bandwidth available, you can use it.

                    <h2 className="more-space"><u>Flexibility</u></h2>
                    Creating a service that could be customized down to the smallest details was very important. We wanted to offer users the ability to raise their minimum guaranteed bandwidth, add permanent session assignments, add more available device connections and so much more..


                </div>

                <div className="testing-section section">
                    <h1>What are we testing during this open beta?</h1>
                    - Multi-Platform Support (mac/linux/windows)<br></br>
                    - App(GUI) interface stability / operability <br></br>
                    - Encryption for the API/Proxy modules<br></br>
                    - Long-Term Connections<br></br>
                    - Firewall Penetration<br></br>
                    - Automatic Updates<br></br>
                    - Overall Stability<br></br>

                    {/* </h4> */}

                </div>

                <div className="notice-section section">
                    <h1>! NOTICES !</h1>
                    <p>- Additional Encryption for the internet traffic itself has not been enabled yet, this is in order to make overall debugging easier. However, your internet traffic is still protected in the same way as it would without the service enabled<br></br>
                        <br></br>
                        <u>The second encryption layer will be enabled at a later stage in the open beta </u> </p>

                    <p>- Minimum bandwidth during the open beta can not be guaranteed 100% of the time due to budget limitations. Currently we are utilizing shared network ports on VPS instances, which means we can not be 100% sure the servers always have the bandwidth availability advertised. However, we will be moving to dedicated hardware and network ports as soon as possible </p>

                    <p>- Some GEO blocked content will remain blocked while using the VPN, we are in the process of aquiring rented IP Addresses in order to bypass GEO restrictions</p>

                    <p>- Niceland is a Layer 3 VPN. So far we have implemented UDP and TCP transport protocols and will be working on things like ICMP in the near future.</p>

                </div>

                <div className="reporting-section section">
                    <h1>How to submit bug reports</h1>
                    Because we focus heavily on anonymity, we do not implement any kind of automatic bug reporting. At the moment our bug reporting process is a bit cumbersome.<br></br>
                    <br></br>
                    <h3>
                        <u>      To submit bug reports follow these steps
                        </u>
                    </h3>
                    - Open NicelandVPN and go to "Settings" in the menu on the left
                    <br></br>
                    - Inside the Settings page under "Other" click the button called "Logs"
                    <br></br>
                    - At the bottom of the Logs page there should be a link that says "new log file created".
                    <br></br>
                    - Go to the folder mentioned under "DIR" and in that folder you will find all the log files
                    <br></br>
                    - The format of the log files is: [date/time]-nicelandVPN.log
                    <br></br>
                    - Join one of our social platforms mentioned below to submit your bug report
                    <br></br>
                    - Or you can send them via email to support@nicelandvpn.is

                </div>


                <div className="support-section section">
                    <h1>Customer support?</h1>
                    We are currently working on an anonymous way of handling customer support, for now you can join the social platforms listed below or send us an email at support@nicelandvpn.is

                </div>



            </div>
            <SupportSocial></SupportSocial>
            <Download></Download>
        </>
    )
}

export default Beta;