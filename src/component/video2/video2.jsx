import React,{useState} from 'react';
import './video2.css'
export function Video2() {



    const [show, setShow] = useState(1);
    const click = (index) => {
setShow(index)
    }

    return (
        <div className={'video2'} >
                <div className={'ifram2'}>
                <iframe className={'frame2'} src={'https://player.vimeo.com/video/953229577?autoplay=1&dnt=1&background=1&turnstile=0.-b11nrPF0gQBAt28oZ8MuqtRmbgpVlbZycIf2XDOogsZFxoti3fjMhuNCy9YO_i4t_QfOKsOA18avPTjBQWO8LYTCWd5ypgd6BiEqzV9Tt9_at36cXbibrUUYZivtkvqTKwptvf9Zu0ONIv_rbnX4iPNU1mg3wmkyVoboC7SkGVHOTGnXKR6pjmufGtWR4dejJbWMu_pMUcjq1McSmvla94QSk0gUAyRaVmxRWy2-UoCTkO57fa9QhM-b87Ikv0b4r1rGZE71VENjrMPcjHEL2X3qebwRBmNBhA0LvMbiglq3RSvmvax3wLOOPAnC7Cs_NqNhF6qkcJenRAHJj0nxsKY6wN3QbwW3rYLIq15bJ-A7vLtVm9l45M85DCV5b4YHiopSuA-yoaa5fjnNZxxb5CKxkTrc6bT5mjSRHmQoYDWE2CfaymUVhWHJDMfMOrWpF46AadKnveW-oVOS5hX8A.c73DCVfFhj3Ryz8TVHV4AQ.f173e240fc677917a807f88a5487fc388c9d27dcc6e6121e3ae7b82962715498&ref=https%253A%252F%252Fsentry.io%252F'}>
                </iframe>
                </div>
            <div className={'video3'}>
                <h1 className={'h111'}>Tracing</h1>
                <p className={'p111'}>Don't just observe, Take Action</p>
                <button onClick={() => click(1)} className={'btn123'}>Find and fix the problem, no matter where it occurs</button>

                <div className={'vid123'} style={{display: show === 1 ? 'block':'none'}}>

                    <h3>Find and fix the problem, no matter where it occurs</h3>
                    <p>With Tracing, see the complete, end-to-end path that data takes through your distributed system
                        to pinpoint the exact origin of an issue. Navigate to a trace from a correlated metric, specific
                        issue, or</p>
                    <a href="#">Learn More</a>
                </div>
                <button onClick={() => click(2)} className={'btn123'}>Solve Slow , fast</button>
                <div className={'vid123'} style={{display: show === 2 ? 'block':'none'}}>

                    <h3>Solve Slow , fast</h3>
                    <p>
                        Sentry automatically detects and notifies you of critical performance issues so you can trace
                        every slow transaction to a poor-performing API call or DB query.</p>
                    <a href="#">Learn More</a>
                </div>
                <button onClick={() => click(3)} className={'btn123'}>Measure what matters</button>

                <div className={'vid123'} style={{display: show === 3 ? 'block':'none'}}>

                    <h3>Measure what matters</h3>
                    <p>
                        Track and visualize custom data points across services and proactively spot any spikes, dips, or other anomalies.</p>
                    <a href="#">Learn More</a>
                </div>


            </div>
        </div>
    )
}