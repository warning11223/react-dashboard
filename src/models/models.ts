export type UserRow = {
    id: number;
    username?: string;
    img?: string;
    status?: string;
    email?: string;
    age?: number;
    product?: string;
    amount?: number
    price?: number;
}

export type Inputs = {
    id: number;
    label: string;
    placeholder: string;
}