import React, { useState } from 'react'
import Image from '../components/Image.js'
import AboutCard from '../components/AboutCard.js'
import Modal from 'react-modal'

export default function Home() {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const modalOpenClose = () => {
        modalIsOpen ? setModalIsOpen(false) : setModalIsOpen(true)
    }

    return (
        <div className="container mt-5">
            <div className="row align-items-center">
                <div className="col-sm-5">
                    <Image></Image>
                </div>
                <div className="col-sm-7">
                    <AboutCard modalOpenClose={modalOpenClose}></AboutCard>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                contentLabel="Example Modal"
            >


                <div className="modal-header">
                    <h5 className="modal-title">Modal title</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={modalOpenClose}>
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p>Modal body text goes here.</p>
                </div>




            </Modal>
        </div>
    )
}
