const Challenge = () => {

    const a = 2;
    console.log(a);
    const b = 4;
    console.log(b);

    return <div>
        <p>A: {a}</p>
        <p>B: {b}</p>
        <button onClick={() => console.log(a + b)}>Clique para ver a soma!</button>
        </div>          
}

export default Challenge

