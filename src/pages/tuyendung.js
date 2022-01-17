import Footer from '../component/footer';
import Header from '../component/header';

const TuyenDung = {
  print() {
    return /* html */`
                ${Header.print()}
                <h1>Tuyển dụng</h1>
                ${Footer.print()}
            `;
  },
};
export default TuyenDung;
