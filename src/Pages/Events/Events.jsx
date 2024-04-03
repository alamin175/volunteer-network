import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import { useAuthState } from 'react-firebase-hooks/auth'
import EventsDetails from './EventsDetails'
import auth from '../../firebase'

const Events = () => {
	const [user] = useAuthState(auth)
	// console.log(user.email);
	const [events, setEvents] = useState([])
	// const [volunteer] = useVolunteerDetails();
	// console.log(volunteer);
	const setevent = [events, setEvents]
	const email = user.email
	useEffect(() => {
		fetch(
			`https://volunteer-network-server-sigma.vercel.app/events?email=${email}`
		)
			.then(res => res.json())
			.then(data => setEvents(data))
	}, [email])
	return (
		<div>
			<Header></Header>
			<h1 className="text-center">This is your events</h1>
			<div className="events-container">
				{events.map(event => (
					<EventsDetails
						key={event._id}
						event={event}
						setevent={setevent}
					></EventsDetails>
				))}
			</div>
		</div>
	)
}

export default Events
