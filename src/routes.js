const { Router } = require('express');
const multer = require('multer');

const multerConfig = require('./config/multer');

const UserController = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');
const FileController = require('./app/controllers/FileController');
const ProviderController = require('./app/controllers/ProviderController');
const AppointmentsController = require('./app/controllers/AppointmentController');
const ScheduleController = require('./app/controllers/ScheduleController');
const NotificationController = require('./app/controllers/NotificationController');
const AvailableController = require('./app/controllers/AvailableController');

const authMiddleware = require('./app/middlewares/auth');

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.get('/providers', ProviderController.index);
routes.get('/providers/:providerId/available', AvailableController.index);

routes.get('/appointments', AppointmentsController.index);
routes.post('/appointments', AppointmentsController.store);
routes.delete('/appointments/:id', AppointmentsController.delete);

routes.get('/schedule', ScheduleController.index);

routes.get('/notifications', NotificationController.index);
routes.put('/notifications/:id', NotificationController.update);

routes.post('/files', upload.single('file'), FileController.store);

module.exports = routes;
