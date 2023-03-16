import Home from '~/pages/Home';
import Following from '~/pages/Following';

//Public Routes
const publicRoutes = [
    { path: '/reactjs-demo', component: Home },
    { path: '/reactjs-demo/following', component: Following },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
