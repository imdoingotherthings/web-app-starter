// Import packages
import 'dotenv/config';
import pg from 'pg';
const { Client } = pg;

const client = new Client({ connectionString: process.env.DB_URI });

try {
	await client.connect();
} catch (error) {
	console.error({ message: 'unable to connect to database' });
	console.error(error);
	throw error;
}

export default client;
