import { useEffect, useState } from 'react'

const useVolunteerDetails = id => {
	const [volunteer, setVolunteer] = useState([])
	useEffect(() => {
		fetch(`https://volunteer-network-server-sigma.vercel.app/volunteer/${id}`)
			.then(res => res.json())
			.then(data => setVolunteer(data))
	}, [id])
	return [volunteer]
}

export default useVolunteerDetails
