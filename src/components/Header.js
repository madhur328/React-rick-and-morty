import logo from './rick-morty-logo.PNG'
import HelpUsModal from './HelpUsModal';
import {Modal} from './Modal.js'
import {useState} from 'react';
import './Header.css'

function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            {isModalOpen && (
                <Modal onClose={() => setIsModalOpen(false)}>
                    <HelpUsModal/>
                </Modal>
            )}
            <header className="rm_header">
                <div className="nav">
                    <img className="r_m_logo" src={logo} alt="Rick and Morty Logo"/>
                    <ul>
                        <li>Docs</li>
                        <li>About</li>
                        <li onClick={() => setIsModalOpen(true)}><span>HELP US</span></li>
                    </ul>
                </div>
            </header>
        </>
    );
}

export default Header;