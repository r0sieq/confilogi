import illustrationHero from '../../../../../assets/illustration-hero.svg';
import useDevice from '../../../../../useDevice';
import './Heading.css'


export default function Heading(){

    const device = useDevice();

    const image = (
        <div className='image-container'>
            <img src={illustrationHero} alt="illustration" />
        </div>
    )

    return (
        <section className="heading" data-device={device}>
            <div className="content">
                {device === "mobile" && image}
                <h1>A Simple Bookmark Manager</h1>
                <p>
                    A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
                </p>
                <div className="buttons">
                    <button className="primary">Get it on Chrome</button>
                    <button className="secondary">Get it on Firefox</button>
                </div>
                {device === "desktop" && image}
            </div>
        </section>
    )
}