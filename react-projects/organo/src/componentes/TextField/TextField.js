import './TextField.css'

export const TextField = (props) => {

    const modifiedPlaceholder = `${props.placeholder}...`

    const onDigited = (event) => {
        props.onAltered(event.target.value)
    }

    return (
        <div className='text-field'>
            <label>
                {props.label}
            </label>
            <input value={props.val} onChange={onDigited} required={props.mandatory} placeholder={modifiedPlaceholder}/>
        </div>
    )

}