import axios from 'axios';
import $ from 'jquery';
import validate from 'jquery-validation';
import SideBar from '../../../component/admin/sidebar';
import { add } from '../../../api/products';
import FormProduct from '../../../component/admin/formProducts';
// import { listItem } from '../../data';

const ProductsAdd = {
  print() {
    return /* html */ `
   <div class="relative flex min-h-screen">
   ${SideBar.print()}
   ${FormProduct.print(null)}
   </div>`;
  },
  afterPrint() {
    const formAdd = document.querySelector('#form-post');
    const imgPreview = document.querySelector('#img-preview');
    const imgPost = document.querySelector('#file-upload');
    const createdAt = new Date();
    const CLOUDINARY_API_URL = 'https://api.cloudinary.com/v1_1/quannaph18209/image/upload';
    const CLOUDINARY_PRESET = 'ngongquan';

    formAdd.addEventListener('submit', async (e) => {
      e.preventDefault();
      imgPreview.src = imgPost.files;
      const file = imgPost.files[0];
      const createAt = new Date();
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', CLOUDINARY_PRESET);

      // call api cloudinary
      const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
        headers: {
          'Content-Type': 'application/form-data',
        },
      });
      // call api thêm bài viết
      add({
        title: $('#title').val(),
        img: data.url,
        desc: $('#describe').val(),
        price: $('#price').val(),
        createdAt,
      });
      console.log('Đã thêm thành công');
      document.location.href = '/admin/products';
    });
  },
};
export default ProductsAdd;
