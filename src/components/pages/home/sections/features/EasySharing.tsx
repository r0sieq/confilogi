import image from '../../../../../assets/illustration-features-tab-3.svg'

export default function EasySharing(){
    return (
        <div className="content">
            <div className="image-container">
                <img src={image} alt="Feature illustration" />
            </div>
            <div className='text'>
                <h2>Share your bookmarks</h2>
                <p>
                    Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.
                </p>
                <div className="buttons">
                    <button className="primary">More info</button>
                </div>
            </div>
        </div>
    )
}