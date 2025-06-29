function CommonInput({type, name, placeholder, value, onChange}) {
    return(
        <>
            <label htmlFor={name}></label>
            <input 
                type={type} 
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </>
    )
}

export default CommonInput;