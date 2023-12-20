import image from '../../../../../assets/illustration-features-tab-2.svg'

export default function SpeedySearching(){
    return (
        <div className="content">
            <div className="image-container">
                <img src={image} alt="Feature illustration" />
            </div>
            <div className='text'>
                <h2>Intelligent search</h2>
                <p>
                    Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.
                </p>
                <div className="buttons">
                    <button className="primary">More info</button>
                </div>
            </div>
        </div>
    )
}