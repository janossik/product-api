declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      PORT?: string;
      SSL_PORT?: string;
      DATABASE_NAME?: string;
      USERNAME?: string;
      PASSWORD?: string;
      CERTIFICATE_PATH?: string;
      CERTIFICATE_NAME?: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
