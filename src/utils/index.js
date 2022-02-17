const reRender = async (component, domElement) => {
  if (component) {
    document.querySelector(domElement).innerHTML = await component.print();
  }
  if (component.afterPrint) await component.afterPrint();
};

export default reRender;
