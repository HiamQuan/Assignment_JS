import Footer from '../component/footer';
import Header from '../component/header';
import ProductPage from '../component/productPage';
import SideProducts from '../component/sidebarProducts';
import { getAll } from '../api/products';
import reRender from '../utils';

const KhoaHoc = {
  async print(result) {
    const { data } = await getAll();
    return /* html */`
    ${Header.print()}
      <div class="flex px-10 py-5 my-8">
        <div class="max-w-1/4 p-4">  
          <div>${await SideProducts.print()}</div>
        </div>
        <div class="max-w-full">
          <div>${result ? await ProductPage.print(result) : await ProductPage.print(data)}</div>
        </div>  
      </div>   
    ${Footer.print()}
        `;
  },
};
export default KhoaHoc;
