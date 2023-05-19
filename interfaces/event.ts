import {sportsEnum} from '../enums';

export declare interface EventInterface {
	sport: sportsEnum;
	participant1: string;
	participant2: string;
	score: string | string[][];
}

export declare interface ParsedEventInterface {
	name: string;
	score: string;
}
