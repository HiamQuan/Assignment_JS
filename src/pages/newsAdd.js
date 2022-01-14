import FormNews from '../component/formNews';
import SideBar from '../component/sidebar';

const NewsAdd = {
  print() {
    return /* html */`
   <div class="relative flex min-h-screen">
   ${SideBar.print()}
   ${FormNews.print(null)}
   </div>`;
  },
};
export default NewsAdd;
