import { getSome } from '../api/products';

const ProductHome = {
  async print() {
    const { data } = await getSome();
    return /* html */ `
        <div class="container mx-auto px-10">
            <h2 class="my-8 uppercase font-bold text-2xl text-gray-700"><a href="/products" class="hover:text-indigo-500">Khóa học</a></h2>
            <div class="grid grid-cols-3 gap-8">
                ${data.map((post) => /* html */ `
                    <div class=" p-5 cursor-pointer flex flex-col justify-center">
                            <a href="/products/${post.id}"><img src="${post.img}" alt=""/></a>
                    </div>  
                    `).join('')}
            </div>
        </div>
        `;
  },
};
export default ProductHome;
