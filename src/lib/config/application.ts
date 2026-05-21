import { env } from '$env/dynamic/public';

export const isApplicationOpen = env.PUBLIC_APPLICATION_OPEN !== '0';
