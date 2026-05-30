import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Church,
  GraduationCap,
  HeartHandshake,
  MessageCircle,
  Plane,
  ShieldCheck,
  Users,
} from "lucide-react";

const benefits = [
  {
    icon: GraduationCap,
    title: "Escolas e universidades",
    text: "Ajuda para encontrar programas nos EUA com boa estrutura academica e ambiente acolhedor.",
  },
  {
    icon: Church,
    title: "Vida crista",
    text: "Conexao com igrejas, capelas, grupos de jovens e comunidades de fe durante a experiencia.",
  },
  {
    icon: ShieldCheck,
    title: "Orientacao segura",
    text: "Apoio com documentos, visto, moradia, seguro, preparacao cultural e chegada ao campus.",
  },
];

const steps = [
  "Entendemos seu perfil, idade, objetivo e nivel de ingles.",
  "Selecionamos opcoes de programa, cidade e instituicao.",
  "Organizamos aplicacao, visto, custos e plano de embarque.",
  "Acompanhamos a chegada e a adaptacao nos primeiros dias.",
];

const highlights = [
  "Programas para ferias, ensino medio, college e universidade",
  "Comunidade crista e rotina de discipulado",
  "Preparacao para jovens e familia antes do embarque",
  "Suporte para estudar ingles e viver a cultura americana",
];

const faqs = [
  {
    question: "Preciso falar ingles fluente?",
    answer:
      "Nao. Existem opcoes para diferentes niveis, inclusive programas com foco em desenvolvimento do ingles.",
  },
  {
    question: "O programa e so para universitarios?",
    answer:
      "Nao. A proposta pode atender jovens em diferentes fases, desde experiencias curtas ate estudos academicos.",
  },
  {
    question: "Como comeco?",
    answer:
      "Envie uma mensagem contando idade, objetivo, prazo e cidade de interesse. A primeira conversa organiza o caminho.",
  },
];

export default function Home() {
  return (
    <main className="bg-[#F7FAF8] text-[#10201B]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-[#10201B]/88 px-5 py-4 text-white backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-3 font-semibold">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#F6B17A] text-[#10201B]">
              <Plane size={20} />
            </span>
            Intercambio Cristao EUA
          </a>
          <div className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <a className="hover:text-[#F6B17A]" href="#como-funciona">
              Como funciona
            </a>
            <a className="hover:text-[#F6B17A]" href="#programas">
              Programas
            </a>
            <a className="hover:text-[#F6B17A]" href="#duvidas">
              Duvidas
            </a>
          </div>
          <a
            className="inline-flex items-center gap-2 rounded-lg bg-[#F6B17A] px-4 py-2 text-sm font-bold text-[#10201B] transition hover:bg-[#FFD0A6]"
            href="#contato"
          >
            <MessageCircle size={17} />
            Conversar
          </a>
        </nav>
      </header>

      <section className="relative min-h-[92vh] overflow-hidden bg-[#10201B] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2200&q=85')",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,32,27,0.96),rgba(16,32,27,0.76),rgba(16,32,27,0.32))]" />

        <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-end px-5 pb-12 pt-32 sm:pb-16">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FFD0A6]">
              <HeartHandshake size={16} />
              Para jovens cristaos
            </div>
            <h1 className="text-4xl font-bold leading-[1.05] tracking-normal sm:text-6xl">
              Intercambio nos Estados Unidos com fe, estudo e proposito.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
              Ajudamos jovens cristaos e suas familias a planejarem uma
              experiencia segura nos EUA, conectando estudo, ingles, comunidade
              crista e vida no campus.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#F6B17A] px-6 py-4 text-sm font-bold text-[#10201B] transition hover:-translate-y-0.5 hover:bg-[#FFD0A6]"
                href="#contato"
              >
                Quero planejar meu intercambio
                <ArrowRight size={18} />
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-[#F6B17A] hover:text-[#FFD0A6]"
                href="#programas"
              >
                Ver programas
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="programas" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#B4532A]">
              O que oferecemos
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal sm:text-5xl">
              Um caminho simples para estudar fora sem caminhar sozinho.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {benefits.map((item) => (
              <article
                className="rounded-lg border border-[#D7E4DE] bg-[#F7FAF8] p-6"
                key={item.title}
              >
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-lg bg-[#1F6F5B] text-white">
                  <item.icon size={23} />
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#4B635A]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7FAF8] py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="overflow-hidden rounded-lg">
            <img
              alt="Jovens estudantes em um campus nos Estados Unidos"
              className="h-[440px] w-full object-cover"
              src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1400&q=85"
            />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#B4532A]">
              Experiencia completa
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal sm:text-5xl">
              Mais que uma viagem: formacao para a vida.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#4B635A]">
              Uma experiencia pensada para quem deseja estudar nos EUA,
              crescer no ingles, conhecer uma nova cultura e permanecer
              conectado a uma comunidade crista.
            </p>
            <div className="mt-8 grid gap-3">
              {highlights.map((item) => (
                <div className="flex gap-3" key={item}>
                  <CheckCircle2 className="mt-1 text-[#1F6F5B]" size={21} />
                  <p className="text-sm leading-7 text-[#31473F]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#B4532A]">
                Como funciona
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-normal sm:text-5xl">
                Quatro passos ate o embarque.
              </h2>
            </div>
            <div className="grid gap-4">
              {steps.map((step, index) => (
                <div
                  className="flex gap-5 rounded-lg border border-[#D7E4DE] bg-[#F7FAF8] p-5"
                  key={step}
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#10201B] text-sm font-bold text-[#F6B17A]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="self-center text-sm leading-7 text-[#31473F]">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="duvidas" className="bg-[#10201B] py-20 text-white">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#FFD0A6]">
                Duvidas comuns
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-normal sm:text-5xl">
                Perguntas rapidas para comecar.
              </h2>
            </div>
            <div className="grid gap-4">
              {faqs.map((faq) => (
                <article
                  className="rounded-lg border border-white/14 bg-white/8 p-5"
                  key={faq.question}
                >
                  <h3 className="font-bold">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/72">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="rounded-lg bg-[#1F6F5B] p-8 text-white sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#FFD0A6]">
                  Proximo passo
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-normal sm:text-5xl">
                  Quer publicar rapido? Comece com uma conversa.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/80">
                  Envie uma mensagem e receba uma orientacao inicial sobre
                  programas, prazos, custos e proximos passos.
                </p>
              </div>
              <a
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#F6B17A] px-6 py-4 text-sm font-bold text-[#10201B] transition hover:bg-[#FFD0A6]"
                href="mailto:contato@intercambiocristao.com"
              >
                <MessageCircle size={18} />
                Falar agora
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#D7E4DE] bg-white px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-[#4B635A] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 font-bold text-[#10201B]">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#10201B] text-[#F6B17A]">
              <BookOpen size={17} />
            </span>
            Intercambio Cristao EUA
          </div>
          <div className="flex items-center gap-2">
            <Users size={16} />
            Jovens cristaos brasileiros nos Estados Unidos
          </div>
        </div>
      </footer>
    </main>
  );
}
