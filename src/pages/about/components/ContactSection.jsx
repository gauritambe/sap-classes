import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors?.[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    const newErrors = {};

    if (!formData?.name?.trim()) newErrors.name = 'Name is required';
    if (!formData?.email?.trim()) newErrors.email = 'Email is required';
    if (!formData?.subject?.trim()) newErrors.subject = 'Subject is required';
    if (!formData?.message?.trim()) newErrors.message = 'Message is required';

    if (Object.keys(newErrors)?.length > 0) {
      setErrors(newErrors);
      return;
    }

    alert('Thank you for your message! Dr. Kumar will respond within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactMethods = [
    {
      icon: 'Mail',
      title: 'Email',
      value: 'rajesh.kumar@sapclassespro.com',
      description: 'Response within 24 hours'
    },
    {
      icon: 'Phone',
      title: 'Phone',
      value: '+91 98765 43210',
      description: 'Mon-Fri, 9 AM - 6 PM IST'
    },
    {
      icon: 'Calendar',
      title: 'Book Consultation',
      value: 'Schedule a 1-on-1 session',
      description: 'Free 30-minute career guidance'
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions about courses, career guidance, or corporate training? I'm here to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {contactMethods?.map((method, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={method?.icon} size={28} color="#1E3A8A" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{method?.title}</h3>
              <p className="text-base md:text-lg font-semibold text-blue-600 mb-2">{method?.value}</p>
              <p className="text-sm text-gray-600">{method?.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-8 lg:p-10 shadow-xl border border-gray-100">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
            Send a Direct Message
          </h3>

          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData?.name}
                onChange={handleChange}
                error={errors?.name}
                required
              />

              <Input
                label="Email Address"
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData?.email}
                onChange={handleChange}
                error={errors?.email}
                required
              />
            </div>

            <Input
              label="Subject"
              type="text"
              name="subject"
              placeholder="What would you like to discuss?"
              value={formData?.subject}
              onChange={handleChange}
              error={errors?.subject}
              required
            />

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                rows="6"
                placeholder="Share your questions, goals, or how I can help you..."
                value={formData?.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                  errors?.message ? 'border-red-500' : 'border-gray-300'
                }`}
              ></textarea>
              {errors?.message && (
                <p className="mt-1 text-sm text-red-500">{errors?.message}</p>
              )}
            </div>

            <Button
              type="submit"
              variant="default"
              size="lg"
              fullWidth
              iconName="Send"
              iconPosition="right"
            >
              Send Message
            </Button>
          </form>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 md:p-8 text-white text-center">
          <Icon name="MessageCircle" size={48} className="mx-auto mb-4" />
          <h3 className="text-xl md:text-2xl font-bold mb-3">Join Our Learning Community</h3>
          <p className="text-base md:text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
            Connect with 5,000+ SAP professionals, access exclusive resources, and get personalized career guidance
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg" iconName="Users" iconPosition="left">
              Join Community Forum
            </Button>
            <Button variant="outline" size="lg" iconName="Calendar" iconPosition="left" className="bg-white/10 border-white text-white hover:bg-white/20">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;