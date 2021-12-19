import './HelpUsModal.css'
import cofee_img from './buy_me_a_coffee.PNG'

function HelpUsModal() {
    return (
        <>
            <div className="hs_container">
                <h1>Support The Rick and Morty API</h1>
                <p><strong>Help to maintain The Rick and Morty API's infrastructure!</strong></p>
                <p>If you are using the API for your app, your online tutorials or your coding challenges, please consider supporting us to help keep the project alive.</p>
                <p>We are not getting any money from this and we use our free time to keep the API running and the data up to date. Every contribution, however big or small, is super valuable for our future.</p>
                <p>Thanks!</p>
                <div className="hs_img">
                    <img src={cofee_img} alt="Buy me a coffee"/>
                </div>
            </div>
        </>
    );
}

export default HelpUsModal;