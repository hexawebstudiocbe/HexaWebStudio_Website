import gymImg from '../assets/gym.png';
import salonImg from '../assets/salon.png';
import restaurantImg from '../assets/restaurant.png';
import clinicImg from '../assets/clinic.png';
import schoolImg from '../assets/school.png';

export const projects = [
  {
    id: 1,
    key: 'gym',
    title: 'Pulse Fitness Center',
    tag: 'web-dev',
    tagLabel: 'Web Dev',
    image: gymImg,
    shortDesc: 'A premium dark-themed fitness dashboard with membership signups and workout schedule grids.',
    fullDesc: 'A pre-designed template tailored for a modern, highly energetic fitness center. It features a fully responsive layout with animated workout lists, an interactive class schedule tracker, and a user-friendly membership signup portal. Speed index is optimized for high mobile traffic.',
    client: 'Demo Template',
    tech: 'React JS, Custom CSS, Lucide Icons',
    timeline: '3 Weeks'
  },
  {
    id: 2,
    key: 'salon',
    title: 'Lumina Hair & Beauty Salon',
    tag: 'branding',
    tagLabel: 'Branding',
    image: salonImg,
    shortDesc: 'An elegant serif-styled landing page with service catalogs and appointment booking integrations.',
    fullDesc: 'A pre-designed template crafted for hair and beauty salons. It features an elegant, minimal landing page with rich galleries, hover pricing menus, and integrated booking shortcuts to streamline client reservations.',
    client: 'Demo Template',
    tech: 'React JS, Custom Grid CSS, Flexbox layouts',
    timeline: '2 Weeks'
  },
  {
    id: 3,
    key: 'restaurant',
    title: 'The Golden Plate Bistro',
    tag: 'web-dev',
    tagLabel: 'Web Dev',
    image: restaurantImg,
    shortDesc: 'A gourmet restaurant menu interface and online table reservations booking layout.',
    fullDesc: 'A pre-designed template for luxury fine-dining restaurants. The platform hosts a digital, categorizable food and beverage menu, a reservation booking form with validation, and custom social link pathways to drive foot traffic.',
    client: 'Demo Template',
    tech: 'React JS, Custom SVG Vectors, Form Validation',
    timeline: '3 Weeks'
  },
  {
    id: 4,
    key: 'clinic',
    title: 'Apex Medical Clinic',
    tag: 'seo',
    tagLabel: 'SEO',
    image: clinicImg,
    shortDesc: 'A clean medical portal layout highlighting doctor bios, healthcare plans, and clinic schedules.',
    fullDesc: 'A pre-designed template structured for medical clinics and healthcare partners. Built as a responsive, highly accessible clinic portal optimized for core web vitals and Google Schema markup to increase local search visibility.',
    client: 'Demo Template',
    tech: 'React JS, Schema SEO Metadata, IntersectionObserver',
    timeline: '4 Weeks'
  },
  {
    id: 5,
    key: 'school',
    title: 'Horizon Academics School',
    tag: 'web-dev',
    tagLabel: 'Web Dev',
    image: schoolImg,
    shortDesc: 'A vibrant educational portal with news reels, academic programs listings, and admission templates.',
    fullDesc: 'A pre-designed template serving as a welcoming academic hub for schools and educational trusts. It includes a clear grid system highlighting educational tracks, an events calendar, downloadable admission documents, and a student inquiry submission system.',
    client: 'Demo Template',
    tech: 'React JS, CSS Keyframes, Custom Transitions',
    timeline: '4 Weeks'
  }
];
