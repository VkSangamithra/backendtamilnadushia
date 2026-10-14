import fs from 'fs';
import path from 'path';
import config from '../../config/index.js';

const dbPath = path.join(config.dataDir, 'db.json');

// Comprehensive seed containing 100% of the website's text, images, and sections
const initialData = {
  branding: {
    logoUrl: '/logo.jpeg',
    name: 'Tamil Nadu Shia Muslim Jamaat',
    shortName: 'TNSMJ',
    tagline: 'Faith • Unity • Justice • Humanity',
    instagramUrl: 'https://www.instagram.com/tamil_nadu_shia_muslim_jamaath?igsh=MTBmYnl0NGVvNDhybA==',
    whatsappNumber: '+919566016668',
    primaryPhone: '+919566016668',
    email: '',
    address: ''
  },
  content: {
    hero: {
      title: 'Tamil Nadu Shia Muslim Jamaat',
      subtitle: '1st Year Completion Report',
      tagline: 'Serving with Faith • Unity • Justice • Humanity',
      description: 'Dedicated to the welfare, unity, educational advancement, and spiritual elevation of the Shia Muslim community across Tamil Nadu.',
      primaryButtonText: 'Explore Our Journey',
      primaryButtonLink: '#journey',
      secondaryButtonText: 'View Annual Report',
      secondaryButtonLink: '#impact'
    },
    about: {
      badge: '1st Year Completion',
      title: 'A Journey of Faith and Dedication',
      leadText: "\"By the immense grace of Allah Subhanahu wa Ta'ala, and with the prayers of Ahlul Bayt Alayhimussalam, we are honored and grateful to announce that the Tamil Nadu Shia Muslim Jamaat has successfully completed its first year.\"",
      milestoneNumber: '1',
      milestoneUnit: 'Year',
      milestoneLabel: 'Milestone',
      stats: [
        { value: '200+', label: 'Students Supported' },
        { value: '2,000+', label: 'People Served' },
        { value: '10+', label: 'Mosques Reached' },
        { value: '₹5L', label: 'Humanitarian Aid' }
      ]
    },
    quotes: {
      bismillahArabic: 'بسم الله الرحمن الرحيم',
      bismillahTranslation: 'In the Name of Allah, The Most Gracious, The Most Merciful',
      quran: {
        text: 'Cooperate in righteousness and piety',
        source: "Surah Al-Ma'idah 5:2"
      },
      imamAli: {
        text: 'People are of two types: either your brother in faith, or your equal in humanity.',
        source: 'Imam Ali (AS)'
      },
      prophet: {
        text: 'As long as a person helps his brother, Allah will continue to help him.',
        source: 'Prophet Muhammad (PBUH)'
      }
    },
    humanitarian: {
      badge: 'Service Beyond Boundaries',
      title: 'A commitment to humanity in times of need.',
      description: 'True faith is demonstrated through compassionate action. When tragedy struck the Meena School in Iran resulting in the tragic loss of 167 children, the Jamaat stepped forward to aid in the reconstruction efforts.',
      contributionLabel: 'Total Contribution',
      contributionValue: '₹5,00,000',
      image: '/picture1.jpeg',
      quote: '"As long as a person helps his brother, Allah will continue to help him."'
    },
    education: {
      badge: 'Empowering the Future',
      title: 'Educational Support & Encouragement',
      description: 'We believe that education is the foundation of a strong and just society. During our first year, we prioritized supporting students in their academic journeys.',
      cards: [
        {
          value: '200',
          title: 'Students Supported',
          desc: 'Provided essential school bags and notebooks to ensure students have the tools they need to succeed.',
          icon: 'book-open'
        },
        {
          value: '150',
          title: 'Academic Achievers',
          desc: 'Awarded special prizes and ₹2,000 incentives each to students passing 10th and 12th grades with high marks.',
          icon: 'award'
        }
      ]
    },
    karbala: {
      badge: 'A Legacy of Sacrifice',
      title: 'Karbala',
      cards: [
        {
          title: 'Muharram Campaign',
          desc: 'Digital banners displayed across central locations in Chennai commemorating the timeless sacrifice of Karbala and Imam Hussain (AS).'
        },
        {
          title: 'Awareness Literature',
          desc: '5,000 copies of the profound booklet "Karbala — A History of Sacrifice" were successfully distributed across more than 10 mosques.'
        },
        {
          title: '10-Day Sabeel',
          desc: 'Honoring the thirst of the martyrs, juice, buttermilk, and cold water were continuously distributed to the public on Peters Road during the first 10 days of Muharram.'
        }
      ]
    },
    brotherhood: {
      pillars: ['Faith', 'Justice', 'Brotherhood', 'Service'],
      quote: {
        text: 'People are of two types: either your brother in faith, or your equal in humanity.',
        source: 'Imam Ali (AS)'
      }
    },
    finalAppeal: {
      title: 'Together in Faith.\nTogether in Service.',
      description: 'We seek your continued support, prayers, and contributions to undertake many more services. We cordially invite everyone to join hands with the Jamaat and serve together.',
      phoneNumbers: ['+91 95660 16668', '+91 94449 24746', '+91 95001 07634'],
      whatsappNumber: '+919566016668',
      quote: {
        text: 'As long as a person helps his brother, Allah will continue to help him.',
        source: 'Prophet Muhammad (PBUH)'
      }
    },
    footer: {
      aboutText: 'Dedicated to serving the community through humanitarian aid, educational support, and upholding justice and brotherhood.',
      copyrightText: '© 2026 Tamil Nadu Shia Muslim Jamaat. All rights reserved.',
      signOffTitle: 'Wassalam',
      signOffSubtitle: 'Tamil Nadu Shia Muslim Jamaat',
      developedBy: 'Echo Digital Works'
    }
  },
  objectives: [
    { id: 1, title: 'Unity', desc: 'To unite all Muslims without any division, fostering a resilient and inseparable brotherhood across all communities.' },
    { id: 2, title: 'Religious Harmony', desc: 'To maintain and promote religious harmony in society, building bridges of understanding and mutual respect.' },
    { id: 3, title: 'Respect for Law', desc: 'To respect and abide by the laws of the Central and State Governments, serving as exemplary and responsible citizens.' },
    { id: 4, title: 'Propagation of Tawheed', desc: 'To spread the message of Monotheism among the people, illuminating hearts with the divine truth of the Almighty.' },
    { id: 5, title: 'Glorifying Ahlul Bayt', desc: "To propagate the virtues and greatness of the Prophet's family, ensuring their noble legacy guides future generations." },
    { id: 6, title: 'Wilayat of Ali', desc: 'To convey the Wilayat of Imam Ali (AS), illuminating the path of spiritual leadership and divine guidance.' },
    { id: 7, title: 'Message of Karbala', desc: 'To implement the objectives and sacrifices of Karbala, standing firmly for justice and truth in every era.' },
    { id: 8, title: 'Educational Assistance', desc: 'To provide educational support to poor and underprivileged students, empowering them to build a brighter future.' },
    { id: 9, title: 'Social Service', desc: 'To support poor mothers and senior citizens, ensuring they receive the dignity, care, and compassion they deserve.' },
    { id: 10, title: 'Medical Service', desc: 'To conduct free medical camps, bringing essential healthcare and relief to the most vulnerable members of society.' },
    { id: 11, title: 'Cleanliness Drive', desc: 'To engage in cleanliness activities in schools, colleges, libraries, and hospitals, promoting a pure and healthy environment.' },
    { id: 12, title: 'Legal Protection', desc: "To provide clarification against those who spread defamation about Shias, and to address them legally if necessary to protect our community's honor." }
  ],
  founders: [
    {
      id: 1,
      name: 'M. Mohammed Akil',
      role: 'President',
      image: '/founder/founder-1.jpeg?v=2'
    },
    {
      id: 2,
      name: 'Hyder',
      role: 'Secretary',
      image: '/founder/founder-2.jpeg?v=2'
    },
    {
      id: 3,
      name: 'Syed Hasan Mohammed',
      role: 'Treasurer',
      image: '/founder/founder-3.jpeg?v=2'
    }
  ],
  mosqueGuide: [
    {
      district: 'Chennai District',
      mosques: [
        { name: 'Masjid-e-Abbasiya', location: 'Thousand Lights', note: '250+ Years Old' },
        { name: 'Masjid-e-Hussaini', location: 'Royapettah', note: '' },
        { name: 'Asthana-e-Qasim', location: 'Triplicane', note: '180 Year Old Procession' },
        { name: 'Masjid-e-Ali / Asthana-e-Moula Ali Dargah', location: 'Pallavaram', note: '400+ Years Old' },
        { name: 'Masjid-e-Hussaini', location: 'Perambur', note: '' },
        { name: 'Mehfil-E-Khuddamul Maassumeen (Aashurkhana)', location: 'Parrys, Angappan Naicken Street', note: '' }
      ]
    },
    {
      district: 'Vellore District',
      mosques: [
        { name: 'Masjid-e-Abu Talib', location: 'Vellore', note: '' }
      ]
    },
    {
      district: 'Tirupattur District',
      mosques: [
        { name: 'Masjid-e-Hussaini', location: 'Thoraipadi', note: '' },
        { name: 'Masjid-e-Ashnashari', location: 'Vaniyambadi', note: '' }
      ]
    },
    {
      district: 'Ranipet District',
      mosques: [
        { name: 'Masjid-e-Asadullah', location: 'Baqar Abad', note: '' }
      ]
    },
    {
      district: 'Krishnagiri District',
      mosques: [
        { name: 'Masjid-e-Akbar', location: 'Jagadevi', note: '' }
      ]
    }
  ],
  videos: [
    { id: 1, title: '1st Year Anniversary Documentary & Community Report', src: '/videos/vid1.mp4', thumbnail: '/images/img1.jpeg' },
    { id: 2, title: 'Meena School Iran — ₹5,00,000 Reconstruction Relief', src: '/videos/vid2.mp4', thumbnail: '/images/img2.jpeg' },
    { id: 3, title: '10-Day Muharram Sabeel Service on Peters Road', src: '/videos/vid3.mp4', thumbnail: '/images/img3.jpeg' },
    { id: 4, title: 'Student Bag Kits & Education Drive (200 Students)', src: '/videos/vid4.mp4', thumbnail: '/images/img4.jpeg' },
    { id: 5, title: 'Academic Achievers Award Ceremony (₹2,000 Grants)', src: '/videos/vid5.mp4', thumbnail: '/images/img5.jpeg' },
    { id: 6, title: '13th Rajab Mawlood Food Distribution (1,000 Meals)', src: '/videos/vid6.mp4', thumbnail: '/images/img6.jpeg' },
    { id: 7, title: '3rd Shaban Mawlood Water & Juice Distribution (2,000 People)', src: '/videos/vid7.mp4', thumbnail: '/images/img7.jpeg' },
    { id: 8, title: 'Voting Rights & Democratic Duty Awareness Camps', src: '/videos/vid8.mp4', thumbnail: '/images/img8.jpeg' },
    { id: 9, title: 'Statewide Shia Mosques & Imambaras Journey Across Tamil Nadu', src: '/videos/vid9.mp4', thumbnail: '/images/img9.jpeg' }
  ],
  images: {
    heroDesktop: [
      '/hero/hero-1.png',
      '/hero/hero-2.png'
    ],
    heroMobile: [
      '/hero/hero-1-mobile.png',
      '/hero/hero-2-mobile.png'
    ],
    gallery: Array.from({ length: 40 }, (_, i) => ({
      id: `gal-${i + 1}`,
      title: `Social Work Action #${i + 1}`,
      category: 'Community Welfare',
      url: `/images/img${i + 1}.jpeg`
    })),
    mosqueGallery: [
      { id: 'mosque-1', title: 'Masjid-e-Abbasiya', location: 'Thousand Lights, Chennai (250+ Years Old)', url: '/mosque/img41.jpeg' },
      { id: 'mosque-2', title: 'Masjid-e-Hussaini', location: 'Royapettah, Chennai', url: '/mosque/img42.jpeg' },
      { id: 'mosque-3', title: 'Asthana-e-Qasim', location: 'Triplicane, Chennai (180 Year Old Procession)', url: '/mosque/img43.jpeg' },
      { id: 'mosque-4', title: 'Masjid-e-Ali / Asthana-e-Moula Ali Dargah', location: 'Pallavaram, Chennai (400+ Years Old)', url: '/mosque/img44.jpeg' },
      { id: 'mosque-5', title: 'Masjid-e-Hussaini', location: 'Perambur, Chennai', url: '/mosque/img45.jpeg' },
      { id: 'mosque-6', title: 'Mehfil-E-Khuddamul Maassumeen (Aashurkhana)', location: 'Parrys, Angappan Naicken Street, Chennai', url: '/mosque/img46.jpeg' },
      { id: 'mosque-7', title: 'Masjid-e-Abu Talib', location: 'Vellore District', url: '/mosque/img47.jpeg' },
      { id: 'mosque-8', title: 'Masjid-e-Hussaini', location: 'Thoraipadi, Tirupattur District', url: '/mosque/img48.jpeg' },
      { id: 'mosque-9', title: 'Masjid-e-Ashnashari', location: 'Vaniyambadi, Tirupattur District', url: '/mosque/img49.jpeg' },
      { id: 'mosque-10', title: 'Masjid-e-Asadullah', location: 'Baqar Abad, Ranipet District', url: '/mosque/img50.jpeg' }
    ]
  },
  statistics: [
    { id: '1', value: '₹5,00,000', label: 'Humanitarian Contribution', suffix: '' },
    { id: '2', value: '2,000', label: 'People Served', suffix: '+' },
    { id: '3', value: '1,000', label: 'Biryani Meals Distributed', suffix: '' },
    { id: '4', value: '200', label: 'Students Supported', suffix: '' },
    { id: '5', value: '150', label: 'Students Given Educational Incentives', suffix: '' },
    { id: '6', value: '5,000', label: 'Awareness Pamphlets', suffix: '' },
    { id: '7', value: '10', label: 'Mosques Reached', suffix: '+' },
    { id: '8', value: '10', label: 'Days Sabeel Service', suffix: '' }
  ],
  activities: [
    { id: 1, title: 'Democratic Duty', description: 'SIR process awareness camps organized in Royapettah and Perambur to safeguard voting rights.', stat: 'Voting Awareness', icon: 'vote' },
    { id: 2, title: 'Humanitarian Aid for Iran', description: '₹5,00,000 contributed towards reconstruction of the Meena School in Iran.', stat: '₹5,00,000 Contributed', icon: 'globe' },
    { id: 3, title: 'Mawlood — 13th Rajab', description: 'Biryani distributed to 1,000 needy people near Amru Nisha Begum Masjid.', stat: '1,000 Meals', icon: 'utensils' },
    { id: 4, title: 'Mawlood — 3rd Shaban', description: 'Water and juice distributed to 2,000 people on the birth anniversary of Imam Hussain (AS).', stat: '2,000 People Served', icon: 'droplet' },
    { id: 5, title: 'Educational Support', description: 'School bags and notebooks distributed to 200 school students.', stat: '200 Students', icon: 'book-open' },
    { id: 6, title: 'Tribute to the Martyrs', description: 'A condolence gathering organized with leaders of Islamic organizations in Tamil Nadu.', stat: 'Unity Gathering', icon: 'users' },
    { id: 7, title: 'Educational Encouragement', description: 'Students achieving high marks in 10th and 12th grade received special prizes and ₹2,000 each.', stat: '150 Students Awarded', icon: 'graduation-cap' },
    { id: 8, title: 'Muharram Campaign', description: 'Digital banners displayed across central locations in Chennai commemorating Karbala.', stat: 'City-wide Campaign', icon: 'flag' },
    { id: 9, title: 'Awareness Literature', description: '5,000 copies of "Karbala — A History of Sacrifice" distributed across more than 10 mosques.', stat: '5,00,000 Copies Distributed', icon: 'book' },
    { id: 10, title: 'Shahadat Remembrance', description: 'Flex banners erected highlighting the virtues and message of unity of the Ummah.', stat: 'Public Awareness', icon: 'image' },
    { id: 11, title: 'Reform Initiative', description: 'Advisory letters and statements of concern issued regarding irregularities in community trusts.', stat: 'Community Reform', icon: 'file-text' },
    { id: 12, title: 'Sabeel — Muharram 10-Day Service', description: 'Juice, buttermilk, and cold water continuously distributed on Peters Road during Muharram.', stat: '10 Days of Service', icon: 'cup-soda' }
  ],
  events: [],
  tracks: [],
  sponsors: [],
  announcements: []
};

