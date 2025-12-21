import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  GraduationCap, 
  Users, 
  Calendar, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Heart,
  BookOpen,
  Award,
  ChevronDown,
  Menu,
  X,
  UserPlus
} from 'lucide-react';

const LandingPage = ({ onGetStarted }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const [timeRemaining, setTimeRemaining] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  return (
    <div className={`min-h-screen ${showOverlay ? 'bg-gray-100' : 'bg-white'} relative`}>
      {/* Overlay to make everything look disabled */}
      {showOverlay && (
        <div className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-40 pointer-events-none"></div>
      )}
      
      {/* Exit Button to View Background */}
      <button
        onClick={() => setShowOverlay(!showOverlay)}
        className="fixed top-20 right-4 sm:right-8 z-50 bg-white/90 hover:bg-white text-gray-700 px-4 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 border-2 border-gray-300 backdrop-blur-sm"
      >
        {showOverlay ? (
          <>
            <X className="w-4 h-4" />
            <span className="hidden sm:inline">View Background</span>
            <span className="sm:hidden">Exit</span>
          </>
        ) : (
          <>
            <Shield className="w-4 h-4" />
            <span className="hidden sm:inline">Show Warning</span>
            <span className="sm:hidden">Warning</span>
          </>
        )}
      </button>
      
      {/* Countdown Timer Banner */}
      {showOverlay && (
        <div className="fixed top-0 w-full z-50 bg-gradient-to-r from-red-600 via-orange-600 to-red-600 text-white py-3 shadow-lg animate-pulse">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
              <span className="font-bold text-lg flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                URGENT: Service Termination in
              </span>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-1 rounded-full backdrop-blur-sm">
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold">{String(timeRemaining.hours).padStart(2, '0')}</span>
                  <span className="text-xs">Hours</span>
                </div>
                <span className="text-2xl">:</span>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold">{String(timeRemaining.minutes).padStart(2, '0')}</span>
                  <span className="text-xs">Minutes</span>
                </div>
                <span className="text-2xl">:</span>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold">{String(timeRemaining.seconds).padStart(2, '0')}</span>
                  <span className="text-xs">Seconds</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className={`fixed ${showOverlay ? 'top-16' : 'top-0'} w-full z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/50 backdrop-blur-md shadow-lg' 
          : 'bg-white/30 backdrop-blur-sm'
      } ${showOverlay ? 'opacity-60' : 'opacity-100 bg-white shadow-lg'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 rounded-full overflow-hidden flex items-center justify-center ${showOverlay ? 'opacity-50' : ''}`}>
                <img 
                  src="/image0.png" 
                  alt="ISCC Midwifery Logo" 
                  className={`w-full h-full object-cover ${showOverlay ? 'grayscale' : ''}`}
                />
              </div>
              <div>
                <span className={`font-bold text-xl ${showOverlay ? 'text-gray-400' : 'bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent'}`}>
                  Kumadronas
                </span>
                <p className={`text-xs hidden sm:block ${showOverlay ? 'text-gray-400' : 'text-gray-500'}`}>
                  {showOverlay ? 'Service Unavailable' : 'ISCC Duty System'}
                </p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                disabled={showOverlay}
                className={showOverlay ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:text-emerald-600 transition-colors"}
              >
                Features
              </button>
              <button 
                disabled={showOverlay}
                className={showOverlay ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:text-emerald-600 transition-colors"}
              >
                How it Works
              </button>
              <button 
                disabled={showOverlay}
                className={showOverlay ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:text-emerald-600 transition-colors"}
              >
                About
              </button>
              <button
                disabled={showOverlay}
                onClick={showOverlay ? undefined : onGetStarted}
                className={showOverlay 
                  ? "bg-gray-400 text-gray-600 px-6 py-2 rounded-full cursor-not-allowed"
                  : "bg-gradient-to-r from-emerald-600 to-green-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                }
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              disabled={showOverlay}
              className={`md:hidden p-2 ${showOverlay ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700'}`}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Upgrade Notice */}
      {showOverlay && (
        <section className="pt-40 pb-20 relative z-30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Alert Box */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-4 border-red-500">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                <Shield className="w-12 h-12 text-red-600" />
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                ⚠️ Unable to Access This Page
              </h1>
              
              <div className="inline-block bg-red-50 border-2 border-red-200 rounded-lg px-6 py-3 mb-6">
                <p className="text-red-700 font-semibold text-lg">
                  Service will be TERMINATED in {String(timeRemaining.hours).padStart(2, '0')}:{String(timeRemaining.minutes).padStart(2, '0')}:{String(timeRemaining.seconds).padStart(2, '0')}
                </p>
              </div>
            </div>

            {/* Error Details */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <X className="w-6 h-6 text-red-500 mr-2" />
                Critical Database Issue
              </h2>
              
              <div className="space-y-3 text-gray-700">
                <p className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span><strong>Issue:</strong> Your current <strong>Supabase Standard Subscription</strong> cannot handle the large volume of data in the <strong>student table</strong></span>
                </p>
                <p className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span><strong>Impact:</strong> Database queries are failing, preventing access to all system features</span>
                </p>
                <p className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span><strong>Action Required:</strong> Upgrade to <strong>Supabase Advanced Subscription</strong> immediately</span>
                </p>
                <p className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span><strong>Deadline:</strong> Service will be terminated if not upgraded within 24 hours</span>
                </p>
              </div>
            </div>

            {/* Upgrade Options */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Choose Your Upgrade Plan
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Advanced Plan */}
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border-2 border-orange-300 transform hover:scale-105 transition-transform">
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Advanced Plan</h3>
                    <div className="text-4xl font-bold text-orange-600 mb-2">₱1,500</div>
                    <p className="text-sm text-gray-600">per month</p>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Handle large student data volumes</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Unlimited database queries</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Enhanced performance</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Priority support</span>
                    </li>
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 rounded-lg font-semibold hover:shadow-xl transition-all">
                    Upgrade Now
                  </button>
                </div>

                {/* Team Plan */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-300 transform hover:scale-105 transition-transform relative">
                  <div className="absolute -top-3 -right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    RECOMMENDED
                  </div>
                  
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Team Plan</h3>
                    <div className="text-4xl font-bold text-blue-600 mb-2">₱3,000</div>
                    <p className="text-sm text-gray-600">per month</p>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Everything in Advanced</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Multi-user collaboration</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Advanced analytics</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Dedicated account manager</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>99.9% uptime SLA</span>
                    </li>
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:shadow-xl transition-all">
                    Upgrade to Team
                  </button>
                </div>
              </div>
            </div>

            {/* Urgency Notice */}
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 text-center">
              <h3 className="text-lg font-bold text-red-900 mb-2">
                ⏰ Upgrade Required Within 24 Hours
              </h3>
              <p className="text-red-700 mb-4">
                If not upgraded, all services will be permanently terminated and data may be lost.
              </p>
              <p className="text-sm text-gray-600">
                For assistance, contact your system administrator immediately.
              </p>
            </div>
          </div>

          {/* Contact Support */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Need help with the upgrade process?
            </p>
            <button className="bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all border-2 border-gray-300">
              Contact Support
            </button>
          </div>
        </div>
      </section>
      )}

      {/* Original Landing Page Content - Visible when overlay is hidden */}
      {!showOverlay && (
        <>
          {/* Hero Section */}
          <section className="pt-28 pb-16 bg-gradient-to-br from-emerald-50 via-green-50 to-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-slate-600 bg-clip-text text-transparent">
                    Streamline Your
                  </span>
                  <br />
                  <span className="text-gray-900">Midwifery Journey</span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                  The complete duty scheduling system for ISCC midwifery students. 
                  Manage schedules, track progress, and stay connected with your academic journey.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <button
                    onClick={onGetStarted}
                    className="group bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
                  >
                    Start Your Journey
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-600 hover:text-white transition-all duration-200"
                  >
                    Learn More
                  </button>
                </div>

                <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Secure & Private
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Real-time Updates
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Easy to Use
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Preview */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Everything You Need to Succeed
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Powerful features designed specifically for midwifery students and educators
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 flex items-center justify-center mb-6">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Scheduling</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Effortlessly manage your on-call duty schedules with our intelligent booking system.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center mb-6">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-time Updates</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Get instant notifications about schedule changes and important announcements.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 flex items-center justify-center mb-6">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Secure & Reliable</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Your data is protected with enterprise-grade security and reliable cloud infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Footer */}
      <footer className={`py-12 relative z-30 ${showOverlay ? 'bg-gray-800 text-gray-400 opacity-60' : 'bg-gray-900 text-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className={`w-12 h-12 rounded-full overflow-hidden flex items-center justify-center ${showOverlay ? 'opacity-50' : ''}`}>
                <img 
                  src="/image0.png" 
                  alt="ISCC Midwifery Logo" 
                  className={`w-full h-full object-cover ${showOverlay ? 'grayscale' : ''}`}
                />
              </div>
              <span className={`text-2xl font-bold ${showOverlay ? 'text-gray-500' : ''}`}>
                Kumadronas System
              </span>
            </div>
            {showOverlay ? (
              <>
                <div className="bg-red-900/20 border border-red-700/30 rounded-lg px-4 py-2 inline-block mb-4">
                  <p className="text-red-400 font-semibold">
                    🚫 Service Currently Unavailable
                  </p>
                </div>
                <p className="text-gray-500 mb-6">
                  Upgrade required to restore access
                </p>
              </>
            ) : (
              <p className="text-gray-400 mb-6">
                Empowering ISCC midwifery students with smart scheduling solutions
              </p>
            )}
            <p className={`text-sm ${showOverlay ? 'text-gray-600' : 'text-gray-500'}`}>
              © 2025 Ilocos Sur Community College. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .delay-100 {
          animation-delay: 100ms;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
