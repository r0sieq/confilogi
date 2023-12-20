import './Download.css'
import chromeLogo from '../../../../../assets/logo-chrome.svg'
import firefoxLogo from '../../../../../assets/logo-firefox.svg'
import operaLogo from '../../../../../assets/logo-opera.svg'
import Card from './Card'

export default function Download(){

    return (
        <section className="download">
            <div className="content">
                <h2>Download the extension</h2>
                <p>We've got more browsers in the pipeline. Please let us know if you've got a favourite you'd like us to prioritize</p>
                <div className="cards">
                    <Card image={chromeLogo} version="62" name="Chrome"/>
                    <Card image={firefoxLogo} version="55" name="Firefox"/>
                    <Card image={operaLogo} version="46" name="Opera"/>
                </div>
            </div>
        </section>
    )
}