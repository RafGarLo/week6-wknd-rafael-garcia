export interface Repository<P> {
    getAll: () => Promise<Array<P>>;
    get?: (id: number) => Promise<P>;
    create: (item: Partial<P>) => Promise<P>;
    update: (item: Partial<P>) => Promise<P>;
    delete: (id: number) => Promise<void>;
}
