import toastr from 'toastr';
import HomePage from '../pages/homepage';
import reRender from '../utils';

const Header = {
  print() {
    return /* html */ `<div class='header py-1'>
    <nav>
      <div class="">
        <div class="flex justify-between h-16 px-6 shadow items-center">
          <div class="flex items-center space-x-7">
            <h1 class="text-xl lg:text-2xl font-bold cursor-pointer border-4 border-red-500 px-3">GrandMaster</h1>
            <div class="hidden md:flex justify-around space-x-4">
              <a href="/" class="hover:text-indigo-600 text-gray-700">Trang chủ </a>
              <a href="/products" class="hover:text-indigo-600 text-gray-700">Khóa học</a>
              <a href="/ctdaotao" class="hover:text-indigo-600 text-gray-700">Giỏ sản phẩm</a>
              <a href="/gocsinhvien" class="hover:text-indigo-600 text-gray-700">Blog</a>
              <a href="/admin/dashboard" class="hover:text-indigo-600 text-gray-700">Admin </a>
            </div>
          </div>
          </ul>
          ${localStorage.getItem('user') ? `
          <ul class="flex align-middle">
          <li><a  id="account-email" class="block px-4 py-2  hover:text-red"></a></li>
          <li><a  id="logout" class="block px-4 py-2 rounded-lg bg-indigo-500 text-white hover:text-gray-200 cursor-pointer">Logout</a></li>
          </ul>`
    : `   <div class="flex space-x-4 items-center">
            <a href="/login" class="text-gray-800 text-sm">LOGIN</a>
            <a href="/signup" class="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm">SIGNUP</a>
          </div>`}
        </div>
      </div>
    </nav>
  </div>`;
  },
  afterPrint() {
    // lấy thông tin username từ localStorage và hiển thị ra ngoài
    if (localStorage.getItem('user')) {
      const username = JSON.parse(localStorage.getItem('user')).user.email;

      const logout = document.querySelector('#logout');

      document.querySelector('#account-email').innerHTML = username;
      // logout
      logout.addEventListener('click', () => {
        toastr.success('Logout thành công');
        localStorage.removeItem('user');
        reRender(HomePage, '#app');
      });
    }
  },
};

export default Header;
