# Produktbilder för Uppgift 2

Denna mapp innehåller produktbilder organiserade i olika teman. Välj **ett** set att arbeta med.

## Tillgängliga produktset

| Mapp | Tema | Antal bilder |
|------|------|--------------|
| `set-a-electronics/` | Elektronik | 10 bilder |
| `set-b-clothing/` | Kläder | 10 bilder |
| `set-c-books/` | Böcker | 10 bilder |
| `set-d-furniture/` | Möbler | 10 bilder |
| `set-e-sports/` | Sport | 10 bilder |

## Bildnamn

Bilderna i varje set är namngivna enligt mönstret `product-01.jpg`, `product-02.jpg`, osv.

## Exempeldata

I varje mapp finns även en `products-sample.json` fil med exempeldata för produkterna.
Du kan använda denna som utgångspunkt för din egen datastruktur, men du **måste** anpassa och utöka den.

## Alternativ: Placeholder-bilder

Om du föredrar att inte ladda ner bilder kan du använda placeholder-tjänster:

- [Picsum Photos](https://picsum.photos/) - `https://picsum.photos/300/200` för slumpmässiga bilder
- [Placeholder.com](https://placeholder.com/) - `https://via.placeholder.com/300x200` för färgade platshållare
- [Lorem Flickr](https://loremflickr.com/) - `https://loremflickr.com/300/200/electronics` för tematiska bilder

Exempel med Lorem Flickr:
```javascript
const products = [
  {
    id: 1,
    name: "Smartphone X",
    image: "https://loremflickr.com/300/200/smartphone"
  }
];
```
