'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('userSkills', [
        {id: 254,userId:21,skillId:26,dekids_coins:25, createdAt: new Date(), updatedAt: new Date()},
        {id: 255,userId:21,skillId:27,dekids_coins:27, createdAt: new Date(), updatedAt: new Date()},
        {id: 256,userId:21,skillId:28,dekids_coins:25, createdAt: new Date(), updatedAt: new Date()},
        {id: 257,userId:21,skillId:29,dekids_coins:40, createdAt: new Date(), updatedAt: new Date()},
        {id: 258,userId:21,skillId:30,dekids_coins:58, createdAt: new Date(), updatedAt: new Date()},
        {id: 259,userId:21,skillId:31,dekids_coins:60, createdAt: new Date(), updatedAt: new Date()},
        {id: 260,userId:21,skillId:32,dekids_coins:65, createdAt: new Date(), updatedAt: new Date()},
        {id: 261,userId:21,skillId:33,dekids_coins:65, createdAt: new Date(), updatedAt: new Date()},
        {id: 262,userId:21,skillId:34,dekids_coins:55, createdAt: new Date(), updatedAt: new Date()},
        {id: 263,userId:21,skillId:35,dekids_coins:55, createdAt: new Date(), updatedAt: new Date()},
        {id: 264,userId:21,skillId:36,dekids_coins:55, createdAt: new Date(), updatedAt: new Date()},
        {id: 265,userId:21,skillId:37,dekids_coins:15, createdAt: new Date(), updatedAt: new Date()},
        {id: 266,userId:21,skillId:38,dekids_coins:0 , createdAt: new Date(), updatedAt: new Date()},
        {id: 267,userId:22,skillId:26,dekids_coins:25 , createdAt: new Date(), updatedAt: new Date()},
        {id: 268,userId:22,skillId:27,dekids_coins:20 , createdAt: new Date(), updatedAt: new Date()},
        {id: 269,userId:22,skillId:28,dekids_coins:25 , createdAt: new Date(), updatedAt: new Date()},
        {id: 270,userId:22,skillId:29,dekids_coins:35 , createdAt: new Date(), updatedAt: new Date()},
        {id: 271,userId:22,skillId:30,dekids_coins:55 , createdAt: new Date(), updatedAt: new Date()},
        {id: 272,userId:22,skillId:31,dekids_coins:58 , createdAt: new Date(), updatedAt: new Date()},
        {id: 273,userId:22,skillId:32,dekids_coins:65 , createdAt: new Date(), updatedAt: new Date()},
        {id: 274,userId:22,skillId:33,dekids_coins:55 , createdAt: new Date(), updatedAt: new Date()},
        {id: 275,userId:22,skillId:34,dekids_coins:55 , createdAt: new Date(), updatedAt: new Date()},
        {id: 276,userId:22,skillId:35,dekids_coins:55 , createdAt: new Date(), updatedAt: new Date()},
        {id: 277,userId:22,skillId:36,dekids_coins:55 , createdAt: new Date(), updatedAt: new Date()},
        {id: 278,userId:22,skillId:37,dekids_coins:10 , createdAt: new Date(), updatedAt: new Date()},
        {id: 279,userId:22,skillId:38,dekids_coins:0  , createdAt: new Date(), updatedAt: new Date()},
        {id: 280,userId:23,skillId:26,dekids_coins:25 , createdAt: new Date(), updatedAt: new Date()},
        {id: 281,userId:23,skillId:27,dekids_coins:25 , createdAt: new Date(), updatedAt: new Date()},
        {id: 282,userId:23,skillId:28,dekids_coins:20 , createdAt: new Date(), updatedAt: new Date()},
        {id: 283,userId:23,skillId:29,dekids_coins:35 , createdAt: new Date(), updatedAt: new Date()},
        {id: 284,userId:23,skillId:30,dekids_coins:55 , createdAt: new Date(), updatedAt: new Date()},
        {id: 285,userId:23,skillId:31,dekids_coins:58 , createdAt: new Date(), updatedAt: new Date()},
        {id: 286,userId:23,skillId:32,dekids_coins:65 , createdAt: new Date(), updatedAt: new Date()},
        {id: 287,userId:23,skillId:33,dekids_coins:55 , createdAt: new Date(), updatedAt: new Date()},
        {id: 288,userId:23,skillId:34,dekids_coins:55 , createdAt: new Date(), updatedAt: new Date()},
        {id: 289,userId:23,skillId:35,dekids_coins:55 , createdAt: new Date(), updatedAt: new Date()},
        {id: 290,userId:23,skillId:36,dekids_coins:55 , createdAt: new Date(), updatedAt: new Date()},
        {id: 291,userId:23,skillId:37,dekids_coins:10 , createdAt: new Date(), updatedAt: new Date()},
        {id: 292,userId:23,skillId:38,dekids_coins:0  , createdAt: new Date(), updatedAt: new Date()},
        {id: 293,userId:24,skillId:26,dekids_coins:22 , createdAt: new Date(), updatedAt: new Date()},
        {id: 294,userId:24,skillId:27,dekids_coins:15 , createdAt: new Date(), updatedAt: new Date()},
        {id: 295,userId:24,skillId:28,dekids_coins:11, createdAt: new Date(), updatedAt: new Date()},
        {id: 296,userId:24,skillId:29,dekids_coins:25 , createdAt: new Date(), updatedAt: new Date()},
        {id: 297,userId:24,skillId:30,dekids_coins:50 , createdAt: new Date(), updatedAt: new Date()},
        {id: 298,userId:24,skillId:31,dekids_coins:53 , createdAt: new Date(), updatedAt: new Date()},
        {id: 299,userId:24,skillId:32,dekids_coins:62 , createdAt: new Date(), updatedAt: new Date()},
        {id: 300,userId:24,skillId:33,dekids_coins:62 , createdAt: new Date(), updatedAt: new Date()},
        {id: 301,userId:24,skillId:34,dekids_coins:52 , createdAt: new Date(), updatedAt: new Date()},
        {id: 302,userId:24,skillId:35,dekids_coins:53 , createdAt: new Date(), updatedAt: new Date()},
        {id: 303,userId:24,skillId:36,dekids_coins:51 , createdAt: new Date(), updatedAt: new Date()},
        {id: 304,userId:24,skillId:37,dekids_coins:2 , createdAt: new Date(), updatedAt: new Date()},
        {id: 305,userId:24,skillId:38,dekids_coins:0  , createdAt: new Date(), updatedAt: new Date()},
        {id: 306,userId:25,skillId:26,dekids_coins:25 , createdAt: new Date(), updatedAt: new Date()},
        {id: 307,userId:25,skillId:27,dekids_coins:20 , createdAt: new Date(), updatedAt: new Date()},
        {id: 308,userId:25,skillId:28,dekids_coins:25 , createdAt: new Date(), updatedAt: new Date()},
        {id: 309,userId:25,skillId:29,dekids_coins:30 , createdAt: new Date(), updatedAt: new Date()},
        {id: 310,userId:25,skillId:30,dekids_coins:50 , createdAt: new Date(), updatedAt: new Date()},
        {id: 311,userId:25,skillId:31,dekids_coins:60 , createdAt: new Date(), updatedAt: new Date()},
        {id: 312,userId:25,skillId:32,dekids_coins:65 , createdAt: new Date(), updatedAt: new Date()},
        {id: 313,userId:25,skillId:33,dekids_coins:65 , createdAt: new Date(), updatedAt: new Date()},
        {id: 314,userId:25,skillId:34,dekids_coins:65 , createdAt: new Date(), updatedAt: new Date()},
        {id: 315,userId:25,skillId:35,dekids_coins:55 , createdAt: new Date(), updatedAt: new Date()},
        {id: 316,userId:25,skillId:36,dekids_coins:55, createdAt: new Date(), updatedAt: new Date()},
        {id: 317,userId:25,skillId:37,dekids_coins:15 , createdAt: new Date(), updatedAt: new Date()},
        {id: 318,userId:25,skillId:38,dekids_coins:0  , createdAt: new Date(), updatedAt: new Date()},
        {id: 319,userId:26,skillId:26,dekids_coins:30 , createdAt: new Date(), updatedAt: new Date()},
        {id: 320,userId:26,skillId:27,dekids_coins:30 , createdAt: new Date(), updatedAt: new Date()},
        {id: 321,userId:26,skillId:28,dekids_coins:25 , createdAt: new Date(), updatedAt: new Date()},
        {id: 322,userId:26,skillId:29,dekids_coins:40 , createdAt: new Date(), updatedAt: new Date()},
        {id: 323,userId:26,skillId:30,dekids_coins:58 , createdAt: new Date(), updatedAt: new Date()},
        {id: 324,userId:26,skillId:31,dekids_coins:60 , createdAt: new Date(), updatedAt: new Date()},
        {id: 325,userId:26,skillId:32,dekids_coins:65 , createdAt: new Date(), updatedAt: new Date()},
        {id: 326,userId:26,skillId:33,dekids_coins:65 , createdAt: new Date(), updatedAt: new Date()},
        {id: 327,userId:26,skillId:34,dekids_coins:55 , createdAt: new Date(), updatedAt: new Date()},
        {id: 328,userId:26,skillId:35,dekids_coins:55 , createdAt: new Date(), updatedAt: new Date()},
        {id: 329,userId:26,skillId:36,dekids_coins:55 , createdAt: new Date(), updatedAt: new Date()},
        {id: 330,userId:26,skillId:37,dekids_coins:15 , createdAt: new Date(), updatedAt: new Date()},
        {id: 331,userId:26,skillId:38,dekids_coins:0  , createdAt: new Date(), updatedAt: new Date()},
        {id: 332,userId:27,skillId:39,dekids_coins:90 , createdAt: new Date(), updatedAt: new Date()},
        {id: 333,userId:27,skillId:40,dekids_coins:39 , createdAt: new Date(), updatedAt: new Date()},
        {id: 334,userId:27,skillId:41,dekids_coins:0 , createdAt: new Date(), updatedAt: new Date()},
        {id: 335,userId:27,skillId:42,dekids_coins:4 , createdAt: new Date(), updatedAt: new Date()},
        {id: 336,userId:27,skillId:43,dekids_coins:4 , createdAt: new Date(), updatedAt: new Date()},
        {id: 337,userId:27,skillId:44,dekids_coins:4 , createdAt: new Date(), updatedAt: new Date()},
        {id: 338,userId:27,skillId:45,dekids_coins:4 , createdAt: new Date(), updatedAt: new Date()},
        {id: 339,userId:27,skillId:46,dekids_coins:4 , createdAt: new Date(), updatedAt: new Date()},
        {id: 340,userId:27,skillId:47,dekids_coins:4 , createdAt: new Date(), updatedAt: new Date()},
        {id: 341,userId:27,skillId:48,dekids_coins:0 , createdAt: new Date(), updatedAt: new Date()},
        {id: 342,userId:27,skillId:49,dekids_coins:0 , createdAt: new Date(), updatedAt: new Date()},
        {id: 343,userId:27,skillId:50,dekids_coins:0 , createdAt: new Date(), updatedAt: new Date()},
        {id: 344,userId:28,skillId:39,dekids_coins:90 , createdAt: new Date(), updatedAt: new Date()},
        {id: 345,userId:28,skillId:40,dekids_coins:39 , createdAt: new Date(), updatedAt: new Date()},
        {id: 346,userId:28,skillId:41,dekids_coins:0 , createdAt: new Date(), updatedAt: new Date()},
        {id: 347,userId:28,skillId:42,dekids_coins:4 , createdAt: new Date(), updatedAt: new Date()},
        {id: 348,userId:28,skillId:43,dekids_coins:4 , createdAt: new Date(), updatedAt: new Date()},
        {id: 349,userId:28,skillId:44,dekids_coins:4 , createdAt: new Date(), updatedAt: new Date()},
        {id: 350,userId:28,skillId:45,dekids_coins:4 , createdAt: new Date(), updatedAt: new Date()},
        {id: 351,userId:28,skillId:46,dekids_coins:4 , createdAt: new Date(), updatedAt: new Date()},
        {id: 352,userId:28,skillId:47,dekids_coins:4 , createdAt: new Date(), updatedAt: new Date()},
        {id: 353,userId:28,skillId:48,dekids_coins:0 , createdAt: new Date(), updatedAt: new Date()},
        {id: 354,userId:28,skillId:49,dekids_coins:0 , createdAt: new Date(), updatedAt: new Date()},
        {id: 355,userId:28,skillId:50,dekids_coins:0 , createdAt: new Date(), updatedAt: new Date()},
        {id: 356,userId:29,skillId:39,dekids_coins:74 , createdAt: new Date(), updatedAt: new Date()},
        {id: 357,userId:29,skillId:40,dekids_coins:32 , createdAt: new Date(), updatedAt: new Date()},
        {id: 358,userId:29,skillId:41,dekids_coins:0 , createdAt: new Date(), updatedAt: new Date()},
        {id: 359,userId:29,skillId:42,dekids_coins:4 , createdAt: new Date(), updatedAt: new Date()},
        {id: 360,userId:29,skillId:43,dekids_coins:4 , createdAt: new Date(), updatedAt: new Date()},
        {id: 361,userId:29,skillId:44,dekids_coins:4 , createdAt: new Date(), updatedAt: new Date()},
        {id: 362,userId:29,skillId:45,dekids_coins:4 , createdAt: new Date(), updatedAt: new Date()},
        {id: 363,userId:29,skillId:46,dekids_coins:4 , createdAt: new Date(), updatedAt: new Date()},
        {id: 364,userId:29,skillId:47,dekids_coins:4 , createdAt: new Date(), updatedAt: new Date()},
        {id: 365,userId:29,skillId:48,dekids_coins:0 , createdAt: new Date(), updatedAt: new Date()},
        {id: 366,userId:29,skillId:49,dekids_coins:0 , createdAt: new Date(), updatedAt: new Date()},
        {id: 367,userId:29,skillId:50,dekids_coins:0 , createdAt: new Date(), updatedAt: new Date()},
        {id: 368,userId:30,skillId:39,dekids_coins:95 , createdAt: new Date(), updatedAt: new Date()},
        {id: 369,userId:30,skillId:40,dekids_coins:41 , createdAt: new Date(), updatedAt: new Date()},
        {id: 370,userId:30,skillId:41,dekids_coins:0 , createdAt: new Date(), updatedAt: new Date()},
        {id: 371,userId:30,skillId:42,dekids_coins:4 , createdAt: new Date(), updatedAt: new Date()},
        {id: 372,userId:30,skillId:43,dekids_coins:4 , createdAt: new Date(), updatedAt: new Date()},
        {id: 373,userId:30,skillId:44,dekids_coins:4 , createdAt: new Date(), updatedAt: new Date()},
        {id: 374,userId:30,skillId:45,dekids_coins:4 , createdAt: new Date(), updatedAt: new Date()},
        {id: 375,userId:30,skillId:46,dekids_coins:4 , createdAt: new Date(), updatedAt: new Date()},
        {id: 376,userId:30,skillId:47,dekids_coins:4 , createdAt: new Date(), updatedAt: new Date()},
        {id: 377,userId:30,skillId:48,dekids_coins:0 , createdAt: new Date(), updatedAt: new Date()},
        {id: 378,userId:30,skillId:49,dekids_coins:0 , createdAt: new Date(), updatedAt: new Date()},
        {id: 379,userId:30,skillId:50,dekids_coins:0 , createdAt: new Date(), updatedAt: new Date()},
        {id: 380,userId:31,skillId:39,dekids_coins:67 , createdAt: new Date(), updatedAt: new Date()},
        {id: 381,userId:31,skillId:40,dekids_coins:29 , createdAt: new Date(), updatedAt: new Date()},
        {id: 382,userId:31,skillId:41,dekids_coins:0 , createdAt: new Date(), updatedAt: new Date()},
        {id: 383,userId:31,skillId:42,dekids_coins:2 , createdAt: new Date(), updatedAt: new Date()},
        {id: 384,userId:31,skillId:43,dekids_coins:2 , createdAt: new Date(), updatedAt: new Date()},
        {id: 385,userId:31,skillId:44,dekids_coins:2 , createdAt: new Date(), updatedAt: new Date()},
        {id: 386,userId:31,skillId:45,dekids_coins:2 , createdAt: new Date(), updatedAt: new Date()},
        {id: 387,userId:31,skillId:46,dekids_coins:2 , createdAt: new Date(), updatedAt: new Date()},
        {id: 388,userId:31,skillId:47,dekids_coins:2 , createdAt: new Date(), updatedAt: new Date()},
        {id: 389,userId:31,skillId:48,dekids_coins:0 , createdAt: new Date(), updatedAt: new Date()},
        {id: 390,userId:31,skillId:49,dekids_coins:0 , createdAt: new Date(), updatedAt: new Date()},
        {id: 391,userId:31,skillId:50,dekids_coins:0 , createdAt: new Date(), updatedAt: new Date()},
        {id: 392,userId:32,skillId:39,dekids_coins:62 , createdAt: new Date(), updatedAt: new Date()},
        {id: 393,userId:32,skillId:40,dekids_coins:27 , createdAt: new Date(), updatedAt: new Date()},
        {id: 394,userId:32,skillId:41,dekids_coins:0 , createdAt: new Date(), updatedAt: new Date()},
        {id: 395,userId:32,skillId:42,dekids_coins:2 , createdAt: new Date(), updatedAt: new Date()},
        {id: 396,userId:32,skillId:43,dekids_coins:2 , createdAt: new Date(), updatedAt: new Date()},
        {id: 397,userId:32,skillId:44,dekids_coins:2 , createdAt: new Date(), updatedAt: new Date()},
        {id: 398,userId:32,skillId:45,dekids_coins:2 , createdAt: new Date(), updatedAt: new Date()},
        {id: 399,userId:32,skillId:46,dekids_coins:2 , createdAt: new Date(), updatedAt: new Date()},
        {id: 400,userId:32,skillId:47,dekids_coins:2 , createdAt: new Date(), updatedAt: new Date()},
        {id: 401,userId:32,skillId:48,dekids_coins:0 , createdAt: new Date(), updatedAt: new Date()},
        {id: 402,userId:32,skillId:49,dekids_coins:0 , createdAt: new Date(), updatedAt: new Date()},
        {id: 403,userId:32,skillId:50,dekids_coins:0 , createdAt: new Date(), updatedAt: new Date()},
        {id: 404,userId:33,skillId:39,dekids_coins:55 , createdAt: new Date(), updatedAt: new Date()},
        {id: 405,userId:33,skillId:40,dekids_coins:25 , createdAt: new Date(), updatedAt: new Date()},
        {id: 406,userId:33,skillId:41,dekids_coins:0 , createdAt: new Date(), updatedAt: new Date()},
        {id: 407,userId:33,skillId:42,dekids_coins:2 , createdAt: new Date(), updatedAt: new Date()},
        {id: 408,userId:33,skillId:43,dekids_coins:2 , createdAt: new Date(), updatedAt: new Date()},
        {id: 409,userId:33,skillId:44,dekids_coins:2 , createdAt: new Date(), updatedAt: new Date()},
        {id: 410,userId:33,skillId:45,dekids_coins:2 , createdAt: new Date(), updatedAt: new Date()},
        {id: 411,userId:33,skillId:46,dekids_coins:2 , createdAt: new Date(), updatedAt: new Date()},
        {id: 412,userId:33,skillId:47,dekids_coins:2 , createdAt: new Date(), updatedAt: new Date()},
        {id: 413,userId:33,skillId:48,dekids_coins:0 , createdAt: new Date(), updatedAt: new Date()},
        {id: 414,userId:33,skillId:49,dekids_coins:0 , createdAt: new Date(), updatedAt: new Date()},
        {id: 415,userId:33,skillId:50,dekids_coins:0 , createdAt: new Date(), updatedAt: new Date()},
        {id: 416,userId:34,skillId:39,dekids_coins:64 , createdAt: new Date(), updatedAt: new Date()},
        {id: 417,userId:34,skillId:40,dekids_coins:28 , createdAt: new Date(), updatedAt: new Date()},
        {id: 418,userId:34,skillId:41,dekids_coins:0 , createdAt: new Date(), updatedAt: new Date()},
        {id: 419,userId:34,skillId:42,dekids_coins:2 , createdAt: new Date(), updatedAt: new Date()},
        {id: 420,userId:34,skillId:43,dekids_coins:2 , createdAt: new Date(), updatedAt: new Date()},
        {id: 421,userId:34,skillId:44,dekids_coins:2 , createdAt: new Date(), updatedAt: new Date()},
        {id: 422,userId:34,skillId:45,dekids_coins:2 , createdAt: new Date(), updatedAt: new Date()},
        {id: 423,userId:34,skillId:46,dekids_coins:2 , createdAt: new Date(), updatedAt: new Date()},
        {id: 424,userId:34,skillId:47,dekids_coins:2 , createdAt: new Date(), updatedAt: new Date()},
        {id: 425,userId:34,skillId:48,dekids_coins:0 , createdAt: new Date(), updatedAt: new Date()},
        {id: 426,userId:34,skillId:49,dekids_coins:0 , createdAt: new Date(), updatedAt: new Date()},
        {id: 427,userId:34,skillId:50,dekids_coins:0 , createdAt: new Date(), updatedAt: new Date()},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('userSkills', null, {});
  }
};
