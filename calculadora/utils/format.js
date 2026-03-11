export function sanitizeNumberString(s) {
    // manter digitos, um ponto, e se sinal no inicio
    if (!s) return "0";
    return s;
}

export function toNumber (displayText) {
    //display esta formatado com separadores; remove tudo
    const raw = String(displayText).replace(/\./g, "").replace(/\./g, "");
    const n = Number (raw);
    return Number.isFinite(n) ? n : NaN;
}

export function formateNumber(n, locale = "pt-BR") {
    if(!Number.isFinite(n)) return "error";

    // evitar floats infinitos na tela 
    const fixed = fixFloat(n);

    //separador de milhar e decimal
    return new Intl.NumberFormat(locale, {
        maximumFractionDigits: 10 
    }).format(fixed);

}

export function fixFloat(n) {
    //REDUZ ERRO DE PONTO FLUTUANTE
    return Math.round((n + Number.EPSILON) * 1e12) / 1e12; 
}
