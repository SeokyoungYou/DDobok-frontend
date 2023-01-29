import { CACHE_STORAGE } from "../constants/api-constants";

const BASE_URL = "https://ddobok.onrender.com/api/v1";
const HEADER_FETCH_DATE = "fetch-date";
const ONE_DAY_MILISECOND = 60 * 60 * 24 * 1000;
export class CacheApiServer {
  private static giCacheStorage = CACHE_STORAGE.GIS;
  private static brandsCacheStorage = CACHE_STORAGE.BRANDS;

  static async getGisByQuery(query: string) {
    const url = `${BASE_URL}/gis/${query}`;
    const cache = await caches.open(this.giCacheStorage);

    return await this.getValidResponse(cache, url);
  }

  static async getBrandById(id: number) {
    const url = `${BASE_URL}/brands/${id}`;
    const cache = await caches.open(this.brandsCacheStorage);

    return await this.getValidResponse(cache, url);
  }

  private static async getValidResponse(cache: Cache, url: string) {
    const cacheResponse = await caches.match(url);

    return cacheResponse && !this.isCacheExpired(cacheResponse)
      ? await cacheResponse!.json()
      : await this.getFetchResponse(cache, url);
  }

  private static isCacheExpired(cacheResponse: Response) {
    const fetchDate = new Date(
      cacheResponse.headers.get(HEADER_FETCH_DATE)!
    ).getTime();
    const today = new Date().getTime();

    return today - fetchDate > ONE_DAY_MILISECOND;
  }

  private static async getFetchResponse(cache: Cache, url: string) {
    const fetchResponse = await fetch(url);
    const newResponse = await this.getResponseWithFetchDate(fetchResponse);
    cache.put(url, newResponse);

    console.info("fetching api");
    return fetchResponse.json();
  }

  private static async getResponseWithFetchDate(fetchResponse: Response) {
    const cloneResponse = fetchResponse.clone();
    const newBody = await cloneResponse.blob();
    let newHeaders = new Headers(cloneResponse.headers);
    newHeaders.append(HEADER_FETCH_DATE, new Date().toISOString());

    return new Response(newBody, {
      status: cloneResponse.status,
      statusText: cloneResponse.statusText,
      headers: newHeaders,
    });
  }
}
