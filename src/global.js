const RenderPage = {
  async render(content, id) {
    document.querySelector('#app').innerHTML = await content.print(id);
    if (content.afterPrint) await content.afterPrint();
  },
};
export default RenderPage;
