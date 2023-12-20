import dots from '../../../../../assets/bg-dots.svg';

interface CardProps {
    name: string,
    image: string,
    version: string,
}

export default function Card(props: CardProps){
    return (
        <div className="card">
            <img src={props.image} alt="browser logo" />
            <h3>Add to {props.name}</h3>
            <span>Minimum version {props.version}</span>
            <img src={dots} alt="spacer" className="spacer" />
            <button className="primary">
                Add & Install Extension
            </button>
        </div>
    )
}