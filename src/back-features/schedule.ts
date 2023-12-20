import db from "../utils/db";

const SCHEDULE_COLLECTION = "schedule";

const getSchedule = async () => {
  const scheduleQuerySnapshot = await db.collection(SCHEDULE_COLLECTION).get();
  const schedule: any[] = [];
  scheduleQuerySnapshot.forEach((doc) => schedule.push({ ...doc.data() }));
  return schedule;
};

export { getSchedule };
