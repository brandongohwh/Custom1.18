onEvent("worldgen.remove", (event) => {
  // event.printFeatures("underground_ores", "minecraft:plains");
  event.removeFeatureById("underground_ores", [
    "mekanism:ore_tin_small",
    "mekanism:ore_tin_large",
    "mekanism:ore_uranium_small",
    "mekanism:ore_uranium_buried",
    "mekanism:ore_lead_normal",
    "ae2:quartz_ore",
    "thermal:tin_ore",
    "thermal:lead_ore",
    "thermal:silver_ore",
    "thermal:nickel_ore",
  ]);
});

onEvent("worldgen.add", (event) => {
  event.addOre((ore) => {
    ore.id = "ae2:ores";
    ore.biomes = {
      not: [
        {
          category: "the_end",
        },
        {
          category: "nether",
        },
      ],
    };
    ore.addTarget("minecraft:stone", "ae2:quartz_ore");
    ore.addTarget("minecraft:deepslate", "ae2:deepslate_quartz_ore");
    ore.size = 5;
    ore.count(12);
    ore.triangleHeight(-34, 36);
    ore.squared();
  });
});
