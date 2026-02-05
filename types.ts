
export interface Member {
  id: string;
  name: string;
  email: string;
  department: string;
  level: string;
  joinDate: string;
  status: 'Active' | 'Inactive';
}

export interface Application {
  id: string;
  memberName: string;
  courseName: string;
  applyDate: string;
  paymentStatus: 'Completed' | 'Pending';
}

export interface Course {
  id: string;
  title: string;
  level: string;
  hours: number;
  students: number;
  category: string;
}
