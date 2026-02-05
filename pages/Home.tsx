
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
              <span className="text-2xl font-black text-blue-600 tracking-tighter">ED</span>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-slate-900 text-sm">English Discoveries</span>
                <span className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">Global Partner</span>
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-6">
              {['Programs', 'S-Test', 'Compatibility', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors uppercase tracking-tight">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://ed.engdis.com/edufore24#/login" target="_blank" className="text-sm font-bold text-slate-900 px-4 py-2 hover:text-blue-600 transition-all">ED Class</a>
            <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-600 transition-all shadow-xl shadow-slate-200">
              Apply Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center pt-20 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-30 grayscale scale-105 hover:scale-100 transition-transform duration-[10s]" 
            alt="Corporate Excellence"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-8 uppercase tracking-widest">
              Exclusive for Samsung Global Leaders
            </div>
            <h1 className="text-6xl md:text-8xl font-serif text-white leading-[1.05] tracking-tight mb-8 hero-text-shadow">
              Global <span className="text-blue-500 italic">Agility</span> <br />
              Through English.
            </h1>
            <p className="text-xl text-slate-400 font-light mb-12 leading-relaxed max-w-2xl">
              삼성의 초격차 경쟁력을 위한 영어 공용화 전략. <br />
              AI 기반 초개인화 학습 솔루션 English Discoveries가 함께합니다.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <button className="px-10 py-5 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/20">프로그램 시작하기</button>
              <div className="flex items-center gap-8 grayscale opacity-60">
                <span className="text-white font-bold text-lg tracking-tighter uppercase">ETS</span>
                <span className="text-white font-bold text-lg tracking-tighter uppercase">EduSoft</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Value Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div>
                <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Strategic Imperative</h2>
                <h3 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">
                  왜 영문 공용화인가? <br />
                  <span className="italic font-normal">Agility & Precision.</span>
                </h3>
              </div>
              <div className="space-y-10">
                <div className="flex gap-6 group">
                  <div className="w-14 h-14 shrink-0 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3">정보의 즉시성 (Zero Latency)</h4>
                    <p className="text-slate-500 leading-relaxed text-sm">번역 과정에서 발생하는 물리적 시간과 정보의 왜곡을 제거하여 글로벌 시장 대응 속도를 획기적으로 개선합니다.</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="w-14 h-14 shrink-0 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3">정보 부패 방지 (Accuracy)</h4>
                    <p className="text-slate-500 leading-relaxed text-sm">가공되지 않은 원천 데이터를 실시간으로 공유함으로써 경영 판단의 오류 리스크를 최소화합니다.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover" alt="Meeting" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-blue-600 p-8 rounded-3xl text-white shadow-2xl max-w-[240px]">
                <p className="text-4xl font-black mb-2 tracking-tighter">100%</p>
                <p className="text-xs font-bold uppercase tracking-widest opacity-80">Global Standard Alignment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Grid */}
      <section id="programs" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">The Solution</h2>
            <h3 className="text-4xl font-serif text-slate-900">10단계 통합 커리큘럼</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { level: 'Beginner (A1-A2)', title: 'Foundation', desc: 'Pre-Basic ~ Basic 3. 일상 업무의 기초적 소통 역량 확보.' },
              { level: 'Intermediate (B1)', title: 'Professional', desc: 'Intermediate 1 ~ 3. 실무 회의 및 이메일 작성 능숙도 완성.' },
              { level: 'Advanced (B2-C1)', title: 'Mastery', desc: 'Advanced 1 ~ 3. 전략적 협상 및 고도의 학술적 표현 구사.' }
            ].map((card, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-slate-100 hover:border-blue-500 transition-all group shadow-sm hover:shadow-2xl">
                <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-6">{card.level}</p>
                <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{card.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-24 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2 space-y-8">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-black text-blue-500 tracking-tighter">ED</span>
                <span className="text-xl font-bold tracking-tight">English Discoveries</span>
              </div>
              <p className="text-slate-400 max-w-sm leading-relaxed text-sm">
                에듀포레는 글로벌 대기업 임직원을 위한 프리미엄 영어 교육 솔루션을 제공합니다. 
                전략적 파트너십을 통해 기업의 영문 공용화를 가속화합니다.
              </p>
              <div className="flex gap-4">
                {['Twitter', 'LinkedIn', 'YouTube'].map(s => (
                  <div key={s} className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-500 hover:text-white hover:border-white transition-all cursor-pointer">
                    <span className="sr-only">{s}</span>
                    <div className="w-4 h-4 bg-current rounded-sm"></div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-500">Contact</h5>
              <ul className="space-y-4 text-sm text-slate-400">
                <li>02-2123-3451</li>
                <li>danielko@yonsei.ac.kr</li>
                <li>서울특별시 서대문구 연세로 50</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-500">Resource</h5>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Program Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">S-Test Manual</a></li>
                <li><a href="#" className="hover:text-white transition-colors">EduSoft API</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-xs text-slate-500 font-medium">© 2025 EDUFORE. All Rights Reserved. Powered by ETS & EduSoft.</p>
            <div className="flex gap-8 text-xs text-slate-500 font-bold uppercase tracking-widest">
              <Link to="/login" className="hover:text-white transition-colors opacity-0 hover:opacity-100">Admin Login</Link>
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Fixed Admin Portal Button (Bottom Right) */}
      <Link 
        to="/login" 
        className="fixed bottom-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white/20 hover:text-white hover:bg-blue-600 transition-all z-50 group border border-white/10"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
      </Link>
    </div>
  );
};

export default Home;
