// service-worker-manager.ts
class ServiceWorkerManager {
    registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('service_worker.js')
                .then((registration) => {
                    console.log('SW Registered!', registration);
                })
                .catch((error) => {
                    console.error('SW Registration Failed', error);
                });
        } else {
            console.error('Service workers not supported');
        }
    }
}

// Export the class if using modules
// export default ServiceWorkerManager;
