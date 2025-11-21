/** @type {import('@commitlint/types').UserConfig} */
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Tipo obrigatório e limitado a uma lista “saudável”
    "type-enum": [
      2,
      "always",
      [
        "feat", // nova funcionalidade
        "fix", // correção de bug
        "docs", // documentação
        "style", // formatação, falta de ponto e vírgula, etc (sem mudança de código)
        "refactor", // refatoração de código, sem alteração de comportamento
        "perf", // melhorias de performance
        "test", // testes
        "build", // build, dependências, bundler
        "ci", // configurações de CI
        "chore", // tarefas diversas (configs, scripts, etc.)
        "revert", // reverte commit anterior
      ],
    ],

    // Tipo sempre em minúsculo
    "type-case": [2, "always", "lower-case"],

    // Tipo não pode ficar vazio
    "type-empty": [2, "never"],

    // Escopo obrigatório (ajuda a organizar o repo)
    "scope-empty": [2, "never"],

    // Escopo em kebab-case: auth, user-profile, transaction-list, etc.
    "scope-case": [2, "always", "kebab-case"],

    // Assunto não pode ser vazio
    "subject-empty": [2, "never"],

    // Assunto não deve terminar com ponto final
    "subject-full-stop": [2, "never", "."],

    // Não permitir certos estilos de capitalização no assunto
    // (aceita minúsculo “normal”: ex: "feat(core): implementa regra X")
    "subject-case": [2, "never", ["sentence-case", "start-case", "pascal-case", "upper-case"]],

    // Tamanho do cabeçalho (type(scope): subject) limitado
    "header-max-length": [2, "always", 72],

    // Linha em branco antes do corpo (quando houver)
    "body-leading-blank": [1, "always"],

    // Quebra de linha no corpo para manter leitura boa
    "body-max-line-length": [2, "always", 100],

    // Linha em branco antes do rodapé (ex: BREAKING CHANGE, refs, etc.)
    "footer-leading-blank": [1, "always"],
  },
}
