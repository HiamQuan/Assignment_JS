import $ from 'jquery';
import Footer from '../component/footer';
import Header from '../component/header';
import ProductPage from '../component/productPage';
import SideProducts from '../component/sidebarProducts';
import { filter, getAll, filterSearch } from '../api/products';
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
  afterPrint() {
    Header.afterPrint();
    $('#filter-btn').on('click', async (e) => {
      e.preventDefault();
      const filterPrice = document.getElementsByClassName('filter-price');
      const category = document.getElementsByName('category');
      let categoryChoice = '';
      // eslint-disable-next-line no-restricted-syntax
      for (const item of category) {
        if (item.checked === true) { categoryChoice = item.value; }
      }
      let result = '';
      // eslint-disable-next-line no-restricted-syntax
      for (const item of filterPrice) {
        if (item.checked === true) { result += `&price=${item.value}`; }
      }
      const { data } = await filter(categoryChoice, result);
      reRender(KhoaHoc, '#app', data);
    });
    $('#filter-section-search').on('submit', async (e) => {
      e.preventDefault();
      const formSearch = document.getElementById('formSearch');

      const { data } = await filterSearch(formSearch.value);
      console.log(data);
      reRender(KhoaHoc, '#app', data);
    });
  },
};
export default KhoaHoc;
