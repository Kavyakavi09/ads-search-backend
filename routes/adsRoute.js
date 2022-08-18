import express from 'express';
import { createAds, getAds, adsSearch } from '../controller/ads.js';

const router = express.Router();

router.get('/', getAds);
router.get('/search', adsSearch);
router.post('/create', createAds);

export default router;
