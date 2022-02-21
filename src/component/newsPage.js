const NewsPage = {
  async print(data) {
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
            <div class="pagination mx-auto flex item-center">
                    <ul class="flex mx-auto">
                        <li><button class="btn page1 mx-4 px-2 bg-indigo-400 rounded-full">1</button></li>
                        <li><button  class="btn page2 px-2 bg-indigo-400 rounded-full">2</button></li>
                    </ul>
            </div>
        </div>
        `;
  },

};
export default NewsPage;
