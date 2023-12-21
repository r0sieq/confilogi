import './Modal.css'

import { createPortal } from 'react-dom';

interface ModalProps {
    setActive: React.Dispatch<React.SetStateAction<boolean>>
}

const modalContainer = document.getElementById("modal-container")!

export default function Modal(props: ModalProps){
    return createPortal(
        <div className="modal">
            <div className="top-bar">
                <div className="profile">
                    <div className="picture"></div>
                    <div className="name"></div>
                    <div className="description"></div>
                </div>
                <button onClick={() => props.setActive(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15">
                        <path fill="#FFF" fillRule="evenodd" d="M8 5.379L13.303.075l2.122 2.122L10.12 7.5l5.304 5.303-2.122 2.122L8 9.62l-5.303 5.304-2.122-2.122L5.88 7.5.575 2.197 2.697.075 8 5.38z"/>
                    </svg>
                </button>
            </div>
            <div className="content">
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
            </div>
        </div>
    , modalContainer);
}