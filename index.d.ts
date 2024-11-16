export type AST = QueryNode[];
export interface QueryNode {
    inverse: boolean;
    type: string;
    expressions: Expression[];
}
export interface Expression {
    modifier: string;
    feature: string;
    value: string;
}

export function parse(query: string): AST;
