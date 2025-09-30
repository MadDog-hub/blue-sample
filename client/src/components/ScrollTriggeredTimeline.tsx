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
            <div className="relative z-10 text-center mb-16">
                <motion.div 
                    className="text-center max-w-4xl mx-auto px-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-5xl font-display italic text-gold mb-8" data-testid="text-timeline-title">
                        Wedding Timeline
                    </h2>
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

interface TimelineCardProps {
    timelineEvent: TimelineEvent;
    hueA?: number;
    hueB?: number;
    i: number;
}

function TimelineCard({ timelineEvent, i }: TimelineCardProps) {
    const background = `linear-gradient(306deg, ${hue(timelineEvent.hueA)}, ${hue(timelineEvent.hueB)})`;
    const IconComponent = timelineEvent.icon;

    return (
        <motion.div
            className={`card-container-${i}`}
            style={cardContainer}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
            data-testid={`timeline-card-${i}`}
        >
            <div style={{ ...splash, background }} />
            <motion.div style={card} variants={cardVariants} className="card">
                {/* Elegant overlay pattern */}
                <div className="absolute inset-0 opacity-5" style={{
                    background: 'radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.2), transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.15), transparent 50%), radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.1), transparent 50%)'
                }}></div>
                
                <div className="flex flex-col items-center justify-center h-full text-center px-6 relative z-10">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 relative" style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.05) 100%)',
                        boxShadow: 'inset 0 2px 4px rgba(255, 255, 255, 0.2), 0 4px 12px rgba(0, 0, 0, 0.3)',
                        border: '1px solid rgba(255, 255, 255, 0.3)'
                    }}>
                        <IconComponent className="w-10 h-10 text-white drop-shadow-lg" />
                    </div>
                    
                    <div className="text-4xl font-display font-bold text-white mb-3 drop-shadow-lg" style={{
                        background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}>
                        {timelineEvent.time}
                    </div>
                    
                    <div className="text-xl font-body text-white/95 leading-relaxed drop-shadow-sm">
                        {timelineEvent.event}
                    </div>
                    
                    {/* Elegant bottom accent */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-px" style={{
                        background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.6) 50%, transparent 100%)'
                    }}></div>
                </div>
            </motion.div>
        </motion.div>
    );
}

const cardVariants: Variants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
    margin: "100px auto",
    maxWidth: 500,
    paddingBottom: 100,
    width: "100%",
};

const cardContainer: React.CSSProperties = {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingTop: 20,
    marginBottom: -120,
};

const splash: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};

const card: React.CSSProperties = {
    width: 300,
    height: 430,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
    background: "linear-gradient(135deg, rgba(23, 22, 16, 0.95) 0%, rgba(51, 51, 51, 0.85) 50%, rgba(23, 22, 16, 0.95) 100%)",
    backdropFilter: "blur(20px)",
    boxShadow:
        "0 8px 32px rgba(0, 0, 0, 0.4), 0 4px 16px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.2)",
    transformOrigin: "10% 60%",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    position: "relative",
    overflow: "hidden",
};

/**
 * ==============   Data   ================
 */

const timelineEvents: TimelineEvent[] = [
    {
        time: "1:00 PM",
        event: "Guest Arrival & Processional",
        icon: Clock,
        hueA: 340,
        hueB: 10,
    },
    {
        time: "1:30 PM", 
        event: "Sacred Wedding Ceremony",
        icon: Heart,
        hueA: 20,
        hueB: 40,
    },
    {
        time: "3:00 PM",
        event: "Cocktails & Photography", 
        icon: Camera,
        hueA: 60,
        hueB: 90,
    },
    {
        time: "5:00 PM",
        event: "Dinner & Heartfelt Toasts",
        icon: Utensils,
        hueA: 100,
        hueB: 140,
    },
    {
        time: "8:00 PM",
        event: "Dancing Under the Stars",
        icon: Music,
        hueA: 260,
        hueB: 290,
    },
];