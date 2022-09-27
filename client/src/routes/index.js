//Layout
import AdminLayout from '../layouts/AdminLayout/AdminLayout';

//Pages
import HomePage from '../pages/Home/HomePage';
import LoginPage from '../pages/Login/LoginPage';
import RegisterPage from '../pages/Register/RegisterPage';
import ExercisePage from '../pages/Exercise/ExercisePage';
import TrainerPage from '../pages/Trainer/TrainerPage';
//PostPage
import PostPage from '../pages/Post/PostPage';
import KnowledgePost from '../pages/Post/KnowledgePost';
import NutritionPost from '../pages/Post/NutritionPost';
import ExercisePost from '../pages/Post/ExercisePost';
import PostDetail from '../pages/Post/PostDetail/PostDetail';
import SearchPostPage from '../pages/Post/SearchPostPage';

//Admin pages
import LoginAdminPage from '../pages/Login/LoginAdminPage';
import DashboardPage from '../pages/Admin/Dashboard/DashboardPage';
import UsersAdmin from '../pages/Admin/UsersAdmin/UsersAdmin';
import PostAdminPage from '../pages/Admin/PostAdmin/PostAdminPage';

//Can see until don't login
const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/exercise', component: ExercisePage },
    { path: '/trainer', component: TrainerPage },

    //Posts Pages
    { path: '/posts', component: PostPage },
    { path: '/posts/knowledge', component: KnowledgePost },
    { path: '/posts/nutrition', component: NutritionPost },
    { path: '/posts/exercise', component: ExercisePost },
    { path: '/posts/:type/:id', component: PostDetail },
    { path: '/posts/search', component: SearchPostPage },

    //Admin routes
    { path: '/admin', component: LoginAdminPage, layout: null },
    { path: '/admin/dashboard', component: DashboardPage, layout: AdminLayout },
    { path: '/admin/admins', component: UsersAdmin, layout: AdminLayout },
    { path: '/admin/users', component: UsersAdmin, layout: AdminLayout },
    { path: '/admin/posts', component: PostAdminPage, layout: AdminLayout },
    { path: '/admin/posts/search', component: PostAdminPage, layout: AdminLayout },
];

//Must be login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
