// Import packages
import express from 'express';

const PORT = process.env.PORT || 3000;

// initiate express
const app = express();

// use express to start server
app.listen(PORT, async () => {
	console.log(`Server running on port ${PORT}!`);
});
