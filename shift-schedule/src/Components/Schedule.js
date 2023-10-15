import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';
import { useEffect, useState } from "react";
// import 'react-big-calendar/lib/css/react-big-calendar.css';
import './react-big-calendar.css';

import axios from 'axios';
import { auth } from '../Components/Navbar/firebaseConfig'

function Schedule() {

	const locales = {
		'en-US': enUS
	};

	const localizer = dateFnsLocalizer({
		format,
		parse,
		startOfWeek,
		getDay,
		locales
	});

	const [ events, setEvents ] = useState([]);

	const [userIDs, setUserIDs] = useState(new Set());

	const [selectable, setSelectable] = useState(false);

	useEffect(() => {
		let isMounted = true;
		if(!selectable) {
			const url = 'http://testmysql.haydencrabbs.lmu.build/test.php';
			axios.get(url).then((response) => {
				let data = response.data;
				// console.log("DATA FROM DB: " + JSON.stringify(data[0]));
				if (isMounted) {
					let newEvents = [];
					data.forEach(user => {
						JSON.parse(user.Events).events.forEach(event => {
							event.title = user.Name;
							event.start = new Date(event.start);
							event.end = new Date(event.end);
							newEvents.push(event);
						});
					});
						setEvents(newEvents);
				}
			})
		}
		return () => {isMounted = false};
	  })

	function handleSave({ start, end }) {
		if (selectable) {
			const url = 'http://testmysql.haydencrabbs.lmu.build/test.php';
			axios({
				method: 'post',
				url: url,
				data: {
					ID: auth.currentUser.uid,
					Name: auth.currentUser.displayName,
					Events: JSON.stringify({events: events})
				},
				headers: {
					'Content-Type': 'application/json'
				}}).then(response => {
					console.log(response);
				}).catch(error => {
					console.log(error);
				});
	
			setSelectable(false);
		}
	}

	function handleSelect({ start, end}) {
		setEvents([ ...events, {title: auth.currentUser.displayName, start: start, end: end } ]);
	}

	function handleEditEvent(currentEvent) {
		if (selectable) {
			if (window.confirm("Would you like to delete this event?")) {
				for (let i=0; i<events.length; i++) {
					if ((currentEvent.title === events[i].title) && (currentEvent.start === events[i].start) && (currentEvent.end === events[i].end)) {
						events.splice(i,1);
						break;
					}
				}
			}
		} 
	}

	function handleEditCalendar() {
		setSelectable(true);
		const url = 'http://testmysql.haydencrabbs.lmu.build/test.php';
		axios.get(url).then((response) => {
			let data = response.data;
			let newEvents = [];
			data.forEach(user => {
				if (user.ID === auth.currentUser.uid) {
					console.log("MATCH");
					JSON.parse(user.Events).events.forEach(event => {
						event.title = user.Name;
						event.start = new Date(event.start);
						event.end = new Date(event.end);
						newEvents.push(event);
					});
				}
			});
			setEvents(newEvents);
		})
	}
	
	return (
		<div className="App">	
			<div className='rbc-toolbar'>
				<span className="rbc-btn-group">
					<button onClick={handleEditCalendar} style={{ marginTop: 10 }}>Edit Calendar</button>
					<button onClick={handleSave} style={{ marginTop: 10 }}>Save Calendar</button>
				</span>
			</div>
			<Calendar
				localizer={localizer}
				events={events}
				defaultDate={new Date()}
				defaultView="week"
				startAccessor="start"
				endAccessor="end"
				style={{ height: 'calc(100vh - 142px)' }}
				views={[ 'month', 'week', 'day' ]}
				step={60}
				selectable = {selectable}
				onSelectSlot={handleSelect}
				onSelectEvent={handleEditEvent}
			/>
		</div>
	);
}

export default Schedule;
