type EnvironmentType = {
  basePath: string;
};

class Environment {
  basePath;
  constructor({ basePath }: EnvironmentType) {
    this.basePath = basePath;
  }
}

const env = new Environment({
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
});

export default env;
