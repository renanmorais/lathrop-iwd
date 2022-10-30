import db from '../utils/db';

const SPEAKERS_COLLECTION = "speakers";


const createSpeaker = async ({ key, id, companyTitle, mini_bio, name, photo, tech, title, topic, location }) => {


    const data = {
        id, companyTitle, mini_bio, name, photo, tech, title, topic, location,
    };

    if (key) {
        db.collection(SPEAKERS_COLLECTION).doc(key).get().then(async (doc: any) => {

            if (doc.exists) {

                await db.collection(SPEAKERS_COLLECTION)
                    .doc(key)
                    .set(data, { merge: true });

                const speaker = await db.collection(SPEAKERS_COLLECTION).doc(key).get();

                return {
                    ...speaker.data(),
                    key: speaker.id,
                };

            } else {
                throw new Error("Doc does not exist.");
            }

        })

    } else {

        const speakerRef = await db.collection(SPEAKERS_COLLECTION).add(data);
        const speaker = await speakerRef.get();
        return {
            ...speaker.data(),
            key: speaker.id,
        };

    }

}

const getSpeaker = async () => {

    const speakersQuerySnapshot = await db.collection(SPEAKERS_COLLECTION).get();
    const speakers: { key: string }[] = [];
    speakersQuerySnapshot.forEach(
        (doc) => speakers.push({
            ...doc.data(),
            key: doc.id,
        })
    );

    return speakers;

}

const deleteSpeaker = async (speakerId: string) => {
    if (!speakerId) throw new Error("id is blank");
    await db.collection(SPEAKERS_COLLECTION)
        .doc(speakerId.toString())
        .delete();


    return {
        key: speakerId,
    };
}

export {
    createSpeaker,
    getSpeaker,
    deleteSpeaker
}
