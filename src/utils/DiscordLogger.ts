import { Webhook } from 'discord-webhook-node';
import { DISCORD_CONFIG } from '../constants/discord-config';

const { WEBHOOKS } = DISCORD_CONFIG;

export const PointLogger = new Webhook(WEBHOOKS.WEBHOOK_POINT_LOGGER);
