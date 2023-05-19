import {EventInterface, ParsedEventInterface} from '../interfaces';
import {createEventName} from '../utils';
export const soccerParser = (event: EventInterface): ParsedEventInterface => {
	if (typeof event.score !== 'string') {
		throw new Error(
			`soccerParser: Wrong score has been provided, expected string but received: ${event.score}`
		);
	}
	const eventName = createEventName([event.participant1, event.participant2], ' - ');
	const eventScore = event.score;
	return {name: eventName, score: eventScore};
};
