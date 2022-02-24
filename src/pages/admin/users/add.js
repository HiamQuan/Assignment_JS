import axios from 'axios';
import $ from 'jquery';
import validate from 'jquery-validation';
import SideBar from '../../../component/admin/sidebar';
import { add } from '../../../api/products';
import FormNews from '../../../component/admin/formNews';
// import { listItem } from '../../data';

const UserAdd = {
  print() {
    return /* html */ `
   <div class="relative flex min-h-screen">
   ${SideBar.print()}
   ${FormNews.print(null)}
   </div>`;
  },
  afterPrint() {
    const formAdd = document.querySelector('#form-post');
    const imgPreview = document.querySelector('#img-preview');
    const imgPost = document.querySelector('#file-upload');
    const CLOUDINARY_API_URL = 'https://api.cloudinary.com/v1_1/quannaph18209/image/upload';
    const CLOUDINARY_PRESET = 'ngongquan';

    formAdd.addEventListener('submit', async (e) => {
      e.preventDefault();
      imgPreview.src = imgPost.files;
      const file = imgPost.files[0];

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
        title: document.querySelector('#title').value,
        img: data.url,
        desc: document.querySelector('#describe').value,
      });
      console.log('Đã thêm thành công');
    });
  },
};
export default UserAdd;
