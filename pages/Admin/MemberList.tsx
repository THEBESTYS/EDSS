
import React, { useState } from 'react';
import { MOCK_MEMBERS } from '../../constants';

const MemberList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'Active' | 'Inactive'>('All');

  const filteredMembers = MOCK_MEMBERS.filter(m => {
    const matchesSearch = m.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          m.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          m.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || m.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const exportCSV = () => {
    const headers = ['ID', 'Name', 'Email', 'Department', 'Level', 'JoinDate', 'Status'];
    const csvRows = filteredMembers.map(m => [m.id, m.name, m.email, m.department, m.level, m.joinDate, m.status].join(','));
    const blob = new Blob([[headers.join(','), ...csvRows].join('\n')], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Members_Export_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-1">회원 관리</h2>
          <p className="text-sm text-slate-400 font-medium tracking-tight">전체 {MOCK_MEMBERS.length}명 중 {filteredMembers.length}명 조회됨</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="검색어 입력..."
              className="bg-white border border-slate-200 rounded-2xl px-12 py-3 text-sm focus:ring-2 focus:ring-blue-600/10 focus:border-blue-600 transition-all w-full md:w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg className="w-5 h-5 text-slate-300 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          </div>
          <select 
            className="bg-white border border-slate-200 rounded-2xl px-4 py-3 text-sm font-bold text-slate-600 focus:ring-2 focus:ring-blue-600/10"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as any)}
          >
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <button 
            onClick={exportCSV}
            className="bg-slate-950 text-white px-6 py-3 rounded-2xl text-sm font-bold hover:bg-blue-600 transition-all flex items-center gap-3 shadow-lg"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
            CSV Export
          </button>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-400">
                <th className="px-8 py-5">ID</th>
                <th className="px-8 py-5">Learner Profile</th>
                <th className="px-8 py-5">Department</th>
                <th className="px-8 py-5">Current Level</th>
                <th className="px-8 py-5">Joined At</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredMembers.map(m => (
                <tr key={m.id} className="hover:bg-slate-50/50 transition-all group">
                  <td className="px-8 py-6 text-xs font-bold text-slate-400">#{m.id}</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-400 uppercase tracking-tighter">
                        {m.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 leading-none mb-1">{m.name}</p>
                        <p className="text-xs text-slate-400 font-medium tracking-tight">{m.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-sm font-bold text-slate-600">{m.department}</td>
                  <td className="px-8 py-6">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase">
                      {m.level}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-sm font-medium text-slate-400 tracking-tight">{m.joinDate}</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${m.status === 'Active' ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]' : 'bg-slate-300'}`}></div>
                      <span className={`text-[10px] font-black uppercase ${m.status === 'Active' ? 'text-green-600' : 'text-slate-400'}`}>{m.status}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="text-slate-300 hover:text-blue-600 transition-colors p-2 rounded-xl hover:bg-blue-50">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MemberList;