// Deep merge helper where source user data overrides target schema defaults
const deepMerge = (target, source) => {
  const output = { ...target };
  if (!source || typeof source !== 'object') return output;
  for (const key of Object.keys(source)) {
    if (
      source[key] !== null &&
      typeof source[key] === 'object' &&
      !Array.isArray(source[key]) &&
      typeof target[key] === 'object' &&
      target[key] !== null &&
      !Array.isArray(target[key])
    ) {
      output[key] = deepMerge(target[key], source[key]);
    } else {
      output[key] = source[key];
    }
  }
  return output;
};

// Ensure data folder and db.json exist (executed once on startup)
const initDb = () => {
  if (!fs.existsSync(config.dataDir)) {
    fs.mkdirSync(config.dataDir, { recursive: true });
  }

  if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, JSON.stringify(initialData, null, 2), 'utf-8');
  } else {
    try {
      const existing = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
      const merged = deepMerge(initialData, existing);
      fs.writeFileSync(dbPath, JSON.stringify(merged, null, 2), 'utf-8');
    } catch (e) {
      fs.writeFileSync(dbPath, JSON.stringify(initialData, null, 2), 'utf-8');
    }
  }
};

// Initialize once on module load
initDb();

// Read database
export const getDb = () => {
  try {
    const raw = fs.readFileSync(dbPath, 'utf-8');
    return JSON.parse(raw);
  } catch (error) {
    console.error('Failed reading database file, returning default schema:', error);
    return initialData;
  }
};

