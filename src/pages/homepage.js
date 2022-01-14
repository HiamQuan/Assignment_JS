import Banner from '../component/banner';
import News from '../component/news-list';

const HomePage = {
  print() {
    return /* html */ `
            <div class="my-7">
                ${Banner.print()}
            </div>
            <div class="news bg-gray-50">
                ${News.print()}
                ${News.print()}
            </div>
        `;
  },
};
export default HomePage;
