// src/lib/firebase.ts
import { initializeApp, getApps } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyD86EHupAQjPDq32ZPsDOuPZlX512xvJVc",
  authDomain: "hk-live-hub.firebaseapp.com",
  projectId: "hk-live-hub",
  storageBucket: "hk-live-hub.firebasestorage.app",
  messagingSenderId: "657767939762",
  appId: "1:657767939762:web:4563b20cbdff8a5e2a13ab"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const requestForToken = async () => {
  try {
    if (typeof window === 'undefined') return; // 確保在客戶端執行
    
    const messaging = getMessaging(app);
    const status = await Notification.requestPermission();
    
    if (status === 'granted') {
      const token = await getToken(messaging, { 
        vapidKey: '這裡填入你剛剛生成的那個 VAPID Key (很長的那串)' 
      });
      console.log('FCM Token:', token);
      return token;
    } else {
      alert('請在 iPhone 設定中允許通知');
    }
  } catch (error) {
    console.error('FCM Error:', error);
  }
};
