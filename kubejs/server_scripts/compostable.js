//priority: 100
onEvent('recipes.compostables', event => {

    const compostable = [
    "createcafe:cassava_seeds",
    "sushigocrafting:rice_seeds",
    "sushigocrafting:cucumber_seeds",
    "sushigocrafting:soy_seeds",
    "sushigocrafting:wasabi_seeds",
    "sushigocrafting:sesame_seeds",
    "sushigocrafting:sesame_seed",
    "thermal:hops_seeds",
    "bloodmagic:growing_doubt"]
    compostable.forEach((seed) => {
        event.add(seed, 0.33);
    
    });

})