// Save database atomically
export const saveDb = (data) => {
  const tempPath = `${dbPath}.tmp`;
  fs.writeFileSync(tempPath, JSON.stringify(data, null, 2), 'utf-8');
  fs.renameSync(tempPath, dbPath);
  return data;
};

// Entity-specific helpers
export const getBranding = () => getDb().branding || initialData.branding;
export const updateBranding = (branding) => {
  const db = getDb();
  db.branding = deepMerge(db.branding || initialData.branding, branding);
  saveDb(db);
  return db.branding;
};

export const getContent = () => getDb().content || initialData.content;
export const updateContent = (partialContent) => {
  const db = getDb();
  db.content = deepMerge(db.content || initialData.content, partialContent);
  saveDb(db);
  return db.content;
};

export const getObjectives = () => getDb().objectives || initialData.objectives;
export const updateObjectives = (objectives) => {
  const db = getDb();
  db.objectives = objectives;
  saveDb(db);
  return db.objectives;
};

export const getFounders = () => getDb().founders || initialData.founders;
export const updateFounders = (founders) => {
  const db = getDb();
  db.founders = founders;
  saveDb(db);
  return db.founders;
};

export const getMosqueGuide = () => getDb().mosqueGuide || initialData.mosqueGuide;
export const updateMosqueGuide = (guide) => {
  const db = getDb();
  db.mosqueGuide = guide;
  saveDb(db);
  return db.mosqueGuide;
};

