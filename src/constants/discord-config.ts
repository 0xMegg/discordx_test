interface DiscordConfig {
  BOT: {
    BOT_ID: string;
  };
  GUILDS: {
    GGOMAGANG_GUILD_ID: string;
  };
  CHANNELS: {
    WELCOME_CHANNEL_ID: string;
  };
  ROLES: {
    ROLE_ID_UNRIPE_BANANA: string;
  };
  MESSAGES: {
    WELCOME_MESSAGE_ID: string;
  };
  WEBHOOKS: {
    WEBHOOK_POINT_LOGGER: string;
  };
}

export const DISCORD_CONFIG: DiscordConfig = {
  BOT: {
    BOT_ID: process.env.BOT_ID as string,
  },
  GUILDS: {
    GGOMAGANG_GUILD_ID: process.env.GGOMAGANG_GUILD_ID as string,
  },
  CHANNELS: {
    WELCOME_CHANNEL_ID: process.env.WELCOME_CHANNEL_ID as string,
  },
  ROLES: {
    ROLE_ID_UNRIPE_BANANA: process.env.ROLE_ID_UNRIPE_BANANA as string,
  },
  MESSAGES: {
    WELCOME_MESSAGE_ID: process.env.WELCOME_MESSAGE_ID as string,
  },
  WEBHOOKS: {
    WEBHOOK_POINT_LOGGER: process.env.WEBHOOK_POINT_LOGGER as string,
  },
};
