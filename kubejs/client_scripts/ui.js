let metadataFile = JsonIO.read("config/metadata.json");

onEvent("ui.main_menu", (event) => {
  event.replace((ui) => {
    ui.fillBackground("ui:textures/bg.png", 1920, 1080);
    ui.widgetTexture = "ui:textures/widgets.png";

    // If MT is loaded
    if (Platform.mods.minetogether) {
      // MineTogether friends list
      ui.button((b) => {
        b.name = "Friends list";
        b.w = 70;
        b.x = ui.w - b.w - 5;
        b.y = 5;
        b.action = "minetogether:friends_list";
        b.shadow = false;
        b.color = 0x4a4a4a;
      });

      // MineTogether chat
      ui.imageButton((b) => {
        b.w = 20;
        b.x = ui.w - b.w - 80;
        b.y = 5;
        b.action = "minetogether:chat";
        b.texture = "ui:textures/chat.png";
      });

      // MineTogether order server
      ui.imageButton((b) => {
        b.w = 20;
        b.x = ui.w - b.w - 105;
        b.y = 5;
        b.action = "minetogether:order";
        b.texture = "ui:textures/creeper.png";
      });
    }

    // Singleplayer
    ui.button((b) => {
      b.name = Text.translate("menu.singleplayer");
      b.w = 150;
      b.x = ui.w - ui.w * 0.1 - b.w;
      b.y = ui.h / 2 - 32;
      b.action = "minecraft:singleplayer";
      b.shadow = false;
      b.color = 0x4a4a4a;
    });

    // Multiplayer
    ui.button((b) => {
      b.name = Text.translate("menu.multiplayer");
      b.w = 150;
      b.x = ui.w - ui.w * 0.1 - b.w;
      b.y = ui.h / 2 - 6;
      b.action = "minecraft:multiplayer";
      b.shadow = false;
      b.color = 0x4a4a4a;
    });

    // Mods
    ui.button((b) => {
      b.name = Text.translate("fml.menu.mods");
      b.w = 73;
      b.x = ui.w - ui.w * 0.1 - b.w;
      b.y = ui.h / 2 + 20;
      b.action = "forge:mod_list";
      b.shadow = false;
      b.color = 0x4a4a4a;
    });

    // Issue tracker
    ui.button((b) => {
      b.name = Text.of("Support");
      b.w = 73;
      b.x = ui.w - (ui.w * 0.1 + b.w + 5) - b.w;
      b.y = ui.h / 2 + 20;
      b.action = "https://www.feed-the-beast.com/support";
      b.shadow = false;
      b.color = 0x4a4a4a;
    });

    // Options
    ui.button((b) => {
      b.name = Text.translate("menu.options");
      b.w = 73;
      b.x = ui.w - (ui.w * 0.1 + b.w + 5) - b.w;
      b.y = ui.h / 2 + 62;
      b.action = "minecraft:options";
      b.shadow = false;
      b.color = 0x4a4a4a;
    });

    // Quit
    ui.button((b) => {
      b.name = Text.of("Quit");
      b.w = 73;
      b.x = ui.w - ui.w * 0.1 - b.w;
      b.y = ui.h / 2 + 62;
      b.action = "minecraft:quit";
      b.shadow = false;
      b.color = 0x4a4a4a;
    });

    // Aux
    ui.imageButton((b) => {
      b.w = 20;
      b.x = 5;
      b.y = 5;
      b.action = "ftbauxilium:opt_out";
      b.texture = "ui:textures/auxilium.png";
    });

    // Discord
    ui.imageButton((b) => {
      b.texture = "ui:textures/discord.png";
      b.w = 20;
      b.x = 30;
      b.y = 5;
      b.action = "https://go.ftb.team/wuWP";
      b.color = 0x4a4a4a;
    });

    // Pack logo
    ui.image((i) => {
      i.h = 203 * 0.0009 * ui.h;
      i.w = 964 * 0.0009 * ui.h;
      i.x = ui.w - ui.w * 0.02 - i.w;
      i.y = 40;
      i.texture = "ui:textures/logo.png";
    });

    //Dire
    ui.image((i) => {
      i.height = 870 * 0.00095 * ui.h;
      i.width = 779 * 0.00095 * ui.h;
      i.texture = "ui:textures/dire.png";
      i.y = ui.height - i.height + 35;
      i.x = 10;
      i.uv = [1, 1, 254, 255];
    });

    // Forge version
    ui.label((l) => {
      l.h = 10;
      l.name = Text.of("Forge Version: " + Platform.mods.forge.version).color(
        0x4a4a4a
      );
      l.x = ui.w - l.w - 3;
      l.y = ui.h - 31;
    });

    // Mods loaded
    ui.label((l) => {
      l.h = 10;
      l.name = Text.of(Platform.mods.size() + " Mods Loaded").color(0x4a4a4a);
      l.x = ui.w - l.w - 3;
      l.y = ui.h - 21;
    });

    // Mojang
    ui.label((l) => {
      l.h = 10;
      l.name = Text.of("Copyright Mojang AB").color(0x4a4a4a);
      l.x = ui.w - l.w - 3;
      l.y = ui.h - 11;
    });

    // Pack name and version from metadata file
    if (metadataFile) {
      ui.label((l) => {
        l.h = 10;
        l.name = Text.of(
          metadataFile.name + " v" + metadataFile.version.name
        ).color(0x4a4a4a);
        l.x = 4;
        l.y = ui.h - 11;
      });
    }
  });
});
