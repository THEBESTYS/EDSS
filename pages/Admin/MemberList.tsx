
import React, { useState, useMemo } from 'react';
import { MOCK_MEMBERS } from '../../constants';

const MemberList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'Active' | 'Inactive'>('All');
  const [departmentFilter, setDepartmentFilter] = useState('All');

  const departments = useMemo(() => {
    const deps = new Set(MOCK_MEMBERS.map(m => m.department));
    return ['All', ...Array.from(deps)];
  }, []);

  const filteredMembers = MOCK_MEMBERS.filter(m => {
    const matchesSearch = 
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      m.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || m.status === statusFilter;
    const matchesDept = departmentFilter === 'All' || m.department === departmentFilter;
    return matchesSearch && matchesStatus && matchesDept;
  });

  const exportCSV = () => {
    const headers = ['ID', 'Name', 'Email', 'Department', 'Level', 'JoinDate', 'Status'];
    const csvRows = filteredMembers.map(m => [
      m.id, 
      m.name, 
      `"${m.email}"`, 
      `"${m.department}"`, 
      m.level, 
      m.joinDate, 
      m.status
    ].join(','));
    
    const csvString = [headers.join(','), ...csvRows].join('\n');
    const blob = new Blob([`\ufeff${csvString}`], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Samsung_ED_Members_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tighter mb-1">Member Directory</h2>
          <p className="text-sm text-slate-400 font-medium tracking-tight">전체 임직원 명부 관리 시스템</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative group">
            <input 
              type="text" 
              placeholder="Search by name, email, or dept..."
              className="bg-white border border-slate-200 rounded-2xl px-12 py-3.5 text-sm focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600 transition-all w-full md:w-80 shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg className="w-5 h-5 text-slate-300 absolute left-4 top-1/2 -translate-y-1/2 group-focus-within:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          </div>
          <select 
            className="bg-white border border-slate-200 rounded-2xl px-5 py-3.5 text-sm font-bold text-slate-600 focus:ring-4 focus:ring-blue-600/5 shadow-sm appearance-none cursor-pointer"
            value={departmentFilter}
            onChange={(e) => setDepartmentFilter(e.target.value)}
          >
            {departments.map(d => <option key={d} value={d}>{d === 'All' ? '모든 부서' : d}</option>)}
          </select>
          <select 
            className="bg-white border border-slate-200 rounded-2xl px-5 py-3.5 text-sm font-bold text-slate-600 focus:ring-4 focus:ring-blue-600/5 shadow-sm appearance-none cursor-pointer"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as any)}
          >
            <option value="All">전체 상태</option>
            <option value="Active">활성</option>
            <option value="Inactive">비활성</option>
          </select>
          <button 
            onClick={exportCSV}
            className="bg-slate-900 text-white px-8 py-3.5 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center gap-3 shadow-xl shadow-slate-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
            Export CSV
          </button>
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                <th className="px-10 py-6 border-b border-slate-100">Profile</th>
                <th className="px-10 py-6 border-b border-slate-100">Department</th>
                <th className="px-10 py-6 border-b border-slate-100">Proficiency</th>
                <th className="px-10 py-6 border-b border-slate-100">Join Date</th>
                <th className="px-10 py-6 border-b border-slate-100">Status</th>
                <th className="px-10 py-6 border-b border-slate-100 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredMembers.length > 0 ? filteredMembers.map(m => (
                <tr key={m.id} className="hover:bg-blue-50/30 transition-all group">
                  <td className="px-10 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-slate-100 group-hover:bg-white border border-slate-200 group-hover:border-blue-200 flex items-center justify-center font-black text-slate-400 group-hover:text-blue-600 transition-all uppercase">
                        {m.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-black text-slate-900 leading-none mb-1.5">{m.name}</p>
                        <p className="text-xs text-slate-400 font-bold tracking-tight">{m.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-10 py-6 text-sm font-bold text-slate-600 italic">
                    {m.department}
                  </td>
                  <td className="px-10 py-6">
                    <div className="flex flex-col gap-2">
                       <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">{m.level}</span>
                       <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className={`h-full bg-blue-600 ${m.level.includes('Advanced') ? 'w-full' : m.level.includes('Intermediate') ? 'w-2/3' : 'w-1/3'}`}></div>
                       </div>
                    </div>
                  </td>
                  <td className="px-10 py-6 text-sm font-bold text-slate-400">{m.joinDate}</td>
                  <td className="px-10 py-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100">
                      <div className={`w-1.5 h-1.5 rounded-full ${m.status === 'Active' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' : 'bg-slate-300'}`}></div>
                      <span className={`text-[10px] font-black uppercase tracking-widest ${m.status === 'Active' ? 'text-green-600' : 'text-slate-400'}`}>{m.status}</span>
                    </div>
                  </td>
                  <td className="px-10 py-6 text-right">
                    <button className="text-slate-300 hover:text-blue-600 transition-all p-2.5 rounded-2xl hover:bg-white border border-transparent hover:border-slate-100 shadow-sm">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                    </button>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={6} className="px-10 py-20 text-center">
                    <div className="flex flex-col items-center gap-4 text-slate-300">
                       <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                       <p className="font-bold text-sm uppercase tracking-widest">No matching members found</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MemberList;
