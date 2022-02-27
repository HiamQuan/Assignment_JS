import Navigo from 'navigo';

const router = new Navigo('/', { linksSelector: 'a', hash: true });
router.render = (req, res) => {
  res.jsonp(res.locals.data);
};

router.on('/admin/*/', () => {}, {
  before(done) {
    if (localStorage.getItem('user')) {
      const userId = JSON.parse(localStorage.getItem('user')).user.id;
      if (userId === 1) {
        // render dựa trên router
        done();
      } else {
        document.location.href = '/';
      }
    } else {
      document.location.href = '/';
    }
  },
});

router.on({
});

router.resolve();
// list sản phẩm: 2đ,
// Thêm sản phẩm: 2đ,
// Sửa sản hpaamr: 2đ,
// Xóa sản phẩm: 2đ,
// giao diện: 1đ,
// validate: 0.5đ,
// danh mục sản phẩm: 0.5 đ
