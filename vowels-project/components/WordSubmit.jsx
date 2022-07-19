import {useState} from 'react'
import WordDisplay from './WordDisplay'
import SubmitButton from './SubmitButton'

function WordSubmit () {
    const [message, setMessage] = useState('')

    const handleChange = () => {
        
        setMessage(document.getElementById('message').value)
    }
    return (
        <div>
            <input
            type="text"
            id="message"
            name="message"
            />
            <h2></h2>
            <SubmitButton handleClick = { handleChange }/>
            <WordDisplay value={ message }/>
        </div>
    )
}

export default WordSubmit