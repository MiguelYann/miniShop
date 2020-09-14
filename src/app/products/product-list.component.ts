import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle: string;
  _filterText: string;
  isShowImage: boolean;
  filteredProducts: IProduct[];
  initialProducts: IProduct[];
  totalRating: number;

  constructor() {
    this.pageTitle = 'Liste des produits';
    this.totalRating = 0;
    this.initialProducts = [
      {
        code: '11-XZY',
        productName: 'iPhone 11',
        releaseDate: '12/12/2020',
        price: 1250,
        starRating: 5,
        image:
          'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJ8AnwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQMEBQcCBgj/xABDEAABAwICBQcKAwYGAwAAAAABAAIDBBEFIQYSMTJxBxNBUWGBkRQiNFJUc5OhsdEVN5IzQmJyosEjNUNTdPAWFyf/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIEBQMG/8QAJREBAAICAQQBBAMAAAAAAAAAAAECAxEEBRIhMjETIjNhQVGh/9oADAMBAAIRAxEAPwDcUIQgFAdJLUl3NyGOAHfG1/DsUitc5lHO5mTgw2t12VFphWzYNojiNbQtHPUtI58YIuAQMr9iiRZing2GacuPQZnfS66FHCdpn+K77r5YZpVjMJbXOxGZ9Rra2s6Qkk57Rst919LaO4lU12jsNc6nJqHRNdzRNiSQDb5pMaFmKGE7HzfFf90vkEXrzfFf912xznRxyPYWPIBLTnq9ikKIET8Ph9eb4r/ul8gh9ab4r/upaFIh/h8PrzfGf91Gq8IEjHGCpqonkZETuNu4lWqQoMI010x0n0Oxg0FY4yxvGtBO0utI3x2jpVA7ldxtji1wcCNo1j91qvKtopT6TxUEcs76d0Ty4PY0E7Nmaz08kVGTc4vUknpMQzXpTHa0eHlfNSs6mSYTp/phjMUkuGUUtQyNwa5zXZA9WblKm0207oWGafCKh0bM3HM5dzivUaO6PUmjmF+RUZe8F5fJI/ee42F/kFLlbbYveONEx5Zb82YtqI8J3J1p/TaW0xDwYaqPKSJ3R2jrC9z0rAtGYW4Zyn1UdJ/hslYJNRoyBIN/6gHdy31pussx22mG2tu6sSVCEIsEIQgjYgS2inLTYiM2K5mhjqInQzMa6KRhDmuzBBS4l6BUe7Ko9OZa2n0QxSbDS8VbKR7oyzeBttHaokeKHJnoRFj2s2tu8OuKF04LGnbs292xaXHG2jpGMpA3VFhdfIusYg2rgmk8pDtZkgPna3Qb7br6t0RfUS4BSPrW2ndE0vB6HEZ/O6WjRErGF73xkyAZG1x0qYEw7qHSnwqwBCEKwEhSpEFBpKXa1O2+RJuFThtwrvSL9pTjiqsNyzW3jz9rn8n3R3tyUWVinvAUeRq0Msw8Fhx1eVKYg2Ip2f3W7svqi+2ywik/NOe3s7P7rd27reC5uT3l1cP44dIQhVeoQhCCJipIw+oIbfzCE5qB8YBHQm8V/wAuqP5E8zdHBVkeYboDo2zEvxBmEUranW1w4NyDusDYvSRRGNoY0NDRsCcSjaoSRrDcFxC7QhSgISIUhUiEKBSaQ78B6gVWFWWkVucpxfbdVi3cf0c/k/kcnNNSN826eTNQTqard52Te9aGbTP6QH/2jIbb1Mw93nLdYna0bDa12grEgwR8rEsbdjaWIDwK22H9kz+ULmX95dXFGqQ7QhCh6BCEIIeK3/Dqi2fmHJPt3W8E1iXoFR7sp1u63gqyFSpEKEughIlUoCEqEAgoSKBR6SEAwnpzVSXjrVrpJT+Uy07dcstrG4F1XswuIb8kr+zWsFtwWitfLDyKWm/hHdM0ENF3POxoCk0tM7X56cWcN1nV28VIhhigFomBnX1nvThKtbJM/ClcevMsxfccrlTb2eP+62yC4ij1siGi4WKSfmzL20zPq4LbW7reCyW9pb6esOkIQoWCEIQRcS9AqPdlOt3W8E1iXoFR7sp1p81vBVkCEIUJF8wumuByBFxkqrSesmoNH8Rq6Y2mhp3vYfVIG3u29y8DyWaQO/FpsNqpS/ysGRhe4k6427esfRTEIapdCOhIoSEIQgq8Y9Jp+BUO4UrGnBs9OXZZOUMyRgZuC0Y/hmyz5dEhcuITZqIQc5G+KR1RDqm0jdnWvR5bZ0781n/8Rn1cttZujgsTmaWcqzmuFneRQ3HcVtjd1vBZp9myvw6QhCJCEIQRcS9AqPdlODdam8S9AqPdlODdaqyFQhChJqqgiqqaWnqGa8MrHMkaelpFj8isep+TzSXDcdEuHvgdFTSc5BPJNql4GwEW222rZTtSWSEFge98LHSs1HloLm3vYpxctK6RJEIQUQo9JJKeOam8qLQw61i4XzUCOXDTmJabvFvqmeUZ2rBSW9Y/ReGc8kZm65PL6jm4+aaV1p2eF0rHycX1LT5aTHLSOyjlpj2Nc1PtY11i0A/NZU6x6F1HLLE7WhkfG7rY4gqlOs79qtFugRr7b/4fr/zfm6T5JFn4rZ27reCwyllln5SY5ahxdK+ghLidp3rHwt4rc27reC7NLd0RLgXr2Wmv9OkIQrqhCEIIuJegVHuynButTeJegVHuynBut4KshSkuhChIQhCAC7XC6aUCoKLpCiHjOUkgU1Hf1j9F4O4J2rRdOcNnxOKkipywODiTrG2S8v8A+HYkTbXpxxefsuHz+NlyZt1ruH0/S+VgxcftvaInaiUzCqB+IVsUDWuLXO88tGwdKuYNDKoZ1FZGAP3Y2kk95XrcDw+hw6mPkoJeB/iOfv8AeqcfpeWbxN41D05nV8Ncc1xTuZZpU6jeVp7YxZoo4mtbbdsCLLam7reCxOVwfyryubsNMw/1PW2N3W8F9BEa8PlZnc7dIQhWQEIQgi4l6BUe7K7G63guMS9AqPdldjY0dirIVCEKEhCEIBAQhAqEgS3Qec0wxUYO2lqHU8k4c4s1YrXHbmqGHTrC3uAqGVFMT/uR3HiFfaXxc82kHUXFeUnoG2ILGniFtwYcdqbn5bsGDHkpu3y9RQ4rRV7Neiqopm/wOBI7lxjDnijkdSlwnewsGrtIP/brwNTg0TJRNTa1PM03D4svEbCvS6J43HJVtw7FIYo611+ZmY0BtQOrsd9VXLx+3zEvPNxpp5ifDycYA5UCGiwbSRgcLuW4t3W8Fh1//rdUButgjHyK3Fu63gs38sjpCEKQIQhBFxL0Co92V2NjT2JK8a1HO0kNBYRc9CUbBwVZCoQhQkIQhAIQkQKhIi6Cm0jFzTd6qHxhw2K00oeGMpnlwGZFutUoqQQtvHn7W7j+iPVU2Wy68/i1IXREscWSsIcx42tcMwfFeodK120qvro2vY6y99tEzuNS8Zg1cMS5R3VdgJJKZnOtH7rxrBw8Vvzd1vBfPejELYuUmdos0GNpJ8V9CM3RwXPv4vOnKvGrS6QhChUIQhAzVR89TSxja9hb4hN00gmhY8dIzHUepSlClp3teZKVzQXZujduu7ewqJD6FDE1aCQaE8RK1Lz1Z7EfiNVdJSkKLz1Z7EfiNSGes9hd8Rv3TQloUTn6v2F3xWpeeq/YXfFamhKQovP1fsLvitUaqmxZzXNpqJjDbJ75QbdyaFJprWRipp6YPaHNBcbmxF9i82axjdsrP1BcYvyXT41iEuIYpNJPUy7zi8WHYBfIdihnkZgPQ79Q+60UyxWNae9M3ZGtJhxOMf6rP1BNVWMUsMLnz1MUbBtLnDJRzyMQ/wAX6h90jORWlfI0SyStZfMtc3L5q31/0meT+lJyc6+P6eVWIU7HeTN80Ejo1SB4k34Ar6EaLZDoVBonothujFGKfDoGxjaSMyT1k9JXoF4TO52zzO52EIQiH//Z',
      },

      {
        code: '10-JDL',
        productName: 'iPhone 10',
        releaseDate: '12/12/2016',
        price: 750,
        starRating: 3,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcStNv5ZIhaY8Hs4e9XvI-MLW962L9paIgHapy81qr62NjARV2sjTPESV-S0BQPDXb1fnlPU4Ak&usqp=CAc',
      },
    ];

    this.filteredProducts = this.initialProducts;
  }

  get filterText() {
    return this._filterText;
  }

  set filterText(valueOfFilter: string) {
    this._filterText = valueOfFilter;
    this.filteredProducts = this.filterProductsBy(valueOfFilter);
  }

  ngOnInit(): void {
    console.log('On init');
  }

  filterProductsBy(value: string): IProduct[] {
    return this.initialProducts.filter((product: IProduct) =>
      product.productName.includes(value)
    );
  }

  toggleShowImage(): void {
    this.isShowImage = !this.isShowImage;
  }

  receive(result: number) : void {
    this.totalRating = result;
  }
}
