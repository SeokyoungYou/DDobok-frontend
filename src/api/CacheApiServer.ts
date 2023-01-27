import { CACHE_NAME } from "../constants/api-constants";

export class CacheApiServer {
  private static cacheName = CACHE_NAME;

  static async getGisByQuery(color: string) {
    const url = `https://ddobok.onrender.com/api/v1/gis/?color=${color}`;
    const cache = await caches.open(this.cacheName);
    const cacheResponse = await caches.match(url);

    return cacheResponse
      ? cacheResponse.json()
      : this.getFetchResponse(cache, url);
  }

  private static async getFetchResponse(cache: Cache, url: string) {
    const fetchResponse = await fetch(url);
    cache.put(url, fetchResponse.clone());
    return fetchResponse.json();
  }
}
