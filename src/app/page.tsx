'use client';

import React, { useState, useEffect } from 'react';

export default function Home() {
  const [temp, setTemp] = useState<string>('--');
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    // 更新時鐘
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('zh-HK', { hour12: false }));
    }, 1000);

    // 抓取香港天文台 API
    const fetchWeather = () => {
      fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc')
        .then(res => res.json())
        .then(data => {
          setTemp(data.temperature.data[0].value);
        })
        .catch(err => console.error("Weather Error:", err));
    };

    fetchWeather();
    const weatherTimer = setInterval(fetchWeather, 600000); // 10分鐘更新一次

    return () => {
      clearInterval(timer);
      clearInterval(weatherTimer);
    };
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-6 font-sans antialiased">
      <div className="max-w-md mx-auto space-y-6 pb-24">
        
        {/* Header: Time & Status */}
        <header className="flex justify-between items-end pt-4">
          <div>
            <p className="text-zinc-500 text-xs font-medium uppercase tracking-widest">Live Dashboard</p>
            <h1 className="text-4xl font-light tracking-tighter">{currentTime}</h1>
          </div>
          <div className="flex gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          </div>
        </header>

        {/* Weather Card */}
        <section className="bg-zinc-900/50 rounded-[2rem] p-6 border border-zinc-800 backdrop-blur-xl">
          <div className="flex justify-between items-start">
            <span className="text-zinc-400 text-sm">香港當前氣溫</span>
            <span className="text-blue-500 text-xs font-bold">HKO 實時</span>
          </div>
          <div className="flex items-baseline mt-2 gap-1">
            <span className="text-7xl font-extralight tracking-tighter">{temp}</span>
            <span className="text-3xl font-light text-zinc-500">°</span>
          </div>
        </section>

        {/* Radio Card */}
        <section className="bg-zinc-900/50 rounded-[2rem] p-6 border border-zinc-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center font-bold text-xs">903</div>
            <div>
              <h2 className="text-sm font-medium">叱咤 903</h2>
              <p className="text-xs text-zinc-500">正在直播...</p>
            </div>
          </div>
          <audio 
            controls 
            crossOrigin="anonymous"
            className="w-full h-10 invert hue-rotate-180 brightness-200"
            src="https://mscas01.881903.com/cr2"
          />
        </section>

        {/* Traffic Placeholder */}
        <section className="grid grid-cols-2 gap-4">
          <div className="bg-zinc-900/50 rounded-[2rem] p-5 border border-zinc-800">
            <p className="text-zinc-500 text-[10px] uppercase font-bold mb-1">港珠澳大橋</p>
            <p className="text-green-500 text-sm font-medium">正常</p>
          </div>
          <div className="bg-zinc-900/50 rounded-[2rem] p-5 border border-zinc-800">
            <p className="text-zinc-500 text-[10px] uppercase font-bold mb-1">羅湖口岸</p>
            <p className="text-yellow-500 text-sm font-medium">繁忙</p>
          </div>
        </section>

      </div>

      {/* iOS Style Bottom Bar */}
      <nav className="fixed bottom-6 left-6 right-6">
        <button 
          className="w-full bg-white text-black py-4 rounded-2xl font-bold shadow-2xl active:scale-95 transition-transform"
          onClick={() => alert('通知功能將在配置 Firebase 後啟用')}
        >
          訂閱突發新聞通知
        </button>
      </nav>
    </main>
  );
}