// priority: 100

settings.logAddedRecipes = false;
settings.logRemovedRecipes = false;
settings.logSkippedRecipes = false;
settings.logErroringRecipes = false;




onEvent("recipes", (event) => {
  const { smelting, blasting } = event.recipes.minecraft;

  const sleepingBagsColors = [
    "white",
    "orange",
    "magenta",
    "light_blue",
    "yellow",
    "lime",
    "pink",
    "gray",
    "light_gray",
    "cyan",
    "purple",
    "blue",
    "brown",
    "green",
    "red",
    "black",
  ];

  sleepingBagsColors.forEach((color) => {
    event.remove({ id: `comforts:sleeping_bag_${color}` });
    event.shaped(
      Item.of(`comforts:sleeping_bag_${color}`),
      [" W ", " W ", " W "],
      {
        W: `minecraft:${color}_wool`,
      }
    );
  });

  const createCrushedOre = [
    {
      name: "silver",
      raw: "immersiveengineering:raw_silver",
      ore: "immersiveengineering:ore_silver",
      deepslate_ore: "immersiveengineering:deepslate_ore_silver",
    },
    {
      name: "tin",
      raw: "ftbic:tin_chunk",
      ore: "ftbic:tin_ore",
      deepslate_ore: "ftbic:deepslate_tin_ore",
    },
    {
      name: "lead",
      raw: "ftbic:lead_chunk",
      ore: "ftbic:lead_ore",
      deepslate_ore: "ftbic:deepslate_lead_ore",
    },
    {
      name: "aluminum",
      raw: "ftbic:aluminum_chunk",
      ore: "ftbic:aluminum_ore",
      deepslate_ore: "ftbic:deepslate_aluminum_ore",
    },
    {
      name: "uranium",
      raw: "ftbic:uranium_chunk",
      ore: "ftbic:uranium_ore",
      deepslate_ore: "ftbic:deepslate_uranium_ore",
    },
    {
      name: "nickel",
      raw: "immersiveengineering:raw_nickel",
      ore: "immersiveengineering:ore_nickel",
      deepslate_ore: "immersiveengineering:deepslate_ore_nickel",
    },
  ];

  createCrushedOre.forEach((r) => {
    event.recipes.createCrushing(
      [
        `create:crushed_${r.name}_ore`,
        Item.of(`create:crushed_${r.name}_ore`).withChance(0.25),
        Item.of(`create:experience_nugget`).withChance(0.75),
        Item.of(`minecraft:cobblestone`).withChance(0.125),
      ],
      r.ore
    );
    event.recipes.createCrushing(
      [
        `2x create:crushed_${r.name}_ore`,
        Item.of(`create:crushed_${r.name}_ore`).withChance(0.25),
        Item.of(`create:experience_nugget`).withChance(0.75),
        Item.of(`minecraft:cobbled_deepslate`).withChance(0.125),
      ],
      r.deepslate_ore
    );
    event.recipes.createCrushing(
      [
        `create:crushed_${r.name}_ore`,
        Item.of(`create:experience_nugget`).withChance(0.75),
      ],
      r.raw
    );
  });

  let corundumCraftingUncrafting = function (colors) {
    colors.forEach((color) => {
      event.shaped("quark:" + color + "_corundum", ["CC", "CC"], {
        C: "quark:" + color + "_corundum_cluster",
      });
      event.shapeless("4x quark:" + color + "_corundum_cluster", [
        "quark:" + color + "_corundum",
      ]);
    });
  };

  let stonecutter = function (arrayOfBlocks) {
    let cpt = 0;
    while (cpt < arrayOfBlocks.length) {
      let otherBlocks = arrayOfBlocks
        .slice(0, cpt)
        .concat(arrayOfBlocks.slice(cpt + 1));
      event.stonecutting(arrayOfBlocks[cpt], otherBlocks);
      cpt++;
    }
  };

  stonecutter(["create:limestone", "quark:limestone"]);
  corundumCraftingUncrafting([
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
    "white",
    "black",
  ]);
  stonecutter(['createdeco:gold_bars', 'createdeco:gold_bars_overlay', 'quark:gold_bars', 'tconstruct:gold_bars', 'cyclic:gold_bars']);
  stonecutter(['connectedglass:tinted_borderless_glass', 'minecraft:tinted_glass', 'cyclic:dark_glass'])

  event.shapeless(Item.of("minecraft:ladder"), ["quark:spruce_ladder"]);
  event.shapeless(Item.of("minecraft:ladder"), ["quark:birch_ladder"]);
  event.shapeless(Item.of("minecraft:ladder"), ["quark:jungle_ladder"]);
  event.shapeless(Item.of("minecraft:ladder"), ["quark:acacia_ladder"]);
  event.shapeless(Item.of("minecraft:ladder"), ["quark:dark_oak_ladder"]);
  event.shapeless(Item.of("minecraft:ladder"), ["quark:crimson_ladder"]);
  event.shapeless(Item.of("minecraft:ladder"), ["quark:warped_ladder"]);
  event.shapeless("4x minecraft:clay_ball", ["#forge:storage_blocks/clay"]);

  event.remove({ id: "minecraft:cut_copper_from_copper_block_stonecutting" });
  event.stonecutting("minecraft:copper_block", [
    "minecraft:cut_copper",
    "minecraft:exposed_cut_copper",
    "minecraft:weathered_cut_copper",
    "minecraft:oxidized_cut_copper",
  ]);
  event.stonecutting("minecraft:cut_copper", "minecraft:copper_block");

  event.remove({ id: "minecraft:bread" });
  event.remove({ id: "quark:tweaks/crafting/utility/bent/bread" });
  event.shapeless("minecraft:bread", [
    "#forge:crops/wheat",
    "#forge:crops/wheat",
    "#forge:crops/wheat",
  ]);
  event.shapeless("minecraft:wheat_seeds", ["#forge:crops/wheat"]);

  event.shaped("16x minecraft:stick", ["L", "L"], {
    L: "#minecraft:logs",
  });

  event.shaped("minecraft:chest", ["WWW", "W W", "WWW"], {
    W: [
      "ars_nouveau:archwood_planks",
      "botania:livingwood_planks",
      "botania:mossy_livingwood_planks",
      "botania:framed_livingwood",
      "botania:pattern_framed_livingwood",
      "botania:dreamwood_planks",
      "botania:mossy_dreamwood_planks",
      "botania:framed_dreamwood",
      "botania:pattern_framed_dreamwood",
      "botania:shimmerwood_planks",
      "forbidden_arcanus:fungyss_planks",
      "forbidden_arcanus:cherrywood_planks",
      "forbidden_arcanus:carved_cherrywood_planks",
      "forbidden_arcanus:mysterywood_planks",
      "forbidden_arcanus:edelwood_planks",
      "forbidden_arcanus:arcane_edelwood_planks",
      "integrateddynamics:menril_planks",
      "myrtrees:rubberwood_planks",
      "naturesaura:ancient_planks",
      "quark:azalea_planks",
      "quark:blossom_planks",
      "tconstruct:greenheart_planks",
      "tconstruct:skyroot_planks",
      "tconstruct:bloodshroom_planks",
    ],
  });

  event.shaped("4x minecraft:chest", ["WWW", "W W", "WWW"], {
    W: [
      "ars_nouveau:blue_archwood_log",
      "ars_nouveau:blue_archwood_wood",
      "ars_nouveau:purple_archwood_log",
      "ars_nouveau:purple_archwood_wood",
      "ars_nouveau:green_archwood_log",
      "ars_nouveau:green_archwood_wood",
      "ars_nouveau:red_archwood_log",
      "ars_nouveau:red_archwood_wood",
      "ars_nouveau:stripped_blue_archwood_log",
      "ars_nouveau:stripped_blue_archwood_wood",
      "ars_nouveau:stripped_green_archwood_log",
      "ars_nouveau:stripped_green_archwood_wood",
      "ars_nouveau:stripped_red_archwood_log",
      "ars_nouveau:stripped_red_archwood_wood",
      "ars_nouveau:stripped_purple_archwood_log",
      "ars_nouveau:stripped_purple_archwood_wood",
      "botania:livingwood_log",
      "botania:stripped_livingwood_log",
      "botania:glimmering_livingwood_log",
      "botania:glimmering_stripped_livingwood_log",
      "botania:livingwood",
      "botania:stripped_livingwood",
      "botania:glimmering_stripped_livingwood",
      "botania:glimmering_livingwood",
      "botania:dreamwood_log",
      "botania:glimmering_dreamwood_log",
      "botania:stripped_dreamwood_log",
      "botania:glimmering_stripped_dreamwood_log",
      "botania:dreamwood",
      "botania:stripped_dreamwood",
      "botania:glimmering_stripped_dreamwood",
      "botania:glimmering_dreamwood",
      "forbidden_arcanus:cherrywood_log",
      "forbidden_arcanus:thin_cherrywood_log",
      "forbidden_arcanus:mysterywood_log",
      "forbidden_arcanus:edelwood_log",
      "forbidden_arcanus:carved_edelwood_log",
      "forbidden_arcanus:stripped_cherrywood_log",
      "forbidden_arcanus:stripped_mysterywood_log",
      "forbidden_arcanus:cherrywood",
      "forbidden_arcanus:mysterywood",
      "forbidden_arcanus:stripped_cherrywood",
      "forbidden_arcanus:stripped_mysterywood",
      "integrateddynamics:menril_log",
      "integrateddynamics:menril_log_stripped",
      "integrateddynamics:menril_wood",
      "integrateddynamics:menril_wood_stripped",
      "integrateddynamics:menril_log_filled",
      "quark:azalea_log",
      "quark:azalea_wood",
      "quark:stripped_azalea_log",
      "quark:stripped_azalea_wood",
      "quark:blossom_log",
      "quark:blossom_wood",
      "quark:stripped_blossom_log",
      "quark:stripped_blossom_wood",
      "tconstruct:stripped_greenheart_log",
      "tconstruct:stripped_greenheart_wood",
      "tconstruct:greenheart_log",
      "tconstruct:greenheart_wood",
      "tconstruct:stripped_skyroot_log",
      "tconstruct:stripped_skyroot_wood",
      "tconstruct:skyroot_log",
      "tconstruct:skyroot_wood",
      "tconstruct:stripped_bloodshroom_log",
      "tconstruct:stripped_bloodshroom_wood",
      "tconstruct:bloodshroom_log",
      "tconstruct:bloodshroom_wood",
      "myrtrees:rubberwood_log",
    ],
  });


  event.shaped("minecraft:furnace", ["CCC", "C C", "CCC"], {
    C: [
      "minecraft:cobblestone",
      "minecraft:mossy_cobblestone",
      "minecraft:infested_cobblestone",
    ],
  });
  event.remove({ output: "quark:brick_vertical_slab" });

  event.shapeless("createdeco:gold_bars", "quark:gold_bars");
  event.shapeless("quark:gold_bars", "createdeco:gold_bars_overlay");
  //event.shapeless("createdeco:gold_bars_overlay", "createdeco:gold_bars");

  event.shapeless("alloyed:bronze_block", "ftbic:bronze_block");
  event.shapeless("ftbic:bronze_block", "alloyed:bronze_block");

  event.remove({ id: "botania:livingwood_twig" });
  event.shaped("botania:livingwood_twig", ["CC"], {
    C: ["#botania:livingwood_logs"],
  });

  event.recipes.mekanismEnriching(
    `5x ae2:certus_quartz_dust`,
    `ae2:deepslate_quartz_ore`
  );
  event.recipes.mekanismEnriching(
    `2x elementalcraft:inert_crystal`,
    `elementalcraft:deepslate_inert_crystal_ore`
  )

  event.remove({ output: "structurize:sceptergold" });
  event.shaped("structurize:sceptergold", [" I", "S "], {
    S: "#forge:rods/wooden",
    I: "#minecraft:stone_crafting_materials",
  });

  event.remove({ output: "structurize:sceptersteel" });
  event.shaped("structurize:sceptersteel", ["  S", " I ", "S  "], {
    S: "#forge:rods/wooden",
    I: "minecraft:iron_ingot",
  });
  event.remove({ output: "forbidden_arcanus:boom_arrow" });
  event.shaped("forbidden_arcanus:boom_arrow", [" B ", "AAA", " A "], {
    B: "minecraft:tnt",
    A: "minecraft:arrow",
  });

  event.remove({ output: "soulshards:vile_dust" });
  event.smelting("soulshards:vile_dust", "create:scoria").xp(0.7);

  event.remove({ output: "botania:dreamwood_twig" });
  event.shaped("botania:dreamwood_twig", ["II"], {
    I: "#botania:dreamwood_logs",
  });

  event.remove({ id: "ftbic:extruding/copper_wire" });
  event.remove({ id: "ftbic:extruding/gold_wire" });
  event.remove({ id: "ftbic:extruding/aluminum_wire" });
  event.remove({ id: "ftbic:extruding/enderium_wire" });
  event.recipes.ftbic.rolling(`2x ftbic:copper_wire`, [`#forge:plates/copper`]);
  event.recipes.ftbic.rolling(`2x ftbic:gold_wire`, [`#forge:plates/gold`]);
  event.recipes.ftbic.rolling(`2x ftbic:aluminum_wire`, [
    `#forge:plates/aluminum`,
  ]);
  event.recipes.ftbic.rolling(`2x ftbic:enderium_wire`, [
    `#forge:plates/enderium`,
  ]);

  event.remove({ id: "forbidden_arcanus:fungyss_stairs" });
  event.shaped("forbidden_arcanus:fungyss_stairs", ["I  ", "II ", "III"], {
    I: "forbidden_arcanus:fungyss_planks",
  });
  event.remove({ id: "forbidden_arcanus:cherrywood_stairs" });
  event.shaped("forbidden_arcanus:cherrywood_stairs", ["I  ", "II ", "III"], {
    I: "forbidden_arcanus:cherrywood_planks",
  });
  event.remove({ id: "forbidden_arcanus:mysterywood_stairs" });
  event.shaped("forbidden_arcanus:mysterywood_stairs", ["I  ", "II ", "III"], {
    I: "forbidden_arcanus:mysterywood_planks",
  });
  event.remove({ id: "forbidden_arcanus:edelwood_stairs" });
  event.shaped("forbidden_arcanus:edelwood_stairs", ["I  ", "II ", "III"], {
    I: "forbidden_arcanus:edelwood_planks",
  });

  event.recipes.thermal.pulverizer(
    [
      "create:crushed_zinc_ore",
      Item.of("create:crushed_zinc_ore").withChance(0.3333),
    ],
    `create:raw_zinc`
  );
  event.recipes.ftbic.macerating(
    [
      "create:crushed_zinc_ore",
      Item.of("create:crushed_zinc_ore").withChance(0.3333),
    ],
    `create:raw_zinc`
  );
  event.recipes.immersiveengineeringCrusher(
    "create:crushed_zinc_ore",
    `create:raw_zinc`,
    [Item.of("create:crushed_zinc_ore").withChance(0.3333)]
  );

  event.remove({ output: "ae2wtlib:infinity_booster_card" }
  );


 event.shapeless('8x kubejs:tiny_coal', ['minecraft:coal']);
 event.shapeless('minecraft:coal',['8x kubejs:tiny_coal']);
 event.shapeless('8x kubejs:tiny_charcoal', ['minecraft:charcoal']);
 event.shapeless('minecraft:charcoal',['8x kubejs:tiny_charcoal']);

 //Fix verderium
 event.custom({ "type": "bigreactors:fluidizersolid", "ingredient": { "ingredient": { "item": "ftbic:uranium_ingot" }, "count": 1 }, "result": { "fluid": "tconstruct:molten_uranium", "count": 1000 } });
 event.custom({ "type": "bigreactors:fluidizersolid", "ingredient": { "ingredient": { "item": "ftbic:uranium_block" }, "count": 1 }, "result": { "fluid": "tconstruct:molten_uranium", "count": 9000 } });

 event.custom({
    "type": "bigreactors:fluidizerfluidmixing",
    "ingredient1": {"fluid": {"fluid": "tconstruct:molten_uranium","count": 2000}},
    "ingredient2": {"fluid": {"fluid": "bigreactors:blutonium","count": 1000}},
    "result": {"fluid": "bigreactors:verderium","count": 2000}
  
})
 event.custom({
    "type": "bigreactors:fluidizerfluidmixing",
    "ingredient1": {"fluid": {"fluid": "bigreactors:blutonium","count": 1000}
    },
    "ingredient2": {"fluid": {"fluid": "tconstruct:molten_uranium","count": 2000}
    },
    "result": {"fluid": "bigreactors:verderium","count": 2000}
 })

event.shapeless("immersiveengineering:raw_block_uranium", ["9x #forge:raw_materials/uranium"]);
event.shapeless("#forge:storage_blocks/raw_aluminum", ["9x #forge:raw_materials/aluminum"]);
event.shaped("extrastorage:storagepart_256k", ["PSP", "SRS", "PIP"], {
  P: "refinedstorage:advanced_processor",
  I: "refinedstorage:quartz_enriched_iron",
  S: "refinedstorage:64k_storage_part",
  R: "minecraft:redstone"
});
event.shaped("quark:gold_bars", ["GGG","GGG",""], {G: "minecraft:gold_ingot"});
event.shaped('minecraft:hopper', ['ILI', 'ILI', ' I '],{I: 'minecraft:iron_ingot', L: '#minecraft:logs'}).id('FTB:Hopper_Logs')





event.shapeless(Item.of('eccentrictome:tome', '{"eccentrictome:data":{advancedperipherals:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"advancedperipherals:manual"}},bigreactors:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"bigreactors:erguide"}},cookingforblockheads:{Count:1b,id:"cookingforblockheads:recipe_book"},cookingforblockheads_0:{Count:1b,id:"cookingforblockheads:crafting_book",tag:{"akashictome:definedMod":"cookingforblockheads_0"}},elementalcraft:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"elementalcraft:element_book"}},hexcasting:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"hexcasting:thehexbook"}},industrialforegoing:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"industrialforegoing:industrial_foregoing"}},laserio:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"laserio:laseriobook"}},littlelogistics:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"littlelogistics:guide"}},modularrouters:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"modularrouters:book"}},naturesaura:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"naturesaura:book"}},pneumaticcraft:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"pneumaticcraft:book"}},rebornstorage:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"rebornstorage:rs_book"}},simpleplanes:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"simpleplanes:planes_book"}},sushigocrafting:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"sushigocrafting:sushigocrafting"}},tconstruct:{Count:1b,id:"tconstruct:encyclopedia"},tconstruct_0:{Count:1b,id:"tconstruct:puny_smelting",tag:{"akashictome:definedMod":"tconstruct_0"}},tconstruct_1:{Count:1b,id:"tconstruct:mighty_smelting",tag:{"akashictome:definedMod":"tconstruct_1"}},tconstruct_2:{Count:1b,id:"tconstruct:tinkers_gadgetry",tag:{"akashictome:definedMod":"tconstruct_2",mantle:{book:{current_page:""}}}},tconstruct_3:{Count:1b,id:"tconstruct:fantastic_foundry",tag:{"akashictome:definedMod":"tconstruct_3"}},tconstruct_4:{Count:1b,id:"tconstruct:encyclopedia",tag:{"akashictome:definedMod":"tconstruct_4",mantle:{book:{current_page:""}}}},thermal:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"thermal:guidebook"}}},"eccentrictome:mods":{advancedperipherals:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"advancedperipherals:manual"}}},ars_nouveau:{0:{Count:1b,id:"ars_nouveau:worn_notebook"}},bigreactors:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"bigreactors:erguide"}}},bloodmagic:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"bloodmagic:guide"}}},cookingforblockheads:{0:{Count:1b,id:"cookingforblockheads:recipe_book"},1:{Count:1b,id:"cookingforblockheads:no_filter_edition"},2:{Count:1b,id:"cookingforblockheads:crafting_book"}},elementalcraft:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"elementalcraft:element_book"}}},hexcasting:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"hexcasting:thehexbook"}}},immersiveengineering:{0:{Count:1b,id:"immersiveengineering:manual"}},industrialforegoing:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"industrialforegoing:industrial_foregoing"}}},laserio:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"laserio:laseriobook"}}},littlelogistics:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"littlelogistics:guide"}}},modularrouters:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"modularrouters:book"}}},naturesaura:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"naturesaura:book"}}},pneumaticcraft:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"pneumaticcraft:book"}}},rebornstorage:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"rebornstorage:rs_book"}}},simpleplanes:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"simpleplanes:planes_book"}}},sushigocrafting:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"sushigocrafting:sushigocrafting"}}},tconstruct:{0:{Count:1b,id:"tconstruct:materials_and_you"},1:{Count:1b,id:"tconstruct:puny_smelting"},2:{Count:1b,id:"tconstruct:encyclopedia"},3:{Count:1b,id:"tconstruct:fantastic_foundry"},4:{Count:1b,id:"tconstruct:tinkers_gadgetry"},5:{Count:1b,id:"tconstruct:mighty_smelting"}},thermal:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"thermal:guidebook"}}}},"eccentrictome:version":1}'), ['minecraft:book', '#forge:bookshelves']).id('akashictome:tome');
//Removerecipes by RecipeID

 const removeRecipesId = [
  "bigreactors:fluidizer/fluidmixing/verderium_1",
  "bigreactors:fluidizer/fluidmixing/verderium_2",
  "mekanism:processing/tin/raw/from_raw_block",
  "mekanism:processing/lead/raw/from_raw_block",
  "mekanism:processing/uranium/raw/from_raw_block",
  "mekanism:processing/tin/raw_storage_blocks/from_raw",
  "mekanism:processing/lead/raw_storage_blocks/from_raw",
  "mekanism:processing/uranium/raw_storage_blocks/from_raw",
  "immersiveengineering:crafting/raw_block_aluminum_to_raw_aluminum",
  "immersiveengineering:crafting/raw_block_lead_to_raw_lead",
  "immersiveengineering:crafting/raw_block_uranium_to_raw_uranium",
  "immersiveengineering:crafting/raw_aluminum_to_raw_block_aluminum",
  "immersiveengineering:crafting/raw_lead_to_raw_block_lead",
  "immersiveengineering:crafting/raw_uranium_to_raw_block_uranium",
  "quark:building/crafting/compressed/charcoal_block",
  "quark:building/crafting/compressed/charcoal_block_uncompress",
  "quark:building/crafting/furnaces/cobblestone_furnace",
  "minecraft:daylight_detector",
  "minecraft:comparator",
  "minecraft:cake",
  "quark:building/crafting/compressed/bamboo_block",
  //"createdeco:gold_bars_overlay",
  "quark:building/crafting/gold_bars",
  //"createdeco:gold_bars",
  "createdeco:gold_bars_from_panel",
  "thermal:machine/smelter/smelter_rose_gold_tools",
  "thermal:machine/smelter/smelter_rose_gold_armor",
  "thermal:machine/smelter/smelter_steel_tools",
  "thermal:machine/smelter/smelter_steel_armor",
  "akashictome:tome",
  "createcafe:compat/altar/blood_orange",
  "createdeco:red_andesite_lamp",
  "createdeco:green_andesite_lamp",
  "createdeco:blue_andesite_lamp",
  "cyclic:crusher/dye_cyan",
  "extrastorage:part/storagepart_256k",
  "thermal:compat/tconstruct/tree_extractor_tconstruct_ender_slime",
  "thermal:compat/tconstruct/tree_extractor_tconstruct_blood_slime",
  "eccentrictome:tome",
  'cyclic:dark_glass',
  'cyclic:stonecutting/dark_glass',
  'cyclic:unbreakable_block',
  'cyclic:unbreakable_reactive'

 ]
 removeRecipesId.forEach((recipeId) => {
  event.remove({ id: recipeId});
 });

  event.replaceInput({}, 'minecraft:furnace', '#forge:furnace');


});


//Mechanical Squeezer fix thanks to Manaisle

onEvent("recipes", (event) => {
	event.forEachRecipeAsync({type: "integrateddynamics:squeezer"}, recipe => {
		if (recipe.hasOutput({tag: "forge:raw_materials"}, false)) {
			let newOutputItem = recipe.outputItems.get(0).withCount(2).withChance(1.0);
			recipe.outputItems.clear();
			recipe.outputItems.add(newOutputItem);
		}
	});

	event.forEachRecipeAsync({type: "integrateddynamics:mechanical_squeezer"}, recipe => {
		if (recipe.hasOutput({tag: "forge:raw_materials"}, false)) {
			let newOutputItem = recipe.outputItems.get(0).withCount(2).withChance(1.0);
			recipe.outputItems.clear();
			recipe.outputItems.add(newOutputItem);
		}
	});  
});

 