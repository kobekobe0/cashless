//sessionHelper.js
import Cookies from "js-cookie"
import CryptoJS from "crypto-js"

const SESSION_EXPIRY_MINUTES = 30
const AES_SECRET_KEY = "Gwdas@amdK01kxxPef@k11ert"

const serializeValue = (val) => {
	if (val instanceof Date) return {_type:"date", value: val.toISOString() }
	if (typeof val === "bigint") return {_type: 'bigint', value: val.toString() }
	if (typeof val === "symbol") return {_type: 'symbol', value: val.toString() }
	if(Array.isArray(val)) {
		return { _type: 'array', value: val.map(serializeValue)}
	}
	if(typeof val === "object" && val !== null) {
		return {
			_type: "object",
			value: Object.fromEntries(Object.entries(val).map(([k, v]) => [k, serializeValue(v)]))
		}
	}
	return val
}

const deserializedValue = (val) => {
	if(typeof val === "object" && val !== null) {
		if(val._type === "date") return new Date(val.value)
		if(val._type === "bigint") return BigInt(val.value)
		if(val._type === "symbol") return Symbol(val.value)
		if(val._type === "array") return val.value.map(deserializedValue)
		if(val._type === "object"){
			return Object.fromEntries(Object.entries(val.value).map(([k, v]) => [k, deserializedValue(v)]))
		}
	}
	return val
}

const encryptData = (data) => {
	return CryptoJS.AES.encrypt(data, AES_SECRET_KEY).toString()
}

const decrypData = (cipherText) => {
	const bytes = CryptoJS.AES.decrypt(cipherText, AES_SECRET_KEY)
	return bytes.toString(CryptoJS.enc.Utf8)
}

export const setSession = (name, value) => {
	try {
		if(typeof value === "undefined") return console.warn(`Session ${name} not sey because value is undefined`)

		const data = {
			value: serializeValue(value),
			expiry: Date.now() + SESSION_EXPIRY_MINUTES * 60 * 1000
		}

		const encryptedData = encryptData(JSON.stringify(data))

		sessionStorage.setItem(name, encryptedData)
	} catch(error) {
		return console.error(`Error setting session ${name}: ${error}`)
	}
}

export const getSession = (name) => {
	try {
		const item = sessionStorage.getItem(name)
		if(!item) return null
		
		const decryptedData = decryptData(item)
		if(!decryptedData) return null

		const {value, expiry} = JSON.parse(decryptedData)

		if(Date.now() > expiry) return null

		return deserializedValue(value)
	} catch (error) {
		console.error(`Error getting session ${name}: ${error}`)
		return null
	}
}

export const removeSession = (name) => {
	try {
		sessionStorage.removeItem(name)
	} catch (error) {
		console.error(`Error removing session ${name}: ${error}`)
	}
}

/* SAMPLE USAGE
- this module can only be used in client components - components that has 'use client' at the top

==============

setCookie: accepts two params, name and value.
		can accept different data types
		can accept object

	const sampleURNDetails = {
		urn: 1,
		name: 'Kobe',
		value: "sample value"
		titles: [
		{
			id: 1,
			name: "sample title"
		},
		{
			id: 2,
			name: "sample title 2"
		}
	]
}

CALL setCookie helper function to insert the value in
		setCookie("URN_DETAILS", sampleURNDetails)

getCookie: accepts one params, name
			will return stored value in the cookie that match the key (name)

		const urnData = getCookie("URN_DETAILS")

		console.log(urnData)

		Output:
			}
				urn: 1,
				name: "Kobe",
				value: "sample value"
				titles: [
					{ 	id: 1,
						name: "sample title"
					},
					{
						id 2,
						name: "sample title 2"
					}
				]
			}

removeCookie : accepts one param, name
				will remove that cookie with the same key (name)

		removeCOokie("URN_DETAILS") 
*/
		