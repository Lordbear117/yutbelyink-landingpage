import Link from "next/link"
import { JSX, SVGProps } from "react"

  const email = 'blackyi14343@gmail.com';
  const subject = 'Contacto desde YutbelyInk';
  const body = 'Hola, soy {incluye tu nombre} me gustaría ponerme en contacto contigo.';

export default function mainpage() {
  return (
    
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center sticky top-0 z-50 bg-white">
      <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <FlowerIcon className="h-6 w-6" />
        </Link>
        <Link href="#" className="text-md font-medium hover:underline underline-offset-4 pl-2 font-bold" prefetch={false}>
            YUTBELYINK
          </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#hero" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Trabajos
          </Link>
          <Link href="#acerca" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Sobre mi
          </Link>
          <Link href="#contacto" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contacto
          </Link>
        </nav>
        {/* <div className="ml-4 flex gap-4">
          <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
            <FacebookIcon className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link target="_blank" href="https://www.instagram.com/yutbely.ink/" className="text-muted-foreground hover:text-primary" prefetch={false}>
            <InstagramIcon className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
            <TwitterIcon className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link target="_blank" href="https://wa.me/526671618878?text=Hola,%20soy%20Arlette.%20Enviame%20un%20mensaje." className="text-muted-foreground hover:text-primary" prefetch={false}>
            <PhoneIcon className="h-5 w-5" />
            <span className="sr-only">Whatsapp</span>
          </Link>
        </div> */}
      </header>
      
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Tatuajes de Arlette | Yutbelyink
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Descubre el arte de los tatuajes con Arlette, un talento creciente en la industria. Agenda una cita hoy para 
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
              <img
                src="/header-picture.jpg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-full object-cover sm:w-full lg:order-last lg:aspect-square "
              />
              </div>
            </div>
          </div>
        </section>
        <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explora los trabajos de Arlette</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hecha un vistazo a algunos de los últimos diseños de tatuajes de Arlette y déjate inspirar para tu próxima pieza.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/portfolio-1.jpg"
                  width="300"
                  height="300"
                  alt="Tattoo Design 1"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center"
                />
                <img
                  src="/portfolio-2.jpg"
                  width="300"
                  height="300"
                  alt="Tattoo Design 2"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center"
                />
                <img
                  src="/portfolio-3.jpg"
                  width="300"
                  height="300"
                  alt="Tattoo Design 3"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center"
                />
                <img
                  src="/portfolio-4.jpg"
                  width="300"
                  height="300"
                  alt="Tattoo Design 4"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4 pt-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Diseños Unicos</h3>
                  <p className="text-muted-foreground">
                    El portafolio de Arlette muestra su habilidad para crear diseños de tatuajes únicos que capturan 
                    la esencia de las visiones de sus clientes.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Atención a los Detalles</h3>
                  <p className="text-muted-foreground">
                    Cada tatuaje es meticulosamente elaborado con un ojo atento a los detalles, 
                    garantizando un resultado de alta calidad y duradero.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Enfoque Personalizado</h3>
                  <p className="text-muted-foreground">
                    Arlette trabaja de cerca con sus clientes para entender sus preferencias y 
                    crear un diseño que refleje verdaderamente su estilo individual.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </section>
        <section id="acerca" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Acerca del Artista</div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Conoce a Arlette
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Arlette es una artista emergente en la industria del tatuaje, comenzando su trayectoria creativa con una 
                perspectiva fresca y una dedicación apasionada a su oficio. Está comprometida con transformar las visiones de 
                sus clientes en tatuajes personalizados y sorprendentes. Con un firme compromiso con el arte y la innovación, 
                Arlette está lista para dejar su huella y dar vida a diseños únicos para cada cliente que conoce.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Background</div>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Arlette lorem ipsum sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Especialidades</div>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Arlette lorem ipsum sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </section>
       
        <section id="contacto" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ponte en contacto</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Tienes un diseño en mente o quieres saber más sobre los servicios de Arlette? 
                Elige alguna de las siguientes opciones para ponerte en contacto.
                </p>
              </div>
              <div className="mx-auto w-full max-w-md space-y-4 pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <Link
                    target="_blank" href="https://wa.me/526671618878?text=Hola,%20soy%20Arlette.%20Enviame%20un%20mensaje."
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
                    target="_blank" href="https://www.instagram.com/yutbely.ink/"
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
                    href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
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
      <footer id="footer" className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <Link target="_blank" href="https://grizzlybyte.me/" className="text-xs hover:underline underline-offset-4" prefetch={false}>
        &copy; 2024 GrizzlyByte Solutions. All rights reserved.
          </Link>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#footer" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#footer" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
        <div className="ml-auto flex gap-4 pt-2 bb-4">
          <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
            <FacebookIcon className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link target="_blank" href="https://www.instagram.com/yutbely.ink/" className="text-muted-foreground hover:text-primary" prefetch={false}>
            <InstagramIcon className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
            <TwitterIcon className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link target="_blank" href="https://wa.me/526671618878?text=Hola,%20soy%20Arlette.%20Enviame%20un%20mensaje." className="text-muted-foreground hover:text-primary" prefetch={false}>
            <PhoneIcon className="h-5 w-5" />
            <span className="sr-only">Whatsapp</span>
          </Link>
        </div>
      </footer>
      {/* <div className="fixed bottom-6 right-6">
        <Link
          href="#"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          <ArrowUpIcon className="h-6 w-6" />
          <span className="sr-only">Scroll to top</span>
        </Link>
      </div> */}
    </div>
  )
}

function FlowerIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5" />
      <path d="M12 7.5V9" />
      <path d="M7.5 12H9" />
      <path d="M16.5 12H15" />
      <path d="M12 16.5V15" />
      <path d="m8 8 1.88 1.88" />
      <path d="M14.12 9.88 16 8" />
      <path d="m8 16 1.88-1.88" />
      <path d="M14.12 14.12 16 16" />
    </svg>
  )
}

function FacebookIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function PhoneIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function TwitterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function ArrowUpIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  )
}

function CalendarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}

function MailIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}
