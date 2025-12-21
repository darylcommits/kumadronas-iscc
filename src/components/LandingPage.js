import React, { useState, useEffect } from 'react';
import { AlertCircle, Lock, Database, Clock, TrendingUp } from 'lucide-react';

export default function LandingPage() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Disabled overlay pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 10px, transparent 10px, transparent 20px)',
        }}></div>
      </div>

      {/* Countdown Header */}
      <div className="relative bg-red-600 border-b-4 border-red-700 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-white animate-pulse" />
              <span className="text-white font-bold text-lg">SERVICE TERMINATION IN:</span>
            </div>
            <div className="flex gap-4">
              <div className="bg-black bg-opacity-40 px-4 py-2 rounded-lg">
                <div className="text-3xl font-bold text-white tabular-nums">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-xs text-red-200 uppercase">Hours</div>
              </div>
              <div className="bg-black bg-opacity-40 px-4 py-2 rounded-lg">
                <div className="text-3xl font-bold text-white tabular-nums">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-xs text-red-200 uppercase">Minutes</div>
              </div>
              <div className="bg-black bg-opacity-40 px-4 py-2 rounded-lg">
                <div className="text-3xl font-bold text-white tabular-nums">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-xs text-red-200 uppercase">Seconds</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-5xl mx-auto px-4 py-16">
        {/* Lock Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Lock className="w-32 h-32 text-red-500 opacity-80" />
            <div className="absolute inset-0 animate-ping">
              <Lock className="w-32 h-32 text-red-500 opacity-20" />
            </div>
          </div>
        </div>

        {/* Main Alert */}
        <div className="bg-gray-800 border-4 border-red-500 rounded-2xl shadow-2xl p-8 mb-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-600 via-orange-500 to-red-600 animate-pulse"></div>
          
          <div className="flex items-start gap-4 mb-6">
            <AlertCircle className="w-12 h-12 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <h1 className="text-4xl font-bold text-white mb-4">Unable to Access This Page</h1>
              <p className="text-xl text-red-300 font-semibold mb-2">CRITICAL: Service Interruption</p>
            </div>
          </div>

          <div className="bg-gray-900 border-l-4 border-red-500 p-6 rounded-lg mb-6">
            <div className="flex items-start gap-3 mb-4">
              <Database className="w-8 h-8 text-red-400 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">Database Capacity Exceeded</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  Your current <span className="text-red-400 font-bold">Supabase Standard subscription</span> cannot handle the large volume of data in the <span className="text-yellow-400 font-semibold">student table</span>.
                </p>
                <p className="text-red-300 font-semibold text-lg">
                  ⚠️ Service will be <span className="text-red-400 underline">TERMINATED</span> if not upgraded within 24 hours.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-900 bg-opacity-50 border border-yellow-600 rounded-lg p-6 mb-6">
            <p className="text-yellow-200 text-lg font-semibold mb-2">
              🚨 IMMEDIATE ACTION REQUIRED
            </p>
            <p className="text-gray-200 text-lg">
              Please upgrade to <span className="text-green-400 font-bold">Advanced Supabase Subscription</span> as soon as possible to restore access and prevent data loss.
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Standard Upgrade */}
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 border-2 border-blue-500 rounded-xl p-8 shadow-xl transform hover:scale-105 transition-transform">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-8 h-8 text-blue-300" />
              <h3 className="text-2xl font-bold text-white">Advanced Plan</h3>
            </div>
            <div className="mb-6">
              <div className="text-5xl font-bold text-white mb-2">₱1,500</div>
              <div className="text-blue-200 text-lg">per month</div>
            </div>
            <ul className="space-y-3 mb-6 text-gray-200">
              <li className="flex items-start gap-2">
                <span className="text-green-400 font-bold">✓</span>
                <span>Unlimited student records</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 font-bold">✓</span>
                <span>High-performance database</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 font-bold">✓</span>
                <span>24/7 priority support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 font-bold">✓</span>
                <span>Advanced analytics</span>
              </li>
            </ul>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-colors text-lg shadow-lg">
              Upgrade Now
            </button>
          </div>

          {/* Team Plan */}
          <div className="bg-gradient-to-br from-purple-900 to-purple-800 border-2 border-purple-500 rounded-xl p-8 shadow-xl transform hover:scale-105 transition-transform relative">
            <div className="absolute top-4 right-4 bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
              RECOMMENDED
            </div>
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-8 h-8 text-purple-300" />
              <h3 className="text-2xl font-bold text-white">Team Plan</h3>
            </div>
            <div className="mb-6">
              <div className="text-5xl font-bold text-white mb-2">₱3,000</div>
              <div className="text-purple-200 text-lg">per month</div>
            </div>
            <ul className="space-y-3 mb-6 text-gray-200">
              <li className="flex items-start gap-2">
                <span className="text-green-400 font-bold">✓</span>
                <span>Everything in Advanced</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 font-bold">✓</span>
                <span>Multi-user collaboration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 font-bold">✓</span>
                <span>Advanced security features</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 font-bold">✓</span>
                <span>Custom integrations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 font-bold">✓</span>
                <span>Dedicated account manager</span>
              </li>
            </ul>
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-lg transition-colors text-lg shadow-lg">
              Upgrade to Team
            </button>
          </div>
        </div>

        {/* Bottom Warning */}
        <div className="bg-red-900 bg-opacity-50 border-2 border-red-500 rounded-lg p-6 text-center">
          <p className="text-red-200 text-lg font-semibold">
            ⏰ Don't lose access to your data! Upgrade now to continue using your application.
          </p>
        </div>
      </div>

      {/* Disabled Overlay Effect */}
      <div className="absolute inset-0 bg-black opacity-5 pointer-events-none"></div>
    </div>
  );
}
