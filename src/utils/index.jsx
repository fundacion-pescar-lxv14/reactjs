export const isEmpty=(value)=> value.trim() == ""
export const getValues=(values)=>values.map(v => v.current.childNodes[0].value)