import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
//mport { StoreContacts } from "../store/store";
import { Context } from "../store/appContext";

export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false
	});

	const [del, setDel] = useState(false);
	const { store } = useContext(Context);

	const [contact, setContact] = useState([]);

	useEffect(() => {
		//Creamos una fufncion que hace una solicitud a la API de contactos
		const getData = async url => {
			let data = await fetch(url);
			return data.json();
		};

		getData("https://assets.breatheco.de/apis/fake/contact/agenda/Sasilvan")
			.then(r => {
				setContact(r);
			})
			.catch();

		//function para eliminar un dato
	}, []);

	const deletedId = index => {
		setState({ showModal: true });
		store.daleteStore(index);
	};

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						<ContactCard
							name=""
							phone=""
							address=""
							email=""
							onDelete={() => setState({ showModal: true })}
						/>
						{contact.map(({ full_name, phone, address, email }, index) => (
							<ContactCard
								key={index}
								onDelete={index => deletedId(index)}
								name={full_name}
								phone={phone}
								address={address}
								email={email}
							/>
						))}
					</ul>
				</div>
			</div>
			<Modal
				show={state.showModal}
				onClose={() => setState({ showModal: false })}
				onOff={() => setState({ showModal: false })}
				onDeleted={() => {
					setInterval(() => {
						setState({ showModal: false });
					}, 1500);
				}}
			/>
		</div>
	);
};
