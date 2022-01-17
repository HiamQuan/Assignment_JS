import SideBar from '../../component/admin/sidebar';

const DashBoard = {
  print() {
    return /* html */ `<div class="relative min-h-screen flex">
            ${SideBar.print()}
            <h2 class="p-5 font-bold">DashBoard</h2>
    </div>`;
  },
};

export default DashBoard;
