export default (target: number | HTMLElement, callBack: Function = () => null) => {
  
  let top: number = 0

  const onScroll = (): void => {
    if (window.scrollY.toFixed() === top.toFixed()) {
      window.removeEventListener('scroll', onScroll);
      try {
        callBack();
      } catch (error) {
        console.error(error);
      }
    }
  }

  const getOffsetTop = (element: HTMLElement) => {
    let offsetTop = 0;
    let target: any = element
    while(target) {
      offsetTop += target.offsetTop;
      target = target.offsetParent;
    }
    return offsetTop;
  }

  if (typeof target == 'number') {
    top = Math.max(target, 0);
    
  } else if (target.nodeType) {
    top = Math.max(getOffsetTop(target), 0);

  } else {
    
    return
  }

  window.addEventListener('scroll', onScroll);
  
  window.scrollTo({
    top,
    behavior: 'smooth'
  });

}