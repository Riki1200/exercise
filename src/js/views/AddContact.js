import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
	//crearemos los state para los valores del formulario

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [Phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	//usamos el Contexto de esta

	const Storage = useContext(Context);

	const HandleAdd = () => {
		if (Storage.actions.ADD) {
			if (name || email || Phone || address) {
				Storage.store.loadSomeData({
					full_name: name,
					agenda_slug: "Sasilvan",
					email: email,
					address: address,
					phone: Phone
				});
				//store.contacts.push({ name, email, Phone, address });
			}
		}
	};

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							onChange={ev => setName(ev.target.value)}
							className="form-control"
							placeholder="Full Name"
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							onChange={ev => setEmail(ev.target.value)}
							className="form-control"
							placeholder="Enter email"
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							onChange={ev => setPhone(ev.target.value)}
							className="form-control"
							placeholder="Enter phone"
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							onChange={ev => setAddress(ev.target.value)}
							className="form-control"
							placeholder="Enter address"
						/>
					</div>
					<button onClick={HandleAdd} type="button" className="btn btn-primary form-control">
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
