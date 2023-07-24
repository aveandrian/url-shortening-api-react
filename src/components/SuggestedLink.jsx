import { useState } from 'react'
import '../styles/SuggestedLink.css'

export default function SuggestedLink(props){
    const [isCopied, setIsCopied] = useState(false)
    
    function copy(){
        navigator.clipboard.writeText(props.shortLink)
        setIsCopied(true)
    }

    return (
        <div className="suggested-link">
            <p className="link-full-url">{props.fullLink}</p>
            <div className='suggested-link-divider'></div>
            <div className='short-link-wrapper'>

                <p className="link-short-url">{props.shortLink}</p>
                <button 
                className={`copy-btn ${isCopied ? "copied" : ""}`} 
                onClick={copy}
                >
                {isCopied ? "Copied!" : "Copy"}
                </button>
            </div>
        </div>
    )
}