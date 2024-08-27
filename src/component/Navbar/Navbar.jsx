import './Navbar.css'
import companyLogo from './../../assets/imges/logo.svg'
export function Navbar() {

    return (
        <div className={'navbar'}>
            <div className="logo" >
                <img className={'img'} src={companyLogo} alt="Company Logo"/>
            </div>
            <div className="links">
            <button className={'button1'}>GET STARTED</button>
                <a className={'anker'} href="/">SIGN IN</a>
                <a className={'anker'} href="/">SANDBOX</a>
                <a className={'anker'} href="/">BLOG</a>
                <a className={'anker'} href="/">DOCS</a>
                <a className={'anker'} href="/">PRICING</a>
            </div>
        </div>
    )
}