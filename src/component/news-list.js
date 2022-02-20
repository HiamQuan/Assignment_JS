import { getAll } from '../api/posts';

const News = {
  async print() {
    const { data } = await getAll();
    return /* html */ `
        <div class="container mx-auto px-4">
            <h2 class="my-4 uppercase font">Tin tuc hoc tap</h2>
            <div class="grid grid-cols-3 gap-8">
                ${data.map((post) => /* html */ `
                    <div class="border p-3">
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
export default News;
