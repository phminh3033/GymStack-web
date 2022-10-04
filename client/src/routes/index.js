//Layout
import AdminLayout from '../layouts/AdminLayout/AdminLayout';

//Pages
import HomePage from '../pages/Home/HomePage';
import LoginPage from '../pages/Login/LoginPage';
import RegisterPage from '../pages/Register/RegisterPage';
import PersonalPage from '../pages/Personal/PersonalPage';
import UpdatePersonalPage from '../pages/Personal/UpdatePersonalPage';
import ExercisePage from '../pages/Exercise/ExercisePage';
import IntroducePage from '../pages/Introduce/IntroducePage';
import JobsPage from '../pages/Jobs/JobsPage';
import SupportPage from '../pages/Support/SupportPage';
import ContactPage from '../pages/Support/Contact/ContactPage';
import PrivacyPage from '../pages/Support/Privacy/PrivacyPage';
import TermsPage from '../pages/Support/Terms/TermsPage';

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
import AdminsAdmin from '../pages/Admin/AdminsAdmin/AdminsAdmin';
import UsersAdmin from '../pages/Admin/UsersAdmin/UsersAdmin';
import PostAdminPage from '../pages/Admin/PostAdmin/PostAdminPage';

//Can see until don't login
const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/personal/:name', component: PersonalPage },
    { path: '/personal/:name/update', component: UpdatePersonalPage },
    { path: '/exercise', component: ExercisePage },
    { path: '/introduce', component: IntroducePage },
    { path: '/careers', component: JobsPage },
    { path: '/support', component: SupportPage },
    { path: '/contact-us', component: ContactPage },
    { path: '/privacy', component: PrivacyPage },
    { path: '/terms', component: TermsPage },

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
    { path: '/admin/admins', component: AdminsAdmin, layout: AdminLayout },
    { path: '/admin/users', component: UsersAdmin, layout: AdminLayout },
    { path: '/admin/posts', component: PostAdminPage, layout: AdminLayout },
    { path: '/admin/posts/search', component: PostAdminPage, layout: AdminLayout },
];

//Must be login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
