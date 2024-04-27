import server from './presentation/server'
import dbconnection from './infrastructure/database/dbconnect'

(async () => {
    try {
      server;
      await dbconnection();
    } catch (error: any) {
      console.error("Error during initialization of server:", error);
      process.exit(1);
    }
  })();