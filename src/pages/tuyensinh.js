import Footer from '../component/footer';
import Header from '../component/header';

const TuyenSinh = {
  print() {
    return /* html */`${Header.print()}
            <h1>Tuyển Sinh</h1>
            ${Footer.print()}
        `;
  },
};
export default TuyenSinh;
