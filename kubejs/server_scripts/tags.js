onEvent('tags.blocks', (event) => {
    event.add('forge:storage_blocks/tin', 'ftbic:tin_block');
    event.add('forge:storage_blocks/lead', 'ftbic:lead_block');
    event.add('forge:storage_blocks/iridium', 'ftbic:iridium_block');
    event.add('forge:storage_blocks/aluminum', 'ftbic:aluminum_block');
    event.add('forge:storage_blocks/bronze', 'ftbic:bronze_block');
    event.add('forge:storage_blocks/enderium', 'ftbic:enderium_block');
    event.add('forge:storage_blocks/uranium', 'ftbic:uranium_block');
    event.add('forge:relocation_not_supported', 'domum_ornamentum:fancy_door');
    event.add('forge:relocation_not_supported', 'domum_ornamentum:vanilla_doors_compat');

});

onEvent('tags.items', (event) => {
    event.add('forge:furnace', 'minecraft:furnace');
    event.add('forge:furnace', 'quark:deepslate_furnace');
    event.add('forge:furnace', 'quark:blackstone_furnace');
    event.add('balm:wooden_chests', 'sophisticatedstorage:chest');
    event.add('forge:chests/wooden', 'sophisticatedstorage:chest');
    event.add('forge:chests', 'sophisticatedstorage:chest');
});