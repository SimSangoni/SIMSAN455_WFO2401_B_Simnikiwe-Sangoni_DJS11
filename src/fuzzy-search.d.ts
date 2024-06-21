declare module 'fuzzy-search' {
    interface Options {
      caseSensitive?: boolean;
      sort?: boolean;
    }
  
    class FuzzySearch<T> {
      constructor(haystack: T[], keys?: string[], options?: Options);
      search(needle: string): T[];
    }
  
    export = FuzzySearch;
  }
  