export const getVideos = () => getDb().videos || initialData.videos;
export const updateVideos = (videos) => {
  const db = getDb();
  db.videos = videos;
  saveDb(db);
  return db.videos;
};

export const getImages = () => getDb().images || initialData.images;
export const updateImages = (imagesData) => {
  const db = getDb();
  db.images = {
    ...db.images,
    ...imagesData,
  };
  saveDb(db);
  return db.images;
};

export const getStatistics = () => getDb().statistics || initialData.statistics;
export const updateStatistics = (stats) => {
  const db = getDb();
  db.statistics = stats;
  saveDb(db);
  return db.statistics;
};

export const getActivities = () => getDb().activities || initialData.activities;
export const updateActivities = (activities) => {
  const db = getDb();
  db.activities = activities;
  saveDb(db);
  return db.activities;
};

export const getEvents = () => getDb().events || initialData.events;
export const updateEvents = (events) => {
  const db = getDb();
  db.events = events;
  saveDb(db);
  return db.events;
};

export const getTracks = () => getDb().tracks || initialData.tracks;
export const updateTracks = (tracks) => {
  const db = getDb();
  db.tracks = tracks;
  saveDb(db);
  return db.tracks;
};

export const getSponsors = () => getDb().sponsors || initialData.sponsors;
export const updateSponsors = (sponsors) => {
  const db = getDb();
  db.sponsors = sponsors;
  saveDb(db);
  return db.sponsors;
};

export const getAnnouncements = () => getDb().announcements || initialData.announcements;
export const updateAnnouncements = (announcements) => {
  const db = getDb();
  db.announcements = announcements;
  saveDb(db);
  return db.announcements;
};

// Initialize immediately on module load
initDb();

export default {
  getDb,
  saveDb,
  getBranding,
  updateBranding,
  getContent,
  updateContent,
  getObjectives,
  updateObjectives,
  getFounders,
  updateFounders,
  getMosqueGuide,
  updateMosqueGuide,
  getVideos,
  updateVideos,
  getImages,
  updateImages,
  getStatistics,
  updateStatistics,
  getActivities,
  updateActivities,
  getEvents,
  updateEvents,
  getTracks,
  updateTracks,
  getSponsors,
  updateSponsors,
  getAnnouncements,
  updateAnnouncements,
};
