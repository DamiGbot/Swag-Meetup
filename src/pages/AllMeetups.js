import { useEffect, useState } from "react";

import MeetupList from "../components/meetups/MeetupList";

const AllMeetups = () => {
	const [meetupData, setMeetupData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		fetch(
			"https://react-getting-started-e621a-default-rtdb.firebaseio.com/meetups.json"
		)
			.then((res) => res.json())
			.then((data) => {
				const transformedValue = Object.values(data);
				const transformedKey = Object.keys(data);

				const transformedData = transformedValue.map((data, index) => {
					data.id = transformedKey[index];
					return data;
				});

				setIsLoading(false);
				setMeetupData(transformedData);
			});
	}, []);

	if (isLoading) {
		return (
			<section>
				<h2 style={{ textAlign: "center" }}>Loading....</h2>
			</section>
		);
	}

	return (
		<section>
			<h1>All Meetups</h1>

			<MeetupList meetups={meetupData} />
		</section>
	);
};

export default AllMeetups;
