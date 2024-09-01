type EnvironmentType = {
  basePath: string;
  isDev: boolean;
};

class Environment {
  basePath;
  isDev;

  constructor({ basePath }: { basePath: string }) {
    this.basePath = basePath;
    this.isDev = process.env.NODE_ENV === 'development';
  }
}

const env = new Environment({
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
});

export default env;
