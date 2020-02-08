export function random(seed) {
  let _seed = seed % 2147483647;
  if (_seed <= 0) _seed += 2147483646;
  return {
    next() {
      return (_seed = (_seed * 16807) % 2147483647);
    }
  };
}
