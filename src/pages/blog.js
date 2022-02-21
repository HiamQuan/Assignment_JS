import Footer from '../component/footer';
import Header from '../component/header';
import NewsPage from '../component/newsPage';

const GocSinhVien = {
  async print() {
    return /* html */`${Header.print()}
                <h1>${await NewsPage.print()}</h1>
                ${Footer.print()}
            `;
  },
};
export default GocSinhVien;
