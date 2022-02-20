import axios from 'axios';
import { update, get } from '../../../api/user';
import FormNews from '../../../component/admin/formNews';
import SideBar from '../../../component/admin/sidebar';

const UserEdit = {
  async print(id) {
    const { data } = await get(id);
    return /* html */`
    <div class="relative flex min-h-screen">
    ${SideBar.print()}
    ${await FormNews.print(data)}
    </div>
        `;
  },
  afterPrint(id) {
    console.log(id);
    const formAdd = document.querySelector('#form-post');
    const imgPreview = document.querySelector('#img-preview');
    const imgPost = document.querySelector('#file-upload');
    const createdAt = new Date();
    let imgLink = '';
    const CLOUDINARY_API_URL = 'https://api.cloudinary.com/v1_1/quannaph18209/image/upload';
    const CLOUDINARY_PRESET = 'ngongquan';

    // handle sự kiện change để xem ảnh trên local
    imgPost.addEventListener('change', (e) => {
      imgPreview.src = URL.createObjectURL(e.target.files[0]);
    });

    formAdd.addEventListener('submit', async (e) => {
      e.preventDefault();
      const file = imgPost.files[0];
      if (file) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', CLOUDINARY_PRESET);

        // call api cloudinary
        const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
          headers: {
            'Content-Type': 'application/form-data',
          },
        });
        imgLink = data.url;
      }

      // call api thêm bài viết
      update({
        createdAt,
        title: document.querySelector('#title').value,
        img: imgLink || imgPreview.src,
        desc: document.querySelector('#describe').value,
        id,
      })
        .then(() => {
          document.location.href = '/admin/news';
        });
    });
  },
};

export default UserEdit;
