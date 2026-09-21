import React, { useState, useEffect } from 'react';
import { Submission, AdminStats } from '../types';
import { 
  ShieldCheck, 
  Database, 
  Mail, 
  Trash2, 
  Star, 
  CheckCircle, 
  RefreshCw, 
  Clock, 
  Code, 
  AlertCircle,
  FileJson,
  ExternalLink,
  ChevronRight,
  Filter
} from 'lucide-react';

interface AdminDashboardPageProps {
  unreadCount: number;
  onRefreshBadge: () => void;
}

export const AdminDashboardPage: React.FC<AdminDashboardPageProps> = ({ 
  unreadCount, 
  onRefreshBadge 
}) => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [filter, setFilter] = useState<'all' | 'unread' | 'starred'>('all');
  const [showRawJson, setShowRawJson] = useState(false);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [resSub, resStats] = await Promise.all([
        fetch('/api/submissions'),
        fetch('/api/admin/stats')
      ]);

      if (resSub.ok) {
        const dataSub = await resSub.json();
        setSubmissions(dataSub.submissions || []);
        if (dataSub.submissions && dataSub.submissions.length > 0 && !selectedSubmission) {
          setSelectedSubmission(dataSub.submissions[0]);
        }
      }

      if (resStats.ok) {
        const dataStats = await resStats.json();
        setStats(dataStats.stats || null);
      }
    } catch (err) {
      console.error("Error fetching admin data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleToggleStatus = async (id: string, currentStatus: string) => {
    setActionLoading(id);
    const newStatus = currentStatus === 'unread' ? 'read' : 'unread';
    try {
      const res = await fetch(`/api/submissions/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        setSubmissions((prev) =>
          prev.map((s) => (s.id === id ? { ...s, status: newStatus as any } : s))
        );
        if (selectedSubmission?.id === id) {
          setSelectedSubmission((prev) => prev ? { ...prev, status: newStatus as any } : null);
        }
        onRefreshBadge();
      }
    } catch (err) {
      console.error("Failed to update status:", err);
    } finally {
      setActionLoading(null);
    }
  };

  const handleToggleStar = async (id: string, currentStarred: boolean = false) => {
    try {
      const res = await fetch(`/api/submissions/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ starred: !currentStarred }),
      });
      if (res.ok) {
        setSubmissions((prev) =>
          prev.map((s) => (s.id === id ? { ...s, starred: !currentStarred } : s))
        );
        if (selectedSubmission?.id === id) {
          setSelectedSubmission((prev) => prev ? { ...prev, starred: !currentStarred } : null);
        }
      }
    } catch (err) {
      console.error("Failed to toggle star:", err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to permanently delete this submission from persistent JSON storage?")) {
      return;
    }
    setActionLoading(id);
    try {
      const res = await fetch(`/api/submissions/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        const remaining = submissions.filter((s) => s.id !== id);
        setSubmissions(remaining);
        if (selectedSubmission?.id === id) {
          setSelectedSubmission(remaining.length > 0 ? remaining[0] : null);
        }
        onRefreshBadge();
      }
    } catch (err) {
      console.error("Failed to delete submission:", err);
    } finally {
      setActionLoading(null);
    }
  };

  const filteredSubmissions = submissions.filter((s) => {
    if (filter === 'unread') return s.status === 'unread';
    if (filter === 'starred') return Boolean(s.starred);
    return true;
  });

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="border-b border-neutral-800 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Admin Control Panel</span>
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Submissions & Storage Dashboard
          </h1>
          <p className="text-xs text-neutral-400">
            Real-time management for persistent JSON storage located at <code className="text-blue-300">/data/submissions.json</code>.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowRawJson(!showRawJson)}
            className="px-3.5 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-800 text-xs font-mono flex items-center gap-1.5 transition-colors"
          >
            <FileJson className="w-4 h-4 text-blue-400" />
            <span>{showRawJson ? 'Hide Raw JSON' : 'Inspect JSON File'}</span>
          </button>

          <button
            onClick={fetchData}
            className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-colors"
            title="Refresh Data"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-2">
          <div className="flex items-center justify-between text-neutral-400 text-xs font-medium">
            <span>Total Messages</span>
            <Mail className="w-4 h-4 text-blue-400" />
          </div>
          <div className="text-2xl font-bold text-white">
            {submissions.length}
          </div>
          <p className="text-[11px] text-neutral-500 font-mono">
            Stored in local JSON
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-2">
          <div className="flex items-center justify-between text-neutral-400 text-xs font-medium">
            <span>Unread Messages</span>
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          </div>
          <div className="text-2xl font-bold text-blue-400">
            {submissions.filter((s) => s.status === 'unread').length}
          </div>
          <p className="text-[11px] text-neutral-500 font-mono">
            Requires student review
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-2">
          <div className="flex items-center justify-between text-neutral-400 text-xs font-medium">
            <span>Starred Messages</span>
            <Star className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl font-bold text-white">
            {submissions.filter((s) => s.starred).length}
          </div>
          <p className="text-[11px] text-neutral-500 font-mono">
            Highlighted submissions
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-2">
          <div className="flex items-center justify-between text-neutral-400 text-xs font-medium">
            <span>Storage Health</span>
            <Database className="w-4 h-4 text-blue-400" />
          </div>
          <div className="text-base font-bold text-green-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span>Operational</span>
          </div>
          <p className="text-[11px] text-neutral-500 font-mono truncate">
            Path: data/submissions.json
          </p>
        </div>
      </div>

      {/* Raw JSON Inspector (When Toggled) */}
      {showRawJson && (
        <div className="p-5 rounded-2xl bg-neutral-950 border border-blue-500/30 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2 text-blue-400 font-semibold">
              <Code className="w-4 h-4" />
              <span>/data/submissions.json (Raw Storage Content)</span>
            </div>
            <span className="text-neutral-500">Auto-synced with disk</span>
          </div>
          <pre className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 font-mono text-xs overflow-x-auto max-h-72">
            {JSON.stringify(submissions, null, 2)}
          </pre>
        </div>
      )}

      {/* Submissions Management Area */}
      <div className="space-y-4">
        {/* Filters */}
        <div className="flex items-center gap-2 bg-neutral-950 p-1.5 rounded-xl border border-neutral-800 w-fit">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
              filter === 'all' ? 'bg-blue-600 text-white' : 'text-neutral-400 hover:text-white'
            }`}
          >
            All ({submissions.length})
          </button>
          <button
            onClick={() => setFilter('unread')}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
              filter === 'unread' ? 'bg-blue-600 text-white' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Unread ({submissions.filter((s) => s.status === 'unread').length})
          </button>
          <button
            onClick={() => setFilter('starred')}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
              filter === 'starred' ? 'bg-blue-600 text-white' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Starred ({submissions.filter((s) => s.starred).length})
          </button>
        </div>

        {/* Master / Detail View */}
        {filteredSubmissions.length === 0 ? (
          <div className="p-12 rounded-2xl bg-neutral-950 border border-neutral-800 text-center space-y-3">
            <Mail className="w-8 h-8 text-neutral-600 mx-auto" />
            <h3 className="text-base font-semibold text-white">No submissions found</h3>
            <p className="text-xs text-neutral-400 max-w-sm mx-auto">
              No messages match your current filter. You can submit test messages using the Contact Form on Page 5!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* List of Messages */}
            <div className="lg:col-span-5 space-y-2 max-h-[600px] overflow-y-auto pr-1">
              {filteredSubmissions.map((sub) => {
                const isSelected = selectedSubmission?.id === sub.id;
                return (
                  <div
                    key={sub.id}
                    onClick={() => setSelectedSubmission(sub)}
                    className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-neutral-900 border-blue-500 shadow-md'
                        : 'bg-neutral-950 border-neutral-800/80 hover:border-neutral-700'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-1.5">
                        {sub.status === 'unread' && (
                          <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                        )}
                        <h4 className="text-sm font-semibold text-white truncate max-w-[170px]">
                          {sub.name}
                        </h4>
                      </div>
                      <span className="text-[10px] font-mono text-neutral-500 shrink-0">
                        {new Date(sub.createdAt).toLocaleDateString()}
                      </span>
                    </div>

                    <p className="text-xs font-medium text-neutral-300 truncate mb-1">
                      {sub.subject}
                    </p>

                    <p className="text-xs text-neutral-500 line-clamp-2 leading-normal">
                      {sub.message}
                    </p>

                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-neutral-900 text-[11px] font-mono">
                      <span className="text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">
                        {sub.category}
                      </span>
                      {sub.starred && (
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected Message Detail View */}
            <div className="lg:col-span-7">
              {selectedSubmission ? (
                <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-6">
                  {/* Top Bar Actions */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-neutral-800">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleToggleStatus(selectedSubmission.id, selectedSubmission.status)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                          selectedSubmission.status === 'unread'
                            ? 'bg-blue-600/20 border-blue-500/30 text-blue-300 hover:bg-blue-600/30'
                            : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:bg-neutral-800'
                        }`}
                      >
                        {selectedSubmission.status === 'unread' ? 'Mark as Read' : 'Mark as Unread'}
                      </button>

                      <button
                        onClick={() => handleToggleStar(selectedSubmission.id, selectedSubmission.starred)}
                        className={`p-1.5 rounded-lg border transition-colors ${
                          selectedSubmission.starred
                            ? 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                            : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                        }`}
                        title="Star Submission"
                      >
                        <Star className={`w-4 h-4 ${selectedSubmission.starred ? 'fill-amber-400' : ''}`} />
                      </button>
                    </div>

                    <button
                      onClick={() => handleDelete(selectedSubmission.id)}
                      className="px-3 py-1.5 rounded-lg bg-red-950/40 hover:bg-red-900/50 text-red-400 border border-red-500/30 text-xs font-medium flex items-center gap-1.5 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Delete from JSON</span>
                    </button>
                  </div>

                  {/* Submission Meta */}
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-xl font-bold text-white">
                        {selectedSubmission.subject}
                      </h3>
                      <span className="text-xs font-mono text-neutral-400 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-blue-400" />
                        {new Date(selectedSubmission.createdAt).toLocaleString()}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-mono">
                      <div>
                        <span className="text-neutral-500 block mb-0.5">Sender Name:</span>
                        <span className="text-white font-semibold">{selectedSubmission.name}</span>
                      </div>
                      <div>
                        <span className="text-neutral-500 block mb-0.5">Sender Email:</span>
                        <a 
                          href={`mailto:${selectedSubmission.email}`} 
                          className="text-blue-400 hover:underline truncate block"
                        >
                          {selectedSubmission.email}
                        </a>
                      </div>
                      <div>
                        <span className="text-neutral-500 block mb-0.5">Category:</span>
                        <span className="text-neutral-200">{selectedSubmission.category}</span>
                      </div>
                      <div>
                        <span className="text-neutral-500 block mb-0.5">Storage Record ID:</span>
                        <span className="text-neutral-400 text-[11px] truncate block">{selectedSubmission.id}</span>
                      </div>
                    </div>
                  </div>

                  {/* Message Content */}
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-neutral-400 block uppercase font-mono">
                      Message Body:
                    </span>
                    <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-neutral-200 leading-relaxed whitespace-pre-wrap font-sans">
                      {selectedSubmission.message}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-12 rounded-2xl bg-neutral-950 border border-neutral-800 text-center text-neutral-500 text-sm">
                  Select a message from the left list to view details.
                </div>
              )}
            </div>

          </div>
        )}
      </div>
    </div>
  );
};
