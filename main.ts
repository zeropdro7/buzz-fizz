interface RuleStrategy {
  rule: (n: number) => boolean;
  keyword: string;
}

const rules: RuleStrategy[] = [
  { rule: (n) => n % 51 === 0, keyword: "Rhai" },
  { rule: (n) => n % 15 === 0, keyword: "FizzBuzz" },
  { rule: (n) => n % 3 === 0, keyword: "Fizz" },
  { rule: (n) => n % 5 === 0, keyword: "Buzz" },
];

const output = (rule: RuleStrategy | undefined, n: number): string =>
  rule ? rule.keyword : n.toString();

function strategicFizzBuzz(length: number) {
  for (let i = 1; i <= length; i++) {
    const rule = rules.find((n) => n.rule(i));
    console.log(output(rule, i));
  }
}

strategicFizzBuzz(100);

// Export for ES Modules
export {};
