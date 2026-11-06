// Faster navigation in browsers without Speculation Rules (Safari, Firefox):
// when the pointer rests on an internal link (or a finger touches it), download that page in the
// background, so the click opens it from the browser cache. Chrome/Edge use the
// <script type="speculationrules"> in the page head instead, so this does nothing there.
(() => {
  if (HTMLScriptElement.supports && HTMLScriptElement.supports("speculationrules")) return;
  const done = new Set([location.href.split("#")[0]]);
  let timer;
  const internalPage = (a) =>
    a && a.origin === location.origin && !a.hasAttribute("download") && a.target !== "_blank" &&
    (a.pathname.endsWith("/") || a.pathname.endsWith(".html"));
  const prefetch = (a) => {
    const url = a.href.split("#")[0];
    if (done.has(url)) return;
    done.add(url);
    fetch(url, { credentials: "same-origin" }).catch(() => done.delete(url));
  };
  document.addEventListener("mouseover", (e) => {
    const a = e.target.closest && e.target.closest("a");
    if (!internalPage(a)) return;
    clearTimeout(timer);
    timer = setTimeout(() => prefetch(a), 65);
  }, { passive: true });
  document.addEventListener("mouseout", () => clearTimeout(timer), { passive: true });
  document.addEventListener("touchstart", (e) => {
    const a = e.target.closest && e.target.closest("a");
    if (internalPage(a)) prefetch(a);
  }, { passive: true, capture: true });
})();
