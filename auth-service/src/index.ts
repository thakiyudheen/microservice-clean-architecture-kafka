import server from './presentation/server'
import dbconnection from './infrastructure/database/dbconnection'

(async()=>{
    try {
        server;
        await dbconnection();
    } catch (error:any) {
        console.error(error?.message || 'An error occurred');
        process.exit(1);
    }
})();