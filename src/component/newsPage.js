import { getAll } from '../api/posts';
import News from './news-list';

const NewsPage = {
  async print() {
    const { data } = await getAll();
    return /* html */ `
        <div class="container mx-auto px-10">
            <h2 class="my-8 uppercase font-bold text-2xl text-gray-700"><a href="/blog" class="hover:text-indigo-500">Các bài viết</a></h2>
            <div class="grid grid-cols-3 gap-8">
                ${data.map((post) => /* html */ `
                    <div class="border p-3 cursor-pointer">
                        <a href ="/news/${post.id}">
                            <img src="${post.img}" alt=""/>
                            <h3 class="text-red-600"><a href="/news/${post.id}">${post.title}</a></h3>
                            <p>${post.desc}</p>
                        </a>
                    </div>  
                    `).join('')}
            </div>
        </div>
        `;
  },
};
export default NewsPage;
