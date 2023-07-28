import os from 'os';
import PromiseRouter from "express-promise-router";
import { IndexPageResponse } from "../../types/api";

export const router = PromiseRouter();

// Pages go here

router.get<never, IndexPageResponse>('/', async (req, res) => {
  const initialData = {
    kek: `Welcome to LedShow Web on ${os.hostname()}!`,
  };
  
  res.react(initialData);
});

