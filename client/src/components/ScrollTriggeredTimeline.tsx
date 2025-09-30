import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Clock, Camera, Utensils, Music, Heart } from 'lucide-react';
import { useAnimationContext } from '@/contexts/AnimationContext';
import OceanStickers from '@/components/OceanStickers';

interface TimelineEvent {
    time: string;
    event: string;
    icon: React.ComponentType<any>;
    hueA: number;
    hueB: number;
}

interface TimelineCardProps {
    timelineEvent: TimelineEvent;
    i: number;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ timelineEvent, i }) => {
    const IconComponent = timelineEvent.icon;
    const accentColor = `hsl(${timelineEvent.hueA}, 80%, 60%)`;

    const getEventDescription = (eventName: string): string => {
        const descriptions: Record<string, string> = {
            "Guest Arrival & Processional": "Join us as we gather to celebrate our special day. Light refreshments will be served.",
            "Sacred Wedding Ceremony": "Witness our vows and the beginning of our journey together as we exchange rings and promises.",
            "Cocktails & Photography": "Enjoy signature drinks and appetizers while we capture beautiful moments with our loved ones.",
            "Dinner & Heartfelt Toasts": "A delicious meal followed by touching speeches from our closest family and friends.",
            "Dancing Under the Stars": "Let's celebrate with music and dancing as we create unforgettable memories together."
        };
        return descriptions[eventName] || "Join us for this special moment in our lives.";
    };

    return (
        <motion.div
            className={`relative pl-12 py-6 group`}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.3, once: true }}
            data-testid={`timeline-card-${i}`}
        >
            {/* Timeline dot */}
            <div className="absolute left-0 top-8 w-6 h-6 rounded-full flex items-center justify-center z-10"
                style={{
                    background: `linear-gradient(135deg, ${hue(timelineEvent.hueA, 90, 90)}, ${hue(timelineEvent.hueB, 80, 60)})`,
                    boxShadow: '0 0 0 4px rgba(255, 255, 255, 0.8)'
                }}
            >
                <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>

            {/* Timeline line */}
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            
            {/* Card */}
            <motion.div 
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
                variants={cardVariants}
                whileHover={{ y: -5 }}
            >
                <div className="p-6">
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center" 
                                style={{
                                    background: `linear-gradient(135deg, ${hue(timelineEvent.hueA, 90, 90)}, ${hue(timelineEvent.hueB, 80, 60)})`,
                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                                }}
                            >
                                <IconComponent className="w-5 h-5 text-white" />
                            </div>
                        </div>
                        
                        <div className="flex-1">
                            <div className="text-sm font-medium text-amber-600 mb-1">
                                {timelineEvent.time}
                            </div>
                            <h3 className="text-lg font-serif font-medium text-gray-800 mb-2">
                                {timelineEvent.event}
                            </h3>
                            <div className="w-10 h-0.5 bg-amber-100 my-3"></div>
                            <p className="text-sm text-gray-600">
                                {getEventDescription(timelineEvent.event)}
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const cardVariants: Variants = {
    offscreen: {
        x: -30,
        opacity: 0,
    },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.5,
            delay: 0.1
        },
    },
};

const hue = (h: number, s: number = 100, l: number = 50): string => `hsl(${h}, ${s}%, ${l}%)`;

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
    position: 'relative',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '40px 20px',
};

/**
 * ==============   Data   ================
 */

const timelineEvents: TimelineEvent[] = [
    {
        time: "1:00 PM",
        event: "Guest Arrival & Processional",
        icon: Clock,
        hueA: 35, // Gold
        hueB: 45, // Orange
    },
    {
        time: "1:30 PM", 
        event: "Sacred Wedding Ceremony",
        icon: Heart,
        hueA: 0,   // Red
        hueB: 340, // Pink
    },
    {
        time: "3:00 PM",
        event: "Cocktails & Photography", 
        icon: Camera,
        hueA: 210, // Light Blue
        hueB: 240, // Blue
    },
    {
        time: "5:00 PM",
        event: "Dinner & Heartfelt Toasts",
        icon: Utensils,
        hueA: 160, // Teal
        hueB: 190, // Green
    },
    {
        time: "8:00 PM",
        event: "Dancing Under the Stars",
        icon: Music,
        hueA: 270, // Purple
        hueB: 300, // Pink
    },
];

export default function ScrollTriggeredTimeline() {
    const { animationsEnabled } = useAnimationContext();

    return (
        <motion.section 
            id="timeline" 
            className="section-pastel-blue relative py-20 px-4 overflow-hidden"
            initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={animationsEnabled ? { duration: 0.8, ease: "easeOut" } : { duration: 0 }}
        >
            {/* Ocean Stickers */}
            <OceanStickers variant="section" density="medium" />
            {/* Enhanced Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-[#333333] rounded-full"></div>
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-[#333333] rounded-full"></div>
                <div className="absolute top-1/3 right-1/3 w-24 h-24 border-2 border-[#333333] rotate-45"></div>
                <div className="absolute bottom-1/3 left-1/5 w-16 h-16 border border-[#333333] rounded-full"></div>
                <div className={`absolute top-1/2 left-1/6 w-6 h-6 bg-[#333333] rounded-full ${animationsEnabled ? 'animate-pulse' : ''}`}></div>
                <div className="absolute bottom-1/2 right-1/5 w-8 h-8 bg-[#333333] rotate-45"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className={`absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full ${animationsEnabled ? 'animate-bounce' : ''}`} style={{animationDelay: '0s', animationDuration: '3s'}}></div>
                <div className="absolute top-40 right-20 w-1 h-1 bg-white/30 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
                <div className="absolute bottom-32 left-20 w-3 h-3 bg-white/15 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '3.5s'}}></div>
                <div className="absolute bottom-20 right-32 w-1.5 h-1.5 bg-white/25 rounded-full animate-bounce" style={{animationDelay: '0.5s', animationDuration: '2.5s'}}></div>
            </div>

            {/* Header Section */}
            <div className="relative z-10 text-center mb-12">
                <motion.div 
                    className="text-center max-w-4xl mx-auto px-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-4xl md:text-5xl font-serif italic text-amber-700 mb-4" data-testid="text-timeline-title">
                        Our Wedding Day
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Join us as we celebrate our love story. Here's what to expect on our special day.
                    </p>
                </motion.div>
            </div>

            {/* Timeline Cards Container */}
            <div style={container}>
                {timelineEvents.map((timelineEvent, i) => (
                    <TimelineCard i={i} timelineEvent={timelineEvent} key={timelineEvent.time} />
                ))}
            </div>

            {/* Bottom Decorative */}
            <motion.div 
                className="mt-16 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="inline-flex items-center space-x-2">
                    <div className="w-8 h-px bg-[#ffffff]"></div>
                    <div className="w-2 h-2 bg-[#ffffff] rounded-full animate-pulse"></div>
                    <div className="w-8 h-px bg-[#ffffff]"></div>
                </div>
                <p className="mt-4 text-muted-foreground font-body italic">
                    A celebration of love from dusk till dawn
                </p>
            </motion.div>
        </motion.section>
    );
}