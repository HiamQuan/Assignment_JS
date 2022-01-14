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
import DashBoard from './pages/dashboard';
import NewsAdmin from './pages/news-admin';
import AdminNewsEdit from './pages/newsEdit';
import NewsAdd from './pages/newsAdd';

const router = new Navigo('/', { linksSelector: 'a' });

// const render = (content) => {
//   document.querySelector('#header').innerHTML = Header.print();
//   document.querySelector('#app').innerHTML = content;
//   document.querySelector('#footer').innerHTML = Footer.print();
// };

router.on({
  '/login': () => {
    RenderPage.render(Login.print());
  },
  '/signup': () => {
    RenderPage.render(SignUp.print());
  },
  '/': () => {
    RenderPage.render(HomePage.print());
  },
  '/about': () => {
    RenderPage.render(AboutPage.print());
  },
  '/gocsinhvien': () => {
    RenderPage.render(GocSinhVien.print());
  },
  // eslint-disable-next-line quotes
  "/news/:id": ({ data }) => {
    const { id } = data;
    RenderPage.render(DetailPage.print(+id));
  },
  '/tuyensinh': () => {
    RenderPage.render(TuyenSinh.print());
  },
  '/ctdaotao': () => {
    RenderPage.render(DaoTao.print());
  },
  '/tuyendung': () => {
    RenderPage.render(TuyenDung.print());
  },
  '/admin/dashboard': () => {
    RenderPage.render(DashBoard.print());
  },
  '/admin/news': () => {
    RenderPage.render(NewsAdmin.print());
  },
  '/admin/news/:id/edit': ({ data }) => {
    const { id } = data;
    RenderPage.render(AdminNewsEdit.print(id));
  },
  '/admin/news/add': () => {
    RenderPage.render(NewsAdd.print(null));
  },
});

router.resolve();
