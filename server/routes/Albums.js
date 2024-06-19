const express = require('express');
const { google } = require('googleapis');
const router = express.Router();


const API_KEY = 'AIzaSyA6hFHdgLg6v70vjg0NGuBZ6Ra3Ci95P1k';

const drive = google.drive({
    version: 'v3',
    auth: API_KEY,
  });
  
  router.get('/images/:folderId', async (req, res) => {
    try {
      const folderId = req.params.folderId;
  
      const response = await drive.files.list({
        q: `'${folderId}' in parents and mimeType contains 'image/'`,
        fields: 'files(id, name, mimeType)',
      });
  
      const files = response.data.files.map(file => ({
        id: file.id,
        name: file.name,
        mimeType: file.mimeType,
        url: `https://drive.google.com/thumbnail?id=${file.id}`
      }));
  
      res.json(files);
    } catch (error) {
      res.status(500).send('Error retrieving images from Google Drive');
    }
  });


module.exports = router;