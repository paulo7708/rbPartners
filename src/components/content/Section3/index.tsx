import { Style3 }  from './styles';
import { Bank, Brain, Calendar, CheckCircle } from 'phosphor-react';


export const Section3 = () => {
  return (
    <Style3>
      <div>
        <button>
          <Brain color="#00faef" size={60} />
        </button>
        <h2>Rápido</h2>
        <p>Transações concluídas em poucos segundos.</p>
      </div>
      <div>
        <button>
          <Bank color="#00faef" size={60} />
        </button>
        <h2>Barato</h2>
        <p>Gratuito para pessoa física . Custo baixo para os demais casos.</p>
      </div>
      <div>
        <button>
          <Calendar color="#00faef" size={60} />
        </button>
        <h2>Disponibilidade</h2>
        <p>Disponível 24 horas por dia. Inclusive feriados.</p>
      </div>
      <div>
        <button>
          <CheckCircle color="#00faef" size={60} />
        </button>
        <h2>Pronto para começar</h2>
        <p>Aproveite a comodidade</p>
      </div>
    </Style3>
  );
}
