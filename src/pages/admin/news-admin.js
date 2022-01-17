import SideBar from '../../component/admin/sidebar';
import TableNews from '../../component/admin/table';

const NewsAdmin = {
  print() {
    return /* html */ `<div class="min-h-screen flex relative">
      ${SideBar.print()}
      <div class="flex flex-col">
          <div class=" font-bold text-2xl my-4 uppercase"><h2>Quản lý tin tức</h2></div>
          ${TableNews.print()}
      </div>
</div>`;
  },
};
export default NewsAdmin;
