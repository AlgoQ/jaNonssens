import Image from 'next/future/image'

import painting1 from '@/images/paintings/painting_001.jpg'
import painting2 from '@/images/paintings/painting_002.jpg'
import painting3 from '@/images/paintings/painting_003.jpg'
import painting4 from '@/images/paintings/painting_004.jpg'
import painting5 from '@/images/paintings/painting_005.jpg'
import painting6 from '@/images/paintings/painting_006.jpg'
import painting8 from '@/images/paintings/painting_008.jpg'
import painting9 from '@/images/paintings/painting_009.jpg'
import painting10 from '@/images/paintings/painting_010.jpg'
import painting11 from '@/images/paintings/painting_011.jpg'
import painting12 from '@/images/paintings/painting_012.jpg'
import painting13 from '@/images/paintings/painting_013.jpg'
import painting14 from '@/images/paintings/painting_014.jpg'
import painting15 from '@/images/paintings/painting_015.jpg'
import painting16 from '@/images/paintings/painting_016.jpg'
import painting17 from '@/images/paintings/painting_017.jpg'
import painting18 from '@/images/paintings/painting_018.jpg'
import painting19 from '@/images/paintings/painting_019.jpg'
import painting20 from '@/images/paintings/painting_020.jpg'
import painting21 from '@/images/paintings/painting_021.jpg'

const themes = [
    {
      title: 'Vlaamse Ardennen',
      description: 'De Vlaamse Ardennen en haar natuur zijn een ideale omgeving om een spel van kleuren, vormen, licht en contrasten op te bouwen. Een zonsondergang in de straat, het ochtendgloren in de vallei, een rij knoestige populieren in het herfstlicht, het zijn dankbare onderwerpen.',
      paintings: [
        {
          title: 'Na regen komt zonneschijn',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
          uploadDate: '2022-11-09',
          imageUrl: painting3,
          alt: 'Na regen komt zonneschijn'
        },
        {
          title: 'Avondgloren',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
          uploadDate: '2022-11-09',
          imageUrl: painting4,
          alt: 'Avondgloren'
        },
        {
          title: 'Goud in de mond',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
          uploadDate: '2022-11-09',
          imageUrl: painting5,
          alt: 'Goud in de mond'
        },
      ]
    },
    {
      
      title: 'Noordzee',
      description: 'Net als heel wat andere schilders heeft onze Noordzee ook op mij een grote aantrekkingskracht. Het blijft een enorme uitdaging om die fascinatie op doek vast te leggen.',
      paintings: [
        {
          title: 'Zonsondergang',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
          uploadDate: '2022-11-09',
          imageUrl: painting6,
          alt: 'Zonsondergang'
        },
        {
          title: 'Woelig',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
          uploadDate: '2022-11-09',
          imageUrl: painting8,
          alt: 'Woelig'
        }
      ]
    },
    {
      title: 'Metaalbekken Charleroi',
      description: 'In een aantal schilderijen heb ik het verdwijnende landschap in het metaalbekken van Charleroi willen vastleggen. Heel wat van de gemaakte beelden van La Providence, langsheen de Samber, zijn ondertussen verdwenen.',
      paintings: [
        {
          title: 'La providence 1',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
          uploadDate: '2022-11-09',
          imageUrl: painting15,
          alt: 'La providence 1'
        },
        {
          title: 'La providence 2',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
          uploadDate: '2022-11-09',
          imageUrl: painting16,
          alt: 'La providence 2'
        },
        {
          title: 'La providence 3',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
          uploadDate: '2022-11-09',
          imageUrl: painting17,
          alt: 'La providence 3'
        },
        {
          title: 'La providence 4',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
          uploadDate: '2022-11-09',
          imageUrl: painting18,
          alt: 'La providence 4'
        },
        {
          title: 'La providence 5',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
          uploadDate: '2022-11-09',
          imageUrl: painting19,
          alt: 'La providence 5'
        },
        {
          title: 'Pays Blanc',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
          uploadDate: '2022-11-09',
          imageUrl: painting20,
          alt: 'Pays Blanc'
        },
        {
          title: 'Cement',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
          uploadDate: '2022-11-09',
          imageUrl: painting21,
          alt: 'Cement'
        },
      ]
    },
    {
      title: 'Treinzicht',
      description: 'Soms hoef ik het niet ver te zoeken, een alledaags beeld dat een treinpendelaar voorbij ziet flitsen, kan een inspiratie zijn om mee aan de slag te gaan.',
      paintings: [
        {
          title: 'Treinzicht 1',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
          uploadDate: '2022-11-09',
          imageUrl: painting13,
          alt: 'Treinzicht 1'
        },
        {
          title: 'Treinzicht 2',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
          uploadDate: '2022-11-09',
          imageUrl: painting14,
          alt: 'Treinzicht 2'
        },
      ]
    },
    {
      title:'Sociale & Maatschappelijke thema’s',
      description: 'In een reeks van 4 schilderijen met een dorpsgezicht van Pourville wil ik met een spel van vlakken, kleuren en lijnen de urgentie van onze klimaatsverandering onder de aandacht brengen.',
      paintings: [
        {
          title: 'Pourville sous mer 1',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
          uploadDate: '2022-11-09',
          imageUrl: painting9,
          alt: 'Pourville sous mer 1'
        },
        {
          title: 'Pourville sous mer 2',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
          uploadDate: '2022-11-09',
          imageUrl: painting10,
          alt: 'Pourville sous mer 2'
        },
        {
          title: 'Pourville sous mer 3',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
          uploadDate: '2022-11-09',
          imageUrl: painting11,
          alt: 'Pourville sous mer 3'
        },
        {
          title: 'Pourville sous mer 4',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
          uploadDate: '2022-11-09',
          imageUrl: painting12,
          alt: 'Pourville sous mer 4'
        }
      ]
    },
    {
      title: 'Vluchtelingen Crisis',
      description: 'De schrijnende vluchtelingencrisis en de waanzin van een, nog maar eens, verscheurende oorlog lieten me niet onberoerd.',
      paintings: [
        {
          title: 'Voor het vaderland',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
          uploadDate: '2022-11-09',
          imageUrl: painting1,
          alt: 'Voor het vaderland'
        },
        {
          title: 'Op de vlucht',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
          uploadDate: '2022-11-09',
          imageUrl: painting2,
          alt: 'Op de vlucht'
        },
      ]
    },
]
  
