import FormNews from '../component/formNews';
import SideBar from '../component/sidebar';
import { listItem } from '../data';

const AdminNewsEdit = {
  print(id) {
    const result = listItem.find((post) => post.id === id);
    return /* html */`
    <div class="relative flex min-h-screen">
    ${SideBar.print()}
    ${FormNews.print(result)}
    </div>
        `;
  },
};

export default AdminNewsEdit;
