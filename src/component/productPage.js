import { getAll } from "../api/products";
import reRender from "../utils";
const ProductPage = {
   async print(){
    const { data } = await getAll();
        return /*html*/ `<div class="w-full flex flex-col items-start px-10">
                            <h3 class="text-4xl font-medium my-10">Danh sách khóa học</h3>
                            <div class="grid grid-cols-2 gap-10 px-5 py-2">
                                ${data.map((post)=>
                                    /*html*/ `  <div class="flex flex-col items-center justify-end w-1/2 mx-auto">
                                                    <img src="${post.img}"/>
                                                    <button class="my-5 bg-indigo-500 px-4 py-2 rounded-lg text-gray-100 hover:bg-indigo-600 border border-2 border-indigo-400" href="/products/${post.id}">Chi tiết</button>
                                                </div>`
                                ).join('')}
                            </div>
                        </div> `;
    },
   async afterPrint(){
    const { data } = await getAll();
    reRender(ProductPage,'#app'); 
    },
};

export default ProductPage;