export async function timeout(ms, cb) {
  return new Promise((resolve) => {
    resolve(setTimeout(cb, ms));
  });
}
