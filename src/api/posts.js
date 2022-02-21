import instance from './instance';

export const getAll = () => {
  const url = '/posts';
  return instance.get(url);
};
export const getTopView = () => {
  const url = '/posts?_sort=view&_order=desc&_start=1&_limit=3';
  return instance.get(url);
};
export const get = (id) => {
  const url = `/posts/${id}`;
  return instance.get(url);
};
export const add = (post) => {
  const url = '/posts';
  return instance.post(url, post);
};
export const remove = (id) => {
  const url = `/posts/${id}`;
  return instance.delete(url);
};
export const update = (post) => {
  const url = `/posts/${post.id}`;
  return instance.put(url, post);
};
