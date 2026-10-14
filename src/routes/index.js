import { Router } from 'express';
import healthRoutes from './health.routes.js';
import authRoutes from './auth.routes.js';
import contentRoutes from './content.routes.js';
import imagesRoutes from './images.routes.js';
import statisticsRoutes from './statistics.routes.js';
import activitiesRoutes from './activities.routes.js';
import eventsRoutes from './events.routes.js';
import tracksRoutes from './tracks.routes.js';
import sponsorsRoutes from './sponsors.routes.js';
import announcementsRoutes from './announcements.routes.js';
import sectionsRoutes from './sections.routes.js';

const apiRouter = Router();

// Mount feature routers
apiRouter.use('/health', healthRoutes);
apiRouter.use('/auth', authRoutes);
apiRouter.use('/content', contentRoutes);
apiRouter.use('/images', imagesRoutes);
apiRouter.use('/statistics', statisticsRoutes);
apiRouter.use('/activities', activitiesRoutes);
apiRouter.use('/events', eventsRoutes);
apiRouter.use('/tracks', tracksRoutes);
apiRouter.use('/sponsors', sponsorsRoutes);
apiRouter.use('/announcements', announcementsRoutes);
apiRouter.use('/', sectionsRoutes);

// Root API information endpoint
apiRouter.get('/', (req, res) => {
  res.status(200).json({
    name: 'Tamil Nadu Shia Muslim Jamaat API',
    version: '1.0.0',
    status: 'active',
    endpoints: {
      health: '/api/v1/health',
      auth: '/api/v1/auth',
      branding: '/api/v1/branding',
      content: '/api/v1/content',
      objectives: '/api/v1/objectives',
      founders: '/api/v1/founders',
      mosqueGuide: '/api/v1/mosque-guide',
      videos: '/api/v1/videos',
      images: '/api/v1/images',
      statistics: '/api/v1/statistics',
      activities: '/api/v1/activities',
      events: '/api/v1/events',
      tracks: '/api/v1/tracks',
      sponsors: '/api/v1/sponsors',
      announcements: '/api/v1/announcements',
    },
  });
});

export default apiRouter;
