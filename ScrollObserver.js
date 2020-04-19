// stwórz klasę ScrollObserver z metodami takimi jak zawiera pattern observera
// - ScrollObserver ma nasłuchiwać na globalnym window.onscroll
// - ScrollObserver ma zamontować event onscroll po wywołaniu metody observe, oraz odpalać callback co wywołanie eventu window.onscroll
// - w callbacku observe ma być zwracany obiekt z wartościami z window tj {scrollY, scrollX, outerHeight, outerWidth, innerHeight, innerWidth}
// - ScrollObserver ma odmontować event onscroll po wywołaniu mentody unobserve
class ScrollObserver {
  constructor() {
    this.observerFunctions = [];
  }

  observe = (callback) => {
    this.observerFunctions.push(callback);
    window.addEventListener("scroll", callback);
  };
  unobserve = () => {
    this.observerFunctions.forEach((observerFn) => {
      window.removeEventListener("scroll", observerFn);
    });
  };
}

callback = () => {
  const {
    scrollY,
    scrollX,
    outerHeight,
    outerWidth,
    innerHeight,
    innerWidth,
  } = window;
  return {
    scrollY,
    scrollX,
    outerHeight,
    outerWidth,
    innerHeight,
    innerWidth,
  };
};
