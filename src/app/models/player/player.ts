import { Char } from "../char/char";

export class Player {
    private password: string;
    private email: string;
    private char: Char;

    constructor(email: string, password: string, char: Char) {
        this.email = email;
        this.password = password;
        this.char = char;
    }

    public getEmail(): string {
        return this.email;
    }

    public getPassword(): string {
        return this.password;
    }

    public getChar(): Char {
        return this.char;
    }
}