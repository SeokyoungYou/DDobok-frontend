import { CACHE_STORAGE } from "../constants/api-constants";

export class CacheApiServer {
  private static giCacheStorage = CACHE_STORAGE.GIS;
  private static brandsCacheStorage = CACHE_STORAGE.BRANDS;

  static async getGisByQuery(color: string) {
    const url = `https://ddobok.onrender.com/api/v1/gis/?color=${color}`;
    const cache = await caches.open(this.giCacheStorage);
    const cacheResponse = await caches.match(url);

    return cacheResponse
      ? cacheResponse.json()
      : this.getFetchResponse(cache, url);
  }

  static async getBrandById(id: number) {
    const url = `https://ddobok.onrender.com/api/v1/brands/${id}`;
    const cache = await caches.open(this.brandsCacheStorage);
    const cacheResponse = await caches.match(url);

    return cacheResponse
      ? cacheResponse.json()
      : this.getFetchResponse(cache, url);
  }

  private static async getFetchResponse(cache: Cache, url: string) {
    const fetchResponse = await fetch(url);
    cache.put(url, fetchResponse.clone());
    console.info("fetching api");
    return fetchResponse.json();
  }
}
