'use client';
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6 text-center">
      <div>
        <h1 className="text-4xl font-bold text-blue-500 mb-4">HK LIVE HUB</h1>
        <p className="text-zinc-500">如果看到這行，代表部署成功了！</p>
        <div className="mt-8 p-4 bg-zinc-900 rounded-2xl border border-zinc-800">
           <p className="text-sm">請重新加入主畫面測試通知</p>
        </div>
      </div>
    </div>
  );
}
