import axios from 'axios';
import FormNews from '../../component/admin/formNews';
import SideBar from '../../component/admin/sidebar';
import { add } from '../../api/posts';
// import { listItem } from '../../data';

const NewsAdd = {
  print() {
    return /* html */ `
   <div class="relative flex min-h-screen">
   ${SideBar.print()}
   ${FormNews.print(null)}
   </div>`;
  },
  afterPrint() {
    const formAdd = document.querySelector('#form-add-post');
    const imgPreview = document.querySelector('#img-preview');
    const imgPost = document.querySelector('#img-post');
    const CLOUDINARY_API_URL = 'https://api.cloudinary.com/v1_1/ecommercer2021/image/upload';
    const CLOUDINARY_PRESET = 'jkbdphzy';

    formAdd.addEventListener('submit', async (e) => {
      e.preventDefault();
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
        desc: document.querySelector('#desc').value,
      });
    });
  },
};
export default NewsAdd;
