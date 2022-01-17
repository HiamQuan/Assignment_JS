import Header from '../component/header';
import Footer from '../component/footer';

const DaoTao = {
  print() {
    return /* html */`
              ${Header.print()}
              <h1>Đào tạo</h1>
              ${Footer.print()}
          `;
  },
};
export default DaoTao;
