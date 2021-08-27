const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			authToken: null,
			authError: null,
			userInfo: null
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();
			},
			loginUser: (email, password) => {
				fetch(process.env.BACKEND_URL + "/api/login", {
					method: "POST",
					data: JSON.stringify({ email, password }),
					header: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(data => setStore({ authToken: data.authToken, authError: null }))
					.catch(error => console.log({ authToken: null, authError: error }));
			}
		}
	};
};

export default getState;
