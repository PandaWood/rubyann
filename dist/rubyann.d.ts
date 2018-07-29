export interface RubyAnnOptions {
    delimiters: string;
}
export declare class RubyAnn {
    private static readonly RubyTemplate;
    private readonly startChar;
    private readonly endChar;
    private readonly options;
    constructor(options?: RubyAnnOptions);
    elements(selector: string): void;
    getXml(text: string): string;
}
//# sourceMappingURL=rubyann.d.ts.map