const ProductPage = {
  async print(data) {
    return /* html */ `<div class="w-full flex flex-col items-start px-10">
                            <div class="grid grid-cols-2 gap-10 px-5 py-10">
                                ${data.map((post) => /* html */ `   <div class="grid grid-cols-2 gap-4 p-5 items-center justify-end w-1/2 mx-auto bg-indigo-700 rounded-3xl">
                                                                        <img class=" rounded-3xl" src="${post.img}"/>
                                                                        <button class="my-5 bg-indigo-400 px-4 py-2 rounded-lg text-gray-100 hover:bg-indigo-600 border border-2 border-indigo-400" 
                                                                              ><a href="/products/${post.id}">Bắt đầu</a></button>
                                                                    </div>`).join('')}
                            </div>
                        </div> `;
  },

};
export default ProductPage;
