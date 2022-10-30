import { server } from 'helpers/config';
import { Speaker } from 'models/speaker';

export const getSpeakers = async (): Promise<Speaker[]> => {
    const res = await fetch(`${server}/api/v1/speakers`)
    const speakers = await res.json();
    return speakers;
}