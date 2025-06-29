
const request = require('supertest');
const express = require('express');
const tradeRoutes = require('../routes/trade');
const depositRoutes = require('../routes/deposit');
const withdrawRoutes = require('../routes/withdraw');

const app = express();
app.use(express.json());
app.use('/trade', tradeRoutes);
app.use('/deposit', depositRoutes);
app.use('/withdraw', withdrawRoutes);

// Mock environment token for testing auth
process.env.AUTH_TOKEN = 'testtoken';

describe('Protected Routes', () => {
  const validHeaders = { Authorization: 'testtoken' };
  const invalidHeaders = { Authorization: 'invalid' };

  test('Trade route: valid request', async () => {
    const res = await request(app)
      .post('/trade')
      .set(validHeaders)
      .send({ amount: 100 });

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBeTruthy();
  });

  test('Trade route: invalid token', async () => {
    const res = await request(app)
      .post('/trade')
      .set(invalidHeaders)
      .send({ amount: 100 });

    expect(res.statusCode).toBe(401);
  });

  test('Trade route: missing amount', async () => {
    const res = await request(app)
      .post('/trade')
      .set(validHeaders)
      .send({});

    expect(res.statusCode).toBe(400);
  });

  test('Deposit route: valid request', async () => {
    const res = await request(app)
      .post('/deposit')
      .set(validHeaders)
      .send({ amount: 50 });

    expect(res.statusCode).toBe(200);
  });

  test('Withdraw route: non-numeric amount', async () => {
    const res = await request(app)
      .post('/withdraw')
      .set(validHeaders)
      .send({ amount: 'notanumber' });

    expect(res.statusCode).toBe(400);
  });
});
