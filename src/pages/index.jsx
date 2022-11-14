import Image from 'next/future/image'
import Head from 'next/head'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { Content } from '@/components/Content'
import image1 from '@/images/paintings/painting_003.jpg'
import image2 from '@/images/paintings/painting_004.jpg'
import image3 from '@/images/paintings/painting_006.jpg'
import image4 from '@/images/paintings/painting_015.jpg'
import image5 from '@/images/paintings/painting_020.jpg'
import Contact from '@/components/Contact'

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Ja Nonssens
        </title>
        <meta
          name="description"
          content="Ik ben Ja Nonssens. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." // TODO: Change
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Ja Nonssens - Schilder
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Mijn schilderijen, tekeningen en schetsen zijn herinneringen die ik tracht vast te houden.
          </p>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Tal van plaatsen verliet ik onverzadigd omdat ik het daarbij horende gevoel terug moest loslaten. Foto’s konden me niet van dat gebrek verlossen. Met die beelden kon ik de beleving van daar ter plaatse niet vatten.
          </p>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Door te schetsen, tekenen en schilderen kan ik dat ontbrekende gevoel beter invullen. Met een grote voorkeur maak ik voorbereidende schetsen ter plaatse.
          </p>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          De verwondering over het kleurenspektakel en het lichtspel in de natuur en het landschap staan vaak centraal in mijn werken. Het variërende landschap geef ik in verschillende schilderijen weer.
          </p>
        </div>
      </Container>
      <Photos />
      <Content />
      <Contact />
    </>
  )
}