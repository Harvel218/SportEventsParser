import { describe, expect, it } from 'vitest';
import { basketballParser, handballParser, soccerParser, tennisParser, volleyballParser } from '../parsers';
import { sportsEnum } from '../enums';

describe('Basketball Parser',()=>{
    const properConfig = {
        sport: sportsEnum.basketball, 
        participant1: 'GKS Tychy',
        participant2: 'GKS Katowice',
        score: [
            ['9:7', '2:1'],
            ['5:3', '9:9']
        ],
    }

    const wrongConfig = {
        sport: sportsEnum.basketball, 
        participant1: 'GKS Tychy',
        participant2: 'GKS Katowice',
        score: '3:0,25:23,25:19,25:21',
    }

    it('should output properly parsed data for Basketball',()=>{
        expect(basketballParser(properConfig)).toEqual({
            name: 'GKS Tychy - GKS Katowice',
            score: '9:7,2:1,5:3,9:9',
        });
    })

    it('should throw error due to wrong score - expecting array',()=>{
        expect(() => basketballParser(wrongConfig)).toThrowError('array');
    })
  });

  describe('Handball Parser',()=>{
    const properConfig = {
        sport: sportsEnum.handball, 
        participant1: 'Pogoń Szczeciń',
        participant2: 'Azoty Puławy',
        score: '34:26',
    }

    const wrongConfig = {
        sport: sportsEnum.handball, 
        participant1: 'Pogoń Szczeciń',
        participant2: 'Azoty Puławy',
        score: [
            ['9:7', '2:1'],
            ['5:3', '9:9']
        ],
    }

    it('should output properly parsed data',()=>{
        expect(handballParser(properConfig)).toEqual({
            name: 'Pogoń Szczeciń vs Azoty Puławy',
            score: '34:26'
        });
    })

    it('should throw error due to wrong score - expecting string',()=>{
        expect(() => handballParser(wrongConfig)).toThrowError('string');
    })
  });

  describe('Soccer Parser',()=>{
    const properConfig = {
        sport: sportsEnum.soccer, 
        participant1: 'Chelsea',
        participant2: 'Arsenal',
        score: '2:1',
    }

    const wrongConfig = {
        sport: sportsEnum.soccer, 
        participant1: 'Chelsea',
        participant2: 'Arsenal',
        score: [
            ['9:7', '2:1'],
            ['5:3', '9:9']
        ],
    }

    it('should output properly parsed data for Basketball',()=>{
        expect(soccerParser(properConfig)).toEqual({
            name: 'Chelsea - Arsenal',
            score: '2:1'
        });
    })

    it('should throw error due to wrong score - expecting string',()=>{
        expect(() => soccerParser(wrongConfig)).toThrowError('string');
    })
  });

  describe('Tennis Parser',()=>{
    const properConfig = {
        sport: sportsEnum.tennis, 
        participant1: 'Maria Sharapova',
        participant2: 'Serena Williams',
        score: '2:1,7:6,6:3,6:7',
    }

    const wrongConfig = {
        sport: sportsEnum.tennis, 
        participant1: 'Maria Sharapova',
        participant2: 'Serena Williams',
        score: [
            ['9:7', '2:1'],
            ['5:3', '9:9']
        ],
    }

    it('should output properly parsed data for Tennis',()=>{
        expect(tennisParser(properConfig)).toEqual({
            name: 'Maria Sharapova vs Serena Williams',
            score: 'Main score: 2:1 (set1 7:6, set2 6:3, set3 6:7)'
        });
    })

    it('should throw error due to wrong score - expecting string',()=>{
        expect(() => tennisParser(wrongConfig)).toThrowError('string');
    })
  });

  describe('Volleyball Parser',()=>{
    const properConfig = {
        sport: sportsEnum.volleyball, 
        participant1: 'Germany',
        participant2: 'France',
        score: '3:0,25:23,25:19,25:21',
    }

    const wrongConfig = {
        sport: sportsEnum.volleyball, 
        participant1: 'Germany',
        participant2: 'France',
        score: [
            ['9:7', '2:1'],
            ['5:3', '9:9']
        ],
    }

    it('should output properly parsed data for Tennis',()=>{
        expect(volleyballParser(properConfig)).toEqual({
            name: 'Germany - France',
            score: 'Main score: 3:0 (set1 25:23, set2 25:19, set3 25:21)'
        });
    })

    it('should throw error due to wrong score - expecting string',()=>{
        expect(() => volleyballParser(wrongConfig)).toThrowError('string');
    })
  });