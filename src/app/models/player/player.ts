import { Char } from "../char/char";

export class Player {
    private id: string;
    private email: string;
    private char: Char;
    private hashedPass: string;

    constructor(id: string, email: string, char: Char) {
        this.id = id;
        this.email = email;
        this.char = char;
    }

    public getId(): string {
        return this.id;
    }

    public getEmail(): string {
        return this.email;
    }

    public getChar(): Char {
        return this.char;
    }

    public setHashedPass(pass: string): void {
        this.hashedPass = pass;
    }

    public getHashedPass(): string {
        return this.hashedPass;
    }
}