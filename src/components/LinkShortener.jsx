import { useEffect, useState } from "react"
import { nanoid } from "nanoid"
import '../styles/LinkShortener.css'
import SuggestedLink from "./SuggestedLink"

export default function LinkShortener(){
    const [linkInput, setLinkInput] = useState('')
    const [error, setError] = useState(null)
    const [shortLinksList, setShortLinksList] = useState(null)

    useEffect(()=>{
        let savedLinks = window.localStorage.getItem('shortenedLinks')
        if(JSON.parse(savedLinks)){
            setShortLinksList(JSON.parse(savedLinks))
        }
        else setShortLinksList([])
    }, [])

    useEffect(()=>{
        if(shortLinksList)
            window.localStorage.setItem('shortenedLinks', JSON.stringify(shortLinksList))
    }, [shortLinksList])

    function handleChange(e){
        setError(null)
        setLinkInput(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        if(linkInput == '' || !isValidURL(linkInput))
            return setError('Please add a valid link')
        
        fetch(`https://api.shrtco.de/v2/shorten?url=${linkInput}`)
        .then(res => res.json())
        .then(body => setShortLinksList(prev => [...prev, {
                id: nanoid(),
                fullLink: body.result.original_link,
                shortLink: body.result.full_short_link
            }
        ]))
        setLinkInput('')
    }

    function isValidURL(str) {
        var httpRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
        if(httpRegex.test(str)) {
            return true
         } else {
            return false
         }
     }

    return (
        <div className="link-shortener-container">
            <div className="link-shortner-wrapper">
                <form onSubmit={handleSubmit} className="link-shortener-form">
                    <input className={`link-input ${error ? "input-error" : ""}`} type="text" placeholder="Shorten a link here..." value={linkInput} onChange={handleChange}/>
                    <input className="shorten-btn" type="submit"  value='Shorten it!'></input>
                </form>
                {error && <p className="error">{error}</p>}
            </div>
            {shortLinksList && shortLinksList.map(shortLinkListItem => <SuggestedLink key={shortLinkListItem.id} {...shortLinkListItem} />)}
        </div>
    )
}