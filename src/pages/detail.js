import { data } from '../data';
import Header from '../component/header';
import Footer from '../component/footer';

const DetailPage = {
  print(id) {
    const result = data.find((post) => post.id === +id);
    return /* html */ `${Header.print()}
            <div>
                <h1>${result.title}</h1>
                <img src="${result.img}" alt="" />
                <p>${result.desc}</p>
            </div>
            ${Footer.print()}
        `;
  },
};
export default DetailPage;
