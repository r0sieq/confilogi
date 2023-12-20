import { DeviceMode } from '../../../App';
import './Home.css';
import Download from './sections/download/Download';
import Faq from './sections/faq/Faq';
import Features from './sections/features/Features';
import Heading from './sections/heading/Heading';
import Newsletter from './sections/newsletter/Newsletter';

export default function Home(){

    return (
        <main className='home'>
            <Heading />
            <Features />
            <Download />
            <Faq />
            <Newsletter />
        </main>
    )
}