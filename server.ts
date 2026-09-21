import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

const app = express();
const PORT = 3000;

app.use(express.json());

// Persistent JSON storage paths
const DATA_DIR = path.join(process.cwd(), "data");
const SUBMISSIONS_FILE = path.join(DATA_DIR, "submissions.json");

// Ensure data directory and JSON file exist
function ensureStorage() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(SUBMISSIONS_FILE)) {
    const initialData = [
      {
        id: "sub_sample_01",
        name: "Ms. Teacher",
        email: "teacher@school.edu",
        subject: "Welcome to Web Development 101!",
        category: "Class Project",
        message: "Great job setting up your initial project architecture with persistent JSON storage and server routes, Subhan! Looking forward to reviewing your custom content.",
        createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
        status: "unread",
        starred: true,
      },
    ];
    fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(initialData, null, 2), "utf-8");
  }
}

ensureStorage();

function readSubmissions() {
  try {
    ensureStorage();
    const raw = fs.readFileSync(SUBMISSIONS_FILE, "utf-8");
    return JSON.parse(raw);
  } catch (err) {
    console.error("Error reading submissions.json:", err);
    return [];
  }
}

function writeSubmissions(data: any[]) {
  try {
    ensureStorage();
    fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(data, null, 2), "utf-8");
    return true;
  } catch (err) {
    console.error("Error writing submissions.json:", err);
    return false;
  }
}

// ---------------- API ROUTES ----------------

// Health check route
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    storage: "JSON persistent file",
    time: new Date().toISOString(),
  });
});

// GET all contact form submissions
app.get("/api/submissions", (_req, res) => {
  const submissions = readSubmissions();
  res.json({
    success: true,
    total: submissions.length,
    submissions,
  });
});

// POST new contact form submission
app.post("/api/contact", (req, res) => {
  const { name, email, subject, category, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: "Name, email, and message are required fields.",
    });
  }

  const submissions = readSubmissions();
  const newSubmission = {
    id: `sub_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    name: String(name).trim(),
    email: String(email).trim(),
    subject: subject ? String(subject).trim() : "General Inquiry",
    category: category ? String(category).trim() : "General",
    message: String(message).trim(),
    createdAt: new Date().toISOString(),
    status: "unread",
    starred: false,
  };

  submissions.unshift(newSubmission);
  const saved = writeSubmissions(submissions);

  if (!saved) {
    return res.status(500).json({
      success: false,
      error: "Failed to persist submission to JSON storage.",
    });
  }

  res.status(201).json({
    success: true,
    message: "Thank you! Your message has been saved to persistent storage.",
    submission: newSubmission,
  });
});

// PATCH update submission status / starred
app.patch("/api/submissions/:id", (req, res) => {
  const { id } = req.params;
  const { status, starred } = req.body;

  const submissions = readSubmissions();
  const index = submissions.findIndex((s: any) => s.id === id);

  if (index === -1) {
    return res.status(404).json({ success: false, error: "Submission not found" });
  }

  if (status !== undefined) {
    submissions[index].status = status;
  }
  if (starred !== undefined) {
    submissions[index].starred = Boolean(starred);
  }

  writeSubmissions(submissions);
  res.json({ success: true, submission: submissions[index] });
});

// DELETE a submission
app.delete("/api/submissions/:id", (req, res) => {
  const { id } = req.params;
  let submissions = readSubmissions();
  const beforeCount = submissions.length;
  submissions = submissions.filter((s: any) => s.id !== id);

  if (submissions.length === beforeCount) {
    return res.status(404).json({ success: false, error: "Submission not found" });
  }

  writeSubmissions(submissions);
  res.json({ success: true, message: "Submission deleted successfully" });
});

// GET dashboard statistics
app.get("/api/admin/stats", (_req, res) => {
  const submissions = readSubmissions();
  const unreadCount = submissions.filter((s: any) => s.status === "unread").length;
  const starredCount = submissions.filter((s: any) => s.starred).length;

  res.json({
    success: true,
    stats: {
      totalSubmissions: submissions.length,
      unreadCount,
      starredCount,
      storageFile: "data/submissions.json",
      storageType: "Persistent Local JSON",
    },
  });
});

// ---------------- VITE / FRONTEND SERVING ----------------

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    // Express v5 wildcards use *all
    app.get("*all", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
