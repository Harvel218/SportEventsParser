import {EventInterface} from '../interfaces';
import {sportsEnum} from '../enums';

export const isEventValid = (event: object): event is EventInterface =>
	'sport' in event &&
	(event.sport === sportsEnum.volleyball ||
		event.sport === sportsEnum.basketball ||
		event.sport === sportsEnum.handball ||
		event.sport === sportsEnum.tennis ||
		event.sport === sportsEnum.soccer) &&
	'participant1' in event &&
	typeof event.participant1 === 'string' &&
	'participant2' in event &&
	typeof event.participant2 === 'string' &&
	'score' in event;

export const areEventsValid = (input: object[]): input is EventInterface[] => input.every(isEventValid);
