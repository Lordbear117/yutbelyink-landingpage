import Link from "next/link";
import Image from "next/image";
import {
  FlowerIcon,
  FacebookIcon,
  InstagramIcon,
  PhoneIcon,
  TwitterIcon,
  CalendarIcon,
  MailIcon,
} from "../ui/icons";

const email = "yutbely@gmail.com";
const subject = "Contacto desde YutbelyInk";
const body =
  "Hola, soy {incluye tu nombre} me gustaría ponerme en contacto contigo.";
const whatsappLink =
  "https://wa.me/526671618878?text=Hola%20%20Arlette.%20Te%20contacto%20desde%20tu%20sitio%20web%20de%20tatuajes.";
const instagramLink = "https://www.instagram.com/yutbely.ink/";

export default function mainpage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center sticky top-0 z-50 bg-white">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <FlowerIcon className="h-6 w-6" />
        </Link>
        <Link
          href="#"
          className="text-md font-medium hover:underline underline-offset-4 pl-2"
          prefetch={false}
        >
          YUTBELYINK
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#trabajos"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Trabajos
          </Link>
          <Link
            href="#sobremi"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Sobre mi
          </Link>
          <Link
            href="#contacto"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contacto
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Tatuajes de Arlette | Yutbelyink
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Descubre el arte de los tatuajes con Arlette, un talento
                    creciente en la industria. Agenda una cita hoy para
                    descubrir tu proximo tatuaje.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pb-4 pt-4">
                  <Link
                    href="#contacto"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Agendar cita
                  </Link>
                </div>
              </div>
              <div className="pt-4">
                <Image
                  src="/header-picture.png"
                  width={550}
                  height={550}
                  alt="Hero"
                  className="mx-auto aspect-video overflow-hidden rounded-full object-cover sm:w-full lg:order-last lg:aspect-square"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="trabajos" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container md:px-6 mx-auto px-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Explora los trabajos de Arlette
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hecha un vistazo a algunos de los últimos diseños de tatuajes
                  de Arlette y déjate inspirar para tu próxima pieza.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/portfolio-1.jpg"
                  width={300}
                  height={300}
                  alt="Tattoo Design 1"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center"
                />
                <Image
                  src="/portfolio-2.jpg"
                  width={300}
                  height={300}
                  alt="Tattoo Design 2"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center"
                />
                <Image
                  src="/portfolio-3.jpg"
                  width={300}
                  height={300}
                  alt="Tattoo Design 3"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center"
                />
                <Image
                  src="/portfolio-4.jpg"
                  width={300}
                  height={300}
                  alt="Tattoo Design 4"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4 pt-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Diseños Unicos</h3>
                  <p className="text-muted-foreground">
                    El portafolio de Arlette muestra su habilidad para crear
                    diseños de tatuajes únicos que capturan la esencia de las
                    visiones de sus clientes.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Atención a los Detalles</h3>
                  <p className="text-muted-foreground">
                    Cada tatuaje es meticulosamente elaborado con un ojo atento
                    a los detalles, garantizando un resultado de alta calidad y
                    duradero.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Enfoque Personalizado</h3>
                  <p className="text-muted-foreground">
                    Arlette trabaja de cerca con sus clientes para entender sus
                    preferencias y crear un diseño que refleje verdaderamente su
                    estilo individual.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="sobremi"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container md:px-6 mx-auto px-4">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Acerca del Artista
                </div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Conoce a Arlette
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Arlette es una artista emergente en la industria del tatuaje,
                  comenzando su trayectoria creativa con una perspectiva fresca
                  y una dedicación apasionada a su oficio. Está comprometida con
                  transformar las visiones de sus clientes en tatuajes
                  personalizados y sorprendentes. Con un firme compromiso con el
                  arte y la innovación, Arlette está lista para dejar su huella
                  y dar vida a diseños únicos para cada cliente que conoce.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Background
                </div>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Arlette lorem ipsum sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Especialidades
                </div>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Arlette lorem ipsum sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contacto"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6 mx-auto px-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ponte en contacto
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Tienes un diseño en mente o quieres saber más sobre los
                  servicios de Arlette? Elige alguna de las siguientes opciones
                  para ponerte en contacto.
                </p>
              </div>
              <div className="mx-auto w-full max-w-md space-y-4 pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <Link
                    target="_blank"
                    href={whatsappLink}
                    className="inline-flex items-center justify-center rounded-md bg-primary 
                    px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors 
                    hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
                    disabled:pointer-events-none disabled:opacity-50 pt-4 pb-4"
                    prefetch={false}
                  >
                    <PhoneIcon className="h-5 w-5 mr-2" />
                    WhatsApp
                  </Link>
                  <Link
                    target="_blank"
                    href={instagramLink}
                    className="inline-flex items-center justify-center rounded-md bg-primary 
                    px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors 
                    hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 
                    focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 pt-4 pb-4"
                    prefetch={false}
                  >
                    <InstagramIcon className="h-5 w-5 mr-2" />
                    Instagram
                  </Link>
                  <Link
                    href={`mailto:${email}?subject=${encodeURIComponent(
                      subject
                    )}&body=${encodeURIComponent(body)}`}
                    className="inline-flex items-center justify-center rounded-md bg-primary 
                    px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors 
                    hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
                    disabled:pointer-events-none disabled:opacity-50 pt-4 pb-4"
                    prefetch={false}
                  >
                    <MailIcon className="h-5 w-5 mr-2" />
                    Email
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary 
                    px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors 
                    hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
                    disabled:pointer-events-none disabled:opacity-50 pt-4 pb-4"
                    prefetch={false}
                  >
                    <CalendarIcon className="h-5 w-5 mr-2" />
                    Agenda una cita
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer
        id="footer"
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t"
      >
        <Link
          target="_blank"
          href="https://grizzlybyte.me/"
          className="text-xs hover:underline underline-offset-4"
          prefetch={false}
        >
          &copy; 2024 GrizzlyByte Solutions. All rights reserved.
        </Link>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#footer"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#footer"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy
          </Link>
        </nav>
        <div className="ml-auto flex gap-4 pt-2 bb-4">
          <Link
            href="#"
            className="text-muted-foreground hover:text-primary"
            prefetch={false}
          >
            <FacebookIcon className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link
            target="_blank"
            href={instagramLink}
            className="text-muted-foreground hover:text-primary"
            prefetch={false}
          >
            <InstagramIcon className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-primary"
            prefetch={false}
          >
            <TwitterIcon className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            target="_blank"
            href={whatsappLink}
            className="text-muted-foreground hover:text-primary"
            prefetch={false}
          >
            <PhoneIcon className="h-5 w-5" />
            <span className="sr-only">Whatsapp</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}
