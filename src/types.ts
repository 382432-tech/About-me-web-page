export type PageId = 'home' | 'media' | 'future' | 'hobbies' | 'traveling' | 'admin';

export interface Submission {
  id: string;
  name: string;
  email: string;
  subject: string;
  category: string;
  message: string;
  createdAt: string;
  status: 'unread' | 'read' | 'archived';
  starred?: boolean;
}

export interface GoalItem {
  id: string;
  category: 'Academic' | 'Career' | 'Personal';
  title: string;
  description: string;
  targetDate: string;
  progress: number;
  milestones: string[];
}

export interface ChoiceTopicItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  placeholderType: 'image' | 'video' | 'interactive';
}

export interface AdminStats {
  totalSubmissions: number;
  unreadCount: number;
  starredCount: number;
  storageFile: string;
  storageType: string;
}
