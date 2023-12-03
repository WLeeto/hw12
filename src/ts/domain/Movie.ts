import Buyable from './Buyable';

export default class Movie implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number,
        readonly nameOriginal: string,
        readonly posterUrl: string,
        readonly year: number,
        readonly country: string,
        readonly catchphrase: string,
        readonly genre: string[],
        readonly timing: number,
        readonly many: boolean = false,
    ) { }
}