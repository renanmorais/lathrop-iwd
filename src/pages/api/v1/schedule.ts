
import { getSchedule } from 'back-features/schedule';
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(request: NextApiRequest, response: NextApiResponse) {
    if (request.method === 'GET') {
        getSchedule().then((schedule: any) => {
            response.json(schedule);
        }).catch((error: any) => {
            response.status(500).send(error);
        });
    } else {
        response.status(404)
    }
}