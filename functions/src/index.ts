import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as express from "express";
import * as bodyParser from "body-parser";

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();
db.settings({ignoreUndefinedProperties: true});

const app = express();
const main = express();

main.use("/api/v1", app);
main.use(bodyParser.json());

export const webApi = functions.https.onRequest(main);

const SPEAKERS_COLLECTION = "speakers";
const SPONSORS_COLLECTION = "sponsors";

app.post("/speakers", async (request, response) => {

    try {

        const {key, id, companyTitle, mini_bio, name, photo, tech, title, topic, location} = request.body;
        const data = {
            id, companyTitle, mini_bio, name, photo, tech, title, topic, location,
        };

        if (key) {

            db.collection(SPEAKERS_COLLECTION).doc(key).get().then(async (doc) => {

                if (doc.exists) {

                    await db.collection(SPEAKERS_COLLECTION)
                        .doc(key)
                        .set(data, {merge: true});

                    const speaker = await db.collection(SPEAKERS_COLLECTION).doc(key).get();
                    response.json({
                        ...speaker.data(),
                        key: speaker.id,
                    });

                } else {

                    response.status(500).send("Doc does not exist.");

                }

            }).catch((reason) => {

                console.log(reason);
                response.status(500).send(reason);

            });

        } else {

            const speakerRef = await db.collection(SPEAKERS_COLLECTION).add(data);
            const speaker = await speakerRef.get();
            response.json({
                ...speaker.data(),
                key: speaker.id,
            });

        }

    } catch (error) {

        response.status(500).send(error);

    }

});

app.get("/speakers", async (request, response) => {

    response.set("Access-Control-Allow-Origin", "*");

    try {

        const speakersQuerySnapshot = await db.collection(SPEAKERS_COLLECTION).get();
        const speakers: {key: string}[] = [];
        speakersQuerySnapshot.forEach(
            (doc) => speakers.push({
                ...doc.data(),
                key: doc.id,
            })
        );

        response.json(speakers);

    } catch (error) {

        response.status(500).send(error);

    }

});

app.get("/sponsors", async (request, response) => {

    response.set("Access-Control-Allow-Origin", "*");

    try {

        const sponsorsQuerySnapshot = await db.collection(SPONSORS_COLLECTION).get();
        const sponsors: any = {}; // eslint-disable-line
        sponsorsQuerySnapshot.forEach(
            (doc) => sponsors[doc.id.trim()] = {...doc.data()}
        );
        response.json(sponsors);

    } catch (error) {

        response.status(500).send(error);

    }

});

app.delete("/speakers/:id", async (request, response) => {

    try {

        const speakerId = request.params.id;
        if (!speakerId) throw new Error("id is blank");
        await db.collection(SPEAKERS_COLLECTION)
            .doc(speakerId)
            .delete();
        response.json({
            key: speakerId,
        });

    } catch (error) {

        response.status(500).send(error);

    }

});
