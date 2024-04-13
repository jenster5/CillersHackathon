import kaboom from "kaboom";

export function initializeKaboom(canvasElement) {
  return kaboom({
    global: false,
    touchToMouse: true,
    canvas: canvasElement,
    debug: false,
  });
}
