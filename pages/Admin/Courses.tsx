
import React from 'react';
import { MOCK_COURSES } from '../../constants';

const Courses: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-1">강좌 카탈로그</h2>
          <p className="text-sm text-slate-400 font-medium">Enterprise 커리큘럼 라이브러리</p>
        </div>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-2xl text-sm font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20">
          Create New Course
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_COURSES.map(course => (
          <div key={course.id} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all group border-b-4 border-b-transparent hover:border-b-blue-600">
            <div className="flex items-center justify-between mb-8">
              <span className="text-[10px] font-black px-2 py-1 bg-slate-100 text-slate-500 rounded-lg uppercase">{course.category}</span>
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{course.level} LVL</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors tracking-tight leading-snug">{course.title}</h3>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-8">{course.hours} Learning Hours</p>
            
            <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
              <div>
                <p className="text-[10px] text-slate-300 font-black uppercase mb-1 tracking-tighter">Subscribers</p>
                <p className="text-lg font-black text-slate-900 tracking-tighter">{course.students}</p>
              </div>
              <button className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
