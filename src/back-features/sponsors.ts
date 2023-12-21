const SPONSORS_COLLECTION = "sponsors";
import db from '../utils/db';

const getSponsors = async () => {
    const sponsorsQuerySnapshot = await db.collection(SPONSORS_COLLECTION).get();
    const sponsors: any = {}; // eslint-disable-line
    sponsorsQuerySnapshot.forEach(
        (doc) => sponsors[doc.id.trim()] = { ...doc.data() }
    );
    return sponsors;
}


export {
    getSponsors
}