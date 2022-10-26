function importStyle(name: string, loader: () => Promise<any>) {
  const el = document.querySelectorAll<HTMLElement>(`[data-style="${name}"]`);

  if (el.length === 0) {
    return Promise.resolve();
  }

  return loader()
    .then(module => {
      console.log(module);
    })
    .catch(err => {
      Promise.reject(
        new Error(`There was an error loading your style - ${err}`)
      );
    });
}

export default importStyle;
