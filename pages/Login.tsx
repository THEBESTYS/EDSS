
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginProps {
  onLogin: (status: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'one@naver.com' && password === 'pass1234') {
      onLogin(true);
      navigate('/admin');
    } else {
      setError('Invalid admin credentials.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-6">
      <div className="w-full max-w-md">
        <div className="bg-slate-900 border border-slate-800 p-10 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-3xl rounded-full"></div>
          
          <div className="text-center mb-10 relative z-10">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl mx-auto flex items-center justify-center text-white font-black text-2xl mb-6 shadow-2xl shadow-blue-500/20">ED</div>
            <h1 className="text-2xl font-bold text-white mb-2 tracking-tight">Admin Gateway</h1>
            <p className="text-slate-400 text-sm">관리자 계정 정보를 입력하십시오.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6 relative z-10">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Login ID</label>
              <input 
                type="email" 
                required
                className="w-full bg-slate-800 border-none rounded-xl px-5 py-3.5 text-white placeholder-slate-600 focus:ring-2 focus:ring-blue-600 transition-all"
                placeholder="one@naver.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Password</label>
              <input 
                type="password" 
                required
                className="w-full bg-slate-800 border-none rounded-xl px-5 py-3.5 text-white placeholder-slate-600 focus:ring-2 focus:ring-blue-600 transition-all"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 text-xs font-bold">{error}</p>}
            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold transition-all shadow-xl shadow-blue-600/20"
            >
              System Authorization
            </button>
          </form>

          <div className="mt-8 text-center">
            <button onClick={() => navigate('/')} className="text-slate-500 text-xs font-bold hover:text-white transition-colors uppercase tracking-widest">Return to Home</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
