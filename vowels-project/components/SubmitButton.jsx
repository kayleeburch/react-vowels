function SubmitButton (props) {
    return (
        <div>
            <button id="submit-button" onClick={props.handleClick}>Submit Word</button>
        </div>
    )
}
export default SubmitButton