

function WordDisplay(props) {
    const word = props.value;
    const renderOutput = () => {
        let letters = []
        for(let i = 0; i < word.length; i++) {
            if(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(word[i])) {
                letters.push(<span className="highlight" key={`${i}`}>{word[i]}</span>)
            } else {
                letters.push(<span className="nonhighlight" key={`${i}`}>{word[i]}</span>)
            }
        }
        return letters
    }

    const count = () => {
        let count = 0
        for(let i = 0; i < word.length; i++) {
            if(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(word[i])) {
                count++;
            }
        }
        return count
    }

    return (
        <div>
            <p id="user-word">{renderOutput()}</p>
            <p>Total Vowel Count: {count()}</p>
        </div>
    )
}

export default WordDisplay