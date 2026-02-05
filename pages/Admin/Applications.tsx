
import React from 'react';
import { MOCK_APPLICATIONS } from '../../constants';

const Applications: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-1 text-right md:text-left">수강 신청 내역</h2>
          <p className="text-sm text-slate-400 font-medium">실시간 신규 신청 및 결제 대기 현황</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-400">
              <th className="px-8 py-5">Ticket ID</th>
              <th className="px-8 py-5">Learner</th>
              <th className="px-8 py-5">Course Selection</th>
              <th className="px-8 py-5">Apply Date</th>
              <th className="px-8 py-5">Status</th>
              <th className="px-8 py-5 text-right">Verification</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {MOCK_APPLICATIONS.map(app => (
              <tr key={app.id} className="hover:bg-slate-50/50 transition-all">
                <td className="px-8 py-6 text-xs font-bold text-slate-400">#{app.id}</td>
                <td className="px-8 py-6 text-sm font-bold text-slate-800">{app.memberName}</td>
                <td className="px-8 py-6 text-sm font-medium text-slate-600 italic">"{app.courseName}"</td>
                <td className="px-8 py-6 text-sm font-medium text-slate-400 tracking-tight">{app.applyDate}</td>
                <td className="px-8 py-6">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                    app.paymentStatus === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                  }`}>
                    {app.paymentStatus}
                  </span>
                </td>
                <td className="px-8 py-6 text-right">
                  <button className="text-blue-600 text-xs font-bold hover:underline tracking-tight">System Validate</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Applications;
