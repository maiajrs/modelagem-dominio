import {somar} from "@/index"

test("Faz a soma de dois números inteiros e retorna o resultado", () => {
    expect(somar(1, 2)).toBe(3)
})