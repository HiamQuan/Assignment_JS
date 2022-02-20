const FormProduct = {
  print(result) {
    return /* html */`
    <div class="w-full min-h-screen bg-gray-600 px-60 flex flex-col items-start">
        <h3 class=" my-10 text-4xl text-gray-200">Thêm sản phẩm</h3>
        <form class=" w-full h-full">    
            <label for="title" class="block mb-2 text-base font-medium text-gray-900 dark:text-gray-300">Tên sản phẩm</label>
            <textarea id="title" rows="2" class="block p-2.5 w-1/2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
            <label for="describe" class="block mt-4 text-base font-medium text-gray-900 dark:text-gray-300">Mô tả chi tiết</label>
            <textarea id="describe" rows="9" class="block mt-4 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
            <label for="price" class="block mt-4 text-base font-medium text-gray-900 dark:text-gray-300">Giá tiền</label>
            <input id="price" type="currency" min="1" step="any" class="block mt-4 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""/>    
            <label class="block mt-6 text-base font-medium text-gray-900 dark:text-gray-300" for="user_avatar">Hình ảnh</label>
            <div class="shrink-0 my-4">
            <img class="h-16 w-16 object-cover bg-gray-200" src="" alt="" />
            </div>
            <input class="p-2 block w-full mt-4 text-sm text-gray-900 bg-gray-200 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 file:mr-4 file:py-1 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-violet-50 file:text-violet-700
            hover:file:bg-violet-100" aria-describedby="user_avatar_help" id="user_avatar" type="file">
            <div class="mt-1 text-sm text-gray-500 dark:text-gray-200" id="user_avatar_help">A profile picture is useful to confirm your are logged into your account</div>
        </form>
    </div>`;
  },
};

export default FormProduct;
