// services/localStorageService.ts
class LocalStorageService {
	getItem<T>(key: string): T | null {
	  if (typeof window !== 'undefined') {
		const item = localStorage.getItem(key);
		if (item) {
		  try {
			return JSON.parse(item) as T;
		  } catch (error) {
			console.error(`Error parsing localStorage item with key "${key}":`, error);
		  }
		}
	  }
	  return null;
	}
  
	setItem<T>(key: string, value: T): void {
	  if (typeof window !== 'undefined') {
		try {
		  localStorage.setItem(key, JSON.stringify(value));
		} catch (error) {
		  console.error(`Error setting localStorage item with key "${key}":`, error);
		}
	  }
	}
  
	removeItem(key: string): void {
	  if (typeof window !== 'undefined') {
		localStorage.removeItem(key);
	  }
	}
  
	clear(): void {
	  if (typeof window !== 'undefined') {
		localStorage.clear();
	  }
	}
  }
  
  const localStorageService = new LocalStorageService();
  export default localStorageService;
  