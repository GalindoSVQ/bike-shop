export function lockScrollbar(lock: boolean) {
  const body = document.body;

  if (lock) {
    const scrollY =
      document.documentElement.style.getPropertyValue("--scroll-y");
    body.style.position = "fixed";
    body.style.top = `-${scrollY}`;
  } else {
    const scrollY = body.style.top;
    body.style.position = "";
    body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  }
}
