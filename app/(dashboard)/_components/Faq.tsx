"use client";

import React from "react";
import { Container } from "./Container";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-4xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">

            <Accordion type="single" collapsible>
              <AccordionItem value={`item-` + index} className="border-b-0">
                <AccordionTrigger className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300 text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "O que é esta aplicação?",
    answer: "Esta aplicação é uma plataforma que centraliza informações sobre corridas de rua, permitindo que você encontre eventos de forma rápida e fácil.",
  },
  {
    question: "Como encontro corridas de rua na minha região?",
    answer: "Você pode usar o filtro de localização na página principal para visualizar corridas próximas à sua cidade ou estado.",
  },
  {
    question: "Como me inscrevo em uma corrida?",
    answer:
      "Quando você encontrar uma corrida do seu interesse, clique no botão de 'Acessar' que redireciona para a página oficial do evento onde a inscrição pode ser realizada.",
  },
  {
    question: "A plataforma permite fazer inscrições diretamente?",
    answer:
      "Não, nossa plataforma apenas centraliza informações sobre as corridas. As inscrições são feitas diretamente no site dos organizadores.",
  },
  // {
  //   question: "Posso receber notificações sobre novas corridas?",
  //   answer:
  //     "Sim, você pode se cadastrar para receber alertas de novas corridas por e-mail ou notificações push.",
  // },
  // {
  //   question: "Como posso adicionar minha corrida de rua à plataforma?",
  //   answer:
  //     "Se você é organizador de corridas, pode nos enviar os detalhes do seu evento através do formulário 'Adicionar Corrida', que será revisado e publicado na plataforma.",
  // },
  {
    question: "As informações sobre as corridas são atualizadas com que frequência?",
    answer:
      "As informações são atualizadas regularmente conforme os organizadores compartilham novidades. Nós também monitoramos mudanças para manter as informações atualizadas.",
  },
  {
    question: "Preciso pagar para usar a plataforma?",
    answer:
      "Não, o uso da plataforma para encontrar corridas é totalmente gratuito. Eventuais taxas são aplicadas apenas pelos organizadores de eventos no momento da inscrição.",
  },
  {
    question: "Posso salvar corridas favoritas?",
    answer:
      "Sim, você pode marcar corridas como favoritas e acessá-las facilmente no seu perfil.",
  },
  {
    question: "Como posso cancelar minha inscrição em uma corrida?",
    answer:
      "Como as inscrições são feitas diretamente no site dos organizadores, o cancelamento também deve ser solicitado diretamente com eles. Verifique os termos e condições de cancelamento no site oficial do evento.",
  },
];