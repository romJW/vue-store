import { Directus } from '@directus/sdk';

export default new Directus(process.env.VITE_DIRECTUS_URL);
