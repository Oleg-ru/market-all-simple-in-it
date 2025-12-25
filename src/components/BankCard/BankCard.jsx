import React, {Component} from 'react';
import "./BankCard.css"
import masterCardIcon from "../../assets/icons/mastercard.svg"
import qrCodeIcon from "../../assets/icons/qrcode.svg"

class BankCard extends Component {
    render() {
        return (
            <div className="bankCard-container">
                <img className="bankCard-icon" src={masterCardIcon} alt=""/>
                <h3 style={{lineHeight: "1em"}}>BBB</h3>
                <h3 style={{lineHeight: "1em"}}>**** 1234</h3>
                <div className="bankCard-month-container">
                    <div className="bankCard-month">
                        <span style={{width: "4em"}}>Expire date</span>
                        <span><b>12/36</b></span>
                    </div>
                    <img className="bankCard-qrCodeIcon" src={qrCodeIcon} alt=""/>
                </div>
            </div>
        );
    }
}

export default BankCard;