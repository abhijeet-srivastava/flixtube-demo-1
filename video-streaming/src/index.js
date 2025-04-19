const express = require('express');
const fs = require('fs');


if(!process.env.PORT) {
  console.error('PORT environment variable is not set.');
  process.exit(1);
}
const PORT = process.env.PORT;

const app = express();

app.get('/video', async(req, res) => {
    console.log('Request received for video stream from client' + req.ip);

    const videoPath = './videos/toystory.mp4';

    const stats = await fs.promises.stat(videoPath);

    res.writeHead(200, {
        'Content-Type': 'video/mp4',
        'Content-Length': stats.size,
        'Accept-Ranges': 'bytes'
    });
    fs.createReadStream(videoPath).pipe(res);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log('Server started successfully');
});