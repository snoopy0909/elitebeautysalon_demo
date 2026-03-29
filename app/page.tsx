'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Clock, Calendar, CheckCircle, ArrowRight, Shield, Sparkles, Heart, Star, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [expandedCategories, setExpandedCategories] = useState<Record<number, boolean>>({});

  const toggleCategory = (index: number) => {
    setExpandedCategories(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const phoneNumber = '+19493917336';
  const address = '17942 Sky Park Cir suite d, Irvine, CA 92614';
  const mapLink = `https://maps.google.com/?q=${encodeURIComponent(address)}`;
  const bookingLink = 'https://book.squareup.com/appointments/45ymu6owt2nvqc/location/4BWJPQ92W0C21/services';

  const serviceCategories = [
    {
      title: "Haircuts & Styling",
      image: "https://media.istockphoto.com/id/2180136427/photo/professional-hairdresser-cutting-girls-hair-in-beauty-salon-closeup.jpg?s=612x612&w=0&k=20&c=b7YsUVeZ8FF3pypz7LZar_B-7kAMkv9Emjg9fPByT_k=",
      services: [
        { name: "Basic Haircut", price: "$55.00", duration: "30 min", description: "Basic haircut (wash and style extra). Additional Fees may apply depending on hair length, density and texture.", link: "https://book.squareup.com/appointments/45ymu6owt2nvqc/location/4BWJPQ92W0C21/services/5CRMCZPJYMORYQT2OMQPK4DL" },
        { name: "Barbor Haircut", price: "$50.00", duration: "30 min", description: "Wash is not included.", link: "https://book.squareup.com/appointments/45ymu6owt2nvqc/location/4BWJPQ92W0C21/services/6BMT6TINSI3SZXNWQH6DDHN6" },
        { name: "Style Haircut", price: "$80.00", duration: "30 min", description: "Thick and long hair extra cost. (Wash and style extra)", link: "https://book.squareup.com/appointments/45ymu6owt2nvqc/location/4BWJPQ92W0C21/services/C6YO47VZCFV2X2SDJ42PO6MK" },
        { name: "Special CURLY Haircut", price: "$175.00", duration: "1 hr", description: "", link: "https://book.squareup.com/appointments/45ymu6owt2nvqc/location/4BWJPQ92W0C21/services/34TA6PVESXHB46ZU7SCKDWMG" },
        { name: "Barbor Haircut With Scalp Treatment", price: "$90.00", duration: "30 min", description: "Additional Fees may apply depending on hair length, density and texture.", link: "https://book.squareup.com/appointments/45ymu6owt2nvqc/location/4BWJPQ92W0C21/services/AAJLL4UUVNBO77VJ3T7GH7OY" },
        { name: "Trim", price: "Varies", duration: "30 min", description: "Less than an inch. Prices are subjected to change upon reviewing client's hair.", link: "https://book.squareup.com/appointments/45ymu6owt2nvqc/location/4BWJPQ92W0C21/services/H7ZFGCFA3QMYA5AFS6NMYNX4" },
        { name: "Wash & Style", price: "$80.00", duration: "1 hr", description: "Thick and long hair extra", link: "https://book.squareup.com/appointments/45ymu6owt2nvqc/location/4BWJPQ92W0C21/services/XJNDXCG5SCFSYI5ACPPNZLL5" },
        { name: "Style Only", price: "$60.00", duration: "30 min", description: "Thick and long hair extra cost.", link: "https://book.squareup.com/appointments/45ymu6owt2nvqc/location/4BWJPQ92W0C21/services/6SCVNT7NTBCSGVFGNMRZNNT3" },
        { name: "Wash Only", price: "$45.00", duration: "30 min", description: "", link: "https://book.squareup.com/appointments/45ymu6owt2nvqc/location/4BWJPQ92W0C21/services/ILMTKZ2LWK32EIIDPXGLJW3A" },
        { name: "Press & Curl / Silk Press", price: "$95.00", duration: "1 hr 30 min", description: "Shampoo and conditioner included. Prices are subjected to change.", link: "https://book.squareup.com/appointments/45ymu6owt2nvqc/location/4BWJPQ92W0C21/services/RSYVQTAUQYIC6URMGKEB6YKQ" },
        { name: "Quidad Rake & Shake", price: "$80.00", duration: "1 hr", description: "Shampoo, conditioner and define curls. Long and thick hair extra.", link: "https://book.squareup.com/appointments/45ymu6owt2nvqc/location/4BWJPQ92W0C21/services/GB5JJ45RKMCJ6M6RRI2ZS4BL" },
        { name: "Wedding Up Do", price: "Varies", duration: "1 hr 30 min", description: "Wedding trials and Planning. (Hair must be cleaned)", link: "https://book.squareup.com/appointments/45ymu6owt2nvqc/location/4BWJPQ92W0C21/services/OIFA6T4T3B72RN7Q33EEIEDQ" },
      ]
    },
    {
      title: "Color & Highlights",
      image: "https://media.istockphoto.com/id/1305824214/photo/woman-dyeing-her-hair-at-the-salon.webp?a=1&b=1&s=612x612&w=0&k=20&c=vTd-qSLrbRKCSGwc7xnwFqXAHxvXbTbhMW0phrlNw8o=",
      services: [
        { name: "Permanent Color - Full Head", price: "$150.00", duration: "1 hr", description: "Ala carte service. Wash included. Style hair extra cost.", link: "https://book.squareup.com/appointments/45ymu6owt2nvqc/location/4BWJPQ92W0C21/services/ICOJHBQMFX7BEGN2C5L4YYPG" },
        { name: "Permanent Color - Touch Up", price: "$90.00", duration: "45 min", description: "Ala carte service. Wash included. Style hair extra cost.", link: "https://book.squareup.com/appointments/45ymu6owt2nvqc/location/4BWJPQ92W0C21/services/SV2PZWDVDMSRBM3G5YTMS6JB" },
        { name: "Semi Permanent - Full Head", price: "$120.00", duration: "1 hr 30 min", description: "Ala carte service. Wash included. Style hair extra cost.", link: "https://book.squareup.com/appointments/45ymu6owt2nvqc/location/4BWJPQ92W0C21/services/RI7YWDCUVXRHKGZ52FSNHHPM" },
        { name: "Semi Permanent - Touch Up", price: "$85.00", duration: "55 min", description: "Ala carte service, Additional Fees may apply.", link: "https://book.squareup.com/appointments/45ymu6owt2nvqc/location/4BWJPQ92W0C21/services/345O2ON4YY5MZXCTUNULGGQP" },
        { name: "Highlight - Full Head", price: "$195.00", duration: "1 hr 30 min", description: "Comes with wash. Toning and Styling hair are not included.", link: "https://book.squareup.com/appointments/45ymu6owt2nvqc/location/4BWJPQ92W0C21/services/UCHGUBHBXG2NAKIPIQQAYU6P" },
        { name: "Highlight - Partial", price: "$100.00", duration: "1 hr", description: "Comes with wash, Toning and Styling hair not included.", link: "https://book.squareup.com/appointments/45ymu6owt2nvqc/location/4BWJPQ92W0C21/services/W73AXQNDUT6KZYWIOXOEAIGT" },
        { name: "Balayage/Ombre", price: "Consult", duration: "2 hr 30 min", description: "Hair wash included. Toning and Styling hair are NOT included.", link: "https://book.squareup.com/appointments/45ymu6owt2nvqc/location/4BWJPQ92W0C21/services/ULN27RHMXFRTAQPMVICG364R" },
        { name: "Toner", price: "Varies", duration: "30 min", description: "Added on service Only. Please select the main service.", link: "https://book.squareup.com/appointments/45ymu6owt2nvqc/location/4BWJPQ92W0C21/services/WXNICXNO3C3NM3GY42KBSVOF" },
      ]
    },
    {
      title: "Treatments & Texture",
      image: "https://www.shutterstock.com/image-photo/before-after-treatment-concept-sick-600nw-2649028193.jpg",
      services: [
        { name: "Organic Keratin Treatment", price: "$265.00", duration: "2 hr 30 min", description: "Wash and hair press included. Promoting healthy hair with sulfate-free, organic ingredients.", link: "https://book.squareup.com/appointments/45ymu6owt2nvqc/location/4BWJPQ92W0C21/services/4CPWDAVO2YFGQNAGEF5PPVM3" },
        { name: "Relaxer - Virgin Hair", price: "$180.00", duration: "2 hr", description: "", link: "https://book.squareup.com/appointments/45ymu6owt2nvqc/location/4BWJPQ92W0C21/services/GHWRN5P3CC3FX46S5A2D6BTH" },
        { name: "Relaxer - Touch Up", price: "$120.00", duration: "1 hr 30 min", description: "", link: "https://book.squareup.com/appointments/45ymu6owt2nvqc/location/4BWJPQ92W0C21/services/YJCMA7A6HUXORVCMZ4U4PFWZ" },
        { name: "Texturizer - Virgin Hair", price: "$140.00", duration: "2 hr", description: "", link: "https://book.squareup.com/appointments/45ymu6owt2nvqc/location/4BWJPQ92W0C21/services/DTMNPN3TY356A6VSH3BBNQC7" },
        { name: "Texturizer - Touch Up", price: "$90.00", duration: "1 hr 30 min", description: "Use chemical to soften the natural curly hair. Thick and long hair cost extra.", link: "https://book.squareup.com/appointments/45ymu6owt2nvqc/location/4BWJPQ92W0C21/services/ES5PGOZDGX7S4N5AAJIQH6IT" },
        { name: "Deep Conditioning Treatment", price: "$40.00", duration: "30 min", description: "Add on service only. Please select another service.", link: "https://book.squareup.com/appointments/45ymu6owt2nvqc/location/4BWJPQ92W0C21/services/V35N5XXCVRU5J2CN3SBMIXXN" },
        { name: "Olaplex Treatment", price: "$70.00", duration: "30 min", description: "", link: "https://book.squareup.com/appointments/45ymu6owt2nvqc/location/4BWJPQ92W0C21/services/ANY6YJZNKY36FSR56THHGK46" },
        { name: "B3 Bond & Demi Permanent Deep Conditioning", price: "Varies", duration: "20 min", description: "Add-on service Only. Repair & strengthens the hair's inner structure.", link: "https://book.squareup.com/appointments/45ymu6owt2nvqc/location/4BWJPQ92W0C21/services/H2G7JJ7QTSSPFLKQDET7URKO" },
        { name: "Organic Oil Treatment", price: "$45.00", duration: "20 min", description: "Add-on Service ONLY.", link: "https://book.squareup.com/appointments/45ymu6owt2nvqc/location/4BWJPQ92W0C21/services/4FF2FA3TFQTXU7ZYWFKNXG2J" },
      ]
    },
    {
      title: "Extensions & Braids",
      image: "https://t4.ftcdn.net/jpg/13/63/08/21/360_F_1363082182_ZNfERmbMLoVxy6p9h5VnmFKHhdepsb2y.jpg",
      services: [
        { name: "Full Head Extensions", price: "$350.00", duration: "4 hr 30 min", description: "Full head breaded with hair extensions attached. Exclude wash, haircut and style.", link: "https://book.squareup.com/appointments/45ymu6owt2nvqc/location/4BWJPQ92W0C21/services/YI4DFIGT46TRIAOEK4DRVPZW" },
        { name: "Tape in Extensions Installation", price: "$200.00", duration: "1 hr 30 min", description: "Wash and blow dry included. Thick and long hair extra cost.", link: "https://book.squareup.com/appointments/45ymu6owt2nvqc/location/4BWJPQ92W0C21/services/CEEGWGTGJY37XEHLKPZQ7YWX" },
        { name: "Crochet Extensions", price: "$200.00", duration: "2 hr", description: "Synthetic hair extensions attached to cornrows.", link: "https://book.squareup.com/appointments/45ymu6owt2nvqc/location/4BWJPQ92W0C21/services/L5O2HD7DMYWCP2EUJJXPO5ZZ" },
        { name: "Extensions Per Layer", price: "$100.00", duration: "30 min", description: "Breaded with hair extensions attached. Exclude haircut, wash and style.", link: "https://book.squareup.com/appointments/45ymu6owt2nvqc/location/4BWJPQ92W0C21/services/NHPH752TAHC7OD6V4UF6TNZM" },
        { name: "Full Head Extensions Tighten Up", price: "$40.00", duration: "30 min", description: "Prices are subjected to change upon reviewing client's hair.", link: "https://book.squareup.com/appointments/45ymu6owt2nvqc/location/4BWJPQ92W0C21/services/RQPD7A2ZSYRSPRL2WWB7WDN3" },
        { name: "Extensions Tighten Per Layer", price: "$20.00", duration: "45 min", description: "", link: "https://book.squareup.com/appointments/45ymu6owt2nvqc/location/4BWJPQ92W0C21/services/DRQKNQPZN3LJ7AYJM63KILKG" },
        { name: "Take Down For Crochet & Extensions", price: "$65.00", duration: "1 hr", description: "For first hour only then $30/per hours", link: "https://book.squareup.com/appointments/45ymu6owt2nvqc/location/4BWJPQ92W0C21/services/NOECUVXN2EBAZ7V3D2ZWI353" },
        { name: "Basic Braids Down", price: "$65.00", duration: "45 min", description: "Exclude; Wash, blowdry, thick and long hair extra.", link: "https://book.squareup.com/appointments/45ymu6owt2nvqc/location/4BWJPQ92W0C21/services/2EMTEUGHCNEBYQNL2K3DJ3KZ" },
      ]
    },
    {
      title: "Add-ons & Consultation",
      image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=1200",
      services: [
        { name: "Consultation", price: "$55.00", duration: "30 min", description: "Cost will go towards the service if you decide to move forward.", link: "https://book.squareup.com/appointments/45ymu6owt2nvqc/location/4BWJPQ92W0C21/services/R654C6AM2FLFFVJLTUQCID5G" },
        { name: "Thick Hair", price: "$20.00", duration: "15 min", description: "", link: "https://book.squareup.com/appointments/45ymu6owt2nvqc/location/4BWJPQ92W0C21/services/NJS5TLTX4Y4RVAIBBLITUXX7" },
        { name: "Long Hair", price: "$20.00", duration: "15 min", description: "", link: "https://book.squareup.com/appointments/45ymu6owt2nvqc/location/4BWJPQ92W0C21/services/HJWEAU6WFZV7TB2K5MMT2XTV" },
        { name: "Detangle Hair Service", price: "Varies", duration: "30 min", description: "", link: "https://book.squareup.com/appointments/45ymu6owt2nvqc/location/4BWJPQ92W0C21/services/UHG7JJJD5SKOTTENJCTOQRQ5" },
      ]
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      review: "Absolutely love my new balayage! The staff here is incredibly talented and made me feel so pampered. Highly recommend!",
      rating: 5
    },
    {
      name: "Jessica T.",
      review: "Best silk press I've ever had. My hair feels so healthy and looks amazing. The salon is beautiful and relaxing.",
      rating: 5
    },
    {
      name: "Emily R.",
      review: "I've been coming here for my keratin treatments for a year now. Consistent, professional, and they always listen to what I want.",
      rating: 5
    }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 selection:bg-amber-500 selection:text-neutral-950">
      {/* Navigation */}
      <nav className="sticky top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 sm:h-24">
            <div className="flex-shrink-0 flex items-center w-1/3">
              <Link href="/" className="group flex items-center focus:outline-none">
                <div className="relative h-16 w-56 sm:h-20 sm:w-64 transition-transform group-hover:scale-105">
                  <Image
                    src="https://i.postimg.cc/5tqKb1Mj/elitesalonlogo.png"
                    alt="Elite Beauty Salon Logo"
                    fill
                    className="object-contain object-left"
                    priority
                    referrerPolicy="no-referrer"
                  />
                </div>
              </Link>
            </div>
            
            <div className="hidden lg:flex flex-1 justify-center items-center w-1/3">
              <span className="font-bold text-xl sm:text-2xl tracking-tight text-[#D4AF37] transition-colors group-hover:text-amber-400">
                Elite Beauty Salon
              </span>
            </div>

            <div className="flex items-center justify-end space-x-4 w-1/3">
              <a
                href={bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-neutral-950 bg-amber-500 hover:bg-amber-400 transition-colors shadow-[0_0_15px_rgba(245,158,11,0.3)]"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-40 overflow-hidden flex items-center min-h-[80vh]">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://t4.ftcdn.net/jpg/04/33/53/59/360_F_433535938_J7EOQHVknL5nwQAY5qS8guNJpfGPLZ3U.jpg"
              alt="Elite Beauty Salon Background"
              fill
              className="object-cover"
              priority
              referrerPolicy="no-referrer"
            />
            {/* Gradient Overlay for Readability - Made less transparent/darker so image shows through more */}
            <div className="absolute inset-0 bg-neutral-950/50 bg-gradient-to-b from-neutral-950/20 via-neutral-950/50 to-neutral-950"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <motion.div 
              className="text-center max-w-3xl mx-auto"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-sm font-medium text-amber-500 mb-8">
                <MapPin className="w-4 h-4 mr-2" />
                Located in Irvine, CA
              </motion.div>
              <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                Elevate Your Style at <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600">Elite Beauty Salon</span>
              </motion.h1>
              <motion.p variants={fadeIn} className="text-xl text-neutral-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Experience top-tier hair styling, coloring, and beauty treatments tailored perfectly to you. Step into our relaxing Irvine salon and let our experts transform your look.
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a
                  href={bookingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-full text-neutral-950 bg-amber-500 hover:bg-amber-400 transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:-translate-y-1"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </a>
                <a
                  href="#services"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-neutral-700 text-base font-medium rounded-full text-white bg-neutral-900/50 hover:bg-neutral-800 backdrop-blur-sm transition-all hover:-translate-y-1"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Explore Services
                </a>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Abstract Background Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[120px] -z-10"></div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 bg-neutral-900 border-y border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Elite Beauty</h2>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                We are dedicated to providing exceptional service, ensuring you leave feeling confident, refreshed, and beautiful.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Sparkles className="w-6 h-6" />,
                  title: "Expert Care",
                  description: "Our experienced professionals deliver high-quality treatments using premium products."
                },
                {
                  icon: <Heart className="w-6 h-6" />,
                  title: "Relaxing Environment",
                  description: "Step into a calm, welcoming space designed for your comfort and relaxation."
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: "Professional Results",
                  description: "We focus on precision and detail to ensure you get the best possible results every time."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-neutral-950 p-8 rounded-3xl shadow-sm border border-neutral-800 hover:border-amber-500/30 transition-colors group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-neutral-950 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Menu Section */}
        <section id="services" className="py-24 bg-neutral-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                A curated selection of premium beauty treatments designed to elevate your style.
              </p>
            </motion.div>

            <div className="space-y-20">
              {serviceCategories.map((category, catIndex) => {
                const isExpanded = expandedCategories[catIndex];
                const displayedServices = isExpanded ? category.services : category.services.slice(0, 4);
                const hasMore = category.services.length > 4;

                return (
                <div key={catIndex}>
                  <motion.div
                    className="flex items-center mb-6 cursor-pointer group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    onClick={() => toggleCategory(catIndex)}
                  >
                    <h3 className="text-2xl font-bold text-amber-500 group-hover:text-amber-400 transition-colors">{category.title}</h3>
                    <div className="ml-6 flex-grow h-px bg-neutral-800"></div>
                    {hasMore && (
                      <div className="ml-4 flex items-center text-amber-500 group-hover:text-amber-400 transition-colors">
                        <span className="text-sm font-medium mr-2">{isExpanded ? 'View Less' : 'View More'}</span>
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </div>
                    )}
                  </motion.div>

                  <motion.div 
                    className="relative w-full h-48 sm:h-64 md:h-80 rounded-2xl overflow-hidden mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent"></div>
                  </motion.div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    {displayedServices.map((service, srvIndex) => (
                      <motion.div
                        key={srvIndex}
                        className="group"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: (srvIndex % 4) * 0.05 }}
                      >
                        <div className="flex justify-between items-baseline mb-2">
                          <h4 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors">{service.name}</h4>
                          <div className="flex items-center space-x-4">
                            <span className="text-sm text-neutral-500">{service.duration}</span>
                            {service.link ? (
                              <a 
                                href={service.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-lg font-medium text-amber-500 hover:text-amber-400 hover:underline underline-offset-4 transition-colors cursor-pointer"
                                title={`Book ${service.name}`}
                              >
                                {service.price}
                              </a>
                            ) : (
                              <span className="text-lg font-medium text-amber-500">{service.price}</span>
                            )}
                          </div>
                        </div>
                        <div className="w-full border-b border-neutral-800/50 border-dashed mb-2"></div>
                        {service.description && (
                          <p className="text-sm text-neutral-400 leading-relaxed">{service.description}</p>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {hasMore && !isExpanded && (
                    <motion.div 
                      className="mt-8 flex justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <button
                        onClick={() => toggleCategory(catIndex)}
                        className="flex items-center px-6 py-2 rounded-full border border-neutral-800 text-amber-500 hover:bg-neutral-900 hover:border-neutral-700 font-medium transition-all"
                      >
                        View {category.services.length - 4} More Services
                        <ChevronDown className="w-4 h-4 ml-2" />
                      </button>
                    </motion.div>
                  )}
                </div>
              )})}
            </div>
            
            <motion.div 
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <a
                href={bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-amber-500/30 text-base font-medium rounded-full text-amber-500 bg-amber-500/5 hover:bg-amber-500/10 transition-colors"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book an Appointment
              </a>
            </motion.div>
          </div>
        </section>

        {/* Trust / Satisfaction */}
        <section className="py-24 bg-neutral-900 border-t border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  Dedicated to your <span className="text-amber-500">complete satisfaction.</span>
                </h2>
                <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
                  Located in the heart of Irvine, Elite Beauty Salon is committed to excellence. Our focus is on delivering the highest quality beauty experience in a clean, welcoming environment.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    "Experienced and skilled professionals",
                    "Clean, safe, and hygienic environment",
                    "Locally owned and operated in Irvine",
                    "Personalized attention for every client"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-amber-500 mr-4 flex-shrink-0" />
                      <span className="text-neutral-200 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={bookingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-full text-neutral-950 bg-amber-500 hover:bg-amber-400 transition-all hover:-translate-y-1 shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                >
                  Book your appointment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </motion.div>
              <motion.div
                className="relative h-[500px] rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 flex items-center justify-center"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/eliteowner.png"
                  alt="Elite Beauty Salon Owner"
                  fill
                  className="object-contain p-4"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-24 bg-neutral-950 border-t border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Gallery</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
                Step into our world of beauty and elegance. Browse through our gallery to see the stunning transformations and the luxurious environment that awaits you.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                "/1s.png",
                "/2s.png",
                "/1js.jpeg",
                "/2js.jpeg",
                "/5s.png",
                "/sh.jpg",
                "/sh2.jpg",
                "/hcolor.jpg"
              ].map((src, index) => (
                <motion.div
                  key={index}
                  className="relative aspect-square rounded-2xl overflow-hidden group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Image
                    src={src}
                    alt={`Elite Beauty Salon Gallery Image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-neutral-900 border-t border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                Real experiences from our wonderful clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-neutral-900 p-8 rounded-3xl border border-neutral-800 hover:border-amber-500/30 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-neutral-300 mb-6 italic leading-relaxed">&quot;{testimonial.review}&quot;</p>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Location & Hours */}
        <section className="py-24 bg-neutral-950 border-y border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-white mb-8">Visit Us</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 mr-4 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg text-white mb-1">Location</h3>
                      <p className="text-neutral-400 leading-relaxed">
                        17942 Sky Park Cir suite d<br />
                        Irvine, CA 92614
                      </p>
                      <a
                        href={mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 text-sm font-medium text-amber-500 underline underline-offset-4 hover:text-amber-400"
                      >
                        Get Directions
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 mr-4 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg text-white mb-1">Contact</h3>
                      <p className="text-neutral-400">
                        <a href={`tel:${phoneNumber}`} className="hover:text-amber-500 transition-colors">
                          +1 (949) 391-7336
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="mt-8 h-64 w-full rounded-2xl overflow-hidden border border-neutral-800 relative">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight={0} 
                    marginWidth={0} 
                    src="https://maps.google.com/maps?q=17942%20Sky%20Park%20Cir%20suite%20d,%20Irvine,%20CA%2092614&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    title="Elite Beauty Salon Location"
                    className="absolute inset-0"
                  ></iframe>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                  <Clock className="w-8 h-8 mr-3 text-amber-500" />
                  Opening Hours
                </h2>
                <div className="bg-neutral-950 rounded-2xl p-6 border border-neutral-800">
                  <ul className="space-y-3">
                    {[
                      { day: "Monday", hours: "Closed" },
                      { day: "Tuesday", hours: "10:30 AM – 5:00 PM" },
                      { day: "Wednesday", hours: "10:00 AM – 6:00 PM" },
                      { day: "Thursday", hours: "10:00 AM – 5:00 PM" },
                      { day: "Friday", hours: "10:00 AM – 6:00 PM" },
                      { day: "Saturday", hours: "10:00 AM – 3:00 PM" },
                      { day: "Sunday", hours: "Closed" }
                    ].map((schedule, index) => (
                      <li key={index} className="flex justify-between items-center py-2 border-b border-neutral-800 last:border-0">
                        <span className="text-neutral-400">{schedule.day}</span>
                        <span className="font-medium text-neutral-200">{schedule.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-neutral-950 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[100px] -z-10"></div>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready for your appointment?</h2>
              <p className="text-xl text-neutral-400 mb-10">
                Contact us today to schedule your visit to Elite Beauty Salon.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a
                  href={bookingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-neutral-950 bg-amber-500 hover:bg-amber-400 transition-colors shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Now
                </a>
                <a
                  href={`sms:${phoneNumber}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-amber-500/30 text-lg font-medium rounded-full text-amber-500 bg-amber-500/5 hover:bg-amber-500/10 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Message Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
