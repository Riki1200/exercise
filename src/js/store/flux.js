//Lo siento mucho, aqui estan los metodos, no me habia fijado
const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			loadSomeData(data) {
				let toJson = JSON.stringify(data);

				const getData = async url => {
					let data = await fetch(url, {
						method: "POST",
						headers: {
							"Content-type": "application/json"
						},
						body: toJson
					});
					return data.json();
				};

				getData("https://assets.breatheco.de/apis/fake/contact/")
					.then(r => {
						console.log(r);
					})
					.catch(console.error);
			},
			getStore() {
				const getData = async url => {
					let data = await fetch(url, {
						method: "GET",
						headers: {
							"Content-type": "application/json"
						}
					});
					return data.json();
				};

				getData("/apis/fake/contact/agenda/Sasilvan")
					.then(r => r)
					.catch(console.error);
			},
			daleteStore(id) {
				const deleteData = async url => {
					let data = await fetch(url, {
						method: "DELETED"
					});
					return data.json();
				};

				deleteData(`https://assets.breatheco.de/apis/fake/contact/${id}`)
					.then()
					.catch();
			}
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			ADD: "ADD",
			DELETED: "DELETED",
			UPDATE: "UPDATE"
		}
	};
};

export default getState;
