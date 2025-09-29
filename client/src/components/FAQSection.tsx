import { useState } from 'react';
import { ChevronDown, ChevronUp, Camera, Clock, Users, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What happens during the ceremony?",
      icon: Camera,
      answer: "UNPLUGGED CEREMONY - We've hired the services of skilled photographers to capture the cherished moments of our day, allowing you to unwind, immerse yourself in the experience, and share it alongside us. Our photos will be available once the wedding is over. Please ensure the aisle remains unobstructed as the bridal entrance takes place. Rest assured, after the ceremony and throughout the entire reception, feel free to capture as many photos and videos as you'd like. Your memories are important to us, and we encourage you to preserve them. Kindly ensure that all children remain quiet and respectful throughout the wedding ceremony to maintain a serene and meaningful atmosphere."
    },
    {
      question: "What time should I arrive?",
      icon: Clock,
      answer: "Help us get the party started as scheduled! We recommend that you arrive an hour or 30 mins before the start of the ceremony to make sure everyone is seated on time. We encourage you to consider the travel time and traffic going to the venue."
    },
    {
      question: "Can I bring someone with me?",
      icon: Users,
      answer: "Unfortunately, due to space and seating constraints, our guest list is under strict limitations. As our event operates on an exclusive RSVP basis, we can only accommodate those who have formally confirmed their presence. We kindly ask for your understanding in adhering to our policy of not bringing uninvited guests. Your cooperation in this matter is greatly appreciated, as it ensures that every guest has a comfortable and enjoyable experience."
    },
    {
      question: "When is the appropriate time to leave?",
      icon: Calendar,
      answer: "Having you here with us is the most precious gift of all. We kindly request your presence throughout the entirety of our reception program. Should you need to depart early, we'd greatly appreciate the opportunity to express our gratitude and bid you farewell. However, we kindly request that you consider staying until after our Thanksgiving Speech."
    }
  ];

  return (
    <motion.section 
      className="section-pastel-blue py-20 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 11.5 }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 11.8 }}
        >
          <h2 className="text-5xl font-display italic text-gold mb-8" data-testid="text-faq-title">
            Frequently Asked Questions
          </h2>
          <p className="text-lg font-body text-foreground max-w-2xl mx-auto">
            We've compiled answers to the most common questions about our wedding day. 
            If you have additional questions, please don't hesitate to contact us.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-card/30 border border-border rounded-xl shadow-soft overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 12.1 + (index * 0.1) }}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gold/5 transition-colors duration-300"
              >
                <div className="flex items-center gap-3">
                  <faq.icon className="w-5 h-5 text-gold flex-shrink-0" />
                  <h3 className="text-lg font-display font-bold text-foreground">
                    {faq.question}
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-gold" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gold" />
                  )}
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-8 pb-6">
                  <div className="w-full h-px bg-border mb-4"></div>
                  <p className="text-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FAQSection;