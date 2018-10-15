// NB: This function can still return unsafe HTML
export const unescapeHTML = (html) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html.replace(/<\/?em>/g, '*').replace(/<\/?strong>/g, '**').replace(/<br\s*\/?>/g, '\n').replace(/<\/p><p>/g, '\n\n').replace(/<[^>]*>/g, '');
  return wrapper.textContent;
};
