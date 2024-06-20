export interface ISearchResult<T> {
    data: T[],
    count: number,
    errors: string[],
}
