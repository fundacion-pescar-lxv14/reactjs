export const isEmpty=(value)=> value.trim() == ""
export const getForm=(ref)=>ref.current.elements
export const getNames=(ref)=>Object.keys(getForm(ref)).filter(k=>k!=Number(k))
export const getElements=(ref)=>getNames(ref).map(name => getForm(ref)[name])
export const getValues=(ref)=>getElements(ref).map(element => element.value)
