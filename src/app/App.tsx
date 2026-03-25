import { useState } from 'react';
import { motion } from 'motion/react';
import emailjs from '@emailjs/browser';
import {
  Scale,
  Users,
  BookOpen,
  MessageSquare,
  Mail,
  Linkedin,
  Twitter,
  Facebook,
  CheckCircle2,
  Send,
  Instagram,
} from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Card } from './components/ui/card';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { Textarea } from './components/ui/textarea';
import logoImage from '../assets/4d568eb327f6c0aa77bcd8d28dfa8bf315f8fbfe.png';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function App() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isContactSubmitted, setIsContactSubmitted] = useState(false);
  const [isSendingContact, setIsSendingContact] = useState(false);
  const [contactError, setContactError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setIsSubmitted(false);
      }, 3000);
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      setContactError('Please fill in all fields.');
      return;
    }

    setContactError('');
    setIsSendingContact(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: contactForm.name,
          email: contactForm.email,
          message: contactForm.message,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      setIsContactSubmitted(true);
      setContactForm({
        name: '',
        email: '',
        message: '',
      });

      setTimeout(() => {
        setIsContactSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setContactError('Message could not be sent. Please try again.');
    } finally {
      setIsSendingContact(false);
    }
  };

  const features = [
    {
      icon: MessageSquare,
      title: 'Legal Discussions',
      description:
        'Engage in meaningful conversations about cases, legal theories, and current events in law.',
    },
    {
      icon: Users,
      title: 'Student Networking',
      description:
        'Connect with law students worldwide, build your professional network early in your career.',
    },
    {
      icon: BookOpen,
      title: 'Knowledge Sharing',
      description:
        'Share study materials, case briefs, and insights to help each other succeed.',
    },
    {
      icon: Scale,
      title: 'Community Collaboration',
      description:
        'Work together on projects, study groups, and prepare for the bar exam as a community.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F2E5D5]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#592512] via-[#783510] to-[#592512] text-white">
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1662516201865-8633915e668a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VydGhvdXNlJTIwY29sdW1ucyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzM2MDU4NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Courthouse columns"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-6 py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
              <img
                src={logoImage}
                alt="Lets Speak Law Logo"
                className="w-24 h-24 md:w-32 md:h-32"
              />
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                Lets Speak Law
              </h1>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <Badge className="bg-[#F2E5D5] text-[#592512] px-6 py-2 text-lg hover:bg-[#F2E5D5]">
                Coming Soon
              </Badge>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl mb-6"
            >
              The Social Web App for Law Students
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-[#F2E5D5]/90 mb-12 max-w-3xl mx-auto"
            >
              Where future legal professionals connect, collaborate, and grow
              together. Join a community dedicated to elevating legal education
              through shared knowledge and meaningful discussions.
            </motion.p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#F2E5D5"
            />
          </svg>
        </div>
      </section>

      {/* About the Platform */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-[#592512]">
              About the Platform
            </h2>
            <div className="w-20 h-1 bg-[#783510] mx-auto mb-8"></div>
            <p className="text-xl text-[#592512]/80 leading-relaxed max-w-3xl mx-auto">
              Lets Speak Law is more than just a social network—it's a community
              built for aspiring lawyers. A dedicated space where law students
              can discuss landmark cases, share valuable insights, debate legal
              theories, and build meaningful connections that last throughout
              their careers. Whether you're preparing for exams, seeking study
              partners, or looking to engage in thought-provoking legal
              discussions, this is your platform.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Law library books"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#592512]/60 to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#F2E5D5]/50 to-[#F2E5D5]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-[#592512]">
              Key Features
            </h2>
            <div className="w-20 h-1 bg-[#783510] mx-auto mb-6"></div>
            <p className="text-xl text-[#A89591] max-w-2xl mx-auto">
              Everything you need to thrive in your legal education journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#783510]/20 bg-white/60">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-[#592512]/10">
                      <feature.icon className="w-8 h-8 text-[#592512]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl mb-3 text-[#592512]">
                        {feature.title}
                      </h3>
                      <p className="text-[#A89591] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Vision */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#592512] to-[#783510] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1764113697577-b5899b9a339d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGp1c3RpY2UlMjBzY2FsZXN8ZW58MXx8fHwxNzczNjA1ODczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Justice scales"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Scale className="w-16 h-16 text-[#F2E5D5] mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl mb-8">Our Vision</h2>
            <div className="w-20 h-1 bg-[#F2E5D5] mx-auto mb-10"></div>
            <p className="text-xl md:text-2xl leading-relaxed text-[#F2E5D5]/90 mb-8">
              We believe in empowering the next generation of legal
              professionals by creating a collaborative ecosystem where
              knowledge flows freely, connections are meaningful, and every
              student has access to the resources and community they need to
              excel.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-[#F2E5D5]/80">
              Together, we're building more than a platform—we're building the
              future of legal education. A future where law students support
              each other, share their expertise, and rise together to become the
              principled, knowledgeable attorneys our world needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#F2E5D5]/50 to-[#F2E5D5]">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-[#592512]">
              Contact Us
            </h2>
            <div className="w-20 h-1 bg-[#783510] mx-auto mb-8"></div>
            <p className="text-xl text-[#592512]/80 leading-relaxed max-w-3xl mx-auto">
              Have questions or need more information? Fill out the form below
              and we'll get back to you soon.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            {!isContactSubmitted ? (
              <Card className="p-8 bg-white/60 border-2 border-[#783510]/10 shadow-xl">
                <form onSubmit={handleContactSubmit} className="flex flex-col gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm mb-2 text-[#592512]"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      value={contactForm.name}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, name: e.target.value })
                      }
                      required
                      disabled={isSendingContact}
                      className="bg-white border-[#A89591]/30 text-[#592512] placeholder:text-[#A89591]/60"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm mb-2 text-[#592512]"
                    >
                      Email
                    </label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={contactForm.email}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, email: e.target.value })
                      }
                      required
                      disabled={isSendingContact}
                      className="bg-white border-[#A89591]/30 text-[#592512] placeholder:text-[#A89591]/60"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm mb-2 text-[#592512]"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us how we can help you..."
                      value={contactForm.message}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          message: e.target.value,
                        })
                      }
                      required
                      rows={6}
                      disabled={isSendingContact}
                      className="bg-white border-[#A89591]/30 text-[#592512] placeholder:text-[#A89591]/60"
                    />
                  </div>

                  {contactError && (
                    <p className="text-sm text-red-600">{contactError}</p>
                  )}

                  <Button
                    type="submit"
                    disabled={isSendingContact}
                    className="bg-[#592512] text-[#F2E5D5] hover:bg-[#783510] w-full py-6 text-lg disabled:opacity-70"
                  >
                    {isSendingContact ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </Card>
            ) : (
              <Card className="p-8 bg-white/60 border-2 border-[#783510]/20 shadow-xl">
                <div className="flex flex-col items-center justify-center gap-4 py-8">
                  <CheckCircle2 className="w-16 h-16 text-[#783510]" />
                  <h3 className="text-2xl text-[#592512]">Thank You!</h3>
                  <p className="text-[#A89591] text-center">
                    Your message has been received. We'll get back to you soon!
                  </p>
                </div>
              </Card>
            )}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#592512] text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
                <img
                  src={logoImage}
                  alt="Lets Speak Law Logo"
                  className="w-14 h-14"
                />
                <span className="text-2xl">Lets Speak Law</span>
              </div>
              <p className="text-[#F2E5D5]/70 text-sm">
                Full web app launching soon
              </p>
            </div>

            <div className="flex flex-col items-center gap-6">
              <a
                href="https://www.instagram.com/lets_speak_law?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="p-3 rounded-full bg-white/10 hover:bg-[#783510] transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <p className="text-[#F2E5D5]/70 text-sm">
                You can follow us from instagram.
              </p>
            </div>

            <div className="flex items-center gap-2 text-[#F2E5D5]/70">
              <Mail className="w-5 h-5 text-[#F2E5D5]" />
              <a
                href="mailto:contact@letsspeaklaw.com"
                className="hover:text-white transition-colors"
              >
                letsspeaklaw@gmail.com
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-[#F2E5D5]/70">
            <p>&copy; 2026 Lets Speak Law. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}