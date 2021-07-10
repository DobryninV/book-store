
const compose = (...funcs) => (View) => {
  return funcs.reduceRight((prevValue, fn) => fn(prevValue), View);
};

export default compose;