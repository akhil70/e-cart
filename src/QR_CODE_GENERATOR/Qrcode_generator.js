import React, { useState, useRef, useEffect } from 'react';
import QRCode from "react-qr-code";
import './Qrcodegenerator.css'

function Qrcodegenerator() {
    const [Message, setMessage] = useState("");
    const [showQRCode, setShowQRCode] = useState(false);
    const [url, setUrl] = useState('')
    const httpRgx = /^https?:\/\//;
    const [downloaded, setDownloaded] = useState(false);
    const qrRef = useRef();
    const MessageSubmit = () => {
        setMessage(Message);
        setShowQRCode(true);
        console.log("Message", Message);
    }

    const BackHome = () => {
        setShowQRCode("");
        setMessage("")
    }

    const downloadQrCode = () => {
        const qrCanvas = qrRef.current;

        if (qrCanvas) {
            const qrImage = qrCanvas.toDataURL("image/png");
            const qrAnchor = document.createElement('a');
            const fileName = 'QRCode';

            qrAnchor.href = qrImage;
            qrAnchor.download = fileName + '.png';
            document.body.appendChild(qrAnchor);
            qrAnchor.click();
            document.body.removeChild(qrAnchor);
        }
    };


    useEffect(() => {
        if (downloaded) {
            const msg = setTimeout(() => setDownloaded(false), 3500);
            return () => clearTimeout(msg);
        }
    }, [downloaded]);

    return (
        <>
            <canvas ref={qrRef} />

            <br></br>
            <div style={{ height: "auto", margin: "0 auto", maxWidth: 204, width: "100%" }}>
                {showQRCode != "" ? (
                    <>
                        <QRCode
                            size={256}
                            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                            value={Message}
                            viewBox={`0 0 256 256`}
                        />
                        <button onClick={BackHome} className='home'>Home</button> 
                        <span className="button-space"></span>
                        <button onClick={downloadQrCode} className='Download'>Download</button>
                    </>
                ) :
                    <>
                        <div><span><ul style={{ textDecoration: "underline" }}>Enter Your Message Here</ul></span></div>
                        <br></br>
                        <div className='row'>
                            <input
                                type="text"
                                placeholder="Enter text here"
                                className='message-input'
                                value={Message}
                                onChange={(event) => {
                                    setMessage(event.target.value);
                                }}
                            >
                            </input>
                            <button className='submit-button' onClick={MessageSubmit}>Submit</button>
                        </div>
                    </>
                }


            </div>


        </>
    )
}

export default Qrcodegenerator