export const integerRege =  new RegExp(/^\d+$/);
export const integerRege6 =  new RegExp(/^\d{6}$/);
export const regexpropertyValues = new RegExp(/^[1-9][0-9]{2,}$/);
export const regexmarketValue = new RegExp( /^[1-9][0-9]{5,}$/);

export const regexUsername = new RegExp(/^[A-Za-z][A-Za-z. ]{1,18}[A-Za-z. ]$/);
export const regexPassword = new RegExp(/^(?=\S)[a-zA-Z0-9!@#$%^&*]*(?:(?=\d)\d)*(?:(?=[!@#$%^&*])[!@#$%^&*])*(?:(?=[A-Z])[A-Z])\S{4,29}$/);
export const regexMobileNo = new RegExp(/^[6-9][0-9]{9}$/);
export const regexEmail = new RegExp(/^(?![0-9])[^\s@]+@[^\s@]+\.[^\s@]+$/);

export const regexSalutation = new RegExp( /^[a-zA-Z]+$/);
export const regexFullName = new RegExp( /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/);
export const regexHouseNo = new RegExp(/^[0-9A-Za-z\-/]{3,}$/);
export const regexPanCard = new RegExp(/^[A-Z]{5}[0-9]{4}[A-Z]$/);
export const regexStreet = new RegExp(/^[0-9A-Za-z\-/]{3,}$/);
