import Navigo from 'navigo';
import RenderPage from './global';
import AboutPage from './pages/about';
import DetailPage from './pages/detail';
import HomePage from './pages/homepage';
import Login from './pages/login';
import SignUp from './pages/signup';
import DaoTao from './pages/ctdaotao';
import TuyenDung from './pages/tuyendung';
import DashBoard from './pages/admin/dashboard';
import NewsAdmin from './pages/admin/news-admin';
import AdminNewsEdit from './pages/admin/newsEdit';
import NewsAdd from './pages/admin/newsAdd';
import ProductsAdmin from './pages/admin/products';
import ProductsAdd from './pages/admin/products/add';
import ProductsEdit from './pages/admin/products/edit';
import UserAdd from './pages/admin/users/add';
import UserEdit from './pages/admin/users/edit';
import Users from './pages/admin/users';
import KhoaHoc from './pages/products';
import DetailProd from './pages/detailProducts';
import Blog from './pages/blog';

const router = new Navigo('/', { linksSelector: 'a', hash: true });
router.render = (req, res) => {
  res.jsonp(res.locals.data);
};

router.on('/admin/*/', () => {}, {
  before(done) {
    if (localStorage.getItem('user')) {
      const userId = JSON.parse(localStorage.getItem('user')).user.id;
      if (userId === 1) {
        // render dựa trên router
        done();
      } else {
        document.location.href = '/';
      }
    } else {
      document.location.href = '/';
    }
  },
});

router.on({
  '/login': async () => {
    await RenderPage.render(Login);
  },
  '/signup': () => {
    RenderPage.render(SignUp);
  },
  '/': () => {
    RenderPage.render(HomePage);
  },
  '/about': () => {
    RenderPage.render(AboutPage);
  },
  '/blog': () => {
    RenderPage.render(Blog);
  },
  // eslint-disable-next-line quotes
  "/news/:id": ({ data }) => {
    RenderPage.render(DetailPage, data.id);
  },
  '/products': () => {
    RenderPage.render(KhoaHoc);
  },
  '/products/:id': ({ data }) => {
    RenderPage.render(DetailProd, data.id);
  },
  '/ctdaotao': () => {
    RenderPage.render(DaoTao);
  },
  '/tuyendung': () => {
    RenderPage.render(TuyenDung);
  },
  '/admin/dashboard': () => {
    RenderPage.render(DashBoard);
  },
  '/admin/news': () => {
    RenderPage.render(NewsAdmin);
  },
  '/admin/news/:id/edit': ({ data }) => {
    RenderPage.render(AdminNewsEdit, data.id);
  },
  '/admin/news/add': () => {
    RenderPage.render(NewsAdd);
  },
  '/admin/products': () => RenderPage.render(ProductsAdmin),
  '/admin/products/add': () => RenderPage.render(ProductsAdd),
  '/admin/products/:id/edit': ({ data }) => RenderPage.render(ProductsEdit, data.id),
  '/admin/users': () => RenderPage.render(Users),
  'admin/users/add': () => RenderPage.render(UserAdd),
  'admin/users/:id/edit': ({ data }) => RenderPage.render(UserEdit, data.id),

});

router.resolve();
