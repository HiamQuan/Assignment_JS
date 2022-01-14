import SideBar from '../component/sidebar';
import TableNews from '../component/table';

const NewsAdmin = {
  print() {
    return /* html */ `<div class="min-h-screen flex relative">
  ${SideBar.print()}
  ${TableNews.print()}
</div>`;
  },
};
export default NewsAdmin;
