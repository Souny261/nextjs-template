export type PaginatedResponse<T> = {
    items: T[];
    pagination: {
        total: number;
        pagesCount: number;
        currentPage: number;
        perPage: number;
        from: number;
        to: number;
    };
};