import admin from 'firebase-admin';

let db;
if (!admin.apps.length) {
    try {
        if (!process.env.FIREBASE_SERVICE_ACCOUNT) {
            throw new Error('FIREBASE_SERVICE_ACCOUNT is not defined');
        }

        const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
        });

        db = admin.firestore();

        db.settings({ ignoreUndefinedProperties: true });
    } catch (error) {
        console.log('Firebase admin initialization error', error);
    }
}
else {
    db = admin.firestore();
}


export default db;