import { useState } from "react";
import { CardContainer, ExpandButton, Icon, List, Text } from "./style";

interface CardComponentProps {
    titulo: string,
    paragrafo: string,
    img: string,
    itens?: string[]
}

export default function CardComponent({ titulo, paragrafo, img, itens = [] }: CardComponentProps) {
    const [expanded, setExpanded] = useState(false);


    return (
        <>
            <CardContainer expanded={expanded}>
                <Icon src={img} alt={titulo} />
                <Text>
                    <strong>{titulo}</strong>
                    {expanded && (
                        <>
                            <p>{paragrafo}</p>
                            {itens.length > 0 && (
                                <List>
                                    {itens.map((item: string, index: number) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </List>
                            )}
                        </>
                    )}
                </Text>
            </CardContainer>
            <ExpandButton onClick={() => setExpanded(!expanded)}>
                {expanded ? "−" : "+"}
            </ExpandButton>


        </>
    )
}

