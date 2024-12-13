const heads = [
  "direwolf20",
  "kSunekaer",
  "Naxanria",
  "Loneztar",
  "slowpoke101",
  "Jake_Evans",
  "ErrorMikey",
  "LatvianModder",
  "MaxNeedsSnacks",
  "DinnerBeef",
  "UnRealDinnerbone",
  "NMX_R3GEN",
  "OfficialyAwsome",
  "manmaed",
  "Gaz492",
];

onEvent("entity.spawned", (event) => {
  if (event.entity.type === "minecraft:wandering_trader") {
    //Grabbing traders current NBT
    let nbt = event.entity.fullNBT;

    if (
      nbt.Offers.Recipes.some(
        (recipe) => recipe.sell.id === "minecraft:player_head"
      )
    ) {
      return;
    }

    //
    let headsCopy = [];

    //Make a copy of the default heads list
    headsCopy = Array.from(heads);

    //Get all players on the server
    event.server.players.forEach((name) => {
      //Add the players that isn't in the array all to the array
      if (!headsCopy.some((n) => n === name.toString())) {
        headsCopy.push(name);
      }
    });

    //Shuffling the heads array a lot
    headsCopy = headsCopy
      .sort(() => Math.random() - 0.6)
      .sort(() => Math.random() - 0.2)
      .sort(() => Math.random() - 0.1);

    //Taking the first 3 names from the shuffled array
    headsCopy.slice(0, 3).forEach((name) => {
      //Get random price between 1 and 3
      let price = Math.round(Math.random() * (3 - 1) + 1);

      //Adding the trade to the NBT data
      nbt.Offers.Recipes.add(
        NBT.compoundTag({
          maxUses: 3,
          buy: Item.of(`${price}x minecraft:emerald`).toNBT(),
          sell: Item.of("minecraft:player_head", { SkullOwner: name }).toNBT(),
        })
      );
    });

    //Merging the NBT data back on to the trader
    event.entity.mergeFullNBT(nbt);
  }
});
