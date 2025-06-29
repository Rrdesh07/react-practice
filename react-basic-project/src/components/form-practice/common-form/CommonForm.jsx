import CommonInput from "../common-input/CommonInput";

function CommonForm({handleSubmit,formControlData=[],handleChange}){
    return (
        <form onSubmit={handleSubmit}>
            {formControlData.map((control, index) => (
                <CommonInput 
                    key={index}
                    type={control.type}
                    name={control.name}
                    placeholder={control.placeholder}
                    value={control.value}
                    onChange={handleChange}
                />
            ))}
            <button type="submit">Submit</button>
        </form>
    )
}

export default CommonForm;