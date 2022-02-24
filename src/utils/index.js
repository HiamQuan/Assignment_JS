const reRender = async (component, domElement, result) => {
  if (component) {
    document.querySelector(domElement).innerHTML = await component.print(result);
  }
  if (component.afterPrint) await component.afterPrint();
};

export default reRender;
