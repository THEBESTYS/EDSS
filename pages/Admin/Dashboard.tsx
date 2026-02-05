
import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { STATS_DATA } from '../../constants';

const Dashboard: React.FC = () => {
  const [lastUpdate, setLastUpdate] = useState(new Date().toLocaleTimeString());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setLastUpdate(new Date().toLocaleTimeString());
      setIsRefreshing(false);
    }, 800);
  };

  return (
    <div className="space-y-10">
      {/* Header with Real-time indicator */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tighter">System Overview</h2>
          <div className="flex items-center gap-2 mt-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Live Data Stream • Last Sync: {lastUpdate}</p>
          </div>
        </div>
        <button 
          onClick={handleRefresh}
          className={`px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold uppercase tracking-widest text-slate-600 hover:bg-slate-50 transition-all flex items-center gap-2 ${isRefreshing ? 'opacity-50' : ''}`}
        >
          <svg className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
          Refresh Data
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Members', value: '1,420', trend: '+12.5%', color: 'text-blue-600', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197' },
          { label: 'Active Learners', value: '1,128', trend: '+5.2%', color: 'text-green-600', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
          { label: 'Course Hours', value: '84,200', trend: '+24%', color: 'text-indigo-600', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
          { label: 'Certifications', value: '312', trend: '+18.3%', color: 'text-orange-600', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-6">
              <div className={`w-12 h-12 bg-slate-50 ${stat.color} rounded-2xl flex items-center justify-center`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={stat.icon} /></svg>
              </div>
              <span className={`text-[10px] font-black px-2 py-1 rounded-full ${stat.trend.startsWith('+') ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-500'}`}>
                {stat.trend}
              </span>
            </div>
            <h4 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</h4>
            <p className="text-3xl font-black text-slate-900 tracking-tighter">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Trend Visualization */}
        <div className="lg:col-span-2 bg-white p-10 rounded-3xl border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">성장 분석 및 가입 추이</h3>
              <p className="text-sm text-slate-400 font-medium">Samsung Global Learning Analytics</p>
            </div>
          </div>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={STATS_DATA}>
                <defs>
                  <linearGradient id="colorPrimary" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fontWeight: 700, fill: '#94a3b8' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fontWeight: 700, fill: '#94a3b8' }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}
                  itemStyle={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '10px' }}
                />
                <Area type="monotone" dataKey="members" stroke="#2563eb" strokeWidth={5} fillOpacity={1} fill="url(#colorPrimary)" />
                <Area type="monotone" dataKey="applications" stroke="#10b981" strokeWidth={5} fillOpacity={0} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Real-time Activity Feed */}
        <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm flex flex-col">
          <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-2">
            실시간 활동
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
          </h3>
          <div className="space-y-6 flex-grow">
            {[
              { user: '노태문', action: 'Course Completed', time: '2 mins ago', color: 'bg-green-500' },
              { user: '이재용', action: 'New Enrollment', time: '14 mins ago', color: 'bg-blue-500' },
              { user: '김현석', action: 'S-Test Started', time: '45 mins ago', color: 'bg-indigo-500' },
              { user: '최윤호', action: 'Payment Verified', time: '1 hour ago', color: 'bg-orange-500' },
              { user: '박학규', action: 'Account Activated', time: '2 hours ago', color: 'bg-slate-400' },
            ].map((activity, i) => (
              <div key={i} className="flex gap-4 items-start relative pb-6 border-l-2 border-slate-50 pl-6 last:pb-0">
                <div className={`absolute -left-[5px] top-1 w-2 h-2 rounded-full ${activity.color}`}></div>
                <div>
                  <p className="text-sm font-bold text-slate-800 leading-none mb-1">{activity.user}</p>
                  <p className="text-xs text-slate-500 font-medium">{activity.action}</p>
                  <p className="text-[10px] text-slate-300 font-bold uppercase mt-2 tracking-widest">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-8 w-full py-3 bg-slate-50 hover:bg-slate-100 text-slate-600 text-xs font-black uppercase tracking-widest rounded-2xl transition-all">
            View All Logs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
