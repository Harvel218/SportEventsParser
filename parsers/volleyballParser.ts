import { EventInterface, ParsedEventInterface } from '../interfaces'
import {createEventName} from '../utils';
export const volleyballParser = (event: EventInterface): ParsedEventInterface => {
	if (typeof event.score !== 'string') {
		throw new Error(
			`volleyballParser: Wrong score has been provided, expected string but received: ${event.score}`
		);
	}
	const eventName = createEventName([event.participant1, event.participant2], ' - ');
	const scores = event.score.split(',');
	const sets = scores.reduce((result, currentSetResult, index) => {
		return `${result}${index ? `set${index} ${currentSetResult}` : ''}${
			index === scores.length - 1 || !index ? '' : ', '
		}`;
	}, '');
	const eventScore = `Main score: ${scores.at(0)} (${sets})`;
	return {name: eventName, score: eventScore};
};
