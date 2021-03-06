import express from 'express';
import { postUserValidator } from './validators';
import { createUserController, listUsersController } from '../index';

export const userRouter = express.Router();

userRouter.post('/', async (req, res) => {
  try {
    const validatedReq = postUserValidator.validate(req);

    if (validatedReq.error) {
      return res.status(400).json(validatedReq.error.message);
    }

    const response = await createUserController(validatedReq.value);

    if (response.body == null) {
      return res.status(response.status).end();
    }

    return res.status(response.status).json(response.body);
  } catch (err) {
    return res.status(err.status || 500).json({ message: err.message || err });
  }
});

userRouter.get('/', async (req, res) => {
  try {
    const response = await listUsersController(req);
    return res.status(response.status).json(response.body);
  } catch (err) {
    return res.status(err.status || 500).json({ message: err.message || err });
  }
});

// @todo add hapi
