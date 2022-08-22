//Pages
import HomePage from '../pages/Home/HomePage';
import LoginPage from '../pages/Login/LoginPage';
import TrainingPackPage from '../pages/TrainingPack/TrainingPackPage';
import ExercisePage from '../pages/Exercise/ExercisePage';
import TrainerPage from '../pages/Trainer/TrainerPage';
import PostPage from '../pages/Post/PostPage';

//Can see until don't login
const publicRoutes = [
    { path: '/', component: HomePage},
    { path: '/login', component: LoginPage},
    { path: '/trainingPack', component: TrainingPackPage},
    { path: '/exercise', component: ExercisePage},
    { path: '/trainer', component: TrainerPage},
    { path: '/post', component: PostPage},
];

//Must be login
const privateRoutes = [];

export { publicRoutes, privateRoutes };