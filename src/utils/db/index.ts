import admin from 'firebase-admin';


interface Database extends admin.firestore.Firestore {
}

let db: Database;
if (!admin.apps.length) {
    if (!process.env.FIREBASE_SERVICE_ACCOUNT) {
        throw new Error('FIREBASE_SERVICE_ACCOUNT is not defined');
    }

    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });

    db = admin.firestore();

    db.settings({ ignoreUndefinedProperties: true });

}
else {
    db = admin.firestore();
}


export default db;