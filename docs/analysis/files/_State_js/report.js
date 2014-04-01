__report = {
  "info": {
    "file": "js/osg/State.js",
    "fileShort": "/State.js",
    "fileSafe": "_State_js",
    "link": "files/_State_js/index.html"
  },
  "complexity": {
    "aggregate": {
      "line": 1,
      "complexity": {
        "sloc": {
          "physical": 712,
          "logical": 497
        },
        "cyclomatic": 107,
        "halstead": {
          "operators": {
            "distinct": 28,
            "total": 1400,
            "identifiers": [
              "__stripped__"
            ]
          },
          "operands": {
            "distinct": 172,
            "total": 1551,
            "identifiers": [
              "__stripped__"
            ]
          },
          "length": 2951,
          "vocabulary": 200,
          "difficulty": 126.24418604651163,
          "volume": 22557.019616025213,
          "effort": 2847692.581060299,
          "bugs": 7.519006538675071,
          "time": 158205.14339223885
        }
      }
    },
    "functions": [
      {
        "name": "osg.State",
        "line": 1,
        "complexity": {
          "sloc": {
            "physical": 34,
            "logical": 22
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 6,
              "total": 102,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 39,
              "total": 110,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 212,
            "vocabulary": 45,
            "difficulty": 8.461538461538462,
            "volume": 1164.272856421891,
            "effort": 9851.539554339079,
            "bugs": 0.38809095214063033,
            "time": 547.3077530188377
          }
        }
      },
      {
        "name": "setGraphicContext",
        "line": 38,
        "complexity": {
          "sloc": {
            "physical": 1,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 2,
              "total": 2,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 3,
              "total": 4,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 6,
            "vocabulary": 5,
            "difficulty": 1.3333333333333333,
            "volume": 13.931568569324174,
            "effort": 18.575424759098897,
            "bugs": 0.004643856189774725,
            "time": 1.0319680421721609
          }
        }
      },
      {
        "name": "getGraphicContext",
        "line": 39,
        "complexity": {
          "sloc": {
            "physical": 1,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 2,
              "total": 2,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 2,
              "total": 2,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 4,
            "vocabulary": 4,
            "difficulty": 1,
            "volume": 8,
            "effort": 8,
            "bugs": 0.0026666666666666666,
            "time": 0.4444444444444444
          }
        }
      },
      {
        "name": "pushStateSet",
        "line": 41,
        "complexity": {
          "sloc": {
            "physical": 25,
            "logical": 16
          },
          "cyclomatic": 7,
          "halstead": {
            "operators": {
              "distinct": 13,
              "total": 49,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 17,
              "total": 56,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 105,
            "vocabulary": 30,
            "difficulty": 21.41176470588235,
            "volume": 515.2235125388945,
            "effort": 11031.844621421034,
            "bugs": 0.17174117084629817,
            "time": 612.880256745613
          }
        }
      },
      {
        "name": "applyStateSet",
        "line": 67,
        "complexity": {
          "sloc": {
            "physical": 5,
            "logical": 3
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 2,
              "total": 6,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 5,
              "total": 8,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 14,
            "vocabulary": 7,
            "difficulty": 1.6,
            "volume": 39.302968908806456,
            "effort": 62.884750254090335,
            "bugs": 0.01310098963626882,
            "time": 3.493597236338352
          }
        }
      },
      {
        "name": "popAllStateSets",
        "line": 73,
        "complexity": {
          "sloc": {
            "physical": 5,
            "logical": 2
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 3,
              "total": 5,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 4,
              "total": 5,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 10,
            "vocabulary": 7,
            "difficulty": 1.875,
            "volume": 28.07354922057604,
            "effort": 52.63790478858007,
            "bugs": 0.009357849740192013,
            "time": 2.924328043810004
          }
        }
      },
      {
        "name": "popStateSet",
        "line": 78,
        "complexity": {
          "sloc": {
            "physical": 23,
            "logical": 15
          },
          "cyclomatic": 7,
          "halstead": {
            "operators": {
              "distinct": 10,
              "total": 43,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 17,
              "total": 48,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 91,
            "vocabulary": 27,
            "difficulty": 14.11764705882353,
            "volume": 432.69476269687567,
            "effort": 6108.631943955892,
            "bugs": 0.14423158756562524,
            "time": 339.3684413308829
          }
        }
      },
      {
        "name": "haveAppliedAttribute",
        "line": 102,
        "complexity": {
          "sloc": {
            "physical": 6,
            "logical": 4
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 4,
              "total": 12,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 9,
              "total": 14,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 26,
            "vocabulary": 13,
            "difficulty": 3.111111111111111,
            "volume": 96.21143267166839,
            "effort": 299.3244572007461,
            "bugs": 0.032070477557222796,
            "time": 16.629136511152563
          }
        }
      },
      {
        "name": "applyAttribute",
        "line": 109,
        "complexity": {
          "sloc": {
            "physical": 19,
            "logical": 12
          },
          "cyclomatic": 4,
          "halstead": {
            "operators": {
              "distinct": 7,
              "total": 38,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 18,
              "total": 43,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 81,
            "vocabulary": 25,
            "difficulty": 8.36111111111111,
            "volume": 376.1523513717527,
            "effort": 3145.051604524932,
            "bugs": 0.12538411712391756,
            "time": 174.725089140274
          }
        }
      },
      {
        "name": "applyTextureAttribute",
        "line": 128,
        "complexity": {
          "sloc": {
            "physical": 27,
            "logical": 17
          },
          "cyclomatic": 5,
          "halstead": {
            "operators": {
              "distinct": 11,
              "total": 60,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 24,
              "total": 65,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 125,
            "vocabulary": 35,
            "difficulty": 14.895833333333334,
            "volume": 641.1603771181208,
            "effort": 9550.618117488675,
            "bugs": 0.21372012570604026,
            "time": 530.5898954160375
          }
        }
      },
      {
        "name": "getLastProgramApplied",
        "line": 156,
        "complexity": {
          "sloc": {
            "physical": 3,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 2,
              "total": 3,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 3,
              "total": 3,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 6,
            "vocabulary": 5,
            "difficulty": 1,
            "volume": 13.931568569324174,
            "effort": 13.931568569324174,
            "bugs": 0.004643856189774725,
            "time": 0.7739760316291208
          }
        }
      },
      {
        "name": "pushGeneratedProgram",
        "line": 160,
        "complexity": {
          "sloc": {
            "physical": 24,
            "logical": 16
          },
          "cyclomatic": 4,
          "halstead": {
            "operators": {
              "distinct": 11,
              "total": 63,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 27,
              "total": 68,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 131,
            "vocabulary": 38,
            "difficulty": 13.851851851851853,
            "volume": 687.4785042611097,
            "effort": 9522.850392357595,
            "bugs": 0.2291595014203699,
            "time": 529.0472440198664
          }
        }
      },
      {
        "name": "popGeneratedProgram",
        "line": 185,
        "complexity": {
          "sloc": {
            "physical": 3,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 2,
              "total": 3,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 3,
              "total": 3,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 6,
            "vocabulary": 5,
            "difficulty": 1,
            "volume": 13.931568569324174,
            "effort": 13.931568569324174,
            "bugs": 0.004643856189774725,
            "time": 0.7739760316291208
          }
        }
      },
      {
        "name": "applyWithoutProgram",
        "line": 189,
        "complexity": {
          "sloc": {
            "physical": 4,
            "logical": 2
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 2,
              "total": 6,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 5,
              "total": 8,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 14,
            "vocabulary": 7,
            "difficulty": 1.6,
            "volume": 39.302968908806456,
            "effort": 62.884750254090335,
            "bugs": 0.01310098963626882,
            "time": 3.493597236338352
          }
        }
      },
      {
        "name": "apply",
        "line": 194,
        "complexity": {
          "sloc": {
            "physical": 244,
            "logical": 108
          },
          "cyclomatic": 29,
          "halstead": {
            "operators": {
              "distinct": 18,
              "total": 276,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 62,
              "total": 308,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 584,
            "vocabulary": 80,
            "difficulty": 44.70967741935484,
            "volume": 3692.0060074142193,
            "effort": 165068.39762180994,
            "bugs": 1.230668669138073,
            "time": 9170.466534544998
          }
        }
      },
      {
        "name": "<anonymous>",
        "line": 244,
        "complexity": {
          "sloc": {
            "physical": 85,
            "logical": 12
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 7,
              "total": 19,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 6,
              "total": 14,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 33,
            "vocabulary": 13,
            "difficulty": 8.166666666666668,
            "volume": 122.11451069865605,
            "effort": 997.2685040390245,
            "bugs": 0.04070483689955202,
            "time": 55.403805779945806
          }
        }
      },
      {
        "name": "<anonymous>",
        "line": 255,
        "complexity": {
          "sloc": {
            "physical": 19,
            "logical": 10
          },
          "cyclomatic": 4,
          "halstead": {
            "operators": {
              "distinct": 12,
              "total": 40,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 19,
              "total": 43,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 83,
            "vocabulary": 31,
            "difficulty": 13.578947368421051,
            "volume": 411.19829376211067,
            "effort": 5583.639988980239,
            "bugs": 0.13706609792070357,
            "time": 310.2022216100133
          }
        }
      },
      {
        "name": "<anonymous>",
        "line": 277,
        "complexity": {
          "sloc": {
            "physical": 19,
            "logical": 16
          },
          "cyclomatic": 5,
          "halstead": {
            "operators": {
              "distinct": 12,
              "total": 42,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 20,
              "total": 46,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 88,
            "vocabulary": 32,
            "difficulty": 13.799999999999999,
            "volume": 440,
            "effort": 6071.999999999999,
            "bugs": 0.14666666666666667,
            "time": 337.33333333333326
          }
        }
      },
      {
        "name": "<anonymous>",
        "line": 301,
        "complexity": {
          "sloc": {
            "physical": 7,
            "logical": 6
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 7,
              "total": 18,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 10,
              "total": 20,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 38,
            "vocabulary": 17,
            "difficulty": 7,
            "volume": 155.3235879675129,
            "effort": 1087.2651157725904,
            "bugs": 0.0517745293225043,
            "time": 60.403617542921694
          }
        }
      },
      {
        "name": "<anonymous>",
        "line": 311,
        "complexity": {
          "sloc": {
            "physical": 16,
            "logical": 13
          },
          "cyclomatic": 4,
          "halstead": {
            "operators": {
              "distinct": 11,
              "total": 31,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 16,
              "total": 33,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 64,
            "vocabulary": 27,
            "difficulty": 11.34375,
            "volume": 304.312800138462,
            "effort": 3452.0483265706785,
            "bugs": 0.10143760004615401,
            "time": 191.7804625872599
          }
        }
      },
      {
        "name": "applyUniformList",
        "line": 439,
        "complexity": {
          "sloc": {
            "physical": 34,
            "logical": 23
          },
          "cyclomatic": 5,
          "halstead": {
            "operators": {
              "distinct": 12,
              "total": 52,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 24,
              "total": 56,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 108,
            "vocabulary": 36,
            "difficulty": 14,
            "volume": 558.3519001557697,
            "effort": 7816.926602180776,
            "bugs": 0.18611730005192323,
            "time": 434.2737001211542
          }
        }
      },
      {
        "name": "applyAttributeMap",
        "line": 474,
        "complexity": {
          "sloc": {
            "physical": 29,
            "logical": 19
          },
          "cyclomatic": 7,
          "halstead": {
            "operators": {
              "distinct": 12,
              "total": 42,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 18,
              "total": 47,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 89,
            "vocabulary": 30,
            "difficulty": 15.666666666666668,
            "volume": 436.71326300915814,
            "effort": 6841.841120476812,
            "bugs": 0.14557108766971938,
            "time": 380.10228447093397
          }
        }
      },
      {
        "name": "getObjectPair",
        "line": 504,
        "complexity": {
          "sloc": {
            "physical": 3,
            "logical": 3
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 3,
              "total": 4,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 4,
              "total": 7,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 11,
            "vocabulary": 7,
            "difficulty": 2.625,
            "volume": 30.880904142633646,
            "effort": 81.06237337441333,
            "bugs": 0.010293634714211216,
            "time": 4.503465187467407
          }
        }
      },
      {
        "name": "pushUniformsList",
        "line": 507,
        "complexity": {
          "sloc": {
            "physical": 24,
            "logical": 22
          },
          "cyclomatic": 5,
          "halstead": {
            "operators": {
              "distinct": 14,
              "total": 73,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 27,
              "total": 81,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 154,
            "vocabulary": 41,
            "difficulty": 21,
            "volume": 825.0630087111849,
            "effort": 17326.323182934884,
            "bugs": 0.27502100290372833,
            "time": 962.5735101630491
          }
        }
      },
      {
        "name": "popUniformsList",
        "line": 531,
        "complexity": {
          "sloc": {
            "physical": 7,
            "logical": 6
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 7,
              "total": 16,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 10,
              "total": 19,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 35,
            "vocabulary": 17,
            "difficulty": 6.6499999999999995,
            "volume": 143.0611994437619,
            "effort": 951.3569763010165,
            "bugs": 0.04768706648125397,
            "time": 52.85316535005647
          }
        }
      },
      {
        "name": "applyTextureAttributeMapList",
        "line": 539,
        "complexity": {
          "sloc": {
            "physical": 34,
            "logical": 25
          },
          "cyclomatic": 7,
          "halstead": {
            "operators": {
              "distinct": 12,
              "total": 57,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 25,
              "total": 64,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 121,
            "vocabulary": 37,
            "difficulty": 15.36,
            "volume": 630.3438572411029,
            "effort": 9682.08164722334,
            "bugs": 0.21011461908036763,
            "time": 537.8934248457412
          }
        }
      },
      {
        "name": "setGlobalDefaultValue",
        "line": 573,
        "complexity": {
          "sloc": {
            "physical": 11,
            "logical": 7
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 6,
              "total": 26,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 11,
              "total": 28,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 54,
            "vocabulary": 17,
            "difficulty": 7.636363636363637,
            "volume": 220.72299342751836,
            "effort": 1685.5210407192312,
            "bugs": 0.07357433114250612,
            "time": 93.64005781773507
          }
        }
      },
      {
        "name": "pushAttributeMap",
        "line": 585,
        "complexity": {
          "sloc": {
            "physical": 26,
            "logical": 21
          },
          "cyclomatic": 5,
          "halstead": {
            "operators": {
              "distinct": 14,
              "total": 75,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 29,
              "total": 81,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 156,
            "vocabulary": 43,
            "difficulty": 19.551724137931036,
            "volume": 846.4973017335273,
            "effort": 16550.481726996895,
            "bugs": 0.2821657672445091,
            "time": 919.471207055383
          }
        }
      },
      {
        "name": "popAttributeMap",
        "line": 611,
        "complexity": {
          "sloc": {
            "physical": 9,
            "logical": 8
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 7,
              "total": 18,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 12,
              "total": 24,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 42,
            "vocabulary": 19,
            "difficulty": 7,
            "volume": 178.41295556463058,
            "effort": 1248.8906889524142,
            "bugs": 0.059470985188210194,
            "time": 69.38281605291189
          }
        }
      },
      {
        "name": "setIndexArray",
        "line": 621,
        "complexity": {
          "sloc": {
            "physical": 10,
            "logical": 6
          },
          "cyclomatic": 3,
          "halstead": {
            "operators": {
              "distinct": 6,
              "total": 15,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 8,
              "total": 18,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 33,
            "vocabulary": 14,
            "difficulty": 6.75,
            "volume": 125.64271242790092,
            "effort": 848.0883088883312,
            "bugs": 0.04188090414263364,
            "time": 47.116017160462846
          }
        }
      },
      {
        "name": "lazyDisablingOfVertexAttributes",
        "line": 632,
        "complexity": {
          "sloc": {
            "physical": 9,
            "logical": 7
          },
          "cyclomatic": 3,
          "halstead": {
            "operators": {
              "distinct": 7,
              "total": 21,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 11,
              "total": 23,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 44,
            "vocabulary": 18,
            "difficulty": 7.318181818181818,
            "volume": 183.47670006346175,
            "effort": 1342.7158504644246,
            "bugs": 0.061158900021153914,
            "time": 74.59532502580137
          }
        }
      },
      {
        "name": "applyDisablingOfVertexAttributes",
        "line": 642,
        "complexity": {
          "sloc": {
            "physical": 40,
            "logical": 26
          },
          "cyclomatic": 8,
          "halstead": {
            "operators": {
              "distinct": 11,
              "total": 77,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 32,
              "total": 84,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 161,
            "vocabulary": 43,
            "difficulty": 14.4375,
            "volume": 873.6286255070378,
            "effort": 12613.013280757858,
            "bugs": 0.29120954183567926,
            "time": 700.7229600421032
          }
        }
      },
      {
        "name": "setVertexAttribArray",
        "line": 682,
        "complexity": {
          "sloc": {
            "physical": 29,
            "logical": 17
          },
          "cyclomatic": 6,
          "halstead": {
            "operators": {
              "distinct": 8,
              "total": 43,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 22,
              "total": 57,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 100,
            "vocabulary": 30,
            "difficulty": 10.363636363636363,
            "volume": 490.6890595608519,
            "effort": 5085.322980903374,
            "bugs": 0.1635630198536173,
            "time": 282.5179433835208
          }
        }
      }
    ],
    "maintainability": 56.36097929462623,
    "module": "/State.js"
  },
  "jshint": {
    "messages": []
  }
}