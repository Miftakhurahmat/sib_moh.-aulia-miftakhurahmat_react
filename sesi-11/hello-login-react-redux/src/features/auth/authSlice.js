import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


// merupakan sebuat initial state, Bisa dalam bentuk tipe data apapun,  Di dalamnya akan didaftarkan state apa saja yang kita butuhkan, besertainitial value nya
const initialState = {
	isLoginPending: false,
	isLoginSuccess: false,
	errorMessage: '',
	user: {}
}

function callLoginApi(email, password) {
	return new Promise(function(resolve, reject){
		setTimeout(() => {
			if (email === 'admin@login.com' && password === 'admin') {
				resolve({email})
			} else {
				reject('invalid email and password')
			}
		}, 1000)
	})
}

export const authLoginAPI = createAsyncThunk('auth/login', async ({email, password}) => {
	try {
		const response = await callLoginApi(email, password)
		return response.email
	} catch (err) {
		throw(err)
	}
})

// merupakan sebuah reducer Sebuah function dengan 2 parameter : state dan action.
const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers(builder){
		builder
		.addCase(authLoginAPI.pending, (state) => {
			state.isLoginPending = true
			state.isLoginSuccess = false
			state.errorMessage = ''
		})
		.addCase(authLoginAPI.fulfilled, (state, action) => {
			console.log('fulfilled')
			console.log(action)
			const { email } = action.payload
			state.isLoginPending = false
			state.isLoginSuccess = true
			state.user = { email }
			state.errorMessage = ''
		})
		.addCase(authLoginAPI.rejected, (state, action) => {
			console.log('rejected')
			state.isLoginPending = false
			state.isLoginSuccess = false
			state.errorMessage = action.error.message
		})
	}
})

export default authSlice.reducer