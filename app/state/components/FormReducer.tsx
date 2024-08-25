import React, { useReducer } from "react";

// Initial state for the form
const initialState = {
	username: "",
	email: "",
	password: "",
};

// Reducer function to manage form state
const reducer = (state: any, action: any) => {
	switch (action.type) {
		case "SET_FIELD":
			return {
				...state,
				[action.field]: action.value,
			};
		case "RESET_FORM":
			return initialState;
		default:
			return state;
	}
};

// Form component
const Form = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	// Handle input changes
	const handleChange = (e: any) => {
		dispatch({
			type: "SET_FIELD",
			field: e.target.name,
			value: e.target.value,
		});
	};

	// Handle form submission
	const handleSubmit = (e: any) => {
		e.preventDefault();
		// Do something with the form data, e.g., send it to a server
		console.log("Form submitted:", state);
		console.log(state.username);
		dispatch({ type: "RESET_FORM" });
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>
					Username:
					<input
						type="text"
						name="username"
						value={state.username}
						onChange={handleChange}
					/>
				</label>
			</div>
			<div>
				<label>
					Email:
					<input
						type="email"
						name="email"
						value={state.email}
						onChange={handleChange}
					/>
				</label>
			</div>
			<div>
				<label>
					Password:
					<input
						type="password"
						name="password"
						value={state.password}
						onChange={handleChange}
					/>
				</label>
			</div>
			<button type="submit">Submit</button>
		</form>
	);
};

export default Form;
