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
              <a href="/tuyensinh" class="hover:text-indigo-600 text-gray-700">Tuyển sinh</a>
              <a href="/ctdaotao" class="hover:text-indigo-600 text-gray-700">Chương trình đào tạo</a>
              <a href="/gocsinhvien" class="hover:text-indigo-600 text-gray-700">Góc sinh viên</a>
              <a href="/tuyendung" class="hover:text-indigo-600 text-gray-700">Tuyển dụng</a>
              <a href="/admin/dashboard" class="hover:text-indigo-600 text-gray-700">Admin </a>
            </div>
          </div>
          <div class="flex space-x-4 items-center">
            <a href="/login" class="text-gray-800 text-sm">LOGIN</a>
            <a href="/signup" class="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm">SIGNUP</a>
          </div>
        </div>
      </div>
    </nav>
  </div>`;
  },
};

export default Header;
