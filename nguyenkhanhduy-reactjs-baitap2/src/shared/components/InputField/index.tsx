import { memo } from 'react'

interface InputFieldI {
    label?: string,
    placeholder: string,
    register: any,
    rows?: number,
    input?: boolean,
    type?: string,
    options?: any[],
    labelClass: string,
    gap?: number,
    id: string,
    errMessage: any,
    noneLabel?: boolean
}
function InputField(props: InputFieldI) {
    const classInput = `form-control login__form-field-input ${props.errMessage ? "is-invalid" : ""}`
    
    return (
        <>
            <div className={`row ${props.gap ? `g-${props.gap}` : ''} w-100 align-items-center ${!props.noneLabel && 'mb-3 g-1'}`}>
                {!props.noneLabel &&
                    <div className={props.labelClass}>
                        <label htmlFor={props.id} className="mb-0 fs-6">{props?.label}</label>
                    </div>
                }
                <div className="col-md">
                    {props?.rows &&
                        <textarea
                            id={props.id}
                            placeholder={props.placeholder}
                            className={classInput}
                            {...props.register}

                            rows={props.rows}
                        >

                        </textarea>
                    }
                    {props?.input &&
                        <input
                            id={props.id}
                            type = {props?.type}
                            placeholder={props.placeholder}
                            className={classInput}
                            {...props.register}
                        />
                    }
                    {props?.options &&
                        <select
                            id={props.id}
                            className={`${classInput} form-select`}
                            {...props.register}
                        >
                            <option value="" hidden>{props.placeholder}</option>
                            {props?.options.map((option, index) => <option key={index} value={option.value}>{option.name}</option>)}
                        </select>
                    }
                    {props.errMessage ? <div className="invalid-feedback">{props.errMessage}</div> : ""}
                </div>
            </div>
        </>
    );
}

export default memo(InputField);