import image from '../../../../../assets/illustration-features-tab-1.svg'

export default function SimpleBookmarking(){
    return (
        <div className="content">
            <div className="image-container">
                <img src={image} alt="Feature illustration" />
            </div>
            <div className='text'>
                <h2>Bookmark in one click</h2>
                <p>
                    Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.
                </p>
                <div className="buttons">
                    <button className="primary">More info</button>
                </div>
            </div>
        </div>
    )
}