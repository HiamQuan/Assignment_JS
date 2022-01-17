import FormNews from '../../component/admin/formNews';
import SideBar from '../../component/admin/sidebar';
import { listItem } from '../../data';

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
