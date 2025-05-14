const request = require('supertest');
const app = require('../app');

jest.mock('../db');
const db = require('../db');

describe('/instructor', () => {
    it('should return list of instructor', async () => {
        db.query.mockResolvedValueOnce({
            rows: [{ id: 1 }],
        });
        const res = await request(app).get('/api/instructor');
        expect(res.statusCode).toBe(200);
    });

    it('should create a new instructor', async () => {
        db.query.mockResolvedValueOnce({
            rows: [{ username: 'JaneDoe', password: 'gotit' }],
        });
        const res = await request(app).post('/api/instructor').send({ username: 'JaneDoe', password: 'gotit' });
        expect(res.statusCode).toBe(200);
    })
});