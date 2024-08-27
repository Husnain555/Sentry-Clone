import './floot.css'
import center from './../../assets/imges/center.png'
import Left from './../../assets/imges/left.png'
import left1 from './../../assets/imges/left1.png'
import right from './../../assets/imges/right.png'
import right1 from './../../assets/imges/right1.png'
export function Floot() {
    return (
        <div>
            <p className={'para4'}>When your app breaks, fix it faster with Sentry</p>
            <div className={'container'}>
                <div className={'din03'}>
                    <img className={'image3'} src={Left} alt="error" title={'Error Monitoring'}/>
                    <h1 className={'h11'}>Error Monitoring</h1>
                </div>
                <div className={'din04'}>
                    <img className={'image4'} src={left1} alt="error" title={'Tracing'}/>
                    <h1 className={'h11'}>Tracing</h1>


                </div>
                <div className={'din01'}>
                    <img className={'image1'} src={center} alt="error"/>


                </div>
                <div className={'din02'}>
                    <img className={'image2'} src={right1} alt="error" title={'Code Coverage'}/>
                    <h1 className={'h11'}>Code Coverage</h1>


                </div>
                <div className={'din05'}>
                    <img className={'image5'} src={right} alt="error" title={'Session Reply'}/>
                    <h1 className={'h11'}>Session Reply</h1>


                </div>
            </div>
        </div>
    )
}