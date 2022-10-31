import { server } from 'helpers/config';
import { Sponsor } from 'models/sponsor';
import { SponsorLevel } from 'models/sponsor-level';

export const getSponsors = async (): Promise<{ [key: string]: SponsorLevel }> => {
    const res = await fetch(`${server}/api/v1/sponsors`)
    const sponsors = await res.json();
    return sponsors;
}