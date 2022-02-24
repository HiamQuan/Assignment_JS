import Header from '../component/header';
import Footer from '../component/footer';
import { get } from '../api/posts';

const DetailPage = {
  async print(id) {
    const { data } = await get(id);
    return /* html */ `${Header.print()}
            <div>
                <h1>${data.title}</h1>
                <img src="${data.img}" alt="" />
                <p>${data.desc}</p>
            </div>
            ${Footer.print()}
        `;
  },
};
export default DetailPage;
