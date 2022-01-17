import FormNews from '../../component/admin/formNews';
import SideBar from '../../component/admin/sidebar';
// import { listItem } from '../../data';

const NewsAdd = {
  print() {
    return /* html */ `
   <div class="relative flex min-h-screen">
   ${SideBar.print()}
   ${FormNews.print(null)}
   </div>`;
  },
  // afterPrint() {
  // const btns = document.querySelectorAll('#btn-submit');
  // btns.forEach((btn) => {
  //   const { id } = btn.dataset;
  //   btn.addEventListener('Click', () => {
  //     if (id === '') {
  //       const newTitle = document.getElementById('title').value;
  //       const describe = document.getElementById('describe').value;
  //       const newId = listItem.length + 1;
  //       const newPost = {
  //         id: newId,
  //         title: newTitle,
  //         desc: describe,
  //         createAt: ' ',
  //         img: ' ',
  //       };
  //       listItem.push(newPost);
  //     }
  //   });
  // });
  // },
};
export default NewsAdd;
