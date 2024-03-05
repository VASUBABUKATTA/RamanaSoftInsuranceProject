export const integerRege =  new RegExp(/^\d+$/);
export const integerRege6 =  new RegExp(/^\d{6}$/);
export const regexpropertyValues = new RegExp(/^[1-9][0-9]{2,}$/);
export const regexmarketValue = new RegExp( /^[1-9][0-9]{5,}$/);

export const regexUsername = new RegExp(/^[A-Za-z][A-Za-z. ]{1,18}[A-Za-z. ]$/);
export const regexPassword = new RegExp(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{10,30}$/);
export const regexMobileNo = new RegExp(/^[6-9][0-9]{9}$/);
export const regexEmail = new RegExp(/^(?![0-9])[^\s@]+@[^\s@]+\.[^\s@]+$/);

export const regexSalutation = new RegExp( /^[a-zA-Z]+$/);
export const regexFullName = new RegExp( /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/);
export const regexHouseNo = new RegExp('^[0-9A-Za-z\-/]+$');
export const regexDob = new RegExp( /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(19\d\d|200[0-5])$/);
export const regexPanCard = new RegExp(/^[A-Z]{5}[0-9]{4}[A-Z]$/);
export const regexStreet = new RegExp(/^[A-Za-z0-9\s]+$/);




