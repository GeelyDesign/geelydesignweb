# Geely Design Dokumentation

## Sid- och mappstruktur

I rooten av sajten (där vi befinner oss just nu om du/ni läser det här), finns en fil som heter `index.md`; den här filen innehåller text och bild för den engelska startsidan. Det finns även en mapp som heter `_pages`, där resten av sidorna finns placerade i mappar. I respektive mapp finns en fil som också heter `index.md`, men som gäller för respektive sida.

`index.md`-filerna är så kallade markdown-filer, som används för att generera ut text och bild på sajten.

## Hur man ändrar i index.md-filerna

Tryck på filen i listan ovan för att komma till en ny vy. Leta upp ikonen som föreställer en penna i en ljusgrå bård. Tryck på pennan för att börja redigera filen.

När man är inne och redigerar en fil så är det egentligen bara att leta upp rätt text och byta ut den. Det som kan vara lite bökigt är galleri-sektionerna. Om man vill byta ut en bild behöver man skriva in sökvägen till bilden samt filnamnet, exempelvis `gallery/min_bild.jpg`, där `gallery` är mappnamnet och `min_bild.jpg` är namnet på filen i den mappen. Man får alltså ha koll på vilken mapp man har lagt bilden i. Se nedan för hur man laddar upp nya bilder.

### Hur man redigerar galleri-sektionerna

Galleri-sektionerna är något specifika, då dessa genereras ut med en så kallad loop.

#### Startsidan

Galleriet på startsidan är uppbyggt så här på startsidan;

```
gallery:
  images: [
    {
      image: grid/grid_02.jpg,   <-- Sökvägen till första bilden
      width: 2                   <-- Hur många kolumner första bilden ska täcka
    },
    {
      image: grid/grid_03.jpg,   <-- Sökvägen till andra bilden
      width: 1                   <-- Hur många kolumner andra bilden ska täcka
    },
  ]
```

I exemplet ovan har vi lagt in två bilder; `grid_02.jpg` och `grid_03.jpg`. Båda bilderna finns i mappen `grid`, därför står det `grid/filnamnet` ovan. Den första bilden täcker halva området, dvs två kolumner. Detta bestäms av att det står `width: 2` under sökvägen till bilden. Den andra bilden täcker endast en kolumn, då det står `width: 1` där.

För att lägga till en ny bild i galleriet behöver ni skriva in följande;

```
{
  image: mappnamn/namnet_på_din_bild.jpg   <-- Ange eventuellt mappnamn och filnamn
  width: 1 eller 2                         <-- Ange med en siffra hur många kolumner bilden ska täcka
}
```

#### Gallerisidorna

Gallerierna på galleri-sidorna är uppbygga på följande vis;

```
portfolio: [
  {
    type: image,                                        <-- Om det är bild eller citat
    image: gallery/barcelona/gallery_barcelona_01.jpg   <-- Sökvägen till bilden
  },
  {
    type: quote,                                        <-- Om det är bild eller citat
    text: 'This is some text for the quote.',           <-- Texten i citatet
    name: 'David Ancona'                                <-- Namnet på den person som citeras
  },
]
```

I exemplet ovan har vi lagt in en bild och ett citat, där bilden kommer först. Att det är en bild avgörs av att det står `type: image` först, därefter följer sökvägen till bilden. Efter bilden kommer citatet, som avgörs av `type: quote`, som följs av själva citatet och vem som citeras.

För att lägga in en ny bild i galleriet behöver ni skriva in följande;

```
{
  type: image,                             <-- Ange 'image' då det ska vara en bild
  image: mappnamn/namnet_på_din_bild.jpg   <-- Sökvägen till bilden
}
```

För att lägga till ett citat i galleriet behöver ni skriva in följande;

```
{
  type: quote,                        <-- Ange 'quote' då det ska vara ett citat
  text: 'Detta är mitt nya citat.',   <-- Ange själva citatet
  name: 'John Doe'                    <-- Namnet på personen som citeras
}
```

### När du är klar

När du är klar, skriv en kort beskrivning av vad du har gjort, exempelvis "Text changes" eller liknande i den stora textrutan. Kryssa i "Commit directly to the master branch" och tryck sedan på "Commit changes" (den stora gröna knappen). Klart!

## Hur man lägger till bilder

I rooten av sajten finns en mapp som heter **assets**. I den mappen finns ytterligare en mapp som heter **img**, och i den mappen finns alla bilder sorterade i ett nytt gäng mappar.

* **bg** - Bakgrundsbilder, exempelvis till hero-ytan
* **gallery** - Galleribilder, alla bilder till gallerisidorna
* **grid** - Gridbilder, dvs "galleriet" på startsidan
* **inline** - Övriga bilder, exempelvis de "lösa" bilderna på startsidan
* **social** - Ikoner för social media

För att lägga till en ny bild, gå in i en mapp och tryck på "Upload files" uppe till höger. Tryck på texten "Choose your files" och leta upp din bild på datorn. 

### När du är klar

När du är klar, skriv en kort beskrivning av vad du har gjort, exempelvis "Uploaded new images" i den stora textrutan. Kryssa i "Commit directly to the master branch" och tryck sedan på "Commit changes" (den stora gröna knappen). Klart!