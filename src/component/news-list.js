import { getAll, getTopView } from '../api/posts';

const News = {
  async print() {
    const { data } = await getTopView();
    return /* html */ `
        <div class="container mx-auto px-10">
            <h2 class="my-8 uppercase font-bold text-2xl text-gray-700"><a href="/blog" class="hover:text-indigo-500">Cập nhật tin tức</a></h2>
            <div class="grid grid-cols-3 gap-8">
                ${data.map((post) => /* html */ `
                    <div class="border p-3 cursor-pointer flex flex-col justify-around">
                        <a href ="/news/${post.id}">
                            <img src="${post.img}" alt=""/>
                            <h3 class="text-red-600"><a href="/news/${post.id}">${post.title}</a></h3>
                            <p>${post.desc}</p>
                            <p><i class="fa-solid fa-eye mr-2"></i>${post.view}</p>
                        </a>
                    </div>  
                    `).join('')}
            </div>
        </div>
        `;
  },
};
export default News;
