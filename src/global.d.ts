export {};

declare global {
  interface Window {
    Notify: any; // or a proper type if you want
  }
}
