import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import ptBR from 'date-fns/locale/pt-BR';
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import useMedia from 'hooks/useMedia';
import React from 'react';
import { SectionTitle } from 'components/BarberRegister/BarberContact/style';
import * as Styled from './style';

const locales = {
  'pt-BR': ptBR,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

interface dataModalEventPros {
  title: string;
}

export const CalendarComponent = () => {
  const mobile = useMedia('(max-width: 769px)');
  const [showModalEvent, setShowModalEvent] = React.useState(false);
  const [dataToModalEvent, setDataToModalEvent] =
    React.useState<dataModalEventPros>();

  function handleShowEvent(e: any) {
    console.log('%c⧭', 'color: #00258c', e);
    setShowModalEvent(true);
    setDataToModalEvent(e);
  }

  const messages = {
    allDay: 'Dia Inteiro',
    previous: '<',
    next: '>',
    today: 'Hoje',
    month: 'Mês',
    week: 'Semana',
    day: 'Dia',
    agenda: 'Agenda',
    date: 'Data',
    time: 'Hora',
    event: 'Evento',
    showMore: (total: number) => `+ (${total}) Eventos`,
  };
  const myEventList = [
    {
      _id: '63ac369a16d3a5d153048e60',
      start: new Date('2023-01-03T15:50:05.158Z'),
      end: new Date('2023-01-03T18:50:05.158Z'),
      title: 'José + Aroldo: Corte duplo',
      allDay: false,
      resource: {
        status: 1,
        services: ['63a8fd6ea78c0cda198e66d1', '63a8fd6ea78c0cda198e66d3'],
      },
      barberId: '63ab004032a0f08ebc6d0421',
      __v: 0,
    },
    {
      _id: '63ac37003355a75be1f5df73',
      start: new Date('2023-01-04T15:50:05.158Z'),
      end: new Date('2023-01-04T18:50:05.158Z'),
      title: 'José + Fred: Corte duplo',
      allDay: false,
      resource: {
        services: ['63a8fd6ea78c0cda198e66d1', '63a8fd6ea78c0cda198e66d3'],
      },
      barberId: '63ab004032a0f08ebc6d0421',
      __v: 0,
    },
    {
      _id: '63ac37003355a75be1f5df73',
      start: new Date('2023-01-05T15:50:05.158Z'),
      end: new Date('2023-01-05T18:50:05.158Z'),
      title: 'José + tio nelson: Corte navalhado',
      allDay: false,
      resource: {
        services: ['63a8fd6ea78c0cda198e66d1', '63a8fd6ea78c0cda198e66d3'],
      },
      barberId: '63ab004032a0f08ebc6d0421',
      __v: 0,
    },
    {
      _id: '63ac37003355a75be1f5df73',
      start: new Date('2023-01-06T15:50:05.158Z'),
      end: new Date('2023-01-06T18:50:05.158Z'),
      title: 'José + tia lucia: Corte de assas',
      allDay: false,
      resource: {
        services: ['63a8fd6ea78c0cda198e66d1', '63a8fd6ea78c0cda198e66d3'],
      },
      barberId: '63ab004032a0f08ebc6d0421',
      __v: 0,
    },
  ];
  return (
    <Box padding={mobile ? '40px 20px 0px 20px' : '40px 60px 0px 60px'}>
      <Calendar
        messages={messages}
        culture="pt-BR"
        localizer={localizer}
        events={myEventList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        onSelectEvent={(e) => handleShowEvent(e)}
      />
      <Modal
        size={mobile ? 'xs' : 'md'}
        isOpen={showModalEvent}
        onClose={() => setShowModalEvent(false)}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <SectionTitle>{dataToModalEvent?.title}</SectionTitle>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Conteúdo que vai vir do get pelo id, trazendo todas as informações
            desse serviço...
          </ModalBody>
          <Styled.ModalEventButtonFlex>
            <Styled.ModaEventButton>Fechar</Styled.ModaEventButton>
            <Styled.ModaEventButton>Deletar</Styled.ModaEventButton>
          </Styled.ModalEventButtonFlex>
        </ModalContent>
      </Modal>
    </Box>
  );
};
