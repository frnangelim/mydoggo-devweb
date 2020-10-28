import React from 'react';
import { render , unmountComponentAtNode} from "react-dom";
import { act } from "react-dom/test-utils";
import CustomTable from "../components/CustomTable";

const MOCK = [
    {name: 'Rocco', gender: 'M', age: 5},
    {name: 'Akira', gender: 'F', age: 1},
    {name: 'Bono', gender: 'M', age: 3},
    {name: 'Mary', gender: 'F', age: 2},
    {name: 'Pretinha', gender: 'F', age: 3},
];

let container = null;
beforeEach(() => {
    // Configura um elemento do DOM como alvo do teste
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // Limpar ao sair
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("Testando componente de tabela", () => {
    act(()=>{
        render(<CustomTable items={MOCK} />, container);
    });
    expect(container.querySelector("td").textContent).toBe("Rocco");
})
