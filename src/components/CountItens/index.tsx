import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { GridCounterdiv } from "./style";

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

    console.log("CountItensComponent montado");

    return (
        <>
            <GridCounterdiv >
                {/* Primeiro número animado */}
            
                <div><h3>Empresas Transformadas</h3></div>
                <motion.div
                    style={{
                        fontSize: '55px',
                        fontWeight: 'bold',
                        color: '#BE945E',
                    }}
                >
                    {displayValue1}
                </motion.div>

                {/* Segundo número animado */}
                <motion.div
                    style={{
                        fontSize: '55px',
                        fontWeight: 'bold',
                        color: '#BE945E',
                    }}
                >
                    {displayValue2}
                </motion.div>
            </GridCounterdiv>
        </>
    );
}
