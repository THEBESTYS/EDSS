
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-nav border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-[#034EA2] tracking-tighter">ED</span>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-slate-900 text-sm">English Discoveries</span>
                <span className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">Global Partner</span>
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-6">
              {['Programs', 'S-Test', 'Compatibility', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold text-slate-500 hover:text-[#034EA2] transition-colors uppercase tracking-tight">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4 px-4 border-r border-slate-200 h-8">
               <span className="text-[10px] font-black text-slate-300 tracking-widest uppercase">ETS</span>
               <span className="text-[10px] font-black text-slate-300 tracking-widest uppercase">EduSoft</span>
            </div>
            <a href="https://ed.engdis.com/edufore24#/login" target="_blank" className="text-sm font-bold text-slate-900 px-2 hover:text-[#034EA2] transition-all">ED Class</a>
            <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#034EA2] transition-all shadow-xl shadow-slate-200">
              Apply Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center pt-20 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-30 grayscale" 
            alt="Samsung Global Office"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-8 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Strategic Partnership: Samsung & English Discoveries
            </div>
            <h1 className="text-6xl md:text-8xl font-serif text-white leading-[1.05] tracking-tight mb-8 hero-text-shadow">
              Agility Through <br />
              <span className="text-blue-500 italic">Common Language.</span>
            </h1>
            <p className="text-xl text-slate-400 font-light mb-12 leading-relaxed max-w-2xl">
              삼성의 초격차 글로벌 경쟁력은 소통의 속도에서 시작됩니다.<br />
              ETS의 검증된 알고리즘과 AI 기반 초개인화 엔진이 임직원의 영어 역량을 혁신합니다.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <button className="px-10 py-5 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/20">학습 시작하기</button>
              <div className="flex items-center gap-8 border-l border-slate-800 pl-8">
                <div className="flex flex-col">
                  <span className="text-white font-black text-xl tracking-tighter">ETS</span>
                  <span className="text-[10px] text-slate-500 font-bold uppercase">Scientific Validation</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-black text-xl tracking-tighter italic">EduSoft</span>
                  <span className="text-[10px] text-slate-500 font-bold uppercase">Technology Engine</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <span className="text-[10px] text-white font-bold uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-[1px] h-12 bg-white"></div>
        </div>
      </section>

      {/* Curriculum & Values */}
      <section id="programs" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end mb-24">
            <div>
              <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">The Solution</h2>
              <h3 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
                임직원을 위한 <br />
                10단계 맞춤 커리큘럼
              </h3>
            </div>
            <p className="text-slate-500 text-lg font-light leading-relaxed lg:max-w-md">
              현업에 바로 적용 가능한 비즈니스 케이스와 직무별 특화 콘텐츠를 통해 학습 효율을 극대화합니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { level: 'Beginner (A1-A2)', title: 'Global Foundation', desc: 'Pre-Basic ~ Basic 3. 업무의 기초적 소통 및 이메일 독해 역량 확보.' },
              { level: 'Intermediate (B1)', title: 'Strategic Business', desc: 'Intermediate 1 ~ 3. 실무 회의 주도 및 능숙한 커뮤니케이션 완성.' },
              { level: 'Advanced (B2-C1)', title: 'Executive Mastery', desc: 'Advanced 1 ~ 3. 전략적 협상 및 고난도 의사결정 영어 구사.' }
            ].map((card, i) => (
              <div key={i} className="group relative bg-slate-50 p-12 rounded-[2rem] hover:bg-[#034EA2] transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2">
                <div className="relative z-10">
                  <p className="text-[#034EA2] group-hover:text-blue-200 text-xs font-bold uppercase tracking-widest mb-8">{card.level}</p>
                  <h4 className="text-3xl font-bold text-slate-900 group-hover:text-white mb-6 transition-colors">{card.title}</h4>
                  <p className="text-slate-500 group-hover:text-blue-100/80 leading-relaxed text-sm">{card.desc}</p>
                  <div className="mt-10 flex items-center gap-2 text-[#034EA2] group-hover:text-white font-bold text-sm">
                    View Details
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </div>
                </div>
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity">
                  <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z"/></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A111F] text-white py-24 border-t border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
            <div className="col-span-1 md:col-span-2 space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black text-white">ED</div>
                <span className="text-2xl font-bold tracking-tighter">English Discoveries</span>
              </div>
              <p className="text-slate-500 max-w-sm leading-relaxed text-sm font-medium">
                에듀포레는 글로벌 대기업의 미래 가치를 높이는 영어 교육 혁신 파트너입니다.<br />
                ETS & EduSoft의 독보적 기술력으로 교육의 기준을 바꿉니다.
              </p>
              <div className="flex items-center gap-10 grayscale opacity-40 hover:grayscale-0 transition-all">
                <span className="text-xl font-black">ETS</span>
                <span className="text-xl font-black italic">EduSoft</span>
              </div>
            </div>
            <div>
              <h5 className="font-bold mb-8 text-xs uppercase tracking-[0.3em] text-blue-500">Contact</h5>
              <ul className="space-y-4 text-sm text-slate-400 font-medium">
                <li className="flex items-center gap-3"><svg className="w-4 h-4 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg> 02-2123-3451</li>
                <li className="flex items-center gap-3"><svg className="w-4 h-4 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg> danielko@yonsei.ac.kr</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-8 text-xs uppercase tracking-[0.3em] text-blue-500">Navigation</h5>
              <ul className="space-y-4 text-sm text-slate-400 font-medium">
                <li><a href="#" className="hover:text-white transition-colors">Program Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">S-Test Login</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest tracking-widest">© 2025 EDUFORE | Global Corporate English Solution</p>
            <div className="flex gap-10">
               <Link to="/login" className="text-[10px] text-slate-800 font-black hover:text-blue-500 transition-colors uppercase tracking-[0.2em]">Management Terminal</Link>
            </div>
          </div>
        </div>

        {/* The Requested Admin Access Button - Sophisticated Placement */}
        <Link 
          to="/login" 
          title="Admin Login"
          className="absolute bottom-8 right-8 w-14 h-14 bg-white/5 backdrop-blur-xl rounded-full flex items-center justify-center text-slate-700 hover:text-blue-500 hover:bg-white/10 transition-all duration-500 group border border-white/5 shadow-2xl"
        >
          <svg className="w-6 h-6 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
        </Link>
      </footer>
    </div>
  );
};

export default Home;
