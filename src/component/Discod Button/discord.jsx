import './discord.css'
import {FaLongArrowAltRight} from "react-icons/fa";

export function Discord() {
    return (
        <div className="discord">
            <a className={'anker'} href={"https://discord.com/invite/sentry"}>       <span
                className={'span'}>Want to connect with folks building Sentry? Join us on Discord  <FaLongArrowAltRight/>
</span></a>
        </div>
    )
}