# Geely Design Dokumentation

## Sid- och mappstruktur

I roten av sajten (där vi befinner oss just nu om du/ni läser det här), finns en fil som heter `index.md`; den här filen innehåller text och bild för den engelska startsidan. Det finns även en mapp som heter `_pages`, där resten av sidorna finns placerade i mappar. I respektive mapp finns en fil som också heter `index.md`, men som gäller för respektive sida.

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

I roten av sajten finns en mapp som heter **assets**. I den mappen finns ytterligare en mapp som heter **img**, och i den mappen finns alla bilder sorterade i ett nytt gäng mappar.

* **bg** - Bakgrundsbilder, exempelvis till hero-ytan
* **gallery** - Galleribilder, alla bilder till gallerisidorna
* **grid** - Gridbilder, dvs "galleriet" på startsidan
* **inline** - Övriga bilder, exempelvis de "lösa" bilderna på startsidan
* **social** - Ikoner för social media

För att lägga till en ny bild, gå in i en mapp och tryck på "Upload files" uppe till höger. Tryck på texten "Choose your files" och leta upp din bild på datorn. 

### När du är klar

När du är klar, skriv en kort beskrivning av vad du har gjort, exempelvis "Uploaded new images" i den stora textrutan. Kryssa i "Commit directly to the master branch" och tryck sedan på "Commit changes" (den stora gröna knappen). Klart!

## Hur man ändrar generella saker på sajten

I roten av sajten finns en fil som heter `_config.yml`. I denna fil finns mer globala inställningar för sajten, exempelvis adresser i sidfoten, text som visas vid delning på social media etc.

### Sidhuvudet/hero-ytan

För att ändra bilden i sidhuvudet/hero-ytan, leta upp `header` i `_config.yml`;

```
header:
  image: bg/bg_04.jpg            <-- Sökvägen till hero-bilden
```

I exempel ovan ser ni att det står `image` under `header`. Här anger ni sökvägen till hero-bilden. Som ni ser ligger den bilden i mappen **bg**, som finns i **assets/img**.

### Social media

För att ändra länkarna till Facebook, WeChat och LinkedIn, leta upp `footer` i `_config.yml`;

```
footer:
  social:
    facebook: ''
    linkedin: https://www.linkedin.com/company/geely-design-global
    wechat: http://mp.weixin.qq.com/s/d56hYo3uYwQxJ1N5CGSz-A
```

I exemplet ovan ser vi att under `footer` finns `social`, och under den finns respektive social media. Här räcker det att klistra in rätt länk till rätt social media.

## Hur man lägger till social media-ikoner på sajten

I roten av sajten finns en mapp som heter `_includes`, och i den mappen finns en fil som heter `footer.html`. Längst ned i den filen finns följande kod;

```
<!--                                                       <!-- Här börjar kommentaren
<li class="wechat">
    <a href="{{ site.footer.social.wechat }}"></a>
</li>                                                      Allting mellan dessa två tecken är
<li class="facebook">                                      utkommenterat och syns inte på sajten
    <a href="{{ site.footer.social.facebook }}"></a>
</li>
-->                                                        <!-- Här slutar kommentaren
<li class="linkedin">
    <a href="{{ site.footer.social.linkedin }}"></a>       <!-- LinkedIn syns på sajten
</li>
```

I detta fallet är WeChat och Facebook utkommenterade då det står `<!--` och `-->` runt dessa. Här är det egentligen bara att placera dessa tecken runt de ikoner som **inte** ska synas. Länkarna för respektive social media ändrar ni som sagt i `_config-yml`, se exempel ovan.
