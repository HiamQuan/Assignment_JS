const RenderPage = {
  render(content, id) {
    document.querySelector('#app').innerHTML = content.print(id);
    // if (content.afterPrint()) content.afterPrint();
  },
};
export default RenderPage;
