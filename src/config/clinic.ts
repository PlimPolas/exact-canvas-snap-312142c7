/**
 * CENTRAL DE PERSONALIZAÇÃO DA CLÍNICA
 * Altere apenas este arquivo para adaptar o site a outra clínica odontológica.
 */

import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";
import doctor4 from "@/assets/doctor-4.jpg";
import doctor5 from "@/assets/doctor-5.jpg";
import doctor6 from "@/assets/doctor-6.jpg";
import doctor7 from "@/assets/doctor-7.jpg";
import infra1 from "@/assets/infra-1.jpg";
import infra2 from "@/assets/infra-2.jpg";
import infra3 from "@/assets/infra-3.jpg";
import infra4 from "@/assets/infra-4.jpg";
import smileBefore from "@/assets/smile-before.jpg";
import smileAfter from "@/assets/smile-after.jpg";
import heroPoster from "@/assets/hero-poster.jpg";
import heroVideoAsset from "@/assets/hero-video.mp4.asset.json";

export const clinic = {
  name: "Instituto Oral Premium",
  shortName: "Oral Premium",
  tagline: "A precisão da odontologia moderna",
  city: "Savassi, Belo Horizonte - MG",
  address: "Av. Getúlio Vargas, 1649 · Savassi, Belo Horizonte - MG",
  phoneLabel: "(31) 9 9736-7514",
  phoneHref: "tel:+5531997367514",
  whatsapp: "5531997367514",
  whatsappUrl:
    "https://wa.me/5531997367514?text=Ol%C3%A1%2C%20estou%20no%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es",
  whatsappUrgency:
    "https://wa.me/5531997367514?text=Preciso%20de%20atendimento%20urgente%20no%20dentista",
  mapsUrl:
    "https://maps.google.com/?q=Av.+Get%C3%BAlio+Vargas,+1649,+Savassi,+Belo+Horizonte+-+MG",
  wazeUrl: "https://waze.com/ul?q=Av.+Get%C3%BAlio+Vargas,+1649,+Belo+Horizonte",
  technicalManager: "Dr. Jimmy Príncipe Brito de Sá",
  cro: "CRO-MG 54398",
  epao: "EPAO nº 7507",
  hours: "Plantão 24 Horas · Todos os dias, inclusive feriados",
};

export const heroContent = {
  video: heroVideoAsset.url,
  poster: heroPoster,
  badge: "Atendimento 24 horas · Savassi, Belo Horizonte",
  title: "Odontologia de precisão",
  titleAccent: "para um sorriso extraordinário.",
  subtitle:
    "Tecnologia avançada, cuidado sem dor e especialistas dedicados a uma experiência odontológica de alto padrão.",
  primaryCta: "Agendar Avaliação",
  secondaryCta: "Nossos Tratamentos",
  trustLine: "Nota 5,0 no Google · mais de 2.400 avaliações",
};


export const navLinks = [
  { label: "Especialidades", href: "#tratamentos" },
  { label: "Resultados", href: "#antes-depois" },
  { label: "Corpo Clínico", href: "#equipe" },
  { label: "Infraestrutura", href: "#tecnologia" },
  { label: "Avaliações", href: "#depoimentos" },
  { label: "Contato", href: "#localizacao" },
];

export const partners = [
  "Bradesco Dental",
  "Amil Dental",
  "SulAmérica Odonto",
  "Unimed Odontologia",
  "MetLife Dental",
  "Porto Seguro",
  "Invisalign® Diamond Provider",
  "EPAO Certificada nº 7507",
];

export const stats = [
  { value: "+21.378", label: "Urgências Atendidas 24h" },
  { value: "+2.480", label: "Implantes Dentários Guiados" },
  { value: "+7.970", label: "Sisos Removidos com Conforto" },
  { value: "+5.200", label: "Canais Tratados via Microscopia" },
];

export type TreatmentCategory =
  | "implantes"
  | "estetica"
  | "ortodontia"
  | "endodontia"
  | "urgencia";

