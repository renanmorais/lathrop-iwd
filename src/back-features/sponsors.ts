import db from "../utils/db";

const SPONSORS_COLLECTION = "sponsors";

const getSponsors = async () => {
  const sponsorsQuerySnapshot = await db.collection(SPONSORS_COLLECTION).get();
  const sponsors: any = {};
  sponsorsQuerySnapshot.forEach((doc) => (sponsors[doc.id.trim()] = { ...doc.data() }));
  return sponsors;
};

export { getSponsors };
