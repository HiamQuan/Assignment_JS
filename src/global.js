import Footer from './component/footer';
import Header from './component/header';

const RenderPage = {
  render(content) {
    document.querySelector('#header').innerHTML = Header.print();
    document.querySelector('#app').innerHTML = content;
    document.querySelector('#footer').innerHTML = Footer.print();
  },
  renderAdmin(content) {
    document.querySelector('#app').innerHTML = content;
  },
};
export default RenderPage;
