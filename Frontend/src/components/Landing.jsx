import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Code, Users, Zap, Heart, MessageCircle, Trophy } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  // Redirect to /app if user is already logged in
  useEffect(() => {
    if (user) {
      navigate("/app");
    }
  }, [user, navigate]);

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Connect with Developers",
      description: "Meet talented developers from around the world and build meaningful professional connections."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Share Your Skills",
      description: "Showcase your technical expertise and discover developers with complementary skills."
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Real-time Chat",
      description: "Engage in instant conversations with your matches and collaborate on projects."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Smart Matching",
      description: "Our algorithm connects you with developers who share your interests and goals."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast & Intuitive",
      description: "Swipe through profiles quickly and make connections in seconds."
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Premium Features",
      description: "Unlock advanced features to supercharge your networking experience."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Full Stack Developer",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      text: "DevTinder helped me find amazing collaborators for my open-source project. Best platform for developer networking!"
    },
    {
      name: "Mike Johnson",
      role: "Frontend Engineer",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      text: "I've made countless professional connections and even found my co-founder through DevTinder!"
    },
    {
      name: "Priya Sharma",
      role: "Backend Developer",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "The matching algorithm is spot-on! I've connected with developers who truly complement my skill set."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

        {/* Navigation */}
        <nav className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="text-3xl">🚀</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Dev Tinder
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate("/login")}
                className="px-6 py-2 text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
              >
                Sign In
              </button>
              <button
                onClick={() => navigate("/login")}
                className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Get Started
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 animate-fadeIn">
              Connect. Code. <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Collaborate.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fadeIn animation-delay-200">
              The ultimate platform for developers to network, share skills, and build amazing projects together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeIn animation-delay-400">
              <button
                onClick={() => navigate("/login")}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                Start Connecting Now
              </button>
              <button
                onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white text-indigo-600 text-lg font-semibold rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 transition-all transform hover:scale-105 shadow-lg"
              >
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600">10K+</div>
                <div className="text-gray-600 mt-2">Active Developers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600">50K+</div>
                <div className="text-gray-600 mt-2">Connections Made</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-600">1M+</div>
                <div className="text-gray-600 mt-2">Messages Sent</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600">150+</div>
                <div className="text-gray-600 mt-2">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose DevTinder?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to build your professional developer network
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-white to-indigo-50 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-indigo-100"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Get started in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4 shadow-lg">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Create Profile</h3>
              <p className="text-gray-600">
                Sign up and showcase your skills, experience, and what you're looking for
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4 shadow-lg">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Start Swiping</h3>
              <p className="text-gray-600">
                Swipe through developer profiles and connect with those who match your interests
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-600 to-red-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4 shadow-lg">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Collaborate</h3>
              <p className="text-gray-600">
                Chat, share ideas, and build amazing projects with your new connections
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Developers Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied developers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-white to-purple-50 rounded-xl shadow-lg border border-purple-100"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 border-2 border-indigo-600"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Find Your Dev Match?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join thousands of developers building connections and collaborating on amazing projects
          </p>
          <button
            onClick={() => navigate("/login")}
            className="px-10 py-4 bg-white text-indigo-600 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
          >
            Get Started For Free
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl">🚀</span>
                <span className="text-xl font-bold">Dev Tinder</span>
              </div>
              <p className="text-gray-400">
                Connecting developers worldwide
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Premium</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 DevTinder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;