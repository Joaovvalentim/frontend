// Componente funcional Block para exibir uma seção de dados processados
const Block = (props) => {
    // Desestruturação das props para extrair label, data e processor
    const { label, data, processor } = props;
    
    // Processa os dados usando o processador fornecido
    const items = processor(data);

    // Log para depuração: exibe os dados fornecidos ao componente Block
    console.log(data);
    
    return (
        <div className="block">
            {/* Exibe o rótulo da seção */}
            <h2>{label}</h2>
            <ul className="list">
                {/* Mapeia e renderiza os itens processados */}
                {items.map(item => {
                    const { key, label, value } = item;
                    return (
                        <li key={key}>
                            {/* Exibe o rótulo e o valor do item */}
                            <span className="label">{label}</span> 
                            <span className="value">{value}</span> 
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

// Exporta o componente Block como padrão
export default Block;
