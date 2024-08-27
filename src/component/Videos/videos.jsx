import './videos.css'
import {useState} from "react";
export function Videos() {
 const [activeDiv, setActiveDiv] =   useState(1)
    const click = (index) =>{
     setActiveDiv(index)
    }




    return (
        <div className="videos">
            <div>
                <h4 className={'h4'}>Error Monitoring</h4>
                <h1 className={'h122'}>Identify, debug, and resolve</h1>
                <button  onClick={() => click(1)} className={'btn33'} id={'btn1'}>Prioritize what matter</button>

                <div style={{display: activeDiv === 1 ? 'block' : 'none'}} className="box111" id={'div1'}>

                    <h3>Prioritize what matters</h3>
                    <p>Triage issues based on impacted <br/> customers</p>
                    <a href="#">READ THE DOCS</a>
                </div>
                <br/>
                <button onClick={() => click(2)} className={'btn22'} id={'btn2'}>Find the root Cause</button>

                <div id={'div2'} className="box222" style={{display: activeDiv === 2 ? 'block' : 'none'}}>

                    <h3>Find the root Cause</h3>
                    <p>Get all the context. Sentry will tell you the environment, device, OS, even the very commit that
                        introduced the error - down to the broken line of code.</p>
                    <a href="#">READ THE DOCS</a>
                </div>
                <button onClick={() => click(3)} className={'btn33'} id={'btn3'}>Automated Everything</button>

                <div id={'div3'} className="box222" style={{display: activeDiv === 3 ? 'block' : 'none'}}>

                    <h3>Automated Everything</h3>
                    <p>Keep your entire team informed with custom alerts in Slack, two-way sync issues with Jira, and
                        track releases from GitHub, Vercel, or Netlify.</p>
                    <a href="#">READ THE DOCS</a>
                </div>

            </div>

            <div className={'iframe'}>
                <iframe className={"frame"}
                        src={'https://player.vimeo.com/video/885736465?autoplay=1&dnt=1&background=1&turnstile=0.WIkuf9TV2UzydLiiFdati0mlvdGYovKVkvfvufriNcQKGT3SUrFzwLe2Dq5enD52hggfvSuENtg9LNpBhlyAugFC80kWgbTGCy9SHzhCVSHqgmzXxlYM_hFpi1cbGRcs1izRAW-QPKESA62FhDaa5KmzTbsmA_zq5I8OAzFgyXV5FuG-XN9p6L7u0BfIVR_T_h4SZMWePgsSBao78kAgPkK5iD9J-oqJblc6_5vTUcxL8qLvcs6ZcQXT3I6t74gzk251RnFCEUp6903QUnzjTUpiePeSaP_QURsMiMnY4PBTudXE_11DwvsAChF6jsL4a-2PDP4e8y3R8KBumbr7m5KrvOPOO8dOtullTU9MeO3saTPvVt3vQRXuzoF_Ce5mB6mXLl_Qj-1sTjU9NcTbqeBipo2YGn9fHUj1jRvgh9pKERJIBg5sog39KdsgAhU9wprWIOrbwrtLCeWLXc2qRg.qM8NqtUg9gB8RJa3xSTQkQ.b8aa024affc6b50caaa8461e3893765c45c69cea0eaaf756cbd9c4de36e6fbc0&ref='}> </iframe>
            </div>
        </div>
    )

}