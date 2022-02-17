import Navigo from 'navigo';
import RenderPage from './global';
import AboutPage from './pages/about';
import DetailPage from './pages/detail';
import HomePage from './pages/homepage';
import Login from './pages/login';
import SignUp from './pages/signup';
import TuyenSinh from './pages/tuyensinh';
import DaoTao from './pages/ctdaotao';
import GocSinhVien from './pages/gocsinhvien';
import TuyenDung from './pages/tuyendung';
import DashBoard from './pages/admin/dashboard';
import NewsAdmin from './pages/admin/news-admin';
import AdminNewsEdit from './pages/admin/newsEdit';
import NewsAdd from './pages/admin/newsAdd';

const router = new Navigo('/', { linksSelector: 'a', hash: true });

router.on('/admin/*/', () => {}, {
  before(done, match) {
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
  '/gocsinhvien': () => {
    RenderPage.render(GocSinhVien);
  },
  // eslint-disable-next-line quotes
  "/news/:id": ({ data }) => {
    RenderPage.render(DetailPage, data.id);
  },
  '/tuyensinh': () => {
    RenderPage.render(TuyenSinh);
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
});

router.resolve();