export const Content = () => {
return (
    <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28" id="content">
    <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
    </div>
    <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-3xl">Ja Nonssens Op Doek</h2>
        </div>
        
        {themes.map((theme, themeIndex) => (
          <div key={theme.title}>
            <div  className="text-center">
              <h2 className="mt-8 text-3xl font-bold tracking-tight text-gray-700 sm:text-2xl">{theme.title}</h2>
              <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">{theme.description}</p>
            </div>
            <div className="mx-auto mt-8 grid max-w-lg gap-10 lg:max-w-none lg:grid-cols-2">
            {themes[themeIndex]['paintings'].map((painting) => (
            <div key={painting.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="relative item-detail">
                  <Image
                    src={painting.imageUrl}
                    alt={painting.alt}
                    layout={'fill'}
                    objectFit={'contain'}
                    className="h-50 w-full object-cover priority"
                  />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                  
                      <p className="text-xl font-semibold text-gray-900">{painting.title}</p>
                      {/* <p className="mt-3 text-base text-gray-500">{painting.description}</p> */}
                  </div>
                  <div className="mt-6 flex items-center">
                </div>
              </div>
            </div>
            ))}
            </div>
          </div>
        ))}
        
        {/* {paintings.map((painting) => (
          
        ))}
         */}
        
        
    </div>
    </div>
)
}

function App() {
  
}