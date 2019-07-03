require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    underscored: true, // se objeto UserGroup cria tabela user_group em vez do padrão UserGroups
    underscoredAll: true, // mesma coisa mas para nome de colunas e relacionamentos
  },
};
