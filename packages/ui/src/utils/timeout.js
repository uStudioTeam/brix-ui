export async function timeout(ms, cb) {
  return new Promise(() => {
    setTimeout(cb, ms);
  });
}
