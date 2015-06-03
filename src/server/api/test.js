import express from 'express';
const router = express.Router();

const Test = {

  helloWorld(req, res) {
    res.status(200).send('Hello world!');
  },

  test(req, res) {
    res.sendStatus(200);
  }
};
router.get('/test', Test.test);
router.get('/', Test.helloWorld);

export default router;
