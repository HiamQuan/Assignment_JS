import 'toastr/build/toastr.min.css';
import toastr from 'toastr';
import SideBar from '../../../component/admin/sidebar';
import { remove } from '../../../api/posts';
import reRender from '../../../utils';
import TableProducts from '../../../component/admin/productsTable';

const ProductsAdmin = {
  async print() {
    return /* html */ `<div class="min-h-screen flex relative">
      ${SideBar.print()}
      <div class="flex flex-col mx-auto">
          <div class=" font-bold text-2xl my-4 uppercase"><h2>Quản lý tin tức</h2></div>
          ${await TableProducts.print()}
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
        const confirm = window.confirm('Ban co muon xoa khoa hoc nay khong?');
        if (confirm) {
          // gọi hàm delete trong folder API và bắn id vào hàm
          remove(id).then(() => {
            console.log('Da xoa thanh cong');
            reRender(ProductsAdmin, '#app');
            toastr.error('Bạn đã xóa thành công !', { timeout: 5000 });
          });
        }
      });
    });
  },
};
export default ProductsAdmin;
