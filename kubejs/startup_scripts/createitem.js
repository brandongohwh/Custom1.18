onEvent('item.registry', event => {
 
    event.create('tiny_coal').burnTime(200).maxStackSize(64);
    event.create('tiny_charcoal').burnTime(200).maxStackSize(64);
  
  })