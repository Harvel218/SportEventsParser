import { describe, expect, it } from 'vitest';
import { createEventName } from '../utils';

describe('Check utils',()=>{
    it('should output properly prepared event name',()=>{
        expect(createEventName(['someParticipant1', 'someParticipant2'], ' against ')).toBe('someParticipant1 against someParticipant2');
    })
});
