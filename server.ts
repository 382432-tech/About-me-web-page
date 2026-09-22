import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT || 5000);

app.use(express.json());

const DATA_DIR = path.join(__dirname, 'data');
const SUBMISSIONS_FILE = path.join(DATA_DIR, 'submissions.json');

// Ensure data directory and file exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

if (!fs.existsSync(SUBMISSIONS_FILE)) {
  fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify([], null, 2), 'utf-8');
}

// API Routes
app.get('/api/submissions', (req, res) => {
  try {
    const rawData = fs.readFileSync(SUBMISSIONS_FILE, 'utf-8');
    const data = JSON.parse(rawData || '[]');
    res.json(data);
  } catch (err) {
    console.error('Error reading submissions:', err);
    res.status(500).json({ error: 'Failed to read submissions' });
  }
});

app.post('/api/submissions', (req, res) => {
  try {
    const { name, email, message, category } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const rawData = fs.readFileSync(SUBMISSIONS_FILE, 'utf-8');
    const data = JSON.parse(rawData || '[]');

    const newSubmission = {
      id: Date.now().toString(),
      name,
      email,
      category: category || 'General',
      message,
      createdAt: new Date().toISOString()
    };

    data.unshift(newSubmission);
    fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(data, null, 2), 'utf-8');

    res.status(201).json({ success: true, submission: newSubmission });
  } catch (err) {
    console.error('Error saving submission:', err);
    res.status(500).json({ error: 'Failed to save submission' });
  }
});

// Serve Vite in dev or static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
} else {
  const { createServer: createViteServer } = await import('vite');
  const vite = await createViteServer({
    appType: 'spa',
    server: {
      middlewareMode: true,
      host: '0.0.0.0',
      allowedHosts: true
    },
  });
  app.use(vite.middlewares);
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on http://0.0.0.0:${PORT}`);
});
