//Layout
import AdminLayout from '../layouts/AdminLayout/AdminLayout';

//Pages
import HomePage from '../pages/Home/HomePage';
import LoginPage from '../pages/Login/LoginPage';
import RegisterPage from '../pages/Register/RegisterPage';
import TrainingPackPage from '../pages/TrainingPack/TrainingPackPage';
import ExercisePage from '../pages/Exercise/ExercisePage';
import TrainerPage from '../pages/Trainer/TrainerPage';
import PostPage from '../pages/Post/PostPage';

//Admin pages
import DashboardPage from '../pages/Admin/Dashboard/DashboardPage';
import Member from '../pages/Admin/Member/Member';
import PostAdminPage from '../pages/Admin/PostAdmin/PostAdminPage';

//Can see until don't login
const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/trainingPack', component: TrainingPackPage },
    { path: '/exercise', component: ExercisePage },
    { path: '/trainer', component: TrainerPage },
    { path: '/posts', component: PostPage },

    //Admin routes
    { path: '/admin/dashboard', component: DashboardPage, layout: AdminLayout },
    { path: '/admin/members', component: Member, layout: AdminLayout },
    { path: '/admin/posts', component: PostAdminPage, layout: AdminLayout },
];

//Must be login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