export const treatmentFilters: { label: string; value: TreatmentCategory | "all" }[] = [
  { label: "Todos os Tratamentos", value: "all" },
  { label: "Implantes & Cirurgia", value: "implantes" },
  { label: "Estética & Facetas", value: "estetica" },
  { label: "Invisalign® & Aparelhos", value: "ortodontia" },
  { label: "Canal sem Dor", value: "endodontia" },
  { label: "Plantão 24 Horas", value: "urgencia" },
];

export const treatments = [
  {
    category: "implantes" as TreatmentCategory,
    tag: "Implantodontia 3D",
    icon: "tooth",
    title: "Implantes Guiados & Carga Imediata",
    text: "Recupere a estabilidade e a estética dos seus dentes sem cortes desnecessários. Utilizamos tomografia tridimensional e guias cirúrgicos impressos em 3D para instalar implantes com precisão milimétrica e pós-operatório sem dor.",
    footnote: "Dentes fixos em até 24h · Procedimento Guiado",
    cta: "Agendar Avaliação",
    featured: true,
  },
  {
    category: "estetica" as TreatmentCategory,
    tag: "Estética Premium",
    icon: "sparkles",
    title: "Facetas & Lentes de Contato",
    text: "Lâminas ultrafinas de cerâmica pura com acabamento ultra-natural. Correção de formato, cor e pequenos desalinhamentos preservando a estrutura biológica do dente.",
    footnote: "Planejamento Digital DSD",
    cta: "Conhecer",
    featured: false,
  },
  {
    category: "ortodontia" as TreatmentCategory,
    tag: "Ortodontia Digital",
    icon: "refresh",
    title: "Invisalign® & Aparelhos",
    text: "Alinhadores transparentes e confortáveis que movem seus dentes de forma previsível e discreta. Sem fios metálicos, removíveis para alimentação e higienização.",
    footnote: "Diamond Doctor",
    cta: "Ver Mais",
    featured: false,
  },
  {
    category: "estetica" as TreatmentCategory,
    tag: "Harmonização",
    icon: "face",
    title: "Harmonização Orofacial",
    text: "Equilíbrio e proporção entre dentes, lábios e face. Procedimentos avançados como preenchimento labial, bioestimuladores de colágeno e toxina botulínica terapêutica.",
    footnote: "Naturalidade & Simetria",
    cta: "Ver Mais",
    featured: false,
  },
  {
    category: "endodontia" as TreatmentCategory,
    tag: "Endodontia",
    icon: "microscope",
    title: "Tratamento de Canal em 1 Sessão",
    text: "Microscopia de alta ampliação e instrumentação rotatória automatizada. Realize seu tratamento de canal com total conforto, rapidez e máxima taxa de sucesso.",
    footnote: "Zero Dor · Sessão Única",
    cta: "Ver Mais",
    featured: false,
  },
];

export const urgencyCard = {
  badge: "Atendimento Imediato Disponível Agora",
  title: "Urgência Odontológica 24 Horas",
  text: "Dor de dente aguda, quebra de dentes, traumas bucais, hemorragias ou problemas pós-cirúrgicos. Nossa equipe multidisciplinar está de prontidão contínua na Savassi em Belo Horizonte.",
};

export const beforeAfter = {
  before: smileBefore,
  after: smileAfter,
};

export const doctors = [
  { photo: doctor1, specialty: "Implantodontia & Cirurgia", name: "Dr. Jimmy Príncipe", cro: "CRO-MG 54398" },
  { photo: doctor2, specialty: "Estética Dental & Prótese", name: "Dra. Letícia Pacheco", cro: "CRO-MG 54453" },
  { photo: doctor3, specialty: "Ortodontia & Alinhadores", name: "Dra. Cíntia Pontello", cro: "CRO-MG 21563" },
  { photo: doctor4, specialty: "Endodontia Microscópica", name: "Dra. Raíssa Martins", cro: "CRO-MG 54509" },
  { photo: doctor5, specialty: "Cirurgia & Traumatologia", name: "Dr. Luís Fernando", cro: "CRO-MG 46402" },
  { photo: doctor6, specialty: "Harmonização Orofacial", name: "Dra. Anna Carolina", cro: "CRO-MG Especialista" },
  { photo: doctor7, specialty: "Anestesiologia & Sedação", name: "Dr. Lucas Rezende", cro: "Médico Anestesista Responsável" },
];

