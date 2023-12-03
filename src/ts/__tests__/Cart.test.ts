import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';
import Phone from '../domain/Phones';


test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('add new item to card', () => {
  const cart = new Cart()
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225))

  expect(cart.items.length).toBe(1)
})

test('summuring prices without discount', () => {
  const cart = new Cart()
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225))
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900))
  const priceSum = cart.sumNoDiscount()

  expect(priceSum).toBe(2900)
})

test('summuring prices with discount', () => {
  const cart = new Cart()
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225))
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900))
  const priceSum = cart.sumWithDiscount(10)

  expect(priceSum).toBe(2610)
})

test('deleting item from cart', () => {
  const cart = new Cart()
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1009, 'Мстители', 100, 'The Avengers', '/posters/stuped_movies/Avangers.jpg', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения', 'бездарная жкранизация', 'все еще нет Камберберча'], 137))
  cart.deleteItem(1009)
  
  expect(cart.items.length).toBe(2)
  expect(cart.items).toEqual([
    new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225),
    new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900),
  ])
})

test('add stuff with many true', () => {
  const cart = new Cart()
  cart.add(new Phone(2001, 'Сяоми', 10000, 'X2', true, 1))

  expect(cart.items).toEqual([
    new Phone(2001, 'Сяоми', 10000, 'X2', true, 1)
  ])
})

test('add more than one stuff with many true', () => {
  const cart = new Cart()
  cart.add(new Phone(2001, 'Сяоми', 10000, 'X2', true, 1))
  cart.add(new Phone(2001, 'Сяоми', 10000, 'X2', true, 1))

  expect(cart.items).toEqual([
    new Phone(2001, 'Сяоми', 10000, 'X2', true, 2)
  ])
})

test ('delete item with many true', () => {
  const cart = new Cart()
  cart.add(new Phone(2001, 'Сяоми', 10000, 'X2', true, 1))
  cart.add(new Phone(2001, 'Сяоми', 10000, 'X2', true, 1))
  cart.deleteItem(2001)

  expect(cart.items).toEqual([
    new Phone(2001, 'Сяоми', 10000, 'X2', true, 1)
  ])

  cart.deleteItem(2001)
  expect(cart.items).toEqual([])
})