import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function CountItensComponent() {
    const controls1 = useAnimation(); // Controle para o primeiro número
    const controls2 = useAnimation(); // Controle para o segundo número

    useEffect(() => {
        // Animação do número 1 (0 -> 366)
        controls1.start({
            value: 366,
            transition: { duration: 5, ease: 'easeInOut' },
        });

        // Animação do número 2 (0 -> 40)
        controls2.start({
            value: 40,
            transition: { duration: 5, ease: 'easeInOut' },
        });
    }, [controls1, controls2]);


    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            {/* Primeiro número animado */}
            <motion.div
                style={{ fontSize: '2rem', fontWeight: 'bold', color: '#007bff' }}
                animate={controls1}
            >
                {({ value }: { value: number }) => Math.round(value)}
            </motion.div>

            {/* Segundo número animado */}
            <motion.div
                style={{ fontSize: '2rem', fontWeight: 'bold', color: '#28a745' }}
                animate={controls2}
            >
                {({ value }: { value: number }) => Math.round(value)}
            </motion.div>
        </div>
    )
}