# Wedding Invitation Website

## Project Overview
This is a wedding invitation website for Andrei & Sam's wedding on September 7, 2025. The project is a full-stack JavaScript application showcasing a beautiful wedding invitation with multiple sections including hero, slideshow, invitation details, countdown, story, venue information, RSVP, and more.

## Project Architecture
- **Frontend**: React with TypeScript, Vite for bundling, Tailwind CSS + shadcn/ui for styling
- **Backend**: Express.js server with TypeScript
- **Routing**: Wouter (React routing library)
- **State Management**: TanStack Query for server state
- **Database**: In-memory storage (MemStorage) - can be upgraded to PostgreSQL if needed
- **Styling**: Tailwind CSS with custom wedding theme
- **Audio**: Background music integration with user interaction triggers

## Key Features
- Responsive wedding invitation website
- Interactive hero section with invitation opening animation
- Background music that starts on user interaction
- Interactive quiz game for invitation reveal (click pirates to start)
- Score-based invitation designs (premium for 4-5 correct, standard for 0-3 correct)
- Multiple content sections (story, venue, RSVP, FAQ, etc.)
- Modern UI components using shadcn/ui
- Dark/light theme support
- SEO optimized

## Migration Status
Successfully migrated from Lovable to Replit environment:
- [x] Install required dependencies (react-router-dom, sonner, nanoid)
- [x] Convert routing from react-router-dom to wouter 
- [x] Set up proper QueryClient configuration
- [x] Fixed background music functionality with proper autoplay handling
- [x] Enhanced typography with elegant Google Fonts (Playfair Display, Cormorant Garamond, Inter)
- [x] Updated HeroSection with improved font styling and data-testid attributes
- [x] Removed visual artifacts from slideshow section
- [x] Improved InvitationSection layout and styling
- [x] Complete migration verification

## Development Notes
- Uses Replit's full-stack template with Express backend and React frontend
- Server runs on port 5000 and serves both API and frontend
- Vite handles development bundling and HMR
- Audio files are hosted on Cloudinary CDN

## User Preferences
- Background music should play automatically when clicking "Open Invitation" with NO control buttons
- Clean, sophisticated design without visual artifacts or decorative elements that interfere with images
- Elegant wedding-appropriate typography using Google Fonts

## Recent Changes
- **2024-01-09**: Started migration from Lovable to Replit
- **2024-01-09**: Updated routing system from react-router-dom to wouter
- **2024-01-09**: Created QueryClient setup with proper API request handling
- **2024-01-09**: Fixed background music with improved autoplay handling and fallback interactions
- **2024-01-09**: Enhanced typography with Google Fonts (Playfair Display, Cormorant Garamond, Inter)
- **2024-01-09**: Updated HeroSection with elegant font styling and improved spacing
- **2024-01-09**: Added data-testid attributes for accessibility and testing
- **2024-01-09**: Removed visual artifacts from slideshow section
- **2024-01-09**: Improved InvitationSection layout and styling
- **2024-01-09**: Enhanced StorySection with designer polaroid frames and elegant text layout
- **2024-01-09**: Fixed mobile shadows and glass effects across all components
- **2024-01-09**: Fixed deployment issues for Cloud Run production environment:
  - Updated server.listen() to use PORT environment variable for production deployments
  - Added comprehensive error handling for server startup process
  - Implemented graceful shutdown handlers for SIGTERM and SIGINT signals
  - Verified build output structure with dist/index.js and static assets in dist/public
- **2024-01-09**: Converted website for Vercel deployment:
  - Removed server dependencies and converted to static React site
  - Created vercel.json configuration and .vercelignore file
  - Updated queryClient to work without API endpoints
  - Generated static build in dist/public/ with all assets
  - Created comprehensive deployment guide (VERCEL_DEPLOYMENT.md)
