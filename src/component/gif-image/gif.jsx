import picture from './../../assets/imges/001.png'
import gif from './../../assets/imges/Animation-1724537941823-ezgif.com-video-to-gif-converter.gif'
import './gif.css'
export function GifImage() {
    return (
        <div className={'main2'}>
            <div>
                <picture className="gif">
                    <img className={'image'} src={picture} alt="Gif"/>
                </picture>
            </div>
            <div className={'gif1'}>
                <img className={'gif'} src={gif} alt="Gif"/>

            </div>

        </div>
    )
}