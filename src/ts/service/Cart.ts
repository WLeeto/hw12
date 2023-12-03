import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        if (item.many) {
            const existingItem = this._items.find((stuff) => stuff.id === item.id)
            if (existingItem && existingItem.amount) {
                existingItem.amount += 1
            } else {
                this._items.push(item)
            }
        } else {
            this._items.push(item);
        }
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    sumNoDiscount(): number {
        const fieldToSum = 'price'
        let sum = this._items.reduce(function (accumulator, currentValue) {
            return accumulator + Number(currentValue[fieldToSum])
        }, 0)
        return sum
    }

    sumWithDiscount(discount: number): number {
        const fieldToSum = 'price'
        let sum = this._items.reduce(function (accumulator, currentValue) {
            return accumulator + Number(currentValue[fieldToSum])
        }, 0)
        return sum - sum * discount / 100
    }

    deleteItem(itemId: number): void {
        const existingItem = this._items.find((stuff) => stuff.id === itemId)
        if (existingItem && existingItem.many == false) {
            this._items = this._items.filter(function(obj){
                return obj.id !== itemId
            })
        } else if (existingItem && existingItem.amount) {
            existingItem.amount -= 1
            if (existingItem.amount == 0) {
                this._items = this._items.filter(function(obj){
                    return obj.id !== itemId
                })
            }
        }
    }
}