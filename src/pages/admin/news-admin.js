import SideBar from '../../component/admin/sidebar';
import TableNews from '../../component/admin/table';
import { remove } from '../../api/posts';
import reRender from '../../utils';

const NewsAdmin = {
  async print() {
    return /* html */ `<div class="min-h-screen flex relative">
      ${SideBar.print()}
      <div class="flex flex-col">
          <div class=" font-bold text-2xl my-4 uppercase"><h2>Quản lý tin tức</h2></div>
          ${await TableNews.print()}
      </div>
</div>`;
  },
  async afterPrint() {
    // lấy danh sách button sau khi render
    const buttons = document.querySelectorAll('.btn');
    // tạo vòng lặp cho nodelist button
    buttons.forEach((btn) => {
      // lấy ID từ thuộc tính data-id của button
      const { id } = btn.dataset;
      btn.addEventListener('click', () => {
        const confirm = window.confirm('Ban co muon xoa bai viet nay khong?');
        if (confirm) {
          // gọi hàm delete trong folder API và bắn id vào hàm
          remove(id).then(() => {
            console.log('Da xoa thanh cong');
            reRender(NewsAdmin, '#app');
          });
        }
      });
    });
  },
};
export default NewsAdmin;
