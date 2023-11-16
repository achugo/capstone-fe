interface DailyProductViews {
    [date: string]: { [ip: string]: number };
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

      if (!this.dailyViews[currentDate][ip]) {
        this.dailyViews[currentDate][ip] = 1;
      } else {
        this.dailyViews[currentDate][ip]++;
      }

      this.saveViewsToLocalStorage();
    }

    getProductViews(ip: string, productId: string): number {
      const currentDate = new Date().toLocaleDateString();

      if (this.dailyViews[currentDate] && this.dailyViews[currentDate][ip]) {
        return this.dailyViews[currentDate][ip];
      }

      return 0;
    }
  }