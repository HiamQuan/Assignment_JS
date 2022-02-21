import Footer from '../component/footer';
import Header from '../component/header';
import ProductPage from '../component/productPage';

const KhoaHoc = {
 async print() {
    return /* html */`${Header.print()}
            <h1>${await ProductPage.print()}</h1>
            ${Footer.print()}
        `;
  },
};
export default KhoaHoc;
