type EnvFn = {
  (key: string, defaultValue?: string): string;
  bool(key: string, defaultValue?: boolean): boolean;
  int?(key: string, defaultValue?: number): number;
};

type AdminConfigArgs = {
  env: EnvFn;
};

export default ({ env }: AdminConfigArgs) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT"),
    },
  },
  secrets: {
    encryptionKey: env("ENCRYPTION_KEY"),
  },
  flags: {
    nps: env.bool("FLAG_NPS", true),
    promoteEE: env.bool("FLAG_PROMOTE_EE", true),
  },
});