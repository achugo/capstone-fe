// productTracker.ts

interface DailyProductViews {
    [date: string]: { [productId: string]: { [ip: string]: number } };
  }
  
  export class ProductTracker {
    private storageKey = 'product_views';
    private dailyViews: DailyProductViews = {};
  
    constructor() {
      this.loadViewsFromLocalStorage();
    }
  
    private loadViewsFromLocalStorage() {
      const savedData = localStorage.getItem(this.storageKey);
      if (savedData) {
        this.dailyViews = JSON.parse(savedData);
      }
    }
  
    private saveViewsToLocalStorage() {
      localStorage.setItem(this.storageKey, JSON.stringify(this.dailyViews));
    }
  
    trackProductView(ip: string, productId: string) {
      const currentDate = new Date().toLocaleDateString();
  
      if (!this.dailyViews[currentDate]) {
        this.dailyViews[currentDate] = {};
      }
  
      if (!this.dailyViews[currentDate][productId]) {
        this.dailyViews[currentDate][productId] = {};
      }
  
      if (!this.dailyViews[currentDate][productId][ip]) {
        this.dailyViews[currentDate][productId][ip] = 1;
      } else {
        this.dailyViews[currentDate][productId][ip]++;
      }
  
      this.saveViewsToLocalStorage();
    }
  
    getProductViews(ip: string, productId: string): number {
      const currentDate = new Date().toLocaleDateString();
  
      if (this.dailyViews[currentDate] && this.dailyViews[currentDate][productId] && this.dailyViews[currentDate][productId][ip]) {
        return this.dailyViews[currentDate][productId][ip];
      }
  
      return 0;
    }
  }
  