import express from 'express';
import {example} from '../routeHandler/exampleHandler';

const router = express.Router();

router.get('/example', example);

export default router;
