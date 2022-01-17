import Footer from '../component/footer';
import Header from '../component/header';

const GocSinhVien = {
  print() {
    return /* html */`${Header.print()}
                <h1>Góc sinh viên</h1>
                ${Footer.print()}
            `;
  },
};
export default GocSinhVien;
