import { useState } from 'react';
import './Features.css';
import SimpleBookmarking from './SimpleBookmarking';
import SpeedySearching from './SpeedySearching';
import EasySharing from './EasySharing';

export default function Features(){

    const features = [
        ["Simple Bookmarking", <SimpleBookmarking key={0}/>],
        ["Speedy Searching", <SpeedySearching key={1}/>],
        ["Easy Sharing", <EasySharing key={2}/>]
    ]

    const [currentFeature, setCurrentFeature] = useState<number>(0);

    return (
        <section className="features">
            <div className="select">
                <h2>Features</h2>
                <p>Our aim is to make it quick and easy for you to access your fauvorite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
                <div className="buttons">
                    {features.map(([key], i) => (
                        <button data-active={currentFeature === i} key={i} onClick={() => setCurrentFeature(i)}>
                            {key}
                        </button>
                    ))}
                </div>
            </div>
            {features.find((_, i) => i === currentFeature)![1]}
        </section>
    )
}