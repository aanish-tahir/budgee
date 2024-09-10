import { v4 as uuidv4 } from "uuid";

export function currencyFormat(num: number) {
    return "PKR " + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export function generateRandomUserId(): string {
    return uuidv4();
}