export const infraGallery = [
  { src: infra1, alt: "Recepção premium da clínica" },
  { src: infra2, alt: "Sala de espera confortável" },
  { src: infra3, alt: "Sala cirúrgica com tecnologia avançada" },
  { src: infra4, alt: "Planejamento digital 3D dos tratamentos" },
];

export const infraHighlights = [
  "Estacionamento privativo e gratuito com manobrista",
  "Tomografia 3D e Radiologia Odontológica 24 Horas no próprio local",
  "Sedação consciente com Óxido Nitroso para total tranquilidade",
];

export const reviews = [
  {
    initials: "WR",
    name: "Wemerson Ribeiro",
    text: "Ótima localização, estrutura aconchegante, recepção realmente Premium. Falando no atendimento com consultórios de excelência. Serviços de qualidade.",
  },
  {
    initials: "FS",
    name: "Francisco Sebastião dos Santos",
    text: "O Dr. Jimmy, a Dra. Letícia e toda a equipe de apoio merecem nota 10! Em um ambiente muito agradável, sofisticado, moderno e limpo.",
  },
  {
    initials: "MA",
    name: "Matheus Araujo",
    text: "Salvaram minha noite no plantão de urgência. Atendimento rápido, objetivo, eficaz e preço justo. Sou muito grato à clínica!",
  },
];

export const faq = [
  {
    q: "Vocês aceitam meu plano odontológico?",
    a: "Sim! Aceitamos os principais convênios do país, como Bradesco Dental, Amil, SulAmérica, Unimed Odonto, MetLife e Porto Seguro. Entre em contato pelo WhatsApp para verificar as coberturas do seu plano específico.",
  },
  {
    q: "A clínica realmente funciona 24 horas todos os dias?",
    a: "Sim, nossa equipe de cirurgiões-dentistas e suporte opera 24 horas por dia, 7 dias por semana, inclusive aos sábados, domingos e feriados, para emergências odontológicas com estrutura completa de radiologia no local.",
  },
  {
    q: "Quais são as opções de parcelamento de tratamentos?",
    a: "Facilitamos tratamentos de implantes, lentes de contato e ortodontia em até 18x no cartão de crédito sem juros, além de condições especiais via Pix ou boleto mediante análise.",
  },
  {
    q: "Como funciona a sedação consciente para quem tem fobia de dentista?",
    a: "Oferecemos sedação inalatória com óxido nitroso e sedação endovenosa acompanhada por médico anestesiologista. O paciente permanece relaxado, sem ansiedade e sem dor durante todo o procedimento.",
  },
  {
    q: "A clínica possui estacionamento no local?",
    a: "Sim, disponibilizamos estacionamento privativo e totalmente gratuito para todos os pacientes em atendimento, localizado na Av. Getúlio Vargas na Savassi.",
  },
];

export const specialtiesOptions = [
  "Avaliação Geral e Limpeza",
  "Implantes 3D e Carga Imediata",
  "Lentes de Contato e Facetas",
  "Invisalign e Alinhadores",
  "Harmonização Orofacial",
  "Canal em Sessão Única",
  "Urgência Odontológica 24h",
];

export const insuranceOptions = [
  "Particular / Sem convênio",
  "Bradesco Dental",
  "Amil Dental",
  "SulAmérica Odonto",
  "Unimed Odontologia",
  "MetLife Dental",
  "Porto Seguro",
];
