import '../styles/SuggestedLink.css'

export default function SuggestedLink(props){


    return (
        <div className="suggested-link">
            <p className="link-full-url">{props.fullLink}</p>
            <div className='suggested-link-divider'></div>
            <div className='short-link-wrapper'>

                <p className="link-short-url">{props.shortLink}</p>
                <button 
                className={`copy-btn ${props.isCopied ? "copied" : ""}`} 
                onClick={() => props.handleCopy(props.id)}
                >
                {props.isCopied ? "Copied!" : "Copy"}
                </button>
            </div>
        </div>
    )
}