
import { Member, Application, Course } from './types';

export const MOCK_MEMBERS: Member[] = [
  { id: 'S2024001', name: '이재용', email: 'jay.lee@samsung.com', department: '전략기획실', level: 'Advanced 3', joinDate: '2024-01-10', status: 'Active' },
  { id: 'S2024002', name: '김현석', email: 'hs.kim@samsung.com', department: '가전사업부', level: 'Intermediate 2', joinDate: '2024-02-15', status: 'Active' },
  { id: 'S2024003', name: '박학규', email: 'hk.park@samsung.com', department: '경영지원실', level: 'Basic 1', joinDate: '2024-03-01', status: 'Inactive' },
  { id: 'S2024004', name: '노태문', email: 'tm.roh@samsung.com', department: 'MX사업부', level: 'Advanced 1', joinDate: '2024-03-12', status: 'Active' },
  { id: 'S2024005', name: '최윤호', email: 'yh.choi@samsung.com', department: '삼성SDI', level: 'Intermediate 3', joinDate: '2024-04-05', status: 'Active' },
];

export const MOCK_APPLICATIONS: Application[] = [
  { id: 'APP-101', memberName: '이재용', courseName: 'Global Leadership Strategy', applyDate: '2024-05-01', paymentStatus: 'Completed' },
  { id: 'APP-102', memberName: '노태문', courseName: 'Business Presentation Mastery', applyDate: '2024-05-02', paymentStatus: 'Completed' },
  { id: 'APP-103', memberName: '김현석', courseName: 'Cross-Cultural Communication', applyDate: '2024-05-03', paymentStatus: 'Pending' },
];

export const MOCK_COURSES: Course[] = [
  { id: 'C-01', title: 'Executive English Strategy', level: 'Advanced', hours: 40, students: 12, category: 'Leadership' },
  { id: 'C-02', title: 'Global Business Foundation', level: 'Intermediate', hours: 60, students: 45, category: 'Business' },
  { id: 'C-03', title: 'Daily Communication Essentials', level: 'Basic', hours: 80, students: 120, category: 'General' },
];

export const STATS_DATA = [
  { name: '1월', members: 45, applications: 30 },
  { name: '2월', members: 52, applications: 42 },
  { name: '3월', members: 68, applications: 55 },
  { name: '4월', members: 85, applications: 70 },
  { name: '5월', members: 110, applications: 95 },
];