- **2025-01-16**: Complete content overhaul for Ej & Krizza's wedding:
  - Updated all components with new couple names "Ej & Krizza"
  - Changed wedding date to September 7, 2025 at 1:00 PM
  - Updated venues to Sacred Heart of Jesus (ceremony) and Summit Galleria Cebu (reception)
  - Migrated all images from Google Drive to Cloudinary for reliable hosting
  - Updated hero section background with new couple photo
  - Replaced slideshow with 18 new engagement photos
  - Updated story section with 9 new photos and completely new story content
  - Changed "DY Missing Piece" to "The Vow" in story section
  - Updated wedding timeline with new schedule (1:00 PM arrival, 1:30 PM ceremony, etc.)
  - Added "unplugged ceremony" messaging throughout venue section
  - Updated dress code to formal attire requirements with no cocktail dresses or cream/white colors
  - Changed gift message to new wording about monetary gifts for their future
  - Completely rewrote FAQ section with new questions about unplugged ceremony, arrival times, plus-one policy
  - Updated contact information to 0926 002 9824 and paranelmer@gmail.com
  - Changed wedding hashtag to #SeaYouAtTheAisle
  - Updated countdown timer to use correct September 7, 2025 date
  - Updated HTML title and meta description for new couple
  - Updated all venue details with new Cebu locations and Google Maps links
  - Added comprehensive unplugged ceremony note to venue section
  - Updated RSVP deadline to August 20, 2025
  - Transformed website to dark mode with old money aesthetic:
    - Updated CSS variables to use #171610 (dark background), #333333 (medium dark), #ffffff (white text)
    - Converted all hardcoded color references to match dark mode theme
    - Updated all components with new color scheme while maintaining existing layout
    - Enhanced buttons and interactive elements with elegant hover effects
    - Maintained sophisticated wedding aesthetic with dark luxury styling
- **2025-01-16**: Successfully migrated from Replit Agent to Replit environment:
  - Fixed server port configuration from 5173 to 5000 for Replit compatibility
  - All required packages already installed and working
  - Verified website functionality with working background music and user interactions
  - Added comprehensive EntourageSection with complete wedding party details including:
    - Parents (Elmer & Genalyn Paran, Jaymar & Merlyn Manlangit)
    - Principal sponsors (14 couples)
    - Secondary sponsors (Candle, Veil, Cord)
    - Best Man (Brandon Lemoshiro) and Maid of Honor (Daisy Jane Macairan)
    - Groomsmen and Bridesmaids (6 each)
    - Flower Men and Flower Ladies
    - Ring Bearer, Coin Bearer, Bible Bearer
    - Officiating Priest (Rev. Fr. Wilson T. Lagare)
  - Positioned EntourageSection before RSVP section as requested
  - Maintained dark mode aesthetic with elegant card layouts
  - Optimized EntourageSection for mobile responsiveness with:
    - Responsive grid layouts (grid-cols-1 sm:grid-cols-2 md:grid-cols-2)
    - Adaptive text sizes (text-base md:text-lg, text-xl md:text-2xl)
    - Responsive padding and spacing (p-6 md:p-8, mb-6 md:mb-8)
    - Mobile-first design ensuring readability on all device sizes
- **2025-09-30**: Added interactive quiz game for invitation reveal:
  - Created QuizGame component with 5 relationship questions about the couple
  - Questions include: who made first move, who initiated getting to know each other, who said "I love you" first, who planned first date, and who plans surprises
  - Real-time reaction feedback after each answer with animated emojis and messages
  - Score tracking system (0-5 points)
  - Modified InvitationRevealSection to show quiz after all pirates are clicked
  - Updated EnvelopeAnimation with two invitation designs:
    - Premium design (4-5 correct): Golden gradient border, animated sparkles, VIP message, rotating decorative elements
    - Standard design (0-3 correct): Clean white paper with simple decorations
  - Shows "Perfect Score!" message only for 5/5, "Amazing Score!" with actual score for 4/5
  - Implemented functional state updates for reliable score tracking