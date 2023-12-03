import Cart from './service/Cart';
import Book from './domain/Book';
import Movie from './domain/Movie';
import Phone from './domain/Phones';
import MusicAlbum from './domain/MusicAlbum';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(1009, 'Мстители', 100, 'The Avengers', '/posters/stuped_movies/Avangers.jpg', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения', 'бездарная жкранизация', 'все еще нет Камберберча'], 137))
cart.add(new Phone(2001, 'Сяоми', 10000, 'X2', true, 1))

console.log(cart.items);

console.log(cart.sumNoDiscount())
console.log(cart.sumWithDiscount(10))

cart.deleteItem(1009)
console.log(cart.items)

const temp = new Phone(2001, 'Сяоми', 10000, 'X2', true, 1)
cart.add(temp)
console.log(cart.items)

console.log(temp)


