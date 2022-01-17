import Banner from '../component/banner';
import News from '../component/news-list';
import Header from '../component/header';
import Footer from '../component/footer';

const HomePage = {
  print() {
    return /* html */ `
            ${Header.print()}
            <div class="my-7">
                ${Banner.print()}
            </div>
            <div class="news bg-gray-50">
                ${News.print()}
                ${News.print()}
            </div>
            ${Footer.print()}      
        `;
  },
};
export default HomePage;
