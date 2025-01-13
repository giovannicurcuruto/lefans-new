import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { GridCounterdiv, Itemdiv, StyledMotionDiv } from "./style";

export default function CountItensComponent() {
  // Motion values para os números
  const value1 = useMotionValue(0); // Inicia do 0
  const value2 = useMotionValue(0);

  // Aplica animações de suavização
  const spring1 = useSpring(value1, { stiffness: 50, damping: 20 });
  const spring2 = useSpring(value2, { stiffness: 50, damping: 20 });

  // Converte os valores animados para números arredondados
  const displayValue1 = useTransform(spring1, (v) => Math.round(v));
  const displayValue2 = useTransform(spring2, (v) => Math.round(v));

  useEffect(() => {
    // Define os valores finais das animações
    value1.set(366);
    value2.set(40);
  }, [value1, value2]);

  //console.log("CountItensComponent montado");

  return (
    <>
      <GridCounterdiv>
        {/* Primeiro número animado */}

        <div>
          <h3>Empresas Transformadas</h3>
        </div>
        <Itemdiv>
          <h4>Vidas Impactadas</h4>

          <StyledMotionDiv>{displayValue1}</StyledMotionDiv>
        </Itemdiv>
        {/* Segundo número animado */}
        <Itemdiv>
          <h4>Minutos Poupados</h4>
          <StyledMotionDiv>{displayValue2}</StyledMotionDiv>
        </Itemdiv>
      </GridCounterdiv>
    </>
  );
}
