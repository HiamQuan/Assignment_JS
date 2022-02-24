import { get1Page, get2Page, getAll } from '../api/posts';
import Footer from '../component/footer';
import Header from '../component/header';
import NewsPage from '../component/newsPage';
import reRender from '../utils';

const Blog = {
  async print(result) {
    const { data } = await getAll();
    return /* html */`${Header.print()}
                <h1>${result ? await NewsPage.print(result) : await NewsPage.print(data)}</h1>
                ${Footer.print()}
            `;
  },
  afterPrint() {
    Header.afterPrint();
    const btns = document.querySelectorAll('.btn');
    btns.forEach((btn) => {
      btn.addEventListener('click', async () => {
        if (btn.classList.contains('page1')) {
          const { data } = await get1Page();
          reRender(Blog, '#app', data);
        }
        if (btn.classList.contains('page2')) {
          const { data } = await get2Page();
          reRender(Blog, '#app', data);
        }
      });
    });
  },
};
export default Blog;